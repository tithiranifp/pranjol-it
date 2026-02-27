import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { courses } from "@/data/siteData";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const activeCourses = courses.filter((c) => !c.upcoming);
  const upcomingCourses = courses.filter((c) => c.upcoming);

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">কোর্সসমূহ</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            আপনার পছন্দের কোর্স বেছে নিন এবং আজই শেখা শুরু করুন। পরীক্ষা দিয়ে বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) এর সরকারি সার্টিফিকেট নিন।
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          {/* Active Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCourses.map((course) => (
              <div
                key={course.id}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-6">
                  <span className="text-4xl mb-4 block">{course.icon}</span>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <ul className="space-y-2 mb-4">
                    {course.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" /> {course.duration}
                    </span>
                    <span className="text-lg font-bold text-accent">৳{course.fee.toLocaleString("bn-BD")}</span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link to={`/courses/${course.id}`}>
                    <Button className="w-full">বিস্তারিত দেখুন</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Courses */}
          {upcomingCourses.length > 0 && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-center">
                আসন্ন কোর্সসমূহ <Badge variant="secondary" className="ml-2 text-sm">Upcoming</Badge>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-card rounded-xl border border-dashed border-border overflow-hidden opacity-80 relative"
                  >
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-muted">Upcoming</Badge>
                    </div>
                    <div className="p-6">
                      <span className="text-4xl mb-4 block">{course.icon}</span>
                      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                      <ul className="space-y-2 mb-4">
                        {course.features.map((f) => (
                          <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground pt-4 border-t border-border">
                        <Clock className="h-4 w-4" /> {course.duration}
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <Button variant="outline" className="w-full" disabled>
                        শীঘ্রই আসছে
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
