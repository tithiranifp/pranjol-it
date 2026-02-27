import Layout from "@/components/Layout";
import { trainers } from "@/data/siteData";
import { User } from "lucide-react";

const Trainers = () => {
  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">আমাদের প্রশিক্ষকগণ</h1>
          <p className="text-primary-foreground/80 text-lg">অভিজ্ঞ ও দক্ষ প্রশিক্ষকদের সাথে পরিচিত হোন</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg">{trainer.name}</h3>
                <p className="text-sm text-accent font-medium mt-1">{trainer.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{trainer.experience}</p>
                <p className="text-sm text-muted-foreground mt-3">{trainer.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainers;
