import { Phone, Mail, MapPin, Facebook, Youtube, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gradient">প্রাঞ্জল</span> কম্পিউটার এডুকেশন
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              প্রাঞ্জল আইটি — দক্ষতা উন্নয়নে নিবেদিত। আমরা মানসম্পন্ন প্রশিক্ষণের মাধ্যমে শিক্ষার্থীদের ক্যারিয়ার গড়তে সাহায্য করছি।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-accent transition-colors">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">কোর্সসমূহ</Link></li>
              <li><Link to="/payment" className="hover:text-accent transition-colors">পেমেন্ট</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">সাধারণ জিজ্ঞাসা</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">যোগাযোগ</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4">জনপ্রিয় কোর্স</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/courses/zero-to-hero" className="hover:text-accent transition-colors">জিরো টু হিরো কোর্স</Link></li>
              <li><Link to="/courses/web-design" className="hover:text-accent transition-colors">ওয়েব ডিজাইন ও ডেভেলপমেন্ট</Link></li>
              <li><Link to="/courses/ms-office" className="hover:text-accent transition-colors">এমএস অফিস ও আইসিটি</Link></li>
              <li><Link to="/courses/web-hosting" className="hover:text-accent transition-colors">ওয়েব হোস্টিং বিজনেস</Link></li>
              <li><Link to="/courses/digital-marketing" className="hover:text-accent transition-colors">ডিজিটাল মার্কেটিং</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">যোগাযোগ</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+৮৮০ ১৯৩২-৫৮৩৩৯৬ (অপু রায়)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+৮৮০ ১৭৪০-৮৩৩৬২৩ (পলাশ রায়)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                contact@pranjolit.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>প্রাঞ্জল আইটি, তারাকান্দা<br />স্কুল রোড, পশু হাসপাতালের বিপরীতে</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/pranjolit" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" title="ফেসবুক পেজ">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/groups/pranjolit" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" title="ফেসবুক গ্রুপ">
                <Users className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" title="ইউটিউব">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Gateway - Full Width Center */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-6">
          <p className="text-xs text-primary-foreground/50 mb-3 text-center">পেমেন্ট পার্টনার</p>
          <div className="flex justify-center">
            <img
              src="/images/sslcommerz-payment.webp"
              alt="SSLCommerz পেমেন্ট — ভিসা, মাস্টারকার্ড, বিকাশ, নগদ, রকেট"
              className="w-full max-w-2xl h-auto object-contain rounded"
            />
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-6 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} প্রাঞ্জল আইটি — প্রাঞ্জল কম্পিউটার এডুকেশন
        </div>
      </div>
    </footer>
  );
};

export default Footer;
