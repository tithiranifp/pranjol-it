export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  fee: number;
  icon: string;
  image: string;
  features: string[];
  modules: CourseModule[];
  upcoming?: boolean;
}

export const courses: Course[] = [
  {
    id: "ms-office",
    title: "MS Office Program",
    description: "Microsoft Word, Excel, PowerPoint ও ICT দক্ষতা অর্জন করুন।",
    duration: "৬ মাস",
    fee: 3500,
    icon: "💻",
    image: "/images/courses/ms-office.jpg",
    features: ["Government Certificate", "MS Word, Excel & PowerPoint", "ICT Fundamentals", "Typing Speed"],
    modules: [
      { title: "মডিউল ১: Computer Basics", topics: ["কম্পিউটার পরিচিতি", "Windows OS", "File Management", "Software Installation"] },
      { title: "মডিউল ২: Microsoft Word", topics: ["Document Formatting", "Tables & Mail Merge", "Headers & Footers", "Print Setup"] },
      { title: "মডিউল ৩: Microsoft Excel", topics: ["Cell Formatting", "Formulas & Functions", "Charts & Pivot Table", "Data Analysis"] },
      { title: "মডিউল ৪: Microsoft PowerPoint", topics: ["Slide Design", "Animation & Transition", "Multimedia", "Presentation Skills"] },
      { title: "মডিউল ৫: ICT & Internet", topics: ["Internet Browsing", "Email & Cloud", "Online Safety", "ICT Theory"] },
      { title: "মডিউল ৬: Typing & Exam Prep", topics: ["বাংলা টাইপিং (বিজয়/অভ্র)", "English Typing", "Speed Building", "BTEB Exam Prep"] },
    ],
  },
  {
    id: "zero-to-hero",
    title: "ZERO to Hero কোর্স",
    description: "কম্পিউটারের বেসিক থেকে শুরু করে অ্যাডভান্সড লেভেল পর্যন্ত সম্পূর্ণ প্রশিক্ষণ। একটি কোর্সেই সব শিখুন।",
    duration: "৮ মাস",
    fee: 9000,
    icon: "🚀",
    image: "/images/courses/zero-to-hero.jpg",
    features: ["Computer Basics to Advanced", "MS Office Complete", "Internet & Email", "Graphics Design Basics", "Typing Master", "Govt. Certificate"],
    modules: [
      { title: "মডিউল ১: কম্পিউটার বেসিক", topics: ["কম্পিউটার পরিচিতি", "Operating System (Windows)", "File & Folder Management", "Software Installation"] },
      { title: "মডিউল ২: MS Word", topics: ["Document Creation & Formatting", "Tables, Headers & Footers", "Mail Merge", "Resume & Report তৈরি"] },
      { title: "মডিউল ৩: MS Excel", topics: ["Spreadsheet Basics", "Formulas & Functions", "Charts & Graphs", "Data Sorting & Filtering"] },
      { title: "মডিউল ৪: MS PowerPoint", topics: ["Presentation তৈরি", "Slide Design & Animation", "Multimedia যোগ করা", "Professional Presentation"] },
      { title: "মডিউল ৫: Internet & Email", topics: ["Web Browsing", "Email (Gmail/Outlook)", "Google Drive & Docs", "Online Safety"] },
      { title: "মডিউল ৬: Graphics Basics", topics: ["Canva দিয়ে ডিজাইন", "Photo Editing Basics", "Social Media Post Design", "Banner & Poster তৈরি"] },
      { title: "মডিউল ৭: Typing & ICT", topics: ["বাংলা ও ইংরেজি টাইপিং", "Typing Speed বৃদ্ধি", "ICT Fundamentals", "Practical Exam Preparation"] },
      { title: "মডিউল ৮: Final Project & Exam", topics: ["Mock Test & Practice", "BTEB Exam Preparation", "Certificate Collection", "Career Guidance"] },
    ],
  },
  {
    id: "web-design",
    title: "ওয়েব ডিজাইন ও ডেভেলপমেন্ট",
    description: "HTML, CSS, JavaScript, React সহ সম্পূর্ণ ওয়েব ডেভেলপমেন্ট শিখুন এবং ফ্রিল্যান্সিং শুরু করুন।",
    duration: "৬ মাস",
    fee: 20000,
    icon: "🌐",
    image: "/images/courses/web-design.jpg",
    features: ["HTML5 & CSS3", "JavaScript & React", "Responsive Design", "Live Project"],
    modules: [
      { title: "মডিউল ১: HTML5 Fundamentals", topics: ["HTML Structure & Tags", "Forms & Input Elements", "Semantic HTML", "Media Elements"] },
      { title: "মডিউল ২: CSS3 & Responsive Design", topics: ["CSS Selectors & Properties", "Flexbox & Grid Layout", "Media Queries", "CSS Animation"] },
      { title: "মডিউল ৩: JavaScript Basics", topics: ["Variables & Data Types", "Functions & Events", "DOM Manipulation", "ES6+ Features"] },
      { title: "মডিউল ৪: React.js", topics: ["Components & Props", "State Management", "Hooks & Effects", "Routing"] },
      { title: "মডিউল ৫: Live Project & Portfolio", topics: ["Real Client Project", "Portfolio Website তৈরি", "GitHub & Deployment", "Code Review"] },
      { title: "মডিউল ৬: Freelancing Setup", topics: ["Fiverr/Upwork Profile", "Client Communication", "Pricing & Proposals", "Payment Setup"] },
    ],
  },
  {
    id: "web-design-ai",
    title: "Web Design with AI কোর্স",
    description: "আর্টিফিশিয়াল ইন্টেলিজেন্স টুলস ব্যবহার করে আধুনিক ও প্রফেশনাল ওয়েবসাইট ডিজাইন শিখুন।",
    duration: "৪ মাস",
    fee: 12500,
    icon: "🤖",
    image: "/images/courses/web-design-ai.jpg",
    features: ["AI Website Builders", "WordPress with AI", "ChatGPT for Coding", "Responsive Design"],
    modules: [
      { title: "মডিউল ১: AI Tools পরিচিতি", topics: ["ChatGPT, Gemini & Claude", "AI Image Generation", "AI Writing Tools", "AI Workflow Setup"] },
      { title: "মডিউল ২: WordPress with AI", topics: ["WordPress Installation", "Theme Customization", "AI Content Generation", "Plugin Management"] },
      { title: "মডিউল ৩: AI Website Builders", topics: ["Wix AI Builder", "Framer & Webflow", "AI Landing Pages", "No-Code Tools"] },
      { title: "মডিউল ৪: Advanced AI Design", topics: ["AI-Powered SEO", "Chatbot Integration", "E-commerce with AI", "Portfolio & Deployment"] },
    ],
  },
  {
    id: "web-hosting",
    title: "Web Hosting Business কোর্স",
    description: "ওয়েব হোস্টিং ব্যবসা শুরু করুন। cPanel, WHM, Domain Management এবং Reseller Hosting শিখুন।",
    duration: "৩ মাস",
    fee: 15000,
    icon: "🖥️",
    image: "/images/courses/web-hosting.jpg",
    features: ["cPanel & WHM", "Domain Management", "Reseller Hosting", "Business Setup"],
    modules: [
      { title: "মডিউল ১: Hosting Basics", topics: ["Hosting কী ও কেন প্রয়োজন", "Shared, VPS, Dedicated Hosting", "Domain Registration", "DNS Management"] },
      { title: "মডিউল ২: cPanel Management", topics: ["cPanel Dashboard", "Email Account তৈরি", "File Manager", "Database Management"] },
      { title: "মডিউল ৩: WHM & Reseller", topics: ["WHM (Web Host Manager)", "Reseller Account Setup", "Client Management", "WHMCS Billing"] },
      { title: "মডিউল ৪: Business Setup", topics: ["Hosting Business Plan", "Pricing Strategy", "Marketing & Sales", "Support & Maintenance"] },
    ],
  },
  {
    id: "digital-marketing",
    title: "ডিজিটাল মার্কেটিং",
    description: "SEO, SEM, সোশ্যাল মিডিয়া মার্কেটিং ও কন্টেন্ট মার্কেটিং শিখুন।",
    duration: "৩ মাস",
    fee: 25000,
    icon: "📈",
    image: "/images/courses/digital-marketing.jpg",
    features: ["SEO & SEM", "Facebook Marketing", "Google Ads", "Content Strategy"],
    modules: [
      { title: "মডিউল ১: SEO Fundamentals", topics: ["On-Page SEO", "Off-Page SEO", "Keyword Research", "Technical SEO"] },
      { title: "মডিউল ২: Social Media Marketing", topics: ["Facebook Page & Group Marketing", "Instagram & YouTube Strategy", "Content Calendar", "Community Management"] },
      { title: "মডিউল ৩: Google Ads & SEM", topics: ["Google Ads Setup", "Campaign Management", "Bidding Strategies", "Performance Tracking"] },
      { title: "মডিউল ৪: Content & Analytics", topics: ["Content Writing", "Email Marketing", "Google Analytics", "ROI Measurement"] },
    ],
  },
  {
    id: "landing-page",
    title: "Landing Page Design কোর্স (Ecommerce)",
    description: "প্রফেশনাল ল্যান্ডিং পেজ ও ই-কমার্স ওয়েবসাইট ডিজাইন শিখুন। প্রোডাক্ট সেল বাড়ান।",
    duration: "২ মাস",
    fee: 6000,
    icon: "🛒",
    image: "/images/courses/landing-page.jpg",
    features: ["Landing Page Design", "E-commerce Setup", "Shopify/WooCommerce", "Conversion Optimization"],
    modules: [
      { title: "মডিউল ১: Landing Page Basics", topics: ["Landing Page কী", "Design Principles", "Copywriting Basics", "Call to Action"] },
      { title: "মডিউল ২: Design Tools", topics: ["WordPress + Elementor", "Canva for Landing Pages", "Image & Video Editing", "A/B Testing"] },
      { title: "মডিউল ৩: E-commerce Setup", topics: ["WooCommerce Setup", "Product Listing", "Payment Gateway", "Shipping Setup"] },
      { title: "মডিউল ৪: Launch & Optimize", topics: ["SEO for Landing Pages", "Facebook Pixel", "Google Analytics", "Conversion Tracking"] },
    ],
  },
  {
    id: "hardware-repairing",
    title: "Hardware & Repairing কোর্স",
    description: "কম্পিউটার হার্ডওয়্যার, নেটওয়ার্কিং ও ট্রাবলশুটিং শিখুন। মেরামত ব্যবসা শুরু করুন।",
    duration: "৩ মাস",
    fee: 5000,
    icon: "🔧",
    image: "/images/courses/hardware-repairing.jpg",
    features: ["PC Assembly", "Troubleshooting", "Networking", "Printer & Peripheral"],
    modules: [
      { title: "মডিউল ১: Hardware Basics", topics: ["কম্পিউটার কম্পোনেন্ট পরিচিতি", "Motherboard, RAM, CPU", "HDD/SSD, Power Supply", "Cabinet & Cooling"] },
      { title: "মডিউল ২: PC Assembly & OS", topics: ["PC Assembling Step by Step", "BIOS Configuration", "Windows Installation", "Driver Installation"] },
      { title: "মডিউল ৩: Troubleshooting", topics: ["Common Hardware Issues", "Software Troubleshooting", "Blue Screen & Boot Issues", "Data Recovery Basics"] },
      { title: "মডিউল ৪: Networking & Peripherals", topics: ["LAN/WAN Setup", "Router Configuration", "Printer Setup & Repair", "CCTV Installation Basics"] },
    ],
  },
  {
    id: "excel-special",
    title: "Microsoft Excel Special কোর্স",
    description: "মাত্র ২ সপ্তাহে Microsoft Excel এ এক্সপার্ট হোন। Advanced Formulas, Pivot Table, Dashboard তৈরি শিখুন।",
    duration: "২ সপ্তাহ",
    fee: 3500,
    icon: "📊",
    image: "/images/courses/excel-special.jpg",
    features: ["Advanced Formulas", "Pivot Tables", "Dashboard Creation", "Data Visualization"],
    modules: [
      { title: "সপ্তাহ ১: Excel Mastery", topics: ["Advanced Formulas (VLOOKUP, IF, INDEX-MATCH)", "Conditional Formatting", "Data Validation", "Named Ranges & Tables"] },
      { title: "সপ্তাহ ২: Analytics & Dashboard", topics: ["Pivot Tables & Charts", "Dashboard তৈরি", "Power Query Basics", "Real-World Projects"] },
    ],
  },
  {
    id: "graphic-design",
    title: "গ্রাফিক ডিজাইন",
    description: "Adobe Photoshop, Illustrator, Canva দিয়ে প্রফেশনাল গ্রাফিক ডিজাইন শিখুন।",
    duration: "৪ মাস",
    fee: 0,
    icon: "🎨",
    image: "",
    features: ["Adobe Photoshop", "Adobe Illustrator", "Logo Design", "Social Media Design"],
    modules: [],
    upcoming: true,
  },
  {
    id: "freelancing",
    title: "ফ্রিল্যান্সিং",
    description: "Upwork, Fiverr ও অন্যান্য মার্কেটপ্লেসে কাজ করার কৌশল শিখুন।",
    duration: "২ মাস",
    fee: 0,
    icon: "💰",
    image: "",
    features: ["Profile Setup", "Client Communication", "Project Management", "Payment Setup"],
    modules: [],
    upcoming: true,
  },
  {
    id: "video-editing",
    title: "ভিডিও এডিটিং",
    description: "Adobe Premiere Pro ও After Effects দিয়ে প্রফেশনাল ভিডিও এডিটিং শিখুন।",
    duration: "৪ মাস",
    fee: 0,
    icon: "🎬",
    image: "",
    features: ["Premiere Pro", "After Effects", "Color Grading", "YouTube Content"],
    modules: [],
    upcoming: true,
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
    answer: "হ্যাঁ, কোর্স সম্পন্ন করার পর সরকার অনুমোদিত সার্টিফিকেট প্রদান করা হয়। আমরা ৬ মাস মেয়াদি 'কম্পিউটার অফিস প্রোগ্রাম' কোর্সের সার্টিফিকেট দিয়ে থাকি। এই সার্টিফিকেট বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) কর্তৃক অনুমোদিত এবং সরকারি রেজিস্ট্রেশনভুক্ত। এই সার্টিফিকেট দিয়ে বাংলাদেশের সকল সরকারি ও বেসরকারি চাকরিতে আবেদন করা যায়।",
  },
  {
    question: "আমি কি ইনস্ট্যান্ট সার্টিফিকেট পাবো? আমার জরুরি ভাইভা পরীক্ষা আছে।",
    answer: "হ্যাঁ, আমরা আপনার দক্ষতা যাচাই করে এবং আমাদের আর্জেন্ট কোর্স সম্পন্ন করলে তাৎক্ষণিক (Immediate) সার্টিফিকেট প্রদান করি। এটি সরকারি রেজিস্ট্রেশনভুক্ত ৬ মাস মেয়াদি কম্পিউটার অফিস প্রোগ্রাম কোর্সের সার্টিফিকেট, যা দিয়ে আপনি বাংলাদেশের সকল সরকারি ও বেসরকারি চাকরিতে যোগদান করতে পারবেন। জরুরি প্রয়োজনে আমাদের সাথে সরাসরি যোগাযোগ করুন: +880 1932583396 (Apu Roy)।",
  },
  {
    question: "ডিসকাউন্ট কি পাওয়া যায়?",
    answer: "ডিসকাউন্ট সম্পর্কে জানতে সরাসরি আমাদের সাথে কথা বলুন। যোগাযোগ: +880 1932583396 (Apu Roy)।",
  },
  {
    question: "ব্যাচ কখন শুরু হয়?",
    answer: "প্রতি মাসে নতুন ব্যাচ শুরু হয়। নির্দিষ্ট তারিখ জানতে আমাদের সাথে যোগাযোগ করুন।",
  },
];
