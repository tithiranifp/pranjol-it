import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DollarSign, User, Phone, Shield, CheckCircle } from "lucide-react";

type PaymentStep = "admission_fee" | "course_fee_1" | "course_fee_2" | "govt_reg" | "custom";

const FEE_MAP: Record<string, { label: string; amount: number }> = {
  admission_fee: { label: "ভর্তি ফি", amount: 1500 },
  course_fee_1: { label: "কোর্স ফি (১ম ধাপ)", amount: 1500 },
  course_fee_2: { label: "কোর্স ফি (২য় ধাপ)", amount: 1500 },
  govt_reg: { label: "সরকারি রেজিস্ট্রেশন ফি", amount: 2000 },
};

const Payment = () => {
  const [searchParams] = useSearchParams();
  const stepFromUrl = searchParams.get("step") as PaymentStep | null;
  const nameFromUrl = searchParams.get("name") || "";
  const phoneFromUrl = searchParams.get("phone") || "";

  const [selectedStep, setSelectedStep] = useState<PaymentStep>(stepFromUrl || "admission_fee");
  const [name, setName] = useState(nameFromUrl);
  const [phone, setPhone] = useState(phoneFromUrl);
  const [selectedMethod, setSelectedMethod] = useState<"bkash" | "sslcommerz" | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const currentFee = selectedStep === "custom"
    ? { label: "কাস্টম পেমেন্ট", amount: parseFloat(customAmount) || 0 }
    : FEE_MAP[selectedStep];

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMethod) return;
    alert("পেমেন্ট প্রসেস করতে Lovable Cloud enable করতে হবে।");
  };

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-3">পেমেন্ট করুন</h1>
          <p className="text-primary-foreground/80 text-lg">নিরাপদে আপনার ফি পরিশোধ করুন</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-lg">
          <div className="bg-card rounded-2xl border border-border shadow-xl p-6 md:p-10">
            <form onSubmit={handlePay} className="space-y-5">

              {/* Fee Selection */}
              <div>
                <p className="text-sm font-semibold mb-3">পেমেন্টের ধরন বেছে নিন</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(FEE_MAP).map(([key, val]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedStep(key as PaymentStep)}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${
                        selectedStep === key
                          ? "border-accent bg-accent/5 shadow-sm"
                          : "border-border hover:border-accent/40"
                      }`}
                    >
                      <p className="text-xs font-medium text-muted-foreground">{val.label}</p>
                      <p className="font-bold text-foreground font-number">{val.amount.toLocaleString()} টাকা</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <User className="w-4 h-4 text-accent" />
                  আপনার নাম
                </label>
                <Input placeholder="পূর্ণ নাম লিখুন" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              {/* Contact */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <Phone className="w-4 h-4 text-accent" />
                  মোবাইল নম্বর
                </label>
                <Input placeholder="01XXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>

              {/* Payment Method */}
              <div>
                <p className="text-sm font-semibold mb-3">পেমেন্ট মেথড বেছে নিন</p>
                <div className="space-y-3">
                  {/* bKash */}
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
                      <p className="text-xs text-muted-foreground">মোবাইল ওয়ালেট পেমেন্ট</p>
                    </div>
                    {selectedMethod === "bkash" && <CheckCircle className="w-5 h-5 text-[#E2136E] ml-auto" />}
                  </button>

                  {/* SSLCommerz */}
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
              <div className="bg-muted/50 rounded-lg p-4 text-sm">
                <div className="flex justify-between font-semibold">
                  <span>{currentFee.label}</span>
                  <span className="text-accent font-number">{currentFee.amount.toLocaleString()} টাকা</span>
                </div>
              </div>

              {/* Pay Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-lg mt-2"
                disabled={!selectedMethod || !name || !phone || currentFee.amount <= 0}
              >
                পেমেন্ট করুন — <span className="font-number ml-1">{currentFee.amount.toLocaleString()}</span> টাকা
              </Button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5" />
                Secured Payment Gateway
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
