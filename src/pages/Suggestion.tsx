import Layout from "@/components/Layout";
import { Lightbulb } from "lucide-react";

const Suggestion = () => {
  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">সাজেশন</h1>
            <p className="text-primary-foreground/80 text-lg">
              পরীক্ষার জন্য গুরুত্বপূর্ণ সাজেশন
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-16">
            <Lightbulb className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">সাজেশন শীঘ্রই আসছে</h2>
            <p className="text-muted-foreground">পরীক্ষার জন্য গুরুত্বপূর্ণ সাজেশন প্রস্তুত করা হচ্ছে।</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Suggestion;
