import Layout from "@/components/Layout";
import { Bell, Gift, Calendar, Users, Sparkles, Copy, Check, GraduationCap, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NoticeBoard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("LOVEPRANJOL");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const notices = [
    {
      id: 1,
      icon: <GraduationCap className="h-6 w-6" />,
      title: "🎉 এডমিশন চলছে!",
      description: "৩ জন একসাথে ভর্তি হলে Admission Fee 100% Discount! বন্ধুদের নিয়ে আজই ভর্তি হয়ে যান।",
      type: "urgent",
      date: "চলমান",
    },
    {
      id: 2,
      icon: <Sparkles className="h-6 w-6" />,
      title: "🚀 ZERO to Hero Batch — 30% OFF",
      description: "রেগুলার ফি ৯,০০০ টাকা। ডিসকাউন্ট মূল্য মাত্র ৬,৩০০ টাকা! সীমিত সময়ের অফার।",
      type: "offer",
      date: "চলমান",
    },
    {
      id: 3,
      icon: <Users className="h-6 w-6" />,
      title: "🔒 3-Month Private Batch — Ready to Join",
      description: "৩ মাসের প্রাইভেট ব্যাচে ভর্তি চলছে। ব্যক্তিগত মনোযোগ ও দ্রুত শেখার সুযোগ। আসন সীমিত!",
      type: "info",
      date: "চলমান",
    },
    {
      id: 4,
      icon: <Calendar className="h-6 w-6" />,
      title: "🌙 ঈদের ছুটি",
      description: "ঈদ-উল-ফিতর উপলক্ষে নির্ধারিত তারিখে ক্লাস বন্ধ থাকবে। ছুটির সময়সূচী পরে জানানো হবে।",
      type: "holiday",
      date: "শীঘ্রই ঘোষণা",
    },
    {
      id: 5,
      icon: <Clock className="h-6 w-6" />,
      title: "📅 সাপ্তাহিক ক্লাস শিডিউল",
      description: "প্রতি সপ্তাহে ৩ দিন ক্লাস হবে — ১ দিন পর পর। নিয়মিত ক্লাসে উপস্থিত থাকুন এবং সর্বোচ্চ শিখুন।",
      type: "info",
      date: "চলমান",
    },
  ];

  const randomColors = ["emerald", "blue"];
  const getRandomColor = (id: number) => randomColors[id % 2];

  const colorMap: Record<string, { border: string; bg: string; badge: string }> = {
    emerald: { border: "border-l-emerald-500", bg: "bg-emerald-500/5", badge: "bg-emerald-500/10 text-emerald-600" },
    blue: { border: "border-l-blue-500", bg: "bg-blue-500/5", badge: "bg-blue-500/10 text-blue-600" },
  };

  const typeLabel: Record<string, string> = {
    urgent: "জরুরি",
    offer: "অফার",
    info: "তথ্য",
    holiday: "ছুটি",
  };

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

      {/* Offer Banner */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50" />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Gift className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">🎁 স্পেশাল অফার!</h2>
                <p className="text-white/90">কুপন কোড ব্যবহার করে এখনই ডিসকাউন্ট পান</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-dashed border-white/50 rounded-xl px-5 py-3 flex items-center gap-3">
                <span className="font-mono font-bold text-xl text-white tracking-widest">LOVEPRANJOL</span>
                <button
                  onClick={handleCopy}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                >
                  {copied ? <Check className="h-5 w-5 text-white" /> : <Copy className="h-5 w-5 text-white" />}
                </button>
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm mt-3 text-center md:text-left">
            ভ্যালিডিটি: ৩১ মার্চ ২০২৬ পর্যন্ত
          </p>
        </div>
      </section>

      {/* Notices */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Bell className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">সাম্প্রতিক নোটিশসমূহ</h2>
          </div>

          <div className="space-y-4">
            {notices.map((notice) => {
              const c = colorMap[getRandomColor(notice.id)];
              return (
              <div
                key={notice.id}
                className={`border border-border border-l-4 rounded-xl p-5 transition-shadow hover:shadow-md ${c.border} ${c.bg}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-foreground/70 mt-0.5 shrink-0">{notice.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{notice.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                        {typeLabel[notice.type]}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{notice.description}</p>
                    <p className="text-xs text-muted-foreground/60 mt-3">📅 {notice.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NoticeBoard;
