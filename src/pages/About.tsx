import Layout from "@/components/Layout";
import { Award, Users, Target, BookOpen, Globe, ShoppingCart, Search, Server } from "lucide-react";

const sisterConcerns = [
  {
    name: "Btmaxhost.com",
    icon: Server,
    tagline: "Web Hosting Solutions",
    url: "https://btmaxhost.com",
    description: "বিশ্বস্ত ও নির্ভরযোগ্য ওয়েব হোস্টিং সার্ভিস প্রোভাইডার। Shared Hosting, VPS, Dedicated Server, Reseller Hosting সহ সকল ধরনের হোস্টিং সমাধান প্রদান করে থাকি। 24/7 সাপোর্ট, 99.9% আপটাইম গ্যারান্টি এবং সাশ্রয়ী মূল্যে সেরা সার্ভিস।",
  },
  {
    name: "Namehostbd.com",
    icon: Globe,
    tagline: "Web Hosting Solutions",
    url: "https://namehostbd.com",
    description: "বাংলাদেশের অন্যতম সেরা ডোমেইন ও হোস্টিং প্রোভাইডার। .com, .net, .org, .com.bd সহ সকল ধরনের ডোমেইন রেজিস্ট্রেশন এবং ওয়েব হোস্টিং সার্ভিস। ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট সার্ভিসও প্রদান করা হয়।",
  },
  {
    name: "Zenix.bd",
    icon: Search,
    tagline: "SEO & Digital Marketing",
    url: "#",
    description: "প্রফেশনাল SEO ও ডিজিটাল মার্কেটিং এজেন্সি। Search Engine Optimization, Social Media Marketing, Google Ads, Facebook Ads, Content Marketing ও Brand Promotion সহ সম্পূর্ণ ডিজিটাল মার্কেটিং সলিউশন। আপনার ব্যবসাকে অনলাইনে বড় করুন আমাদের সাথে।",
  },
  {
    name: "momcare.com.bd",
    icon: ShoppingCart,
    tagline: "Ecommerce",
    url: "https://momcare.com.bd",
    description: "মা ও শিশুর যত্নে বিশ্বস্ত ই-কমার্স প্ল্যাটফর্ম। মানসম্পন্ন Baby Products, Maternity Care, Health & Beauty Products সহ নিত্যপ্রয়োজনীয় পণ্য ঘরে বসে অর্ডার করুন। সারাদেশে ক্যাশ অন ডেলিভারি ও হোম ডেলিভারি সুবিধা।",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">আমাদের সম্পর্কে</h1>
            <p className="text-primary-foreground/80 text-lg">
              Pranjol IT - Pranjol Computer Education। দক্ষতা উন্নয়ন ও কারিগরি শিক্ষার ক্ষেত্রে কাজ করে যাচ্ছি।
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
                প্রাঞ্জল আইটি (Pranjol IT - Pranjol Computer Education) শুরু থেকেই তরুণদের কারিগরি দক্ষতা উন্নয়নে কাজ করে আসছে। 
                আমাদের লক্ষ্য হলো প্রতিটি শিক্ষার্থীকে বাস্তবমুখী প্রশিক্ষণের মাধ্যমে আত্মনির্ভরশীল করে গড়ে তোলা।
              </p>
              <p>
                আমরা অসংখ্য শিক্ষার্থীকে সফলভাবে প্রশিক্ষণ দিয়েছি। আমাদের প্রাক্তন শিক্ষার্থীরা 
                দেশে-বিদেশে বিভিন্ন প্রতিষ্ঠানে কর্মরত এবং ফ্রিল্যান্সিংয়ে সফল।
              </p>
              <p>
                সরকার অনুমোদিত প্রতিষ্ঠান হিসেবে আমরা BTEB Board এর মানসম্মত সার্টিফিকেট প্রদান করি যা দেশে ও বিদেশে স্বীকৃত।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sister Concerns */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">আমাদের সিস্টার কনসার্ন</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            শিক্ষা প্রতিষ্ঠানের পাশাপাশি আমাদের আরো কিছু প্রতিষ্ঠান রয়েছে যা বিভিন্ন সেক্টরে সেবা প্রদান করছে
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sisterConcerns.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300 group block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">{item.name}</h3>
                    <span className="text-xs text-muted-foreground">{item.tagline}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">আমাদের যাত্রা</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            {[
              { year: "প্রতিষ্ঠা", event: "প্রতিষ্ঠান স্থাপন ও প্রথম ব্যাচ শুরু" },
              { year: "সম্প্রসারণ", event: "সরকারি অনুমোদন প্রাপ্তি ও কোর্স সম্প্রসারণ" },
              { year: "অনলাইন", event: "অনলাইন ক্লাস শুরু ও শিক্ষার্থী বৃদ্ধি" },
              { year: "আধুনিকায়ন", event: "নতুন ক্যাম্পাস উদ্বোধন ও উন্নত ল্যাব স্থাপন" },
              { year: "বর্তমান", event: "সিস্টার কনসার্নসহ মাল্টি-সেক্টর প্রতিষ্ঠান" },
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
      <section className="section-padding bg-muted/50">
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
