import Layout from "@/components/Layout";
import { Zap } from "lucide-react";
import { useRef, useState } from "react";

interface ShortcutItem {
  keys: string;
  description: string;
}

interface ShortcutCategory {
  id: string;
  label: string;
  icon: string;
  sections: {
    title: string;
    shortcuts: ShortcutItem[];
  }[];
}

const categories: ShortcutCategory[] = [
  {
    id: "word",
    label: "MS Word",
    icon: "📝",
    sections: [
      {
        title: "ফাইল ও ডকুমেন্ট",
        shortcuts: [
          { keys: "Ctrl + N", description: "নতুন ডকুমেন্ট তৈরি করতে" },
          { keys: "Ctrl + O", description: "আগের সেভ করা ফাইল খুলতে" },
          { keys: "Ctrl + S", description: "ডকুমেন্ট সেভ করতে (হারিয়ে যাওয়া রোধ)" },
          { keys: "Ctrl + Shift + S", description: "নতুন নামে বা লোকেশনে সেভ করতে (Save As)" },
          { keys: "Ctrl + W", description: "বর্তমান ডকুমেন্ট বন্ধ করতে" },
          { keys: "Ctrl + P", description: "ডকুমেন্ট প্রিন্ট করতে" },
          { keys: "F12", description: "Save As ডায়ালগ সরাসরি খুলতে" },
        ],
      },
      {
        title: "টেক্সট ফরম্যাটিং",
        shortcuts: [
          { keys: "Ctrl + B", description: "লেখা বোল্ড (মোটা) করতে" },
          { keys: "Ctrl + I", description: "লেখা ইটালিক (হেলানো) করতে" },
          { keys: "Ctrl + U", description: "লেখার নিচে আন্ডারলাইন দিতে" },
          { keys: "Ctrl + Shift + >", description: "ফন্ট সাইজ বড় করতে" },
          { keys: "Ctrl + Shift + <", description: "ফন্ট সাইজ ছোট করতে" },
          { keys: "Ctrl + D", description: "ফন্ট সেটিংস ডায়ালগ খুলতে (ফন্ট, সাইজ, রং একসাথে)" },
          { keys: "Ctrl + Shift + K", description: "লেখা SMALL CAPS করতে" },
          { keys: "Ctrl + =", description: "সাবস্ক্রিপ্ট (H₂O এর মতো ছোট নিচে)" },
          { keys: "Ctrl + Shift + =", description: "সুপারস্ক্রিপ্ট (x² এর মতো ছোট উপরে)" },
        ],
      },
      {
        title: "প্যারাগ্রাফ ও অ্যালাইনমেন্ট",
        shortcuts: [
          { keys: "Ctrl + L", description: "লেখা বামে সারিবদ্ধ করতে" },
          { keys: "Ctrl + E", description: "লেখা মাঝখানে আনতে (সেন্টার)" },
          { keys: "Ctrl + R", description: "লেখা ডানে সারিবদ্ধ করতে" },
          { keys: "Ctrl + J", description: "লেখা দুই পাশে সমান করতে (জাস্টিফাই)" },
          { keys: "Ctrl + 1", description: "লাইন স্পেসিং ১ করতে" },
          { keys: "Ctrl + 2", description: "লাইন স্পেসিং ২ করতে (ডাবল স্পেস)" },
          { keys: "Ctrl + 5", description: "লাইন স্পেসিং ১.৫ করতে" },
        ],
      },
      {
        title: "সম্পাদনা ও নেভিগেশন",
        shortcuts: [
          { keys: "Ctrl + A", description: "সব কিছু একসাথে সিলেক্ট করতে" },
          { keys: "Ctrl + C", description: "সিলেক্ট করা অংশ কপি করতে" },
          { keys: "Ctrl + X", description: "সিলেক্ট করা অংশ কাট করতে (সরিয়ে নিতে)" },
          { keys: "Ctrl + V", description: "কপি/কাট করা অংশ পেস্ট করতে" },
          { keys: "Ctrl + Z", description: "শেষ কাজটি বাতিল করতে (Undo)" },
          { keys: "Ctrl + Y", description: "বাতিল করা কাজ আবার ফিরিয়ে আনতে (Redo)" },
          { keys: "Ctrl + F", description: "নির্দিষ্ট শব্দ খুঁজতে (Find)" },
          { keys: "Ctrl + H", description: "শব্দ খুঁজে অন্য শব্দ দিয়ে বদলাতে (Replace)" },
          { keys: "Ctrl + G", description: "নির্দিষ্ট পেজে যেতে (Go To)" },
          { keys: "Ctrl + Home", description: "ডকুমেন্টের একদম শুরুতে যেতে" },
          { keys: "Ctrl + End", description: "ডকুমেন্টের একদম শেষে যেতে" },
        ],
      },
      {
        title: "ইনসার্ট ও অন্যান্য",
        shortcuts: [
          { keys: "Ctrl + Enter", description: "নতুন পেজ শুরু করতে (Page Break)" },
          { keys: "Ctrl + K", description: "হাইপারলিংক যোগ করতে" },
          { keys: "Alt + Shift + D", description: "আজকের তারিখ ঢোকাতে" },
          { keys: "Alt + Shift + T", description: "বর্তমান সময় ঢোকাতে" },
          { keys: "F7", description: "বানান ও ব্যাকরণ চেক করতে" },
        ],
      },
    ],
  },
  {
    id: "excel",
    label: "MS Excel",
    icon: "📊",
    sections: [
      {
        title: "ফাইল ও বেসিক",
        shortcuts: [
          { keys: "Ctrl + N", description: "নতুন ওয়ার্কবুক তৈরি করতে" },
          { keys: "Ctrl + O", description: "আগের ফাইল খুলতে" },
          { keys: "Ctrl + S", description: "ফাইল সেভ করতে" },
          { keys: "Ctrl + P", description: "প্রিন্ট করতে" },
          { keys: "Ctrl + Z", description: "শেষ কাজ বাতিল করতে (Undo)" },
          { keys: "Ctrl + Y", description: "Redo করতে" },
          { keys: "Ctrl + W", description: "ওয়ার্কবুক বন্ধ করতে" },
        ],
      },
      {
        title: "সেল নেভিগেশন ও সিলেকশন",
        shortcuts: [
          { keys: "Ctrl + Home", description: "শিটের A1 সেলে যেতে" },
          { keys: "Ctrl + End", description: "শিটের শেষ ডেটা সেলে যেতে" },
          { keys: "Ctrl + Arrow", description: "ডেটা ব্লকের শেষে লাফ দিয়ে যেতে" },
          { keys: "Ctrl + Shift + Arrow", description: "ডেটা ব্লক সিলেক্ট করতে" },
          { keys: "Ctrl + Space", description: "পুরো কলাম সিলেক্ট করতে" },
          { keys: "Shift + Space", description: "পুরো রো সিলেক্ট করতে" },
          { keys: "Ctrl + A", description: "পুরো শিট সিলেক্ট করতে" },
          { keys: "Ctrl + G / F5", description: "নির্দিষ্ট সেলে যেতে (Go To)" },
        ],
      },
      {
        title: "ডেটা এন্ট্রি ও এডিটিং",
        shortcuts: [
          { keys: "F2", description: "সেল এডিট মোডে যেতে (ভেতরে কার্সর নিতে)" },
          { keys: "Tab", description: "পাশের সেলে যেতে (ডানে)" },
          { keys: "Enter", description: "নিচের সেলে যেতে ও এন্ট্রি নিশ্চিত করতে" },
          { keys: "Esc", description: "এডিটিং বাতিল করতে" },
          { keys: "Delete", description: "সেলের ডেটা মুছতে" },
          { keys: "Ctrl + D", description: "উপরের সেলের ডেটা নিচে কপি করতে (Fill Down)" },
          { keys: "Ctrl + R", description: "বামের সেলের ডেটা ডানে কপি করতে (Fill Right)" },
          { keys: "Ctrl + ;", description: "আজকের তারিখ ঢোকাতে" },
          { keys: "Ctrl + Shift + ;", description: "বর্তমান সময় ঢোকাতে" },
        ],
      },
      {
        title: "ফরম্যাটিং ও ফর্মুলা",
        shortcuts: [
          { keys: "Ctrl + B / I / U", description: "বোল্ড / ইটালিক / আন্ডারলাইন" },
          { keys: "Ctrl + 1", description: "ফরম্যাট সেলস ডায়ালগ খুলতে" },
          { keys: "Ctrl + Shift + $", description: "সংখ্যাকে টাকা (Currency) ফরম্যাটে দেখাতে" },
          { keys: "Ctrl + Shift + %", description: "সংখ্যাকে শতাংশে (%) দেখাতে" },
          { keys: "Alt + =", description: "AutoSum (যোগফল দ্রুত বের করতে)" },
          { keys: "Ctrl + `", description: "ফর্মুলা দেখা/লুকানো টগল করতে" },
          { keys: "F4", description: "সেল রেফারেন্স Absolute ($) করতে" },
          { keys: "Ctrl + Shift + L", description: "ফিল্টার চালু/বন্ধ করতে" },
        ],
      },
      {
        title: "শিট ম্যানেজমেন্ট",
        shortcuts: [
          { keys: "Ctrl + Page Up", description: "আগের শিটে যেতে" },
          { keys: "Ctrl + Page Down", description: "পরের শিটে যেতে" },
          { keys: "Shift + F11", description: "নতুন শিট ঢোকাতে" },
          { keys: "Ctrl + Shift + +", description: "নতুন রো বা কলাম ইনসার্ট করতে" },
          { keys: "Ctrl + -", description: "রো বা কলাম ডিলিট করতে" },
        ],
      },
    ],
  },
  {
    id: "powerpoint",
    label: "PowerPoint",
    icon: "📽️",
    sections: [
      {
        title: "ফাইল ও বেসিক",
        shortcuts: [
          { keys: "Ctrl + N", description: "নতুন প্রেজেন্টেশন তৈরি করতে" },
          { keys: "Ctrl + O", description: "আগের ফাইল খুলতে" },
          { keys: "Ctrl + S", description: "সেভ করতে" },
          { keys: "Ctrl + P", description: "প্রিন্ট করতে" },
          { keys: "Ctrl + Z", description: "Undo করতে" },
          { keys: "Ctrl + Y", description: "Redo করতে" },
        ],
      },
      {
        title: "স্লাইড ম্যানেজমেন্ট",
        shortcuts: [
          { keys: "Ctrl + M", description: "নতুন স্লাইড যোগ করতে" },
          { keys: "Ctrl + D", description: "স্লাইড ডুপ্লিকেট করতে" },
          { keys: "Ctrl + Shift + D", description: "স্লাইডের কপি তৈরি করতে" },
          { keys: "Delete", description: "সিলেক্ট করা স্লাইড মুছতে" },
          { keys: "Ctrl + ↑ / ↓", description: "স্লাইডের ক্রম উপরে/নিচে সরাতে" },
        ],
      },
      {
        title: "টেক্সট ও অবজেক্ট",
        shortcuts: [
          { keys: "Ctrl + B / I / U", description: "বোল্ড / ইটালিক / আন্ডারলাইন" },
          { keys: "Ctrl + L / E / R", description: "বামে / মাঝে / ডানে অ্যালাইন" },
          { keys: "Ctrl + G", description: "একাধিক অবজেক্ট গ্রুপ করতে" },
          { keys: "Ctrl + Shift + G", description: "গ্রুপ ভাঙতে (Ungroup)" },
          { keys: "Ctrl + K", description: "হাইপারলিংক ঢোকাতে" },
          { keys: "Tab", description: "পরের অবজেক্টে যেতে" },
        ],
      },
      {
        title: "স্লাইডশো",
        shortcuts: [
          { keys: "F5", description: "শুরু থেকে স্লাইডশো চালাতে" },
          { keys: "Shift + F5", description: "বর্তমান স্লাইড থেকে শো শুরু করতে" },
          { keys: "Esc", description: "স্লাইডশো বন্ধ করতে" },
          { keys: "N / Enter / →", description: "পরের স্লাইডে যেতে" },
          { keys: "P / ← / Backspace", description: "আগের স্লাইডে যেতে" },
          { keys: "B", description: "স্ক্রিন কালো করতে (বিরতি নিতে)" },
          { keys: "W", description: "স্ক্রিন সাদা করতে" },
          { keys: "Ctrl + L", description: "লেজার পয়েন্টার চালু করতে" },
          { keys: "Number + Enter", description: "নির্দিষ্ট স্লাইডে যেতে (যেমন: 5 + Enter)" },
        ],
      },
    ],
  },
  {
    id: "photoshop",
    label: "Photoshop",
    icon: "🎨",
    sections: [
      {
        title: "ফাইল ও বেসিক",
        shortcuts: [
          { keys: "Ctrl + N", description: "নতুন ক্যানভাস তৈরি করতে" },
          { keys: "Ctrl + O", description: "ছবি খুলতে" },
          { keys: "Ctrl + S", description: "সেভ করতে" },
          { keys: "Ctrl + Shift + S", description: "Save As (নতুন নামে সেভ)" },
          { keys: "Ctrl + Shift + Alt + S", description: "ওয়েবের জন্য সেভ করতে (Save for Web)" },
          { keys: "Ctrl + Z", description: "একধাপ Undo করতে" },
          { keys: "Ctrl + Alt + Z", description: "একাধিকবার Undo করতে (পুরানো ভার্সনে)" },
          { keys: "Ctrl + Shift + Z", description: "Redo করতে" },
        ],
      },
      {
        title: "টুল শর্টকাট",
        shortcuts: [
          { keys: "V", description: "Move Tool — অবজেক্ট সরাতে" },
          { keys: "M", description: "Marquee Tool — আয়তাকার সিলেকশন করতে" },
          { keys: "L", description: "Lasso Tool — হাতে এঁকে সিলেকশন করতে" },
          { keys: "W", description: "Magic Wand — একই রঙের এলাকা সিলেক্ট করতে" },
          { keys: "C", description: "Crop Tool — ছবি কাটছাঁট করতে" },
          { keys: "B", description: "Brush Tool — আঁকতে বা রং করতে" },
          { keys: "E", description: "Eraser Tool — মুছতে" },
          { keys: "G", description: "Gradient / Paint Bucket — রং ভরাট করতে" },
          { keys: "T", description: "Type Tool — লেখা টাইপ করতে" },
          { keys: "P", description: "Pen Tool — সূক্ষ্ম পাথ আঁকতে (লোগো ডিজাইনে)" },
          { keys: "I", description: "Eyedropper — ছবি থেকে রং তুলে নিতে" },
          { keys: "H", description: "Hand Tool — ক্যানভাস ধরে সরাতে" },
          { keys: "Z", description: "Zoom Tool — জুম ইন/আউট করতে" },
        ],
      },
      {
        title: "লেয়ার ম্যানেজমেন্ট",
        shortcuts: [
          { keys: "Ctrl + Shift + N", description: "নতুন লেয়ার তৈরি করতে" },
          { keys: "Ctrl + J", description: "সিলেক্ট করা অংশ নতুন লেয়ারে কপি করতে" },
          { keys: "Ctrl + E", description: "নিচের লেয়ারের সাথে মিলিয়ে দিতে (Merge Down)" },
          { keys: "Ctrl + Shift + E", description: "সব দৃশ্যমান লেয়ার একত্র করতে (Merge Visible)" },
          { keys: "Ctrl + G", description: "লেয়ার গ্রুপ করতে" },
          { keys: "Ctrl + [ / ]", description: "লেয়ার উপরে/নিচে সরাতে" },
        ],
      },
      {
        title: "সিলেকশন ও ট্রান্সফর্ম",
        shortcuts: [
          { keys: "Ctrl + A", description: "পুরো ক্যানভাস সিলেক্ট করতে" },
          { keys: "Ctrl + D", description: "সিলেকশন বাতিল করতে (Deselect)" },
          { keys: "Ctrl + Shift + I", description: "সিলেকশন উল্টাতে (Inverse)" },
          { keys: "Ctrl + T", description: "ফ্রি ট্রান্সফর্ম (সাইজ, ঘোরানো)" },
          { keys: "Ctrl + Shift + T", description: "শেষ ট্রান্সফর্ম আবার করতে" },
          { keys: "Ctrl + Alt + I", description: "ছবির সাইজ পরিবর্তন করতে (Image Size)" },
          { keys: "Ctrl + Alt + C", description: "ক্যানভাস সাইজ পরিবর্তন করতে" },
        ],
      },
      {
        title: "ভিউ ও ডিসপ্লে",
        shortcuts: [
          { keys: "Ctrl + +", description: "জুম ইন করতে" },
          { keys: "Ctrl + -", description: "জুম আউট করতে" },
          { keys: "Ctrl + 0", description: "পুরো ছবি স্ক্রিনে ফিট করতে" },
          { keys: "Ctrl + 1", description: "১০০% আসল সাইজে দেখতে" },
          { keys: "Ctrl + R", description: "রুলার দেখানো/লুকানো" },
          { keys: "Ctrl + '", description: "গ্রিড দেখানো/লুকানো" },
        ],
      },
    ],
  },
  {
    id: "browser",
    label: "ব্রাউজিং",
    icon: "🌐",
    sections: [
      {
        title: "ট্যাব ম্যানেজমেন্ট",
        shortcuts: [
          { keys: "Ctrl + T", description: "নতুন ট্যাব খুলতে" },
          { keys: "Ctrl + W", description: "বর্তমান ট্যাব বন্ধ করতে" },
          { keys: "Ctrl + Shift + T", description: "ভুলে বন্ধ করা ট্যাব আবার খুলতে" },
          { keys: "Ctrl + Tab", description: "পরের ট্যাবে যেতে" },
          { keys: "Ctrl + Shift + Tab", description: "আগের ট্যাবে যেতে" },
          { keys: "Ctrl + 1-9", description: "নির্দিষ্ট নম্বরের ট্যাবে যেতে" },
        ],
      },
      {
        title: "নেভিগেশন",
        shortcuts: [
          { keys: "Alt + ←", description: "আগের পেজে যেতে (Back)" },
          { keys: "Alt + →", description: "পরের পেজে যেতে (Forward)" },
          { keys: "F5 / Ctrl + R", description: "পেজ রিফ্রেশ করতে" },
          { keys: "Ctrl + Shift + R", description: "ক্যাশ ছাড়া জোর করে রিফ্রেশ করতে (Hard Reload)" },
          { keys: "Home", description: "পেজের শুরুতে যেতে" },
          { keys: "End", description: "পেজের শেষে যেতে" },
          { keys: "Space", description: "নিচে স্ক্রল করতে" },
          { keys: "Shift + Space", description: "উপরে স্ক্রল করতে" },
        ],
      },
      {
        title: "অ্যাড্রেস বার ও সার্চ",
        shortcuts: [
          { keys: "Ctrl + L / F6", description: "অ্যাড্রেস বারে যেতে (URL টাইপ করতে)" },
          { keys: "Ctrl + K", description: "সার্চ বারে যেতে" },
          { keys: "Ctrl + Enter", description: "URL-এ .com স্বয়ংক্রিয়ভাবে যোগ করতে" },
          { keys: "Ctrl + F", description: "পেজে কিছু খুঁজতে (Find)" },
        ],
      },
      {
        title: "বুকমার্ক ও হিস্টোরি",
        shortcuts: [
          { keys: "Ctrl + D", description: "বর্তমান পেজ বুকমার্ক করতে" },
          { keys: "Ctrl + Shift + B", description: "বুকমার্ক বার দেখানো/লুকানো" },
          { keys: "Ctrl + H", description: "ব্রাউজিং হিস্টোরি দেখতে" },
          { keys: "Ctrl + J", description: "ডাউনলোড তালিকা দেখতে" },
        ],
      },
      {
        title: "পেজ ও উইন্ডো",
        shortcuts: [
          { keys: "Ctrl + N", description: "নতুন ব্রাউজার উইন্ডো খুলতে" },
          { keys: "Ctrl + Shift + N", description: "প্রাইভেট/ইনকগনিটো উইন্ডো খুলতে" },
          { keys: "Ctrl + +", description: "জুম ইন করতে (লেখা বড় করতে)" },
          { keys: "Ctrl + -", description: "জুম আউট করতে (লেখা ছোট করতে)" },
          { keys: "Ctrl + 0", description: "জুম ডিফল্ট (১০০%) করতে" },
          { keys: "F11", description: "পূর্ণ স্ক্রিন মোড চালু/বন্ধ করতে" },
          { keys: "Ctrl + Shift + Delete", description: "ব্রাউজিং ডেটা মুছতে (Clear Data)" },
          { keys: "F12 / Ctrl + Shift + I", description: "ডেভেলপার টুলস খুলতে" },
        ],
      },
    ],
  },
];

const Shortcut = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  const scrollToSection = (sectionTitle: string) => {
    sectionRefs.current[sectionTitle]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">শর্টকাট কী</h1>
            <p className="text-primary-foreground/80 text-lg">
              দ্রুত কাজ করতে শর্টকাট কী শিখুন — প্রতিটির পাশে বাংলায় কেন ব্যবহার করবেন লেখা আছে
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-5xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 sticky top-16 z-30 bg-background py-3 border-b border-border">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === cat.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-foreground/70 hover:bg-muted"
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Section Quick Links */}
          <div className="flex flex-wrap gap-2 mb-8">
            {activeCategory.sections.map((section) => (
              <button
                key={section.title}
                onClick={() => scrollToSection(section.title)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Shortcut Tables */}
          <div className="space-y-10">
            {activeCategory.sections.map((section) => (
              <div
                key={section.title}
                ref={(el) => { sectionRefs.current[section.title] = el; }}
                className="scroll-mt-36"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  {section.title}
                </h2>
                <div className="border border-border rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted">
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground w-12">নং</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground w-1/3">শর্টকাট কী</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">কেন ব্যবহার করবেন</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.shortcuts.map((sc, i) => (
                        <tr
                          key={i}
                          className="border-t border-border hover:bg-muted/50 transition-colors"
                        >
                          <td className="px-4 py-3 text-sm font-number text-muted-foreground">{i + 1}</td>
                          <td className="px-4 py-3">
                            <kbd className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-mono text-sm font-semibold border border-primary/20">
                              {sc.keys}
                            </kbd>
                          </td>
                          <td className="px-4 py-3 text-sm text-foreground/80">{sc.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shortcut;
