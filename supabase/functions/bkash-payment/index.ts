import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const BKASH_BASE_URL = "https://tokenized.pay.bka.sh/v1.2.0-beta";

async function getToken(): Promise<string> {
  const res = await fetch(`${BKASH_BASE_URL}/tokenized/checkout/token/grant`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      username: Deno.env.get("BKASH_USERNAME")!,
      password: Deno.env.get("BKASH_PASSWORD")!,
    },
    body: JSON.stringify({
      app_key: Deno.env.get("BKASH_APP_KEY")!,
      app_secret: Deno.env.get("BKASH_APP_SECRET")!,
    }),
  });
  const data = await res.json();
  if (!data.id_token) {
    throw new Error(`bKash token grant failed: ${JSON.stringify(data)}`);
  }
  return data.id_token;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { action, amount, paymentID, callbackURL, payerReference, name, mobile, batchId } = await req.json();
    const token = await getToken();

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
      "X-APP-Key": Deno.env.get("BKASH_APP_KEY")!,
    };

    if (action === "create") {
      const invoiceNumber = `PRANJOL-${Date.now()}`;
      const res = await fetch(`${BKASH_BASE_URL}/tokenized/checkout/create`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          mode: "0011",
          payerReference: payerReference || mobile || "01XXXXXXXXX",
          callbackURL,
          amount: String(amount),
          currency: "BDT",
          intent: "sale",
          merchantInvoiceNumber: invoiceNumber,
        }),
      });
      const data = await res.json();
      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "execute") {
      const res = await fetch(`${BKASH_BASE_URL}/tokenized/checkout/execute`, {
        method: "POST",
        headers,
        body: JSON.stringify({ paymentID }),
      });
      const data = await res.json();
      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("bKash error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
