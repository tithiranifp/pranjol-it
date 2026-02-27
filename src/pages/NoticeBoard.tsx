import Layout from "@/components/Layout";
import { Bell } from "lucide-react";

const NoticeBoard = () => {
  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">নোটিশ বোর্ড</h1>
            <p className="text-primary-foreground/80 text-lg">
              সকল গুরুত্বপূর্ণ নোটিশ ও ঘোষণা এখানে পাবেন
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-16">
            <Bell className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">নোটিশ বোর্ড</h2>
            <p className="text-muted-foreground">নতুন নোটিশ শীঘ্রই প্রকাশিত হবে। নিয়মিত চেক করুন।</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NoticeBoard;
