import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const SSLCOMMERZ_BASE_URL = "https://securepay.sslcommerz.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, name, mobile, batchId } = await req.json();

    const storeId = Deno.env.get("SSLCOMMERZ_STORE_ID");
    const storePassword = Deno.env.get("SSLCOMMERZ_STORE_PASSWORD");

    if (!storeId || !storePassword) {
      throw new Error("SSLCommerz credentials not configured");
    }

    const tranId = `PRANJOL-${Date.now()}`;

    const params = new URLSearchParams({
      store_id: storeId,
      store_passwd: storePassword,
      total_amount: String(amount),
      currency: "BDT",
      tran_id: tranId,
      success_url: `https://pranjolit.com/payment?status=success&tran_id=${tranId}&amount=${amount}&method=sslcommerz&name=${encodeURIComponent(name)}&mobile=${encodeURIComponent(mobile)}&batch_id=${encodeURIComponent(batchId || "")}`,
      fail_url: `https://pranjolit.com/payment?status=fail&tran_id=${tranId}&amount=${amount}&method=sslcommerz`,
      cancel_url: `https://pranjolit.com/payment?status=cancel&tran_id=${tranId}&amount=${amount}&method=sslcommerz`,
      cus_name: name,
      cus_email: "customer@pranjolit.com",
      cus_phone: mobile,
      cus_add1: "Dhaka",
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
      shipping_method: "NO",
      product_name: `Pranjol IT - Batch ${batchId}`,
      product_category: "Education",
      product_profile: "non-physical-goods",
      value_a: name,
      value_b: mobile,
      value_c: batchId || "",
    });

    const res = await fetch(`${SSLCOMMERZ_BASE_URL}/gwprocess/v4`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const data = await res.json();

    if (data.status === "SUCCESS" && data.GatewayPageURL) {
      return new Response(JSON.stringify({ url: data.GatewayPageURL, tranId }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: data.failedreason || "SSLCommerz session failed", data }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("SSLCommerz error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
