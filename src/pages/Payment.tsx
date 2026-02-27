import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DollarSign, User, Phone, Shield, CheckCircle } from "lucide-react";

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<"bkash" | null>(null);

  const numAmount = parseFloat(amount) || 0;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMethod) return;
    // Cloud enable হলে এখানে bKash API call হবে
    alert("bKash পেমেন্ট প্রসেস করতে Lovable Cloud enable করতে হবে।");
  };

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            পেমেন্ট করুন
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            নিরাপদে আপনার কোর্স ফি পরিশোধ করুন
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-lg">
          <div className="bg-card rounded-2xl border border-border shadow-xl p-6 md:p-10">
            <form onSubmit={handlePay} className="space-y-5">
              {/* Amount */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <DollarSign className="w-4 h-4 text-accent" />
                  পরিমাণ (BDT)
                </label>
                <Input
                  type="number"
                  placeholder="পরিমাণ লিখুন (৳)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  className="text-base"
                />
              </div>

              {/* Purpose */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <Shield className="w-4 h-4 text-accent" />
                  পেমেন্টের উদ্দেশ্য
                </label>
                <Input
                  placeholder="যেমনঃ ভর্তি ফি / কোর্স ফি / রেজিস্ট্রেশন"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  required
                />
              </div>

              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <User className="w-4 h-4 text-accent" />
                  আপনার নাম
                </label>
                <Input
                  placeholder="পূর্ণ নাম লিখুন"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Contact */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                  <Phone className="w-4 h-4 text-accent" />
                  মোবাইল নম্বর
                </label>
                <Input
                  placeholder="01XXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {/* Payment Method */}
              <div>
                <p className="text-sm font-semibold mb-3">পেমেন্ট মেথড বেছে নিন</p>
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
                  {selectedMethod === "bkash" && (
                    <CheckCircle className="w-5 h-5 text-[#E2136E] ml-auto" />
                  )}
                </button>
              </div>

              {/* Pay Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-lg mt-2"
                disabled={!selectedMethod || !amount || !name || !phone}
              >
                Pay ৳{numAmount.toLocaleString("bn-BD")}
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
