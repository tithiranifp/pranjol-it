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
      setCouponError("Invalid coupon code. Please enter a valid coupon or leave it blank.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <section className="hero-gradient py-10 md:py-16 px-4">
        <div className="container">
          <h1 className="text-2xl md:text-5xl font-bold text-primary-foreground mb-3">Admission Form</h1>
          <p className="text-primary-foreground/80 text-base md:text-lg">Fill out the form below to apply for admission</p>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 bg-background">
        <div className="container max-w-2xl">
          <div className="bg-card rounded-2xl border border-border p-5 md:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
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
              <div>
                <label className="text-sm font-medium mb-1 block">Passport Size Photo *</label>
                <Input type="file" accept="image/*" required />
                <p className="text-xs text-muted-foreground mt-1">Upload in JPG/PNG format</p>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Educational Certificate (JSC/SSC Marksheet) *</label>
                <Input type="file" accept="image/*,.pdf" required />
                <p className="text-xs text-muted-foreground mt-1">Upload in PDF or image format</p>
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

              {/* Fee Summary */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                <h3 className="font-semibold">Fee Summary</h3>
                <div className="flex justify-between">
                  <span>Admission Fee</span>
                  <span className={couponApplied ? "line-through text-muted-foreground" : ""}>
                    <span className="font-number">৳1,500</span>
                  </span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Coupon Discount</span>
                    <span>Free!</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Govt. Registration Fee</span>
                  <span><span className="font-number">৳2,000</span></span>
                </div>
                <div className="flex justify-between">
                  <span>Course Fee (1st Step)</span>
                  <span><span className="font-number">৳1,500</span></span>
                </div>
                <div className="flex justify-between">
                  <span>Course Fee (2nd Step)</span>
                  <span><span className="font-number">৳1,500</span></span>
                </div>
                <div className="flex justify-between border-t border-border pt-2 font-semibold">
                  <span>Next Payment</span>
                  <span className="text-accent">
                    {couponApplied ? (
                      <>Course Fee 1st Step — <span className="font-number">৳1,500</span></>
                    ) : (
                      <>Admission Fee — <span className="font-number">৳1,500</span></>
                    )}
                  </span>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full" type="submit">
                Proceed to Payment →
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                You'll be redirected to the payment page after submission
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;
