import Layout from "@/components/Layout";
import { FileDown, FileText, BookOpen, HelpCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const sheets = [
  {
    title: "IMPORTANT QUESTIONS",
    titleBn: "গুরুত্বপূর্ণ প্রশ্ন ও উত্তর",
    description:
      "সবথেকে কমন কিছু প্রশ্ন এবং উত্তর পাবেন এই ফাইলটিতে। তাই এটি অন্যান্য পরীক্ষার জন্যও উপযোগী। ফাইলটি মোবাইলে/কম্পিউটারে ডাউনলোড করা এবং পড়া যাবে।",
    icon: <HelpCircle className="h-8 w-8" />,
    link: "https://pranjolit.com/files/importantqna.pdf",
    color: "text-red-500 bg-red-500/10",
  },
  {
    title: "SAMPLE QUESTIONS",
    titleBn: "সাজেশন প্রশ্নপত্র",
    description:
      "এখানে সাজেশন প্রশ্নপত্র রয়েছে। এটি দেখলে আইডিয়া করতে পারবেন প্রশ্নপত্র কেমন হবে। ফাইলটি মোবাইলে/কম্পিউটারে ডাউনলোড করা এবং পড়া যাবে।",
    icon: <FileText className="h-8 w-8" />,
    link: "https://pranjolit.com/files/samplequestion.pdf",
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    title: "COMPUTER BASIC SHEET",
    titleBn: "কম্পিউটার বেসিক শীট",
    description:
      "এই শীটে রয়েছে কম্পিউটার পরীক্ষার জন্য উপযোগী এবং সকল প্রকার চাকরীর পরীক্ষার সম্ভাব্য প্রশ্ন এবং উত্তর। ফাইলটি মোবাইলে/কম্পিউটারে ডাউনলোড করা এবং পড়া যাবে।",
    icon: <BookOpen className="h-8 w-8" />,
    link: "https://pranjolit.com/files/basicsheet.pdf",
    color: "text-emerald-500 bg-emerald-500/10",
  },
];

const Suggestion = () => {
  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              এসাইনমেন্ট এবং শীট
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              পরীক্ষার জন্য প্রয়োজনীয় সকল শীট এবং এসাইনমেন্ট এখানে দেওয়া হয়েছে। যথাযথ সময়ে ডাউনলোড করে নিন।
            </p>
          </div>
        </div>
      </section>

      {/* Exam Info */}
      <section className="bg-accent/10 border-b border-border">
        <div className="container py-6">
          <div className="max-w-4xl mx-auto space-y-2 text-sm">
            <p className="font-semibold text-foreground">
              📋 পরীক্ষার মোট নম্বর — ৫০০ (লিখিত: ৬০, ব্যবহারিক: ২০০, প্রতিষ্ঠান কর্তৃক: ২৪০)
            </p>
            <p className="text-muted-foreground">
              ⚠️ পরীক্ষার পূর্বে সকল বকেয়া পরিশোধ করুন। বকেয়া থাকলে রেজিস্ট্রেশন কার্ড প্রদান করা হবে না।
            </p>
            <p className="text-muted-foreground">
              📖 নবম-দশম শ্রেণির আইসিটি বই পড়লে অধিকাংশ প্রশ্ন ও উত্তর সহজ হবে।
            </p>
          </div>
        </div>
      </section>

      {/* Sheets */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FileDown className="h-6 w-6 text-primary" />
            প্রয়োজনীয় শীট ডাউনলোড করুন
          </h2>

          <div className="grid gap-6">
            {sheets.map((sheet) => (
              <div
                key={sheet.title}
                className="border border-border rounded-xl bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className={`p-4 rounded-xl shrink-0 ${sheet.color}`}>
                    {sheet.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{sheet.title}</h3>
                    <p className="text-sm font-medium text-primary mb-2">{sheet.titleBn}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {sheet.description}
                    </p>
                    <a href={sheet.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        ডাউনলোড করুন (PDF)
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact note */}
          <div className="mt-10 text-center p-6 rounded-xl bg-muted/50 border border-border">
            <p className="text-muted-foreground">
              কোন কিছু না বুঝতে পারলে যোগাযোগ করুন —{" "}
              <a href="tel:+8801932583396" className="text-primary font-semibold hover:underline">
                01932-583396
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Suggestion;
