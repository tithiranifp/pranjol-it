import Layout from "@/components/Layout";
import { Award, Users, Target, BookOpen } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">আমাদের সম্পর্কে</h1>
            <p className="text-primary-foreground/80 text-lg">
              ২০১৬ সাল থেকে আমরা দক্ষতা উন্নয়ন ও কারিগরি শিক্ষার ক্ষেত্রে কাজ করে যাচ্ছি।
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">আমাদের গল্প</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ২০১৬ সালে প্রতিষ্ঠিত টেক ট্রেনিং সেন্টার শুরু থেকেই তরুণদের কারিগরি দক্ষতা উন্নয়নে কাজ করে আসছে। 
                আমাদের লক্ষ্য হলো প্রতিটি শিক্ষার্থীকে বাস্তবমুখী প্রশিক্ষণের মাধ্যমে আত্মনির্ভরশীল করে গড়ে তোলা।
              </p>
              <p>
                গত ৮+ বছরে আমরা ৫,০০০ এরও বেশি শিক্ষার্থীকে সফলভাবে প্রশিক্ষণ দিয়েছি। আমাদের প্রাক্তন শিক্ষার্থীরা 
                দেশে-বিদেশে বিভিন্ন প্রতিষ্ঠানে কর্মরত এবং ফ্রিল্যান্সিংয়ে সফল।
              </p>
              <p>
                সরকার অনুমোদিত প্রতিষ্ঠান হিসেবে আমরা মানসম্মত সার্টিফিকেট প্রদান করি যা দেশে ও বিদেশে স্বীকৃত।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">আমাদের যাত্রা</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            {[
              { year: "২০১৬", event: "প্রতিষ্ঠান স্থাপন ও প্রথম ব্যাচ শুরু" },
              { year: "২০১৮", event: "সরকারি অনুমোদন প্রাপ্তি ও কোর্স সম্প্রসারণ" },
              { year: "২০২০", event: "অনলাইন ক্লাস শুরু ও ৩,০০০+ শিক্ষার্থী অতিক্রম" },
              { year: "২০২২", event: "নতুন ক্যাম্পাস উদ্বোধন ও উন্নত ল্যাব স্থাপন" },
              { year: "২০২৪", event: "৫,০০০+ শিক্ষার্থী এবং ১৫+ কোর্স চালু" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  {i < 4 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="pb-4">
                  <span className="text-sm font-semibold text-accent">{item.year}</span>
                  <p className="text-foreground font-medium mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">আমাদের মূল্যবোধ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "লক্ষ্য", desc: "বাস্তবমুখী শিক্ষা প্রদান" },
              { icon: Users, title: "সম্প্রদায়", desc: "শিক্ষার্থীদের একটি সক্রিয় নেটওয়ার্ক" },
              { icon: Award, title: "গুণমান", desc: "আন্তর্জাতিক মানের প্রশিক্ষণ" },
              { icon: BookOpen, title: "উদ্ভাবন", desc: "সর্বশেষ প্রযুক্তি অনুসরণ" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl bg-card border border-border">
                <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
