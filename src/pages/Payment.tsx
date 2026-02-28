import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DollarSign, User, Phone, Shield, CheckCircle, Check, Globe } from "lucide-react";

const FEE_MAP: Record<string, { label: string; amount: number }> = {
  admission_fee: { label: "Admission Fee", amount: 1500 },
  course_fee_1: { label: "Course Fee (1st Step)", amount: 1500 },
  course_fee_2: { label: "Course Fee (2nd Step)", amount: 1500 },
  govt_reg: { label: "Govt. Registration Fee", amount: 2000 },
};

const Payment = () => {
  const [searchParams] = useSearchParams();
  const stepFromUrl = searchParams.get("step");
  const nameFromUrl = searchParams.get("name") || "";
  const phoneFromUrl = searchParams.get("phone") || "";

  const [selectedSteps, setSelectedSteps] = useState<string[]>(
    stepFromUrl ? [stepFromUrl] : []
  );
  const [name, setName] = useState(nameFromUrl);
  const [phone, setPhone] = useState(phoneFromUrl);
  const [selectedMethod, setSelectedMethod] = useState<"bkash" | "sslcommerz" | null>(null);

  const toggleStep = (key: string) => {
    setSelectedSteps((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key]
    );
  };

  const totalAmount = selectedSteps.reduce(
    (sum, key) => sum + (FEE_MAP[key]?.amount || 0),
    0
  );

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMethod || selectedSteps.length === 0) return;
    alert("Payment processing requires backend integration.");
  };

  return (
    <Layout>
      <section className="hero-gradient py-10 md:py-16 px-4">
        <div className="container text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-primary-foreground mb-2">Make a Payment</h1>
          <p className="text-primary-foreground/80 text-base md:text-lg">Pay for your course & registration fees securely</p>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 bg-background">
        <div className="container max-w-lg">
          <div className="bg-card rounded-2xl border border-border shadow-xl p-5 md:p-10">
            <form onSubmit={handlePay} className="space-y-5">

              {/* Fee Selection */}
              <div>
                <p className="text-sm font-semibold mb-1">Select Payment Type</p>
                <p className="text-xs text-muted-foreground mb-3">You can select multiple</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(FEE_MAP).map(([key, val]) => {
                    const isSelected = selectedSteps.includes(key);
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleStep(key)}
                        className={`p-3 rounded-xl border-2 text-left transition-all relative ${
                          isSelected
                            ? "border-accent bg-accent/5 shadow-sm"
                            : "border-border hover:border-accent/40"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                            <Check className="h-3 w-3 text-accent-foreground" />
                          </div>
                        )}
                        <p className="text-xs font-medium text-muted-foreground">{val.label}</p>
                        <p className="font-bold text-foreground font-number">৳{val.amount.toLocaleString()}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Customer Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <User className="w-4 h-4 text-accent" />
                  Customer Name
                </label>
                <Input placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              {/* Contact Number */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <Phone className="w-4 h-4 text-accent" />
                  Contact Number
                </label>
                <Input placeholder="01XXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>

              {/* Payment Method */}
              <div>
                <p className="text-sm font-semibold mb-3">Choose Payment Method</p>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("bkash")}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedMethod === "bkash"
                        ? "border-[#E2136E] bg-[#E2136E]/5 shadow-md"
                        : "border-border hover:border-[#E2136E]/40"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#E2136E] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">b</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">bKash Payment</p>
                      <p className="text-xs text-muted-foreground">Mobile Wallet Payment</p>
                    </div>
                    {selectedMethod === "bkash" && <CheckCircle className="w-5 h-5 text-[#E2136E] ml-auto" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMethod("sslcommerz")}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedMethod === "sslcommerz"
                        ? "border-[#2B3990] bg-[#2B3990]/5 shadow-md"
                        : "border-border hover:border-[#2B3990]/40"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#2B3990] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs leading-tight">SSL</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">SSLCommerz Gateway</p>
                      <p className="text-xs text-muted-foreground">VISA, NAGAD, ROCKET, BANK, BKASH</p>
                    </div>
                    {selectedMethod === "sslcommerz" && <CheckCircle className="w-5 h-5 text-[#2B3990] ml-auto" />}
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-muted/50 rounded-lg p-4 text-sm space-y-2">
                {selectedSteps.length > 0 ? (
                  <>
                    {selectedSteps.map((key) => (
                      <div key={key} className="flex justify-between text-muted-foreground">
                        <span>{FEE_MAP[key]?.label}</span>
                        <span className="font-number">৳{FEE_MAP[key]?.amount.toLocaleString()}</span>
                      </div>
                    ))}
                    {selectedSteps.length > 1 && <div className="border-t border-border pt-2" />}
                    <div className="flex justify-between font-semibold text-foreground">
                      <span>Total</span>
                      <span className="text-accent font-number">৳{totalAmount.toLocaleString()}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-center text-muted-foreground">Select a payment type above</p>
                )}
              </div>

              {/* Pay Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-lg mt-2"
                disabled={!selectedMethod || !name || !phone || selectedSteps.length === 0}
              >
                Pay ৳<span className="font-number ml-1">{totalAmount.toLocaleString()}</span>
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

export default Payment;
