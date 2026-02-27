import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VALID_COUPONS = ["FREE2025", "PRANJOL"];

const Admission = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  const applyCoupon = () => {
    if (VALID_COUPONS.includes(coupon.trim().toUpperCase())) {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponApplied(false);
      setCouponError("ভুল কুপন কোড। সঠিক কুপন দিন অথবা খালি রাখুন।");
    }
  };

  const admissionFee = couponApplied ? 0 : 1500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to payment with admission data
    const params = new URLSearchParams({
      name,
      phone,
      step: couponApplied ? "course_fee_1" : "admission_fee",
      coupon: couponApplied ? coupon : "",
    });
    navigate(`/payment?${params.toString()}`);
  };

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">ভর্তি ফর্ম</h1>
          <p className="text-primary-foreground/80 text-lg">নিচের ফর্ম পূরণ করে ভর্তি আবেদন জমা দিন</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-2xl">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium mb-1 block">পূর্ণ নাম *</label>
                <Input placeholder="আপনার পূর্ণ নাম" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">মোবাইল নম্বর *</label>
                <Input placeholder="01XXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">ঠিকানা *</label>
                <Input placeholder="আপনার বর্তমান ঠিকানা" value={address} onChange={(e) => setAddress(e.target.value)} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">পাসপোর্ট সাইজ ছবি *</label>
                <Input type="file" accept="image/*" required />
                <p className="text-xs text-muted-foreground mt-1">JPG/PNG ফরম্যাটে আপলোড করুন</p>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">শিক্ষাগত সনদ (JSC/SSC মার্কশিট/সার্টিফিকেট) *</label>
                <Input type="file" accept="image/*,.pdf" required />
                <p className="text-xs text-muted-foreground mt-1">PDF বা ছবি ফরম্যাটে আপলোড করুন</p>
              </div>

              {/* Coupon */}
              <div>
                <label className="text-sm font-medium mb-1 block">কুপন কোড (যদি থাকে)</label>
                <div className="flex gap-2">
                  <Input
                    placeholder="কুপন কোড লিখুন"
                    value={coupon}
                    onChange={(e) => {
                      setCoupon(e.target.value);
                      setCouponApplied(false);
                      setCouponError("");
                    }}
                  />
                  <Button type="button" variant="outline" onClick={applyCoupon} disabled={!coupon.trim()}>
                    প্রয়োগ
                  </Button>
                </div>
                {couponApplied && (
                  <p className="text-xs text-green-600 mt-1 font-medium">✅ কুপন প্রয়োগ হয়েছে! ভর্তি ফি ফ্রি!</p>
                )}
                {couponError && (
                  <p className="text-xs text-destructive mt-1">{couponError}</p>
                )}
              </div>

              {/* Fee Summary */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                <h3 className="font-semibold">ফি সারাংশ</h3>
                <div className="flex justify-between">
                  <span>ভর্তি ফি</span>
                  <span className={couponApplied ? "line-through text-muted-foreground" : ""}>
                    <span className="font-number">1,500</span> টাকা
                  </span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>কুপন ডিসকাউন্ট</span>
                    <span>ফ্রি!</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>সরকারি রেজিস্ট্রেশন ফি</span>
                  <span><span className="font-number">2,000</span> টাকা</span>
                </div>
                <div className="flex justify-between">
                  <span>কোর্স ফি (১ম ধাপ)</span>
                  <span><span className="font-number">1,500</span> টাকা</span>
                </div>
                <div className="flex justify-between">
                  <span>কোর্স ফি (২য় ধাপ)</span>
                  <span><span className="font-number">1,500</span> টাকা</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2 font-semibold">
                  <span>পরবর্তী পেমেন্ট</span>
                  <span className="text-accent">
                    {couponApplied ? (
                      <>কোর্স ফি ১ম ধাপ — <span className="font-number">1,500</span> টাকা</>
                    ) : (
                      <>ভর্তি ফি — <span className="font-number">1,500</span> টাকা</>
                    )}
                  </span>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full" type="submit">
                পেমেন্টে যান →
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                ফর্ম জমা দিলে পেমেন্ট পেজে নিয়ে যাওয়া হবে
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;
