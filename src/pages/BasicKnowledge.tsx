import Layout from "@/components/Layout";
import { BookOpen } from "lucide-react";

const BasicKnowledge = () => {
  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">বেসিক নলেজ</h1>
            <p className="text-primary-foreground/80 text-lg">
              কম্পিউটার ও আইটির মৌলিক জ্ঞান অর্জন করুন
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-16">
            <BookOpen className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">বেসিক নলেজ শীঘ্রই আসছে</h2>
            <p className="text-muted-foreground">কম্পিউটার ও আইটির মৌলিক বিষয়গুলো প্রস্তুত করা হচ্ছে।</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BasicKnowledge;
