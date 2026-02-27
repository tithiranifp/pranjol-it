import Layout from "@/components/Layout";
import { Brain } from "lucide-react";

const Quiz = () => {
  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">কুইজ</h1>
            <p className="text-primary-foreground/80 text-lg">
              আপনার জ্ঞান যাচাই করুন বিভিন্ন কুইজের মাধ্যমে
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-16">
            <Brain className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">কুইজ শীঘ্রই আসছে</h2>
            <p className="text-muted-foreground">বিভিন্ন কোর্সের উপর কুইজ প্রস্তুত করা হচ্ছে। শীঘ্রই এখানে কুইজ দিতে পারবেন।</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quiz;
