import Layout from "@/components/Layout";
import { PenLine } from "lucide-react";

const Blog = () => {
  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">ব্লগ</h1>
            <p className="text-primary-foreground/80 text-lg">
              আইটি ও প্রযুক্তি বিষয়ক ব্লগ পড়ুন
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-16">
            <PenLine className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">ব্লগ শীঘ্রই আসছে</h2>
            <p className="text-muted-foreground">আইটি ও প্রযুক্তি বিষয়ক আর্টিকেল প্রস্তুত করা হচ্ছে।</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
