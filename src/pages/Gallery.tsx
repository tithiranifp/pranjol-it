import Layout from "@/components/Layout";
import { useState } from "react";

const years = ["২০২৪", "২০২৩", "২০২২", "২০২১"];

const galleryItems = [
  { year: "২০২৪", category: "ক্লাস", title: "ওয়েব ডেভেলপমেন্ট ক্লাস ২০২৪" },
  { year: "২০২৪", category: "ইভেন্ট", title: "বার্ষিক সেমিনার ২০২৪" },
  { year: "২০২৪", category: "গ্রুপ", title: "ব্যাচ ১০ গ্রুপ ফটো" },
  { year: "২০২৩", category: "ক্লাস", title: "গ্রাফিক ডিজাইন ওয়ার্কশপ" },
  { year: "২০২৩", category: "ইভেন্ট", title: "সার্টিফিকেট বিতরণ অনুষ্ঠান" },
  { year: "২০২৩", category: "গ্রুপ", title: "ব্যাচ ৮ গ্রুপ ফটো" },
  { year: "২০২২", category: "ক্লাস", title: "ডিজিটাল মার্কেটিং সেশন" },
  { year: "২০২২", category: "ইভেন্ট", title: "টেক ফেস্ট ২০২২" },
  { year: "২০২১", category: "ক্লাস", title: "অনলাইন ক্লাস সেশন" },
];

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState<string>("সব");
  const filtered = selectedYear === "সব" ? galleryItems : galleryItems.filter((g) => g.year === selectedYear);

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">গ্যালারি</h1>
          <p className="text-primary-foreground/80 text-lg">আমাদের কার্যক্রমের ছবি দেখুন</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          {/* Year Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {["সব", ...years].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedYear === year
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden bg-muted aspect-[4/3] border border-border">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                  <span className="text-6xl opacity-20">📸</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-sm font-semibold text-background">{item.title}</p>
                  <p className="text-xs text-background/70">{item.category} • {item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
