import Layout from "@/components/Layout";
import { useState, useEffect, useCallback } from "react";
import { quizTopics, QuizTopic, QuizQuestion } from "@/data/quizData";
import { Brain, ArrowLeft, CheckCircle2, XCircle, Trophy, RotateCcw, Sparkles, Star, Zap, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const funnyCorrectMessages = [
  "🎉 দারুণ! তুমি তো জিনিয়াস!",
  "🔥 একদম সঠিক! ফায়ার!",
  "⭐ ওয়াও! পারফেক্ট!",
  "🚀 রকেটের মতো সঠিক!",
  "💪 শক্তিমান! একদম ঠিক!",
  "🌟 তারার মতো উজ্জ্বল!",
  "🎯 বুলস আই! সরাসরি লক্ষ্যে!",
  "🏆 চ্যাম্পিয়ন লেভেল!",
];

const funnyWrongMessages = [
  "😅 ওহো! একটু ভুল হয়ে গেলো!",
  "🤔 আরেকটু চিন্তা করো!",
  "😬 এবার ভুল, পরেরবার ঠিক হবে!",
  "🙈 লুকাও মুখ! ভুল উত্তর!",
  "😱 আরে বাপরে! ভুল!",
  "🫣 ওহ নো! সঠিক উত্তর দেখো!",
];

const Quiz = () => {
  const [selectedTopic, setSelectedTopic] = useState<QuizTopic | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [message, setMessage] = useState("");
  const [quizFinished, setQuizFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const QUIZ_COUNT = 20; // Show 20 questions per quiz session

  const startQuiz = useCallback((topic: QuizTopic) => {
    const shuffled = [...topic.questions].sort(() => Math.random() - 0.5).slice(0, QUIZ_COUNT);
    setShuffledQuestions(shuffled);
    setSelectedTopic(topic);
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setAnswered(false);
    setMessage("");
    setQuizFinished(false);
  }, []);

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    const isCorrect = index === shuffledQuestions[currentQ].correctIndex;
    if (isCorrect) {
      setScore((s) => s + 1);
      setMessage(funnyCorrectMessages[Math.floor(Math.random() * funnyCorrectMessages.length)]);
    } else {
      setMessage(funnyWrongMessages[Math.floor(Math.random() * funnyWrongMessages.length)]);
    }
  };

  const nextQuestion = () => {
    if (currentQ + 1 >= shuffledQuestions.length) {
      setQuizFinished(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
      setMessage("");
    }
  };

  const getScoreEmoji = () => {
    const pct = (score / shuffledQuestions.length) * 100;
    if (pct >= 90) return "🏆";
    if (pct >= 70) return "🌟";
    if (pct >= 50) return "👍";
    return "📚";
  };

  const getScoreMessage = () => {
    const pct = (score / shuffledQuestions.length) * 100;
    if (pct >= 90) return "অসাধারণ! তুমি তো সুপারস্টার! 🎊";
    if (pct >= 70) return "বেশ ভালো! আরেকটু চেষ্টা করলে পারফেক্ট! 💪";
    if (pct >= 50) return "মোটামুটি ভালো! আরো প্র্যাকটিস করো! 📖";
    return "আরো পড়াশোনা দরকার! হাল ছেড়ো না! 💪";
  };

  // Topic selection screen
  if (!selectedTopic) {
    return (
      <Layout>
        <section className="hero-gradient section-padding">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 flex items-center gap-3">
                <Sparkles className="h-10 w-10" /> কুইজ টাইম!
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                🎮 মজার কুইজ খেলো, জ্ঞান যাচাই করো! প্রতিটি টপিকে ৫০টি প্রশ্ন আছে — প্রতিবার ২০টি র‍্যান্ডম প্রশ্ন আসবে!
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {quizTopics.map((topic) => (
                <Card
                  key={topic.id}
                  onClick={() => startQuiz(topic)}
                  className="cursor-pointer group hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50 hover:shadow-xl overflow-hidden"
                >
                  <div className={`bg-gradient-to-br ${topic.color} p-4 md:p-6 text-center`}>
                    <span className="text-4xl md:text-5xl block mb-2">{topic.emoji}</span>
                  </div>
                  <div className="p-3 md:p-4 text-center">
                    <h3 className="font-bold text-sm md:text-base">{topic.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">৫০টি প্রশ্ন</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Quiz finished screen
  if (quizFinished) {
    const pct = Math.round((score / shuffledQuestions.length) * 100);
    return (
      <Layout>
        <section className="hero-gradient section-padding">
          <div className="container">
            <Button variant="ghost" className="text-primary-foreground mb-4" onClick={() => setSelectedTopic(null)}>
              <ArrowLeft className="mr-2 h-4 w-4" /> সব টপিক
            </Button>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="container max-w-lg">
            <Card className="p-6 md:p-10 text-center overflow-hidden relative">
              {pct >= 70 && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-8 text-2xl animate-bounce" style={{ animationDelay: "0s" }}>🎉</div>
                  <div className="absolute top-8 right-12 text-2xl animate-bounce" style={{ animationDelay: "0.2s" }}>⭐</div>
                  <div className="absolute top-16 left-20 text-xl animate-bounce" style={{ animationDelay: "0.4s" }}>🎊</div>
                  <div className="absolute top-6 right-24 text-xl animate-bounce" style={{ animationDelay: "0.6s" }}>✨</div>
                </div>
              )}
              <div className="text-6xl md:text-8xl mb-4">{getScoreEmoji()}</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">কুইজ শেষ!</h2>
              <p className="text-lg text-muted-foreground mb-4">{selectedTopic.emoji} {selectedTopic.name}</p>
              <div className={cn(
                "text-5xl md:text-7xl font-black mb-2",
                pct >= 70 ? "text-emerald-500" : pct >= 50 ? "text-amber-500" : "text-red-500"
              )}>
                {score}/{shuffledQuestions.length}
              </div>
              <div className={cn(
                "text-xl font-bold mb-4",
                pct >= 70 ? "text-emerald-500" : pct >= 50 ? "text-amber-500" : "text-red-500"
              )}>
                {pct}%
              </div>
              <p className="text-lg mb-6">{getScoreMessage()}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={() => startQuiz(selectedTopic)} className="gap-2">
                  <RotateCcw className="h-4 w-4" /> আবার খেলো
                </Button>
                <Button variant="outline" onClick={() => setSelectedTopic(null)} className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> অন্য টপিক
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  // Active quiz
  const question = shuffledQuestions[currentQ];
  const isCorrect = selected === question.correctIndex;
  const progress = ((currentQ + 1) / shuffledQuestions.length) * 100;

  return (
    <Layout>
      <section className={`bg-gradient-to-br ${selectedTopic.color} py-4 md:py-6`}>
        <div className="container">
          <div className="flex items-center justify-between text-white">
            <Button variant="ghost" className="text-white hover:bg-white/20 p-2" onClick={() => setSelectedTopic(null)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="text-center">
              <span className="text-lg font-bold">{selectedTopic.emoji} {selectedTopic.name}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
              <Star className="h-4 w-4" />
              <span className="font-bold">{score}</span>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-3 bg-white/20 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/80 text-xs mt-1 text-center">
            প্রশ্ন {currentQ + 1} / {shuffledQuestions.length}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-2xl">
          {/* Question */}
          <Card className="p-5 md:p-8 mb-4">
            <div className="flex items-start gap-3 mb-6">
              <div className={`bg-gradient-to-br ${selectedTopic.color} text-white rounded-xl h-10 w-10 flex items-center justify-center font-bold text-lg shrink-0`}>
                {currentQ + 1}
              </div>
              <h2 className="text-lg md:text-xl font-bold leading-relaxed">{question.question}</h2>
            </div>

            <div className="grid gap-3">
              {question.options.map((option, idx) => {
                const isThisCorrect = idx === question.correctIndex;
                const isThisSelected = idx === selected;

                let optionClass = "border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 flex items-center gap-3 text-left ";

                if (!answered) {
                  optionClass += "border-border hover:border-primary hover:bg-primary/5 hover:scale-[1.02] active:scale-[0.98]";
                } else if (isThisCorrect) {
                  optionClass += "border-emerald-500 bg-emerald-500/10 scale-[1.02]";
                } else if (isThisSelected && !isThisCorrect) {
                  optionClass += "border-red-500 bg-red-500/10 animate-[shake_0.5s_ease-in-out]";
                } else {
                  optionClass += "border-border opacity-50";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={answered}
                    className={optionClass}
                  >
                    <span className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border-2",
                      !answered && "border-muted-foreground/30 text-muted-foreground",
                      answered && isThisCorrect && "border-emerald-500 bg-emerald-500 text-white",
                      answered && isThisSelected && !isThisCorrect && "border-red-500 bg-red-500 text-white",
                      answered && !isThisCorrect && !isThisSelected && "border-muted-foreground/20 text-muted-foreground/50"
                    )}>
                      {answered && isThisCorrect ? <CheckCircle2 className="h-5 w-5" /> :
                       answered && isThisSelected ? <XCircle className="h-5 w-5" /> :
                       String.fromCharCode(65 + idx)}
                    </span>
                    <span className="font-medium">{option}</span>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Feedback message */}
          {answered && (
            <Card className={cn(
              "p-4 mb-4 text-center",
              isCorrect ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"
            )}>
              <p className="text-lg font-bold">{message}</p>
              {!isCorrect && (
                <p className="text-sm mt-1 text-muted-foreground">
                  সঠিক উত্তর: <span className="font-bold text-emerald-600">{question.options[question.correctIndex]}</span>
                </p>
              )}
            </Card>
          )}

          {/* Next button */}
          {answered && (
            <div className="text-center">
              <Button
                onClick={nextQuestion}
                size="lg"
                className={`gap-2 bg-gradient-to-r ${selectedTopic.color} text-white hover:opacity-90 text-base px-8`}
              >
                {currentQ + 1 >= shuffledQuestions.length ? (
                  <><Trophy className="h-5 w-5" /> ফলাফল দেখো</>
                ) : (
                  <><Zap className="h-5 w-5" /> পরের প্রশ্ন</>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CSS for shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
      `}</style>
    </Layout>
  );
};

export default Quiz;
