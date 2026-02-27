import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Trainers from "./pages/Trainers";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import Payment from "./pages/Payment";
import Quiz from "./pages/Quiz";
import QnA from "./pages/QnA";
import Suggestion from "./pages/Suggestion";
import Shortcut from "./pages/Shortcut";
import BasicKnowledge from "./pages/BasicKnowledge";
import Blog from "./pages/Blog";
import NoticeBoard from "./pages/NoticeBoard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/shortcut" element={<Shortcut />} />
          <Route path="/basic-knowledge" element={<BasicKnowledge />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/notice-board" element={<NoticeBoard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
