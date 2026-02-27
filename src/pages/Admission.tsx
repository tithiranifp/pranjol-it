import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Admission = () => {
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
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium mb-1 block">পূর্ণ নাম *</label>
                <Input placeholder="আপনার পূর্ণ নাম" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">মোবাইল নম্বর *</label>
                <Input placeholder="01XXXXXXXXX" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">ঠিকানা *</label>
                <Input placeholder="আপনার বর্তমান ঠিকানা" required />
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
              <div>
                <label className="text-sm font-medium mb-1 block">কুপন কোড (যদি থাকে)</label>
                <Input placeholder="কুপন কোড লিখুন" />
              </div>

              {/* Fee Summary */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                <h3 className="font-semibold">ফি সারাংশ</h3>
                <div className="flex justify-between"><span>ভর্তি ফি</span><span>৳১,৫০০</span></div>
                <div className="flex justify-between"><span>সরকারি রেজিস্ট্রেশন ফি</span><span>৳২,০০০</span></div>
                <div className="flex justify-between"><span>কোর্স ফি</span><span>৳৩,০০০</span></div>
                <div className="flex justify-between border-t border-border pt-2 font-semibold">
                  <span>মোট</span><span className="text-accent">৳৬,৫০০</span>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full" type="submit">
                আবেদন জমা দিন
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                আবেদনের পর আপনার স্ট্যাটাস হবে "Pending"। যাচাই-বাছাইয়ের পর "Verified" এবং পেমেন্টের পর "Active" করা হবে।
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;
