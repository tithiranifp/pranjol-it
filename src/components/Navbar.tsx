import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, ChevronDown, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "হোম", path: "/" },
  { label: "কোর্সসমূহ", path: "/courses" },
  { label: "প্রশিক্ষকগণ", path: "/trainers" },
  { label: "গ্যালারি", path: "/gallery" },
  { label: "জিজ্ঞাসা", path: "/faq" },
  { label: "যোগাযোগ", path: "/contact" },
];

const resourceItems = [
  { label: "কুইজ", path: "/quiz" },
  { label: "প্রশ্ন ও উত্তর", path: "/qna" },
  { label: "সাজেশন", path: "/suggestion" },
  { label: "শর্টকাট", path: "/shortcut" },
  { label: "বেসিক নলেজ", path: "/basic-knowledge" },
  { label: "ব্লগ", path: "/blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileResourceOpen, setMobileResourceOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isResourceActive = resourceItems.some((item) => location.pathname === item.path);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <img src="/pranjol-it-logo.png" alt="Pranjol IT Logo" className="h-12 w-auto rounded-lg object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Resource Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                isResourceActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              রিসোর্স
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-card rounded-lg border border-border shadow-lg py-1 animate-fade-in z-50">
                {resourceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {/* Notice Board Button with animated bg */}
          <Link to="/notice-board">
            <Button
              size="sm"
              className="relative overflow-hidden border-0 text-white font-semibold animate-notice-btn"
            >
              <Bell className="h-4 w-4 mr-1.5" />
              নোটিশ বোর্ড
            </Button>
          </Link>
          <Link to="/admission">
            <Button variant="hero" size="sm">ভর্তি হোন</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Resource Accordion */}
            <button
              onClick={() => setMobileResourceOpen(!mobileResourceOpen)}
              className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                isResourceActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:bg-muted"
              }`}
            >
              রিসোর্স
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileResourceOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileResourceOpen && (
              <div className="ml-4 flex flex-col gap-1 animate-fade-in">
                {resourceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => { setOpen(false); setMobileResourceOpen(false); }}
                    className={`px-3 py-2 rounded-md text-sm transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground/70 hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Notice Board */}
            <Link to="/notice-board" onClick={() => setOpen(false)} className="mt-1">
              <Button size="sm" className="w-full relative overflow-hidden border-0 text-white font-semibold animate-notice-btn">
                <Bell className="h-4 w-4 mr-1.5" />
                নোটিশ বোর্ড
              </Button>
            </Link>

            <Link to="/admission" onClick={() => setOpen(false)} className="mt-1">
              <Button variant="hero" className="w-full">ভর্তি হোন</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
