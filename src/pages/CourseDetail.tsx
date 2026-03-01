import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { courses } from "@/data/siteData";
import { Clock, CheckCircle, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <Layout>
        <div className="container py-12 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">কোর্স পাওয়া যায়নি</h1>
          <Link to="/courses"><Button>কোর্স তালিকায় ফিরুন</Button></Link>
        </div>
      </Layout>
    );
  }

  const isMsOffice = course.id === "ms-office";
  const installment = Math.ceil(course.fee / 2);
  const admissionParams = new URLSearchParams({
    fees: isMsOffice ? "admission_fee,govt_reg" : "admission_fee",
    course: course.id,
    courseFee: String(course.fee),
  });

  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden">
        {course.image && (
          <div className="absolute inset-0">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 hero-gradient opacity-90" />
          </div>
        )}
        {!course.image && <div className="absolute inset-0 hero-gradient" />}
        <div className="container relative z-10 py-12 md:py-20 px-4">
          <Link to="/courses" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> কোর্স তালিকা
          </Link>
          <div className="flex items-start gap-4">
            <span className="text-4xl md:text-5xl">{course.icon}</span>
            <div>
              <h1 className="text-xl md:text-4xl font-bold text-primary-foreground mb-2">{course.title}</h1>
              <div className="flex flex-wrap items-center gap-3 text-primary-foreground/70 text-sm">
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                <span className="font-semibold text-accent text-lg">৳{course.fee.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-xl font-bold mb-3">কোর্স বিবরণ</h2>
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>
              </div>

              {/* Features */}
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

              {/* Modules */}
              {course.modules.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    কোর্স মডিউল ({course.modules.length}টি)
                  </h2>
                  <div className="space-y-4">
                    {course.modules.map((mod, idx) => (
                      <div key={idx} className="bg-card rounded-xl border border-border p-4 md:p-5">
                        <h3 className="font-semibold text-foreground mb-3">{mod.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mod.topics.map((topic, tIdx) => (
                            <div key={tIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Course Image Gallery */}
              {course.image && (
                <div>
                  <h2 className="text-xl font-bold mb-4">কোর্স সম্পর্কিত ছবি</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <img src={course.image} alt={course.title} className="rounded-xl w-full h-40 object-cover border border-border" />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-card rounded-xl border border-border p-5 md:p-6 sticky top-24">
                {course.image && (
                  <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                )}
                <h3 className="font-bold text-lg mb-4">ভর্তি তথ্য</h3>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between"><span className="text-muted-foreground">কোর্স ফি</span><span className="font-semibold">৳{course.fee.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">সময়কাল</span><span className="font-semibold">{course.duration}</span></div>
                  <div className="border-t border-border pt-2" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ভর্তি ফি</span>
                    <span className="font-semibold">৳১,৫০০</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">কোর্স ফি (১ম কিস্তি)</span>
                    <span className="font-semibold">৳{installment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">কোর্স ফি (২য় কিস্তি)</span>
                    <span className="font-semibold">৳{(course.fee - installment).toLocaleString()}</span>
                  </div>
                  {isMsOffice && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">সরকারি রেজিস্ট্রেশন ফি</span>
                      <span className="font-semibold">৳২,০০০</span>
                    </div>
                  )}
                </div>
                <Link to={`/admission?${admissionParams.toString()}`}>
                  <Button variant="hero" className="w-full" size="lg">এখনই ভর্তি হোন</Button>
                </Link>
                <p className="text-xs text-muted-foreground text-center mt-3">কুপন কোডে ডিসকাউন্ট!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
