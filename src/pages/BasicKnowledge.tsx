import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  FileText, Table2, Presentation, Monitor, HardDrive, Cpu, History, Users,
  Building2, Cloud, Brain, Rocket, Keyboard, Mouse, Wifi, Database, Globe, Server
} from "lucide-react";

const categories = [
  {
    id: "word",
    label: "MS Word",
    icon: FileText,
    sections: [
      {
        title: "MS Word কী?",
        content: `Microsoft Word হলো মাইক্রোসফট কর্পোরেশনের তৈরি একটি ওয়ার্ড প্রসেসিং সফটওয়্যার। এটি দিয়ে চিঠি, দরখাস্ত, প্রতিবেদন, বই, জীবনবৃত্তান্ত (CV/Resume), প্রবন্ধ, নোটিশ ইত্যাদি তৈরি, সম্পাদনা ও প্রিন্ট করা যায়। ১৯৮৩ সালে প্রথম রিলিজ হয়। বর্তমানে Microsoft 365-এর অংশ হিসেবে পাওয়া যায়।`
      },
      {
        title: "Word-এর প্রধান ফিচার",
        content: `• টেক্সট ফরম্যাটিং: Bold, Italic, Underline, Font Size, Color পরিবর্তন
• প্যারাগ্রাফ সেটিংস: Alignment (Left, Center, Right, Justify), Line Spacing, Indentation
• টেবিল তৈরি: Row ও Column দিয়ে ডেটা সাজানো
• ছবি ও শেপ যোগ: Insert মেনু থেকে Picture, Shape, Chart যোগ করা
• হেডার ও ফুটার: পৃষ্ঠার উপরে-নিচে তথ্য যোগ (পেজ নম্বর, তারিখ)
• পেজ লেআউট: Margin, Orientation (Portrait/Landscape), Page Size সেট করা
• স্পেল চেক: বানান ও ব্যাকরণ ভুল ধরা
• মেইল মার্জ: একই চিঠি অনেকের কাছে আলাদা নাম-ঠিকানা দিয়ে পাঠানো
• Track Changes: কে কী পরিবর্তন করেছে তা দেখা ও Review করা
• PDF Export: সরাসরি PDF ফরম্যাটে সেভ করা যায়`
      },
      {
        title: "Word কোথায় ব্যবহার হয়?",
        content: `• অফিসে: চিঠিপত্র, মেমো, রিপোর্ট তৈরি
• শিক্ষাক্ষেত্রে: অ্যাসাইনমেন্ট, থিসিস, প্রবন্ধ লেখা
• ব্যক্তিগত: জীবনবৃত্তান্ত (CV), কভার লেটার তৈরি
• ব্যবসায়: Invoice, Quotation, Agreement তৈরি
• সরকারি: নোটিশ, বিজ্ঞপ্তি, দরখাস্ত তৈরি`
      },
      {
        title: "Word ফাইল ফরম্যাট",
        content: `• .docx — Word এর আধুনিক ফরম্যাট (2007+)
• .doc — পুরানো ফরম্যাট (97-2003)
• .pdf — Portable Document Format (শুধু দেখা যায়, সম্পাদনা কঠিন)
• .rtf — Rich Text Format (বিভিন্ন সফটওয়্যারে খোলা যায়)
• .txt — শুধু টেক্সট, কোনো ফরম্যাটিং নেই`
      }
    ]
  },
  {
    id: "excel",
    label: "MS Excel",
    icon: Table2,
    sections: [
      {
        title: "MS Excel কী?",
        content: `Microsoft Excel হলো একটি স্প্রেডশিট সফটওয়্যার। এখানে Row ও Column-এর ঘরে (Cell) ডেটা রাখা হয়। হিসাব-নিকাশ, ডেটা বিশ্লেষণ, চার্ট তৈরি, বাজেট তৈরি ইত্যাদি কাজে এটি সবচেয়ে বেশি ব্যবহৃত। ১৯৮৫ সালে প্রথম Mac-এর জন্য এবং ১৯৮৭ সালে Windows-এর জন্য রিলিজ হয়।`
      },
      {
        title: "Excel-এর গুরুত্বপূর্ণ ধারণা",
        content: `• Cell: Row ও Column এর ছেদবিন্দু (যেমন A1, B2)
• Workbook: একটি Excel ফাইল যার মধ্যে একাধিক Sheet থাকে
• Worksheet/Sheet: একটি Workbook-এ একাধিক Sheet থাকতে পারে
• Formula: গণনার জন্য সূত্র (= চিহ্ন দিয়ে শুরু)
• Function: পূর্ব-নির্ধারিত সূত্র (SUM, AVERAGE, IF, VLOOKUP ইত্যাদি)
• Range: একাধিক Cell-এর সমষ্টি (যেমন A1:A10)
• Absolute Reference ($A$1): কপি করলেও Cell Address পরিবর্তন হয় না
• Relative Reference (A1): কপি করলে Cell Address স্বয়ংক্রিয় পরিবর্তন হয়`
      },
      {
        title: "বহুল ব্যবহৃত ফাংশন",
        content: `• SUM(A1:A10) — যোগ করা
• AVERAGE(A1:A10) — গড় বের করা
• MAX / MIN — সর্বোচ্চ / সর্বনিম্ন মান
• COUNT — সংখ্যা গণনা
• IF(condition, true, false) — শর্ত অনুযায়ী ফলাফল
• VLOOKUP — উল্লম্ব অনুসন্ধান
• CONCATENATE / TEXTJOIN — টেক্সট জোড়া
• TODAY() — আজকের তারিখ
• LEN() — অক্ষর সংখ্যা গণনা
• TRIM() — অতিরিক্ত স্পেস মুছে ফেলা`
      },
      {
        title: "Excel কোথায় ব্যবহার হয়?",
        content: `• অ্যাকাউন্টিং ও ফাইনান্স: বাজেট, ব্যালেন্স শিট, P&L
• HR বিভাগ: কর্মচারী তথ্য, বেতন শিট, উপস্থিতি
• বিক্রয় ও মার্কেটিং: সেলস রিপোর্ট, ক্লায়েন্ট তালিকা
• শিক্ষা: ফলাফল প্রণয়ন, ডেটা অ্যানালাইসিস প্রজেক্ট
• প্রজেক্ট ম্যানেজমেন্ট: Gantt Chart, Task Tracking
• ডেটা সায়েন্স: প্রাথমিক ডেটা ক্লিনিং ও ভিজুয়ালাইজেশন`
      }
    ]
  },
  {
    id: "powerpoint",
    label: "PowerPoint",
    icon: Presentation,
    sections: [
      {
        title: "MS PowerPoint কী?",
        content: `Microsoft PowerPoint হলো প্রেজেন্টেশন তৈরির সফটওয়্যার। স্লাইড-ভিত্তিক এই টুল দিয়ে টেক্সট, ছবি, ভিডিও, চার্ট, অ্যানিমেশন ইত্যাদি দিয়ে আকর্ষণীয় উপস্থাপনা তৈরি করা যায়। ক্লাসরুম, অফিস মিটিং, সেমিনার, কনফারেন্স — সব জায়গায় PowerPoint ব্যাপকভাবে ব্যবহৃত হয়।`
      },
      {
        title: "PowerPoint-এর প্রধান ফিচার",
        content: `• স্লাইড ডিজাইন: থিম ও টেমপ্লেট ব্যবহার করে দ্রুত সুন্দর স্লাইড তৈরি
• Transition: এক স্লাইড থেকে আরেক স্লাইডে যাওয়ার ইফেক্ট
• Animation: টেক্সট বা ছবিতে গতিশীল ইফেক্ট (Entrance, Exit, Emphasis)
• SmartArt: ডায়াগ্রাম, ফ্লোচার্ট, সাংগঠনিক কাঠামো তৈরি
• স্লাইড মাস্টার: সব স্লাইডের জন্য একই ডিজাইন ফরম্যাট সেট
• স্পিকার নোটস: উপস্থাপনার সময় নিজের জন্য নোট রাখা
• ভিডিও ও অডিও: মাল্টিমিডিয়া যোগ করা
• স্ক্রিন রেকর্ডিং: সরাসরি স্ক্রিন রেকর্ড করে স্লাইডে যোগ
• এক্সপোর্ট: PDF, Video (MP4), Image হিসেবে সেভ করা যায়`
      },
      {
        title: "ভালো প্রেজেন্টেশনের টিপস",
        content: `• একটি স্লাইডে বেশি টেক্সট দেবেন না — মূল পয়েন্ট রাখুন
• ছবি ও গ্রাফিক্স ব্যবহার করুন — দর্শকের মনোযোগ ধরে রাখে
• ফন্ট সাইজ বড় রাখুন (২৪+ পয়েন্ট) — পেছনের সারি থেকেও পড়া যায়
• কনট্রাস্ট রং ব্যবহার করুন — পড়তে সুবিধা হয়
• অ্যানিমেশন অতিরিক্ত ব্যবহার করবেন না — বিরক্তিকর লাগতে পারে
• ১০-২০-৩০ নিয়ম: সর্বোচ্চ ১০ স্লাইড, ২০ মিনিট, ৩০ পয়েন্ট ফন্ট`
      }
    ]
  },
  {
    id: "hardware",
    label: "হার্ডওয়্যার",
    icon: HardDrive,
    sections: [
      {
        title: "কম্পিউটার হার্ডওয়্যার কী?",
        content: `কম্পিউটারের যে সকল অংশ স্পর্শ করা যায় ও চোখে দেখা যায়, সেগুলোকে হার্ডওয়্যার বলে। হার্ডওয়্যার ছাড়া কম্পিউটার চলে না — এটি কম্পিউটারের শারীরিক অবকাঠামো।`
      },
      {
        title: "ইনপুট ডিভাইস (Input Devices)",
        content: `ইনপুট ডিভাইসের মাধ্যমে আমরা কম্পিউটারে তথ্য ও নির্দেশ দিই:
• কীবোর্ড (Keyboard): টেক্সট টাইপ করা, শর্টকাট ব্যবহার
• মাউস (Mouse): পয়েন্ট, ক্লিক, ড্র্যাগ করা
• স্ক্যানার (Scanner): কাগজের ডকুমেন্ট ডিজিটাল করা
• মাইক্রোফোন (Microphone): শব্দ রেকর্ড করা, ভয়েস কমান্ড দেওয়া
• ওয়েবক্যাম (Webcam): ভিডিও ক্যাপচার করা
• টাচস্ক্রিন: সরাসরি স্ক্রিনে স্পর্শ করে নির্দেশ দেওয়া
• জয়স্টিক / গেমপ্যাড: গেম খেলার জন্য`
      },
      {
        title: "আউটপুট ডিভাইস (Output Devices)",
        content: `আউটপুট ডিভাইসের মাধ্যমে কম্পিউটার আমাদের ফলাফল দেখায়:
• মনিটর (Monitor): ভিজুয়াল আউটপুট দেখায় (LCD, LED, OLED)
• প্রিন্টার (Printer): কাগজে প্রিন্ট করা (Inkjet, Laser, Dot Matrix)
• স্পিকার (Speaker): শব্দ আউটপুট দেয়
• প্রজেক্টর (Projector): বড় পর্দায় প্রদর্শন
• হেডফোন: ব্যক্তিগত অডিও আউটপুট`
      },
      {
        title: "প্রসেসিং ও স্টোরেজ ডিভাইস",
        content: `• CPU (Central Processing Unit): কম্পিউটারের মস্তিষ্ক — সব গণনা ও প্রসেসিং করে
• RAM (Random Access Memory): অস্থায়ী মেমরি — চলমান প্রোগ্রামের ডেটা রাখে (4GB, 8GB, 16GB, 32GB)
• Hard Disk Drive (HDD): স্থায়ী ডেটা সংরক্ষণ — চুম্বকীয় প্রযুক্তি, বেশি ধারণক্ষমতা, তুলনামূলক ধীর
• Solid State Drive (SSD): আধুনিক স্টোরেজ — ফ্ল্যাশ মেমরি, দ্রুত গতি, টেকসই
• NVMe SSD: সবচেয়ে দ্রুত SSD প্রযুক্তি
• GPU (Graphics Processing Unit): গ্রাফিক্স প্রসেসিং — গেমিং ও ভিডিও এডিটিংয়ে অপরিহার্য
• Motherboard: সব যন্ত্রাংশ সংযুক্ত করার প্রধান বোর্ড
• Power Supply Unit (PSU): বিদ্যুৎ সরবরাহ
• Cooling System: ফ্যান ও হিটসিংক — তাপমাত্রা নিয়ন্ত্রণ`
      }
    ]
  },
  {
    id: "software",
    label: "সফটওয়্যার",
    icon: Monitor,
    sections: [
      {
        title: "সফটওয়্যার কী?",
        content: `সফটওয়্যার হলো কম্পিউটারের অদৃশ্য অংশ — নির্দেশনার সমষ্টি যা হার্ডওয়্যারকে কাজ করতে বলে। সফটওয়্যার ছাড়া হার্ডওয়্যার শুধু লোহালক্কড়!`
      },
      {
        title: "সফটওয়্যারের প্রকারভেদ",
        content: `১. সিস্টেম সফটওয়্যার:
  • Operating System (OS): Windows, macOS, Linux, Android, iOS
  • Device Driver: হার্ডওয়্যার চালানোর জন্য সফটওয়্যার
  • Firmware: যন্ত্রের ভেতরে থাকা নির্দেশনা (BIOS/UEFI)

২. অ্যাপ্লিকেশন সফটওয়্যার:
  • অফিস সফটওয়্যার: MS Office, Google Docs, LibreOffice
  • ব্রাউজার: Chrome, Firefox, Edge, Safari
  • মিডিয়া প্লেয়ার: VLC, Windows Media Player
  • ডিজাইন: Adobe Photoshop, Illustrator, Canva, Figma
  • ভিডিও এডিটিং: Adobe Premiere Pro, DaVinci Resolve
  • অ্যান্টিভাইরাস: Kaspersky, Norton, Bitdefender

৩. প্রোগ্রামিং সফটওয়্যার:
  • কোড এডিটর: VS Code, Sublime Text
  • কম্পাইলার ও ইন্টারপ্রেটার: GCC, Python Interpreter
  • IDE: Visual Studio, IntelliJ IDEA, Android Studio`
      },
      {
        title: "অপারেটিং সিস্টেম (OS) বিস্তারিত",
        content: `অপারেটিং সিস্টেম হলো কম্পিউটারের মূল সফটওয়্যার যা হার্ডওয়্যার ও ব্যবহারকারীর মধ্যে সেতুবন্ধন করে।

• Windows: সবচেয়ে বেশি ব্যবহৃত ডেস্কটপ OS (Microsoft)
  - Windows 95 → XP → 7 → 10 → 11
• macOS: Apple-এর কম্পিউটারে চলে — ডিজাইন ও ক্রিয়েটিভ কাজে জনপ্রিয়
• Linux: ওপেন-সোর্স, ফ্রি — সার্ভার ও প্রোগ্রামারদের পছন্দ
  - Ubuntu, Fedora, Debian, CentOS
• Android: মোবাইল OS — Google-এর তৈরি, Linux ভিত্তিক
• iOS: Apple iPhone/iPad-এর OS`
      },
      {
        title: "ওপেন সোর্স বনাম প্রোপ্রাইটারি",
        content: `• ওপেন সোর্স: সোর্স কোড সবার জন্য উন্মুক্ত। যে কেউ দেখতে, পরিবর্তন ও বিতরণ করতে পারে। যেমন: Linux, Firefox, LibreOffice, VLC, WordPress
• প্রোপ্রাইটারি: সোর্স কোড বন্ধ। শুধু কোম্পানি পরিবর্তন করতে পারে। যেমন: Windows, macOS, MS Office, Adobe Photoshop
• ফ্রিওয়্যার: বিনামূল্যে ব্যবহার করা যায় কিন্তু সোর্স কোড বন্ধ। যেমন: Skype, Zoom`
      }
    ]
  },
  {
    id: "history",
    label: "ইতিহাস",
    icon: History,
    sections: [
      {
        title: "কম্পিউটারের ইতিহাস",
        content: `কম্পিউটারের বিকাশ হাজার বছর ধরে ঘটেছে:

• অ্যাবাকাস (Abacus) — প্রায় ৩০০০ খ্রিস্টপূর্ব: প্রাচীনতম গণনা যন্ত্র, চীন ও মেসোপটেমিয়ায় ব্যবহৃত
• প্যাসকেলাইন (Pascaline) — ১৬৪২: ব্লেইজ প্যাসকেল তৈরি করেন, যোগ-বিয়োগ করতে পারত
• ডিফারেন্স ইঞ্জিন — ১৮২২: চার্লস ব্যাবেজ ডিজাইন করেন — "কম্পিউটারের জনক" বলা হয়
• অ্যানালিটিক্যাল ইঞ্জিন — ১৮৩৭: ব্যাবেজের উন্নত ডিজাইন, এডা লাভলেস প্রথম প্রোগ্রাম লেখেন — "প্রথম প্রোগ্রামার"
• ENIAC — ১৯৪৫: প্রথম ইলেকট্রনিক কম্পিউটার, ১৮০০০ ভ্যাকুয়াম টিউব ব্যবহৃত
• UNIVAC — ১৯৫১: প্রথম বাণিজ্যিক কম্পিউটার
• IBM PC — ১৯৮১: পার্সোনাল কম্পিউটারের যুগ শুরু`
      },
      {
        title: "কম্পিউটারের প্রজন্ম (Generations)",
        content: `১ম প্রজন্ম (১৯৪০-১৯৫৬): ভ্যাকুয়াম টিউব
  • বিশাল আকার, প্রচুর বিদ্যুৎ খরচ, অত্যন্ত ধীর
  • উদাহরণ: ENIAC, UNIVAC

২য় প্রজন্ম (১৯৫৬-১৯৬৩): ট্রানজিস্টর
  • আকার ছোট, দ্রুত, কম বিদ্যুৎ
  • প্রোগ্রামিং ভাষা: FORTRAN, COBOL

৩য় প্রজন্ম (১৯৬৪-১৯৭১): ইন্টিগ্রেটেড সার্কিট (IC)
  • আরও ছোট ও দ্রুত, মাল্টিপ্রোগ্রামিং সম্ভব
  • উদাহরণ: IBM 360

৪র্থ প্রজন্ম (১৯৭১-বর্তমান): মাইক্রোপ্রসেসর
  • একটি চিপে পুরো CPU — পার্সোনাল কম্পিউটারের জন্ম
  • Intel 4004 (১৯৭১) — প্রথম মাইক্রোপ্রসেসর

৫ম প্রজন্ম (বর্তমান ও ভবিষ্যৎ): কৃত্রিম বুদ্ধিমত্তা (AI)
  • মেশিন লার্নিং, ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং
  • কোয়ান্টাম কম্পিউটিং — ভবিষ্যতের প্রযুক্তি`
      }
    ]
  },
  {
    id: "contributors",
    label: "অবদানকারী",
    icon: Users,
    sections: [
      {
        title: "কম্পিউটার বিজ্ঞানে যাদের অবদান",
        content: `• চার্লস ব্যাবেজ (Charles Babbage): "কম্পিউটারের জনক" — অ্যানালিটিক্যাল ইঞ্জিনের ডিজাইনার
• এডা লাভলেস (Ada Lovelace): বিশ্বের প্রথম প্রোগ্রামার — অ্যানালিটিক্যাল ইঞ্জিনের জন্য প্রথম অ্যালগরিদম লেখেন
• অ্যালান টুরিং (Alan Turing): "আধুনিক কম্পিউটার বিজ্ঞানের জনক" — টুরিং মেশিন ধারণা, দ্বিতীয় বিশ্বযুদ্ধে এনিগমা কোড ভাঙেন
• জন ভন নিউম্যান (John von Neumann): কম্পিউটারের আর্কিটেকচার ডিজাইন (ভন নিউম্যান আর্কিটেকচার)
• গ্রেস হপার (Grace Hopper): প্রথম কম্পাইলার তৈরি করেন, "Bug" শব্দটি জনপ্রিয় করেন
• ডেনিস রিচি (Dennis Ritchie): C প্রোগ্রামিং ভাষার স্রষ্টা, UNIX-এর সহ-নির্মাতা
• লিনাস টোরভাল্ডস (Linus Torvalds): Linux অপারেটিং সিস্টেমের স্রষ্টা
• টিম বার্নার্স-লি (Tim Berners-Lee): ওয়ার্ল্ড ওয়াইড ওয়েব (WWW) আবিষ্কারক`
      },
      {
        title: "বাংলাদেশে কম্পিউটার বিজ্ঞানে অবদান",
        content: `• ড. মোহাম্মদ হানিফউদ্দিন মিয়া: বাংলাদেশে কম্পিউটারের জনক — ১৯৬৪ সালে প্রথম কম্পিউটার আনেন (IBM 1620)
• মোস্তাফা জব্বার: বাংলা কিবোর্ড "বিজয়" এর স্রষ্টা — বাংলায় কম্পিউটার ব্যবহার সহজ করেন
• বাংলাদেশ সরকার: "ডিজিটাল বাংলাদেশ" ভিশন ২০২১ — আইসিটি খাতে ব্যাপক উন্নয়ন`
      }
    ]
  },
  {
    id: "companies",
    label: "বড় কোম্পানি",
    icon: Building2,
    sections: [
      {
        title: "Intel — প্রসেসরের রাজা",
        content: `• প্রতিষ্ঠা: ১৯৬৮, সান্তা ক্লারা, ক্যালিফোর্নিয়া
• প্রতিষ্ঠাতা: রবার্ট নয়েস ও গর্ডন মুর
• বিখ্যাত কেন: বিশ্বের সবচেয়ে বড় সেমিকন্ডাক্টর চিপ প্রস্তুতকারক
• প্রধান পণ্য: Pentium, Core i3/i5/i7/i9, Xeon প্রসেসর
• Moore's Law: গর্ডন মুর ভবিষ্যদ্বাণী করেন — প্রতি ২ বছরে ট্রানজিস্টরের সংখ্যা দ্বিগুণ হবে
• প্রতিদ্বন্দ্বী: AMD (Advanced Micro Devices)
• বর্তমান: AI চিপ ও ফাউন্ড্রি ব্যবসায় মনোযোগী`
      },
      {
        title: "Microsoft — সফটওয়্যারের দৈত্য",
        content: `• প্রতিষ্ঠা: ১৯৭৫, বিল গেটস ও পল অ্যালেন
• বিখ্যাত কেন: Windows OS ও MS Office তৈরি করে কম্পিউটার বিপ্লব ঘটায়
• প্রধান পণ্য: Windows, Office 365, Azure Cloud, Teams, Xbox, LinkedIn, GitHub, VS Code
• বিল গেটস: দীর্ঘদিন বিশ্বের সেরা ধনী ছিলেন, Bill & Melinda Gates Foundation পরিচালনা করেন
• Azure: বিশ্বের ২য় বৃহত্তম ক্লাউড প্ল্যাটফর্ম
• বর্তমান: AI-তে বিশাল বিনিয়োগ (OpenAI-তে বিলিয়ন ডলার বিনিয়োগ)
• সত্য নাদেল্লা: বর্তমান CEO, Microsoft-কে ক্লাউড ও AI-কেন্দ্রিক কোম্পানিতে রূপান্তরিত করেছেন`
      },
      {
        title: "Google — তথ্যের ভান্ডার",
        content: `• প্রতিষ্ঠা: ১৯৯৮, ল্যারি পেজ ও সের্গেই ব্রিন (Stanford University)
• প্যারেন্ট কোম্পানি: Alphabet Inc. (২০১৫ থেকে)
• বিখ্যাত কেন: বিশ্বের সবচেয়ে জনপ্রিয় সার্চ ইঞ্জিন
• প্রধান পণ্য ও সেবা:
  - Google Search: প্রতিদিন ৮.৫ বিলিয়ন+ সার্চ
  - YouTube: বিশ্বের বৃহত্তম ভিডিও প্ল্যাটফর্ম
  - Android: ৭২%+ মোবাইল মার্কেট শেয়ার
  - Gmail: বিশ্বের সবচেয়ে বেশি ব্যবহৃত ইমেইল
  - Google Maps, Google Drive, Chrome Browser
  - Google Cloud Platform (GCP)
• AI ও গবেষণা: DeepMind, Google Brain, Gemini AI, TensorFlow`
      },
      {
        title: "Amazon — ই-কমার্স থেকে ক্লাউড",
        content: `• প্রতিষ্ঠা: ১৯৯৪, জেফ বেজোস (গ্যারেজে শুরু)
• শুরু: অনলাইন বুকশপ হিসেবে — এখন বিশ্বের বৃহত্তম ই-কমার্স
• প্রধান পণ্য ও সেবা:
  - Amazon.com: ই-কমার্স মার্কেটপ্লেস
  - AWS (Amazon Web Services): বিশ্বের বৃহত্তম ক্লাউড প্ল্যাটফর্ম (৩১%+ মার্কেট শেয়ার)
  - Alexa: AI-চালিত ভয়েস অ্যাসিস্ট্যান্ট
  - Prime Video: স্ট্রিমিং সেবা
  - Kindle: ই-বুক রিডার
  - Twitch: লাইভ স্ট্রিমিং প্ল্যাটফর্ম
• জেফ বেজোস: একসময় বিশ্বের সেরা ধনী
• AWS-এর গুরুত্ব: Netflix, Airbnb, NASA সহ লক্ষ লক্ষ কোম্পানি AWS ব্যবহার করে`
      },
      {
        title: "Apple — ডিজাইন ও ইনোভেশনের প্রতীক",
        content: `• প্রতিষ্ঠা: ১৯৭৬, স্টিভ জবস, স্টিভ ওজনিয়াক ও রোনাল্ড ওয়েন
• বিখ্যাত কেন: পণ্য ডিজাইন ও ইউজার এক্সপেরিয়েন্সে বিপ্লব
• প্রধান পণ্য: iPhone, iPad, Mac, Apple Watch, AirPods, Apple TV
• সফটওয়্যার: macOS, iOS, iPadOS, watchOS
• App Store: ২০ লক্ষ+ অ্যাপ
• Apple Silicon (M1/M2/M3/M4): নিজস্ব চিপ তৈরি — অবিশ্বাস্য পারফরম্যান্স ও ব্যাটারি লাইফ
• স্টিভ জবস: প্রযুক্তি জগতের কিংবদন্তি — iPhone (২০০৭) দিয়ে স্মার্টফোন বিপ্লব`
      }
    ]
  },
  {
    id: "cloud",
    label: "ক্লাউড সার্ভার",
    icon: Cloud,
    sections: [
      {
        title: "ক্লাউড কম্পিউটিং কী?",
        content: `ক্লাউড কম্পিউটিং হলো ইন্টারনেটের মাধ্যমে কম্পিউটিং সেবা (সার্ভার, স্টোরেজ, ডেটাবেস, নেটওয়ার্কিং, সফটওয়্যার) ব্যবহার করা — নিজের কম্পিউটারে সব ইনস্টল না করে দূরের সার্ভার থেকে কাজ করা। যেমন: Google Drive-এ ফাইল রাখা, Netflix দেখা — সবই ক্লাউডের মাধ্যমে হয়।`
      },
      {
        title: "ক্লাউড সেবার প্রকারভেদ",
        content: `• IaaS (Infrastructure as a Service): সার্ভার, স্টোরেজ, নেটওয়ার্ক ভাড়া নেওয়া
  উদাহরণ: AWS EC2, Google Compute Engine, Azure VMs

• PaaS (Platform as a Service): অ্যাপ তৈরির প্ল্যাটফর্ম — সার্ভার ম্যানেজমেন্ট দরকার নেই
  উদাহরণ: Heroku, Google App Engine, Azure App Service

• SaaS (Software as a Service): ব্রাউজারে সফটওয়্যার ব্যবহার
  উদাহরণ: Gmail, Google Docs, Dropbox, Zoom, Slack`
      },
      {
        title: "প্রধান ক্লাউড প্রোভাইডার",
        content: `• AWS (Amazon Web Services): ৩১%+ মার্কেট শেয়ার, সবচেয়ে বড়, ২০০+ সেবা
• Microsoft Azure: ২৫%+ মার্কেট শেয়ার, এন্টারপ্রাইজে শক্তিশালী
• Google Cloud Platform (GCP): ১১%+ মার্কেট শেয়ার, AI ও ডেটা অ্যানালিটিক্সে সেরা
• Alibaba Cloud: এশিয়ায় শীর্ষস্থানীয়
• IBM Cloud, Oracle Cloud, DigitalOcean`
      },
      {
        title: "ক্লাউডের সুবিধা ও অসুবিধা",
        content: `সুবিধা:
• স্কেলেবিলিটি: প্রয়োজনমতো রিসোর্স বাড়ানো-কমানো যায়
• খরচ সাশ্রয়: নিজের সার্ভার কেনা ও রক্ষণাবেক্ষণ লাগে না
• যেকোনো জায়গা থেকে অ্যাক্সেস: ইন্টারনেট থাকলেই চলবে
• স্বয়ংক্রিয় ব্যাকআপ: ডেটা হারানোর ঝুঁকি কম
• আপডেট: সর্বদা সর্বশেষ ভার্সন পাওয়া যায়

অসুবিধা:
• ইন্টারনেট নির্ভরতা: ইন্টারনেট না থাকলে কাজ করা যায় না
• নিরাপত্তা ঝুঁকি: ডেটা তৃতীয় পক্ষের সার্ভারে থাকে
• খরচ বাড়তে পারে: বেশি ব্যবহারে বিল বেশি`
      }
    ]
  },
  {
    id: "ai",
    label: "AI ও ভবিষ্যৎ",
    icon: Brain,
    sections: [
      {
        title: "কৃত্রিম বুদ্ধিমত্তা (AI) কী?",
        content: `Artificial Intelligence বা কৃত্রিম বুদ্ধিমত্তা হলো কম্পিউটারকে মানুষের মতো চিন্তা, শেখা ও সিদ্ধান্ত নিতে সক্ষম করার প্রযুক্তি। AI মেশিনকে এমনভাবে প্রশিক্ষণ দেয় যাতে তা অভিজ্ঞতা থেকে শেখে এবং নতুন পরিস্থিতিতে সঠিক সিদ্ধান্ত নিতে পারে।`
      },
      {
        title: "AI-এর প্রকারভেদ",
        content: `• Narrow AI (দুর্বল AI): নির্দিষ্ট একটি কাজে দক্ষ
  উদাহরণ: Siri, Alexa, Google Assistant, ChatGPT, স্প্যাম ফিল্টার
  
• General AI (সাধারণ AI): মানুষের মতো সব কাজ করতে পারবে (এখনও তৈরি হয়নি)
  
• Super AI (অতি AI): মানুষের চেয়ে বুদ্ধিমান (তাত্ত্বিক ধারণা)

মূল শাখাসমূহ:
• Machine Learning (ML): ডেটা থেকে প্যাটার্ন শেখা
• Deep Learning: নিউরাল নেটওয়ার্ক ব্যবহার করে জটিল সমস্যা সমাধান
• NLP (Natural Language Processing): মানুষের ভাষা বোঝা (ChatGPT, Google Translate)
• Computer Vision: ছবি ও ভিডিও বোঝা (ফেস রিকগনিশন, সেলফ-ড্রাইভিং কার)
• Robotics: রোবটের মাধ্যমে কাজ সম্পাদন`
      },
      {
        title: "AI-এর বর্তমান ব্যবহার",
        content: `• ChatGPT / Claude / Gemini: কথোপকথন, লেখালেখি, কোডিং সহায়তা
• স্বাস্থ্যসেবা: রোগ নির্ণয়, ড্রাগ ডিসকভারি, মেডিকেল ইমেজিং
• শিক্ষা: ব্যক্তিগতকৃত শেখার অভিজ্ঞতা, টিউটরিং চ্যাটবট
• ব্যবসা: গ্রাহক সেবা চ্যাটবট, সেলস পূর্বাভাস
• যানবাহন: সেলফ-ড্রাইভিং কার (Tesla, Waymo)
• বিনোদন: Netflix/Spotify রিকমেন্ডেশন, AI-জেনারেটেড আর্ট ও মিউজিক
• কৃষি: ফসলের স্বাস্থ্য পর্যবেক্ষণ, স্মার্ট সেচ ব্যবস্থা
• সাইবার সিকিউরিটি: হ্যাকিং ও ফ্রড ডিটেকশন`
      },
      {
        title: "ভবিষ্যতে যা হতে পারে",
        content: `• কোয়ান্টাম কম্পিউটিং: আজকের সুপারকম্পিউটারের চেয়ে কোটি গুণ দ্রুত — ওষুধ আবিষ্কার, জলবায়ু মডেলিং বিপ্লব ঘটাবে

• মেটাভার্স: ভার্চুয়াল জগতে কাজ, পড়াশোনা, বিনোদন — VR/AR চশমা পরে ডিজিটাল দুনিয়ায় প্রবেশ

• ব্রেইন-কম্পিউটার ইন্টারফেস (BCI): মস্তিষ্কের সংকেত দিয়ে সরাসরি কম্পিউটার নিয়ন্ত্রণ (Neuralink)

• স্মার্ট সিটি: IoT ও AI-চালিত শহর — স্বয়ংক্রিয় ট্রাফিক, বর্জ্য ব্যবস্থাপনা, শক্তি সাশ্রয়

• স্পেস টেকনোলজি: SpaceX, Blue Origin — মঙ্গলে বসতি, স্যাটেলাইট ইন্টারনেট (Starlink)

• ৬G নেটওয়ার্ক: ৫G-এর ১০০ গুণ দ্রুত — হলোগ্রাফিক কমিউনিকেশন সম্ভব হবে

• বায়োটেক ও AI: জিন এডিটিং (CRISPR), ব্যক্তিগতকৃত ওষুধ, দীর্ঘ জীবন

• রোবটিক্স: মানুষের পাশাপাশি কাজ করবে রোবট — কারখানা, হাসপাতাল, বাড়ি সর্বত্র

• সাস্টেইনেবল টেক: সৌরশক্তি, বায়ুশক্তি, ব্যাটারি টেকনোলজি — পরিবেশবান্ধব ভবিষ্যৎ

• Web 3.0 ও ব্লকচেইন: বিকেন্দ্রীভূত ইন্টারনেট, ক্রিপ্টোকারেন্সি, NFT, স্মার্ট কন্ট্রাক্ট`
      },
      {
        title: "ক্যারিয়ারের সুযোগ",
        content: `ভবিষ্যতে চাহিদা থাকবে এমন কিছু ক্ষেত্র:
• AI ও মেশিন লার্নিং ইঞ্জিনিয়ার
• ডেটা সায়েন্টিস্ট ও অ্যানালিস্ট
• ক্লাউড আর্কিটেক্ট
• সাইবার সিকিউরিটি বিশেষজ্ঞ
• ফুল-স্ট্যাক ওয়েব ডেভেলপার
• UI/UX ডিজাইনার
• ব্লকচেইন ডেভেলপার
• IoT বিশেষজ্ঞ
• রোবটিক্স ইঞ্জিনিয়ার
• ডিজিটাল মার্কেটিং বিশেষজ্ঞ

টিপস: প্রোগ্রামিং শিখুন (Python, JavaScript), ইংরেজি শিখুন, অনলাইন কোর্স করুন (Coursera, Udemy), প্রজেক্ট তৈরি করুন, GitHub-এ পোর্টফোলিও রাখুন।`
      }
    ]
  }
];

const BasicKnowledge = () => {
  const [activeTab, setActiveTab] = useState("word");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (sectionTitle: string) => {
    const el = sectionRefs.current[sectionTitle];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">বেসিক নলেজ</h1>
            <p className="text-primary-foreground/80 text-lg">
              কম্পিউটার ও আইটির মৌলিক জ্ঞান অর্জন করুন — বিস্তারিত বাংলায়
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-2 rounded-xl mb-8">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    <Icon className="h-4 w-4" />
                    {cat.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                {/* Quick section links */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.sections.map((sec) => (
                    <button
                      key={sec.title}
                      onClick={() => scrollToSection(sec.title)}
                      className="px-3 py-1.5 text-sm rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors border border-accent/20"
                    >
                      {sec.title}
                    </button>
                  ))}
                </div>

                {/* Content sections */}
                <div className="space-y-8">
                  {cat.sections.map((sec) => (
                    <div
                      key={sec.title}
                      ref={(el) => { sectionRefs.current[sec.title] = el; }}
                      className="bg-card border border-border rounded-xl p-6 md:p-8 scroll-mt-24"
                    >
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <cat.icon className="h-5 w-5 text-accent" />
                        {sec.title}
                      </h2>
                      <div className="text-foreground/80 leading-relaxed whitespace-pre-line">
                        {sec.content}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default BasicKnowledge;
