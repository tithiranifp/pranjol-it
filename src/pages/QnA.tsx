import Layout from "@/components/Layout";
import { MessageCircleQuestion, Search } from "lucide-react";
import { useState } from "react";
import { qnaList } from "@/data/qnaData";

const QnA = () => {
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = search.trim()
    ? qnaList.filter(
        (q) => {
          const s = search.toLowerCase();
          return (
            q.question.toLowerCase().includes(s) ||
            q.answer.toLowerCase().includes(s) ||
            String(q.id).includes(s)
          );
        }
      )
    : qnaList;

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">প্রশ্ন ও উত্তর</h1>
            <p className="text-primary-foreground/80 text-lg">
              বাংলাদেশী কারিকুলাম (৫ম-১০ম শ্রেণি) থেকে ৩০০টি ICT প্রশ্ন ও উত্তর
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="প্রশ্ন খুঁজুন..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            মোট প্রশ্ন: <span className="font-number font-semibold">{filtered.length}</span>টি
          </p>

          {/* QnA List */}
          <div className="space-y-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-xl bg-card overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full flex items-start gap-3 p-4 text-left"
                >
                  <span className="font-number text-sm font-bold text-primary bg-primary/10 rounded-lg min-w-[2.5rem] h-9 flex items-center justify-center shrink-0">
                    {item.id}
                  </span>
                  <span className="font-medium text-foreground flex-1 pt-1">
                    {item.question}
                  </span>
                  <MessageCircleQuestion
                    className={`h-5 w-5 shrink-0 mt-1 transition-colors ${
                      openId === item.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </button>
                {openId === item.id && (
                  <div className="px-4 pb-4 pl-[4.25rem] animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed border-t border-border pt-3">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <MessageCircleQuestion className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">কোনো প্রশ্ন পাওয়া যায়নি</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default QnA;
