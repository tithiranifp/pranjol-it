import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CheckCircle2, XCircle, AlertTriangle, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const tranId = searchParams.get("tran_id");
  const amount = searchParams.get("amount");
  const method = searchParams.get("method");
  const paymentID = searchParams.get("paymentID"); // bKash callback
  const bkashStatus = searchParams.get("bkash_status"); // bKash status from callback

  const [executingBkash, setExecutingBkash] = useState(false);
  const [bkashResult, setBkashResult] = useState<any>(null);
  const [finalStatus, setFinalStatus] = useState(status);

  // Handle bKash callback — execute the payment
  useEffect(() => {
    if (method === "bkash" && paymentID && bkashStatus === "success" && !bkashResult) {
      executeBkash(paymentID);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const executeBkash = async (pid: string) => {
    setExecutingBkash(true);
    try {
      const { data, error } = await supabase.functions.invoke("bkash-payment", {
        body: { action: "execute", paymentID: pid },
      });
      if (error) throw new Error(error.message);
      setBkashResult(data);

      const ok = data?.statusCode === "0000" || data?.transactionStatus === "Completed";
      const payStatus = ok ? "success" : "fail";
      setFinalStatus(payStatus);

      // Save to DB
      await supabase.from("payments").insert({
        tran_id: data?.trxID || pid,
        name: searchParams.get("name") || "N/A",
        mobile: searchParams.get("mobile") || "N/A",
        batch_id: searchParams.get("batch_id") || "",
        amount: parseFloat(data?.amount || amount || "0"),
        method: "bkash",
        status: payStatus,
        payment_data: data,
      });
    } catch (err) {
      console.error("bKash execute error:", err);
      setFinalStatus("fail");
    } finally {
      setExecutingBkash(false);
    }
  };

  if (executingBkash) {
    return (
      <Layout>
        <section className="py-20 px-4 bg-background min-h-[60vh] flex items-center justify-center">
          <div className="text-center space-y-4">
            <Loader2 className="w-12 h-12 animate-spin text-accent mx-auto" />
            <h2 className="text-xl font-semibold">Processing bKash Payment...</h2>
            <p className="text-muted-foreground text-sm">Please wait, do not close this page.</p>
          </div>
        </section>
      </Layout>
    );
  }

  // No status = old flow (fee selection page) — redirect to /pay
  if (!finalStatus && !paymentID) {
    return (
      <Layout>
        <section className="hero-gradient py-10 md:py-16 px-4">
          <div className="container text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-primary-foreground mb-2">Payment</h1>
          </div>
        </section>
        <section className="py-16 px-4 bg-background">
          <div className="container max-w-lg text-center space-y-4">
            <p className="text-muted-foreground">No payment information found.</p>
            <Link to="/pay">
              <Button variant="hero">Go to Payment Page</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const isSuccess = finalStatus === "success";
  const isCancel = finalStatus === "cancel";

  return (
    <Layout>
      <section className="py-12 md:py-20 px-4 bg-background min-h-[60vh]">
        <div className="container max-w-md">
          <div className="bg-card rounded-2xl border border-border shadow-xl p-6 md:p-10 text-center space-y-5">
            {/* Icon */}
            {isSuccess ? (
              <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
            ) : isCancel ? (
              <div className="mx-auto w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-yellow-600" />
              </div>
            ) : (
              <div className="mx-auto w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle className="w-10 h-10 text-red-600" />
              </div>
            )}

            {/* Title */}
            <h1 className="text-2xl font-bold text-foreground">
              {isSuccess ? "Payment Successful!" : isCancel ? "Payment Cancelled" : "Payment Failed"}
            </h1>

            <p className="text-muted-foreground text-sm">
              {isSuccess
                ? "Your payment has been processed successfully. Thank you!"
                : isCancel
                ? "You cancelled the payment. No amount was charged."
                : "Unfortunately, the payment could not be completed. Please try again."}
            </p>

            {/* Transaction Details */}
            {(tranId || amount || method) && (
              <div className="bg-muted/50 rounded-lg p-4 text-sm space-y-2 text-left">
                {tranId && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transaction ID</span>
                    <span className="font-mono font-semibold text-foreground text-xs">{tranId}</span>
                  </div>
                )}
                {amount && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount</span>
                    <span className="font-semibold text-foreground">৳{parseFloat(amount).toLocaleString()}</span>
                  </div>
                )}
                {method && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Method</span>
                    <span className="font-semibold text-foreground capitalize">{method}</span>
                  </div>
                )}
                {bkashResult?.trxID && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">bKash TrxID</span>
                    <span className="font-mono font-semibold text-foreground text-xs">{bkashResult.trxID}</span>
                  </div>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/pay">
                <Button variant="hero" className="w-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {isSuccess ? "Make Another Payment" : "Try Again"}
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Go to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
