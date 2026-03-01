import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Phone, Shield, CheckCircle, Hash, Banknote, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const PayNow = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [batchId, setBatchId] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<"bkash" | "sslcommerz" | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const numericAmount = Number(amount) || 0;

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMethod || numericAmount <= 0) return;

    setLoading(true);
    try {
      if (selectedMethod === "bkash") {
        const callbackURL = `${window.location.origin}/payment?method=bkash`;
        const { data, error } = await supabase.functions.invoke("bkash-payment", {
          body: {
            action: "create",
            amount: numericAmount,
            callbackURL,
            payerReference: mobile,
            name,
            mobile,
            batchId,
          },
        });

        if (error) throw new Error(error.message);

        if (data?.bkashURL) {
          window.location.href = data.bkashURL;
        } else if (data?.error) {
          throw new Error(data.error);
        } else {
          throw new Error("bKash payment URL not received");
        }
      }

      if (selectedMethod === "sslcommerz") {
        const { data, error } = await supabase.functions.invoke("sslcommerz-payment", {
          body: {
            amount: numericAmount,
            name,
            mobile,
            batchId,
            successUrl: `${window.location.origin}/payment?status=success`,
            failUrl: `${window.location.origin}/payment?status=fail`,
            cancelUrl: `${window.location.origin}/payment?status=cancel`,
          },
        });

        if (error) throw new Error(error.message);

        if (data?.url) {
          window.location.href = data.url;
        } else if (data?.error) {
          throw new Error(data.error);
        } else {
          throw new Error("SSLCommerz gateway URL not received");
        }
      }
    } catch (err: any) {
      console.error("Payment error:", err);
      toast({
        title: "Payment Error",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="hero-gradient py-8 md:py-16 px-1 md:px-4">
        <div className="container text-center">
          <h1 className="text-xl md:text-5xl font-bold text-primary-foreground mb-1">পেমেন্ট করুন</h1>
          <p className="text-primary-foreground/80 text-sm md:text-lg">নিরাপদে পেমেন্ট করুন</p>
        </div>
      </section>

      <section className="py-6 md:py-16 px-1 md:px-4 bg-background">
        <div className="container max-w-lg">
          <div className="bg-card rounded-2xl border border-border shadow-xl p-4 md:p-10">
            <form onSubmit={handlePay} className="space-y-4">
              {/* Amount */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <Banknote className="w-4 h-4 text-accent" />
                  Amount (টাকা)
                </label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min={1}
                  disabled={loading}
                />
              </div>

              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <User className="w-4 h-4 text-accent" />
                  Name
                </label>
                <Input placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required disabled={loading} />
              </div>

              {/* Mobile */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <Phone className="w-4 h-4 text-accent" />
                  Mobile Number
                </label>
                <Input placeholder="01XXXXXXXXX" value={mobile} onChange={(e) => setMobile(e.target.value)} required disabled={loading} />
              </div>

              {/* Batch ID */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <Hash className="w-4 h-4 text-accent" />
                  Batch ID
                </label>
                <Input placeholder="e.g. B-2025-01" value={batchId} onChange={(e) => setBatchId(e.target.value)} required disabled={loading} />
              </div>

              {/* Payment Method */}
              <div>
                <p className="text-sm font-semibold mb-2">Choose Payment Method</p>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("bkash")}
                    disabled={loading}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 ${
                      selectedMethod === "bkash"
                        ? "border-[#E2136E] bg-[#E2136E]/5 shadow-md"
                        : "border-border hover:border-[#E2136E]/40"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#E2136E] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-base">b</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm text-foreground">bKash Payment</p>
                      <p className="text-xs text-muted-foreground">Mobile Wallet</p>
                    </div>
                    {selectedMethod === "bkash" && <CheckCircle className="w-4 h-4 text-[#E2136E] ml-auto" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMethod("sslcommerz")}
                    disabled={loading}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 ${
                      selectedMethod === "sslcommerz"
                        ? "border-[#2B3990] bg-[#2B3990]/5 shadow-md"
                        : "border-border hover:border-[#2B3990]/40"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#2B3990] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">SSL</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm text-foreground">SSLCommerz Gateway</p>
                      <p className="text-xs text-muted-foreground">VISA, NAGAD, ROCKET, BANK</p>
                    </div>
                    {selectedMethod === "sslcommerz" && <CheckCircle className="w-4 h-4 text-[#2B3990] ml-auto" />}
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-muted/50 rounded-lg p-3 text-sm">
                <div className="flex justify-between font-semibold text-foreground">
                  <span>Total</span>
                  <span className="text-accent font-number">৳{numericAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* Pay Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-base mt-1"
                disabled={!selectedMethod || !name || !mobile || !batchId || numericAmount <= 0 || loading}
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Processing...</>
                ) : (
                  <>Pay ৳<span className="font-number ml-1">{numericAmount.toLocaleString()}</span></>
                )}
              </Button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5" />
                Secured by Pranjol IT
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PayNow;
