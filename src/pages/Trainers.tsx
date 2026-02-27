import Layout from "@/components/Layout";
import { trainers } from "@/data/siteData";

const MaleAvatar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="70" r="40" fill="currentColor" opacity="0.9" />
    <path d="M100 120C60 120 30 145 30 175V200H170V175C170 145 140 120 100 120Z" fill="currentColor" opacity="0.7" />
    {/* Short hair */}
    <path d="M60 65C60 40 78 25 100 25C122 25 140 40 140 65C140 55 130 35 100 35C70 35 60 55 60 65Z" fill="currentColor" opacity="1" />
  </svg>
);

const FemaleAvatar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="70" r="40" fill="currentColor" opacity="0.9" />
    <path d="M100 120C60 120 30 145 30 175V200H170V175C170 145 140 120 100 120Z" fill="currentColor" opacity="0.7" />
    {/* Long hair */}
    <path d="M55 60C55 33 75 18 100 18C125 18 145 33 145 60C145 50 135 30 100 30C65 30 55 50 55 60Z" fill="currentColor" opacity="1" />
    <path d="M55 60C52 80 50 105 55 120C58 110 60 90 62 75" fill="currentColor" opacity="0.8" />
    <path d="M145 60C148 80 150 105 145 120C142 110 140 90 138 75" fill="currentColor" opacity="0.8" />
  </svg>
);

const Trainers = () => {
  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">আমাদের প্রশিক্ষকগণ</h1>
          <p className="text-primary-foreground/80 text-lg">অভিজ্ঞ ও দক্ষ প্রশিক্ষকদের সাথে পরিচিত হোন</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 overflow-hidden p-3">
                  {trainer.gender === "female" ? (
                    <FemaleAvatar className="h-full w-full text-primary" />
                  ) : (
                    <MaleAvatar className="h-full w-full text-primary" />
                  )}
                </div>
                <h3 className="font-semibold text-lg">{trainer.name}</h3>
                <p className="text-sm text-accent font-medium mt-1">{trainer.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{trainer.experience}</p>
                <p className="text-sm text-muted-foreground mt-3">{trainer.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainers;