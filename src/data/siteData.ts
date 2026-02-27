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
    name: "Tukon Roy",
    role: "Director & Founder",
    experience: "Web Application & WHM Expert",
    bio: "প্রতিষ্ঠাতা ও পরিচালক। ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট ও WHM (Web Host Manager) এ বিশেষজ্ঞ।",
    gender: "male",
  },
  {
    id: "2",
    name: "Polash Roy",
    role: "Director",
    experience: "প্রতিষ্ঠান পরিচালনা ও ব্যবস্থাপনা",
    bio: "পরিচালক হিসেবে প্রতিষ্ঠানের সার্বিক কার্যক্রম তত্ত্বাবধান ও পরিচালনা করেন।",
    gender: "male",
  },
  {
    id: "3",
    name: "Mrinal Roy",
    role: "Web Design & WordPress Expert",
    experience: "MS Office & Basic Computer Instructor",
    bio: "ওয়েব ডিজাইন, ওয়ার্ডপ্রেস ডেভেলপমেন্ট এবং MS Office ও বেসিক কম্পিউটার প্রশিক্ষক।",
    gender: "male",
  },
  {
    id: "4",
    name: "Sudwip Goswami",
    role: "MS Office Expert & Instructor",
    experience: "Senior Mentor",
    bio: "MS Office বিশেষজ্ঞ ও সিনিয়র মেন্টর। শিক্ষার্থীদের দক্ষতা উন্নয়নে নিবেদিত।",
    gender: "male",
  },
  {
    id: "5",
    name: "Tithi Rani",
    role: "SEO Expert & Social Media Marketer",
    experience: "Former Mentor: Creative IT | Diploma In Digital Marketing",
    bio: "ডিজিটাল মার্কেটিং বিশেষজ্ঞ। SEO ও সোশ্যাল মিডিয়া মার্কেটিং এ দক্ষ। Creative IT এর সাবেক মেন্টর।",
    gender: "female",
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
    question: "কোর্স ফি কত এবং কিভাবে পরিশোধ করা যাবে?",
    answer: "কোর্স ফি ৩,০০০ টাকা। এটি ২টি ধাপে (Installment) পরিশোধ করা যাবে - ১ম ধাপ ১,৫০০ টাকা এবং ২য় ধাপ ১,৫০০ টাকা। এছাড়া ভর্তি ফি ১,৫০০ টাকা এবং সরকারি রেজিস্ট্রেশন ফি ২,০০০ টাকা।",
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
    answer: "ডিসকাউন্ট সম্পর্কে জানতে সরাসরি আমাদের সাথে কথা বলুন। যোগাযোগ: +880 1932-583396 (Apu Roy)।",
  },
  {
    question: "ব্যাচ কখন শুরু হয়?",
    answer: "প্রতি মাসে নতুন ব্যাচ শুরু হয়। নির্দিষ্ট তারিখ জানতে আমাদের সাথে যোগাযোগ করুন।",
  },
];
