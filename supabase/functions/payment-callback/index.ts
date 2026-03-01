import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const FRONTEND_URL = "https://pranjolit.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // SSLCommerz sends POST with form data
    const formData = await req.formData();
    const entries: Record<string, string> = {};
    formData.forEach((value, key) => {
      entries[key] = String(value);
    });

    const status = entries.status?.toLowerCase() || "unknown";
    const tranId = entries.tran_id || "";
    const amount = entries.amount || "0";
    const cardType = entries.card_type || "";
    const bankTranId = entries.bank_tran_id || "";

    // Map SSLCommerz status
    let paymentStatus = "fail";
    if (status === "valid" || status === "validated") {
      paymentStatus = "success";
    } else if (status === "cancelled") {
      paymentStatus = "cancel";
    }

    // Save to database
    if (tranId) {
      await supabase.from("payments").upsert(
        {
          tran_id: tranId,
          name: entries.value_a || "N/A",
          mobile: entries.value_b || "N/A",
          batch_id: entries.value_c || "",
          amount: parseFloat(amount),
          method: "sslcommerz",
          status: paymentStatus,
          payment_data: entries,
        },
        { onConflict: "tran_id" }
      );
    }

    // Redirect user to frontend status page
    const redirectUrl = `${FRONTEND_URL}/payment?status=${paymentStatus}&tran_id=${tranId}&amount=${amount}&method=sslcommerz`;
    return new Response(null, {
      status: 302,
      headers: {
        ...corsHeaders,
        Location: redirectUrl,
      },
    });
  } catch (error) {
    console.error("Payment callback error:", error);
    return new Response(null, {
      status: 302,
      headers: {
        Location: `${FRONTEND_URL}/payment?status=fail&error=callback_failed`,
      },
    });
  }
});
