import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Phone, Shield, CheckCircle, Check } from "lucide-react";

type FeeItem = { label: string; amount: number };

const LABELS: Record<string, string> = {
  admission_fee: "Admission Fee (ভর্তি ফি)",
  course_fee_1: "Course Fee - 1st Installment (১ম কিস্তি)",
  course_fee_2: "Course Fee - 2nd Installment (২য় কিস্তি)",
  govt_reg: "Govt. Registration Fee (সরকারি রেজিস্ট্রেশন)",
};

function parseFees(raw: string | null): Record<string, FeeItem> {
  if (!raw) return {};
  const map: Record<string, FeeItem> = {};
  raw.split(",").forEach((part) => {
    const [key, amt] = part.split(":");
    if (key && LABELS[key]) {
      map[key] = { label: LABELS[key], amount: Number(amt) || 0 };
    }
  });
  return map;
}

const Payment = () => {
  const [searchParams] = useSearchParams();
  const nameFromUrl = searchParams.get("name") || "";
  const phoneFromUrl = searchParams.get("phone") || "";

  const FEE_MAP = parseFees(searchParams.get("fees"));
  const feeKeys = Object.keys(FEE_MAP);

  const [selectedSteps, setSelectedSteps] = useState<string[]>(feeKeys);
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

      <section className="py-6 md:py-16 px-2 md:px-4 bg-background">
        <div className="container max-w-lg">
          <div className="bg-card rounded-2xl border border-border shadow-xl p-3 md:p-10">
            {feeKeys.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No fees selected. Please go back to the Admission form and select your fees.</p>
            ) : (
              <form onSubmit={handlePay} className="space-y-5">
                {/* Fee Selection */}
                <div>
                  <p className="text-sm font-semibold mb-1">Selected Payment Items</p>
                  <p className="text-xs text-muted-foreground mb-3">You can toggle items on/off</p>
                  <div className="space-y-2">
                    {feeKeys.map((key) => {
                      const val = FEE_MAP[key];
                      const isSelected = selectedSteps.includes(key);
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => toggleStep(key)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${
                            isSelected
                              ? "border-accent bg-accent/5"
                              : "border-border hover:border-accent/40"
                          }`}
                        >
                          <div className={`h-5 w-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                            isSelected ? "bg-accent border-accent" : "border-muted-foreground/40"
                          }`}>
                            {isSelected && <Check className="h-3 w-3 text-accent-foreground" />}
                          </div>
                          <span className="flex-1 font-medium text-sm">{val.label}</span>
                          <span className="font-bold text-foreground font-number text-sm">৳{val.amount.toLocaleString()}</span>
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
                    <p className="text-center text-muted-foreground">Select a payment item above</p>
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
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
