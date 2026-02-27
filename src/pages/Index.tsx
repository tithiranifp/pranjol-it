import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Users, Award, BookOpen, Clock, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { courses, reviews } from "@/data/siteData";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Training Center" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-2xl animate-slide-up">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              ২০১৬ সাল থেকে বিশ্বস্ত প্রতিষ্ঠান
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              দক্ষতা অর্জন করুন,{" "}
              <span className="text-gradient">ক্যারিয়ার</span> গড়ুন
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
              আধুনিক প্রশিক্ষণের মাধ্যমে আপনার স্বপ্নের ক্যারিয়ার শুরু করুন। সরকার অনুমোদিত সার্টিফিকেট ও হাতে-কলমে শেখানোর সুযোগ।
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button variant="hero" size="lg" className="text-base">
                  কোর্স দেখুন
                </Button>
              </Link>
              <Link to="/admission">
                <Button variant="hero-outline" size="lg" className="text-base">
                  ভর্তি হোন
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-b border-border">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, value: "৫,০০০+", label: "শিক্ষার্থী" },
              { icon: BookOpen, value: "১৫+", label: "কোর্স" },
              { icon: Award, value: "৮+", label: "বছরের অভিজ্ঞতা" },
              { icon: Star, value: "৯৮%", label: "সন্তুষ্টির হার" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <stat.icon className="h-6 w-6 text-accent" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">আমাদের জনপ্রিয় কোর্সসমূহ</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              বাস্তবমুখী প্রশিক্ষণ ও দক্ষ প্রশিক্ষকদের তত্ত্বাবধানে আপনার দক্ষতা বাড়ান
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="group glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-4xl mb-4 block">{course.icon}</span>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" /> {course.duration}
                  </span>
                  <span className="font-semibold text-accent">৳{course.fee.toLocaleString()}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses">
              <Button size="lg">সব কোর্স দেখুন</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">কেন আমাদের বেছে নেবেন?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle, title: "হাতে-কলমে শেখানো", desc: "প্র্যাক্টিক্যাল প্রজেক্ট ও লাইভ ক্লাসের মাধ্যমে দক্ষতা অর্জন" },
              { icon: Award, title: "সরকার অনুমোদিত", desc: "কোর্স শেষে সরকার অনুমোদিত সার্টিফিকেট প্রদান করা হয়" },
              { icon: Users, title: "দক্ষ প্রশিক্ষক", desc: "ইন্ডাস্ট্রি এক্সপার্ট প্রশিক্ষকদের অধীনে শিখুন" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-8 text-center shadow-sm">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">ফি তথ্য</h2>
            <p className="text-muted-foreground">সাশ্রয়ী মূল্যে মানসম্মত প্রশিক্ষণ</p>
          </div>
          <div className="max-w-lg mx-auto bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
            <div className="hero-gradient p-6 text-center">
              <h3 className="text-xl font-bold text-primary-foreground">মোট খরচ</h3>
              <p className="text-4xl font-bold text-accent mt-2">৳৬,৫০০</p>
              <p className="text-primary-foreground/70 text-sm mt-1">কুপন কোডে ২০% ডিসকাউন্ট!</p>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: "ভর্তি ফি", amount: "৳১,৫০০" },
                { label: "সরকারি রেজিস্ট্রেশন ফি", amount: "৳২,০০০" },
                { label: "কোর্স ফি", amount: "৳৩,০০০" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-foreground">{item.label}</span>
                  <span className="font-semibold text-foreground">{item.amount}</span>
                </div>
              ))}
              <div className="bg-muted/50 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-foreground mb-1">কিস্তি সুবিধা</p>
                <p className="text-sm text-muted-foreground">১ম কিস্তি: ৳১,৫০০ | ২য় কিস্তি: ৳১,৫০০</p>
              </div>
              <Link to="/admission" className="block mt-4">
                <Button variant="hero" className="w-full" size="lg">এখনই ভর্তি হোন</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">শিক্ষার্থীদের মতামত</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient section-padding">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
            আজই আপনার ক্যারিয়ার শুরু করুন
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            সীমিত আসনে ভর্তি চলছে। এখনই রেজিস্ট্রেশন করুন এবং ২০% ডিসকাউন্ট পান!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission">
              <Button variant="hero" size="lg">ভর্তি ফর্ম পূরণ করুন</Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="lg">যোগাযোগ করুন</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
