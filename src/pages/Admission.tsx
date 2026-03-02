import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Check, BookOpen, ArrowRight } from "lucide-react";

const BASE_FEE_MAP: Record<string, { label: string; amount: number }> = {
  admission_fee: { label: "Admission Fee", amount: 1500 },
  govt_reg: { label: "Govt. Registration Fee", amount: 2000 },
};

const buildFeeMap = (courseFee: number) => {
  const installment = Math.ceil(courseFee / 2);
  return {
    admission_fee: { label: "Admission Fee (ভর্তি ফি)", amount: 1500 },
    course_fee_1: { label: "Course Fee 1st Installment (১ম কিস্তি)", amount: installment },
    course_fee_2: { label: "Course Fee 2nd Installment (২য় কিস্তি)", amount: courseFee - installment },
    govt_reg: { label: "Govt. Registration Fee (সরকারি রেজিস্ট্রেশন)", amount: 2000 },
  };
};

const VALID_COUPONS = ["FREE2025", "PRANJOL", "LOVEPRANJOL"];

const Admission = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const courseFee = Number(searchParams.get("courseFee")) || 3500;
  const courseName = searchParams.get("courseName") || "MS Office Program";
  const FEE_MAP = buildFeeMap(courseFee);

  // Pre-select fees from URL (e.g. from course detail page)
  const preselect = searchParams.get("fees")?.split(",").filter(k => k in FEE_MAP) || [];
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [selectedFees, setSelectedFees] = useState<string[]>(preselect.length > 0 ? preselect : ["admission_fee"]);

  const toggleFee = (key: string) => {
    setSelectedFees((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key]
    );
  };

  const totalAmount = selectedFees.reduce(
    (sum, key) => sum + (FEE_MAP[key]?.amount || 0),
    0
  );

  const applyCoupon = () => {
    if (VALID_COUPONS.includes(coupon.trim().toUpperCase())) {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponApplied(false);
      setCouponError("Invalid coupon code.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFees.length === 0) return;
    const feeData = selectedFees.map(k => `${k}:${FEE_MAP[k]?.amount || 0}`).join(",");
    const params = new URLSearchParams({
      name,
      phone,
      fees: feeData,
      coupon: couponApplied ? coupon : "",
    });
    navigate(`/payment?${params.toString()}`);
  };

  return (
    <Layout>
      <section className="hero-gradient py-10 md:py-16 px-1 md:px-4">
        <div className="container">
          <h1 className="text-2xl md:text-5xl font-bold text-primary-foreground mb-3">Admission Form</h1>
          <p className="text-primary-foreground/80 text-base md:text-lg">Fill out the form below to apply for admission</p>
        </div>
      </section>

      <section className="py-8 md:py-16 px-1 md:px-4 bg-background">
        <div className="container max-w-2xl">
          <div className="bg-card rounded-2xl border border-border p-5 md:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Course Selection Field - Distinct Style */}
              <div className="rounded-xl border-2 border-dashed border-accent/40 bg-accent/5 p-4">
                <label className="text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2 text-accent">
                  <BookOpen className="h-4 w-4" />
                  কোর্স নির্বাচন
                </label>
                {courseName ? (
                  <div className="flex items-center justify-between gap-3 mt-2">
                    <div className="flex-1">
                      <p className="font-bold text-base md:text-lg text-foreground leading-tight">{decodeURIComponent(courseName)}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">কোর্স ফি: ৳{courseFee.toLocaleString()}</p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="shrink-0 border-accent/40 text-accent hover:bg-accent/10"
                      onClick={() => navigate("/courses")}
                    >
                      পরিবর্তন <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-3 mt-2">
                    <span className="text-sm text-muted-foreground italic">কোনো কোর্স নির্বাচন করা হয়নি</span>
                    <Button
                      type="button"
                      variant="hero"
                      size="sm"
                      className="shrink-0"
                      onClick={() => navigate("/courses")}
                    >
                      কোর্স নির্বাচন করুন <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Full Name *</label>
                <Input placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Contact Number *</label>
                <Input placeholder="01XXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Address *</label>
                <Input placeholder="Enter your current address" value={address} onChange={(e) => setAddress(e.target.value)} required />
              </div>

              {/* Coupon */}
              <div>
                <label className="text-sm font-medium mb-1 block">Coupon Code (if any)</label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter coupon code"
                    value={coupon}
                    onChange={(e) => {
                      setCoupon(e.target.value);
                      setCouponApplied(false);
                      setCouponError("");
                    }}
                  />
                  <Button type="button" variant="outline" onClick={applyCoupon} disabled={!coupon.trim()}>
                    Apply
                  </Button>
                </div>
                {couponApplied && (
                  <p className="text-xs text-green-600 mt-1 font-medium">✅ Coupon applied! Admission fee waived!</p>
                )}
                {couponError && (
                  <p className="text-xs text-destructive mt-1">{couponError}</p>
                )}
              </div>

              {/* Fee Selection with Checkmarks */}
              <div>
                <p className="text-sm font-semibold mb-1">Select Fees to Pay</p>
                <p className="text-xs text-muted-foreground mb-3">Tick the fees you want to pay now</p>
                <div className="space-y-2">
                  {Object.entries(FEE_MAP).map(([key, val]) => {
                    const isSelected = selectedFees.includes(key);
                    const isAdmissionWithCoupon = key === "admission_fee" && couponApplied;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleFee(key)}
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
                        <span className={`font-bold font-number text-sm ${isAdmissionWithCoupon ? "line-through text-muted-foreground" : ""}`}>
                          ৳{val.amount.toLocaleString()}
                        </span>
                        {isAdmissionWithCoupon && <span className="text-xs text-green-600 font-bold">FREE</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fee Summary */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                <h3 className="font-semibold">Fee Summary</h3>
                {selectedFees.map((key) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-muted-foreground">{FEE_MAP[key]?.label}</span>
                    <span className={`font-number ${key === "admission_fee" && couponApplied ? "line-through text-muted-foreground" : ""}`}>
                      ৳{FEE_MAP[key]?.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
                {couponApplied && selectedFees.includes("admission_fee") && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Coupon Discount</span>
                    <span>-৳1,500</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-border pt-2 font-semibold">
                  <span>Total Payable</span>
                  <span className="text-accent font-number">
                    ৳{(totalAmount - (couponApplied && selectedFees.includes("admission_fee") ? 1500 : 0)).toLocaleString()}
                  </span>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full" type="submit" disabled={selectedFees.length === 0 || !name || !phone}>
                Proceed to Payment →
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                You'll be redirected to the payment page with your selected fees
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;
