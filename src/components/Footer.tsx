import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gradient">টেক</span> ট্রেনিং সেন্টার
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              ২০১৬ সাল থেকে দক্ষতা উন্নয়নে নিবেদিত। আমরা মানসম্পন্ন প্রশিক্ষণের মাধ্যমে শিক্ষার্থীদের ক্যারিয়ার গড়তে সাহায্য করছি।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-accent transition-colors">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">কোর্সসমূহ</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">সাধারণ জিজ্ঞাসা</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">যোগাযোগ</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4">জনপ্রিয় কোর্স</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/courses" className="hover:text-accent transition-colors">ওয়েব ডিজাইন ও ডেভেলপমেন্ট</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">গ্রাফিক ডিজাইন</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">ডিজিটাল মার্কেটিং</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">MS Office & ICT</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">যোগাযোগ</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                +880 1XXXXXXXXX
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                info@techtraining.com.bd
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                ঢাকা, বাংলাদেশ
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} টেক ট্রেনিং সেন্টার। সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
};

export default Footer;
