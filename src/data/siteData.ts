export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  fee: number;
  icon: string;
  features: string[];
}

export const courses: Course[] = [
  {
    id: "web-design",
    title: "ওয়েব ডিজাইন ও ডেভেলপমেন্ট",
    description: "HTML, CSS, JavaScript, React সহ সম্পূর্ণ ওয়েব ডেভেলপমেন্ট শিখুন এবং ফ্রিল্যান্সিং শুরু করুন।",
    duration: "৬ মাস",
    fee: 3000,
    icon: "🌐",
    features: ["HTML5 & CSS3", "JavaScript & React", "Responsive Design", "Live Project"],
  },
  {
    id: "graphic-design",
    title: "গ্রাফিক ডিজাইন",
    description: "Adobe Photoshop, Illustrator, Canva দিয়ে প্রফেশনাল গ্রাফিক ডিজাইন শিখুন।",
    duration: "৪ মাস",
    fee: 3000,
    icon: "🎨",
    features: ["Adobe Photoshop", "Adobe Illustrator", "Logo Design", "Social Media Design"],
  },
  {
    id: "digital-marketing",
    title: "ডিজিটাল মার্কেটিং",
    description: "SEO, SEM, সোশ্যাল মিডিয়া মার্কেটিং ও কন্টেন্ট মার্কেটিং শিখুন।",
    duration: "৩ মাস",
    fee: 3000,
    icon: "📈",
    features: ["SEO & SEM", "Facebook Marketing", "Google Ads", "Content Strategy"],
  },
  {
    id: "ms-office",
    title: "MS Office & ICT",
    description: "Microsoft Word, Excel, PowerPoint ও ICT দক্ষতা অর্জন করুন।",
    duration: "৩ মাস",
    fee: 3000,
    icon: "💻",
    features: ["MS Word & Excel", "PowerPoint", "ICT Fundamentals", "Typing Speed"],
  },
  {
    id: "freelancing",
    title: "ফ্রিল্যান্সিং",
    description: "Upwork, Fiverr ও অন্যান্য মার্কেটপ্লেসে কাজ করার কৌশল শিখুন।",
    duration: "২ মাস",
    fee: 3000,
    icon: "💰",
    features: ["Profile Setup", "Client Communication", "Project Management", "Payment Setup"],
  },
  {
    id: "video-editing",
    title: "ভিডিও এডিটিং",
    description: "Adobe Premiere Pro ও After Effects দিয়ে প্রফেশনাল ভিডিও এডিটিং শিখুন।",
    duration: "৪ মাস",
    fee: 3000,
    icon: "🎬",
    features: ["Premiere Pro", "After Effects", "Color Grading", "YouTube Content"],
  },
];

export const trainers = [
  {
    id: "1",
    name: "আবু সাইদ",
    role: "ওয়েব ডেভেলপমেন্ট ইন্সট্রাক্টর",
    experience: "৮+ বছরের অভিজ্ঞতা",
    bio: "ফুলস্ট্যাক ডেভেলপার ও প্রশিক্ষক। ৫০০+ শিক্ষার্থীকে প্রশিক্ষণ দিয়েছেন।",
  },
  {
    id: "2",
    name: "ফারজানা আক্তার",
    role: "গ্রাফিক ডিজাইন ইন্সট্রাক্টর",
    experience: "৬+ বছরের অভিজ্ঞতা",
    bio: "Adobe Certified Professional। জাতীয় ও আন্তর্জাতিক ক্লায়েন্টদের সাথে কাজ করেছেন।",
  },
  {
    id: "3",
    name: "রাকিব হাসান",
    role: "ডিজিটাল মার্কেটিং ইন্সট্রাক্টর",
    experience: "৫+ বছরের অভিজ্ঞতা",
    bio: "Google ও Facebook Certified Marketer। ১০০+ ব্র্যান্ডের সাথে কাজ করেছেন।",
  },
];

export const reviews = [
  {
    id: "1",
    name: "মোঃ তানভীর",
    course: "ওয়েব ডিজাইন",
    rating: 5,
    text: "এই কোর্স থেকে আমি ওয়েব ডেভেলপমেন্ট শিখে এখন ফ্রিল্যান্সিং করছি। অসাধারণ প্রশিক্ষণ!",
  },
  {
    id: "2",
    name: "নাফিসা আলম",
    course: "গ্রাফিক ডিজাইন",
    rating: 5,
    text: "স্যারদের পড়ানোর ধরন খুবই সুন্দর। হাতে-কলমে শেখানো হয়। আমি এখন নিজে ডিজাইন এজেন্সি চালাচ্ছি।",
  },
  {
    id: "3",
    name: "সাকিব আহমেদ",
    course: "ডিজিটাল মার্কেটিং",
    rating: 4,
    text: "কোর্সের কন্টেন্ট আপডেটেড এবং প্র্যাক্টিক্যাল। লাইভ প্রজেক্ট করার সুযোগ পেয়েছি।",
  },
];

export const faqs = [
  {
    question: "কোর্সে ভর্তি হতে কি কি লাগবে?",
    answer: "ভর্তি হতে পাসপোর্ট সাইজের ছবি, শিক্ষাগত সনদ (JSC/SSC মার্কশিট বা সার্টিফিকেট), এবং মোবাইল নম্বর প্রয়োজন।",
  },
  {
    question: "কোর্স ফি কত এবং কিস্তিতে দেওয়া যাবে?",
    answer: "কোর্স ফি ৩,০০০ টাকা। এটি ২ কিস্তিতে দেওয়া যাবে - ১ম কিস্তি ১,৫০০ টাকা এবং ২য় কিস্তি ১,৫০০ টাকা। এছাড়া ভর্তি ফি ১,৫০০ টাকা এবং সরকারি রেজিস্ট্রেশন ফি ২,০০০ টাকা।",
  },
  {
    question: "ক্লাস কি অনলাইনে হয়?",
    answer: "হ্যাঁ, আমরা অফলাইন ও অনলাইন দুই ধরনের ক্লাসের ব্যবস্থা রাখি। অনলাইন ক্লাস Zoom/Google Meet এর মাধ্যমে হয়।",
  },
  {
    question: "কোর্স শেষে কি সার্টিফিকেট দেওয়া হয়?",
    answer: "হ্যাঁ, কোর্স সম্পন্ন করার পর সরকার অনুমোদিত সার্টিফিকেট প্রদান করা হয়।",
  },
  {
    question: "ডিসকাউন্ট কি পাওয়া যায়?",
    answer: "হ্যাঁ, কুপন কোড ব্যবহার করলে ২০% পর্যন্ত ডিসকাউন্ট পাওয়া যায়। বিস্তারিত জানতে যোগাযোগ করুন।",
  },
  {
    question: "ব্যাচ কখন শুরু হয়?",
    answer: "প্রতি মাসে নতুন ব্যাচ শুরু হয়। নির্দিষ্ট তারিখ জানতে আমাদের সাথে যোগাযোগ করুন।",
  },
];
