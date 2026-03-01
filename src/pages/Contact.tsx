import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Users } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">যোগাযোগ করুন</h1>
          <p className="text-primary-foreground/80 text-lg">আমাদের সাথে যেকোনো প্রশ্নে যোগাযোগ করুন</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">যোগাযোগের তথ্য</h2>
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground">Pranjol IT | Pranjol Computer Education</h3>
                </div>
                {[
                  { icon: Phone, label: "Apu Roy", value: "+880 1932583396" },
                  { icon: Phone, label: "Polash Roy", value: "+880 1740833623" },
                  { icon: Phone, label: "Sudwip Goswami", value: "+880 1739743947" },
                  { icon: Mail, label: "ইমেইল", value: "contact@pranjolit.com" },
                  { icon: MapPin, label: "ঠিকানা", value: "প্রাঞ্জল আইটি, তারাকান্দা, School Road, পশু হাসপাতাল এর বিপরীতে" },
                  { icon: Clock, label: "অফিস সময়", value: "সকাল ৯টা থেকে রাত ৯টা (শুক্রবার বন্ধ)" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}

                {/* Facebook Links */}
                <div className="pt-4 border-t border-border">
                  <p className="font-medium text-sm mb-3">সোশ্যাল মিডিয়া</p>
                  <div className="flex gap-3">
                    <a href="https://www.facebook.com/pranjolit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-colors text-sm font-medium">
                      <Facebook className="h-4 w-4" /> Facebook Page
                    </a>
                    <a href="https://www.facebook.com/groups/pranjolit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-colors text-sm font-medium">
                      <Users className="h-4 w-4" /> Facebook Group
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">মেসেজ পাঠান</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">নাম</label>
                    <Input placeholder="আপনার নাম" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">মোবাইল</label>
                    <Input placeholder="01XXXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">বিষয়</label>
                  <Input placeholder="মেসেজের বিষয়" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">মেসেজ</label>
                  <Textarea placeholder="আপনার মেসেজ লিখুন..." rows={5} />
                </div>
                <Button variant="hero" size="lg" type="submit">মেসেজ পাঠান</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
