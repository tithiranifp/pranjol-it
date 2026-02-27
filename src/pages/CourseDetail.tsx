import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { courses } from "@/data/siteData";
import { Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <Layout>
        <div className="container section-padding text-center">
          <h1 className="text-2xl font-bold mb-4">কোর্স পাওয়া যায়নি</h1>
          <Link to="/courses"><Button>কোর্স তালিকায় ফিরুন</Button></Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <Link to="/courses" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> কোর্স তালিকা
          </Link>
          <div className="flex items-start gap-4">
            <span className="text-5xl">{course.icon}</span>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-2">{course.title}</h1>
              <div className="flex items-center gap-4 text-primary-foreground/70 text-sm">
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                <span className="font-semibold text-accent text-lg">৳{course.fee.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-3">কোর্স বিবরণ</h2>
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">কোর্সে যা শিখবেন</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="h-5 w-5 text-success shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">ভর্তি তথ্য</h3>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between"><span className="text-muted-foreground">কোর্স ফি</span><span className="font-semibold">৳{course.fee.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">ভর্তি ফি</span><span className="font-semibold">৳১,৫০০</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">রেজিস্ট্রেশন ফি</span><span className="font-semibold">৳২,০০০</span></div>
                  <div className="flex justify-between border-t border-border pt-3"><span className="font-semibold">মোট</span><span className="font-bold text-accent">৳৬,৫০০</span></div>
                </div>
                <Link to="/admission">
                  <Button variant="hero" className="w-full" size="lg">এখনই ভর্তি হোন</Button>
                </Link>
                <p className="text-xs text-muted-foreground text-center mt-3">কুপন কোডে ২০% ডিসকাউন্ট!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
