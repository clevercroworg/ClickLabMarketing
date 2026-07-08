"use client";

import { useState, useEffect, useRef } from "react";
import { Shield, Search, ArrowUp, Printer, Calendar, CheckCircle2 } from "lucide-react";
import data from "@/data/privacy-policy.json";

export default function PrivacyPolicyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("introduction");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Filter sections based on search query
  const filteredSections = data.sections.filter((section) => {
    if (section.id === "introduction") return true; // Always keep introduction
    const query = searchQuery.toLowerCase();
    return (
      section.title.toLowerCase().includes(query) ||
      section.content.toLowerCase().includes(query)
    );
  });

  // Track scroll position to highlight active section and show back to top button
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      setShowScrollTop(window.scrollY > 400);

      // Determine active section
      const scrollPosition = window.scrollY + 200;
      let currentSection = "introduction";

      for (const section of data.sections) {
        const el = contentRefs.current[section.id];
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = contentRefs.current[id];
    if (el) {
      const offset = el.offsetTop - 120; // Account for sticky navbar
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper to render body text with clean structure
  const renderContentText = (content: string, sectionId: string) => {
    const lines = content.split("\n");
    
    // Custom layout for Acceptance Details
    if (sectionId === "acceptance-details") {
      const detailsMap: { [key: string]: string } = {};
      lines.forEach((line) => {
        // Better parser for key-value format
        const match = line.match(/^([^:]+):\s*(.*)$/);
        if (match) {
          detailsMap[match[1].trim()] = match[2].trim();
        } else {
          // Fallback parsing for raw space separation
          const pairMatch = line.match(/^(Owner Id|Owner Name|IP Address|Date Of Acceptance|Signatory Name|Contact Number|Email)\s+(.*)$/);
          if (pairMatch) {
            detailsMap[pairMatch[1].trim()] = pairMatch[2].trim();
          }
        }
      });

      return (
        <div className="mt-8 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
          {/* Certificate-style background details */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10" />
          
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-2xl">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-gray-900 dark:text-slate-100 font-bold text-lg sm:text-xl">Acceptance Signed & Verified</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                This document is electronically accepted and binding under the Information Technology Act, 2000.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-150 dark:border-slate-800 pt-6 mt-4 text-sm font-medium">
            {Object.entries(detailsMap).map(([key, value]) => (
              <div key={key} className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-1">
                <span className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">{key}</span>
                <span className="text-slate-800 dark:text-slate-200 break-all">{value}</span>
              </div>
            ))}
            {/* Fallback if parsing failed to extract keys */}
            {Object.keys(detailsMap).length === 0 && (
              <div className="col-span-2 text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                {content}
              </div>
            )}
          </div>
        </div>
      );
    }

    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return null;

      // Handle lists
      if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
        return (
          <li key={idx} className="ml-6 list-disc mb-3 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base pl-2">
            {trimmed.substring(1).trim()}
          </li>
        );
      }

      // Handle specific merchant/customer text highlights or emails
      if (trimmed.includes("@") && (trimmed.includes("Email:") || trimmed.includes("e-mail"))) {
        return (
          <p key={idx} className="mb-4 text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm sm:text-base">
            {trimmed}
          </p>
        );
      }

      return (
        <p key={idx} className="mb-5 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base font-normal">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/30 dark:bg-slate-950/20 flex flex-col font-sans">
      {/* Premium Hero Section */}
      <section className="relative pt-[180px] pb-20 overflow-hidden bg-[#0a0f1d] border-b border-slate-900">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[120%] rounded-full bg-blue-600/10 blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[120%] rounded-full bg-cyan-600/10 blur-[150px]" />
          <div className="absolute inset-0 bg-[url('/bg-grid-white.svg')] opacity-[0.015]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold tracking-widest text-cyan-100 uppercase">Trust & Safety</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4 text-slate-500" />
            Last updated on March 19th, 2024
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Sticky Sidebar (Table of Contents) */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 dark:text-slate-100 text-lg mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Document Outline
            </h3>

            {/* Keyword Search Input */}
            <div className="relative mb-6">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search policy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-800 dark:text-slate-200 font-medium"
              />
            </div>

            <nav className="space-y-1 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
              {filteredSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    activeSection === section.id
                      ? "bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 shadow-sm shadow-blue-500/5 translate-x-1"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    activeSection === section.id ? "bg-blue-600 animate-pulse" : "bg-transparent"
                  }`} />
                  <span className="truncate">{section.title}</span>
                </button>
              ))}
              {filteredSections.length === 0 && (
                <p className="text-slate-400 text-xs text-center py-4">No sections matched your search.</p>
              )}
            </nav>

            <div className="border-t border-slate-100 dark:border-slate-850 mt-6 pt-6 flex gap-4">
              <button
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-950/50 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 py-3 rounded-xl text-sm font-bold border border-slate-200/50 dark:border-slate-800/80 transition-all active:scale-95 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                Print / Save PDF
              </button>
            </div>
          </aside>

          {/* Right Main Content Panel */}
          <main className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm">
            {/* Mobile Actions Panel */}
            <div className="lg:hidden flex flex-col gap-4 mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search policy..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-800 dark:text-slate-200 font-medium"
                />
              </div>
              <button
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 py-3 rounded-xl text-sm font-bold border border-slate-200/50 dark:border-slate-800 transition-all"
              >
                <Printer className="w-4 h-4" />
                Print / Save PDF
              </button>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              {filteredSections.map((section) => (
                <section
                  key={section.id}
                  ref={(el) => {
                    contentRefs.current[section.id] = el;
                  }}
                  className={`policy-section ${section.is_intro ? "mb-10" : "mb-16 scroll-mt-24 border-b border-slate-50 dark:border-slate-850 pb-12 last:border-0 last:pb-0"}`}
                >
                  {!section.is_intro && (
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6 flex items-center gap-2 font-sans tracking-tight">
                      <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full" />
                      {section.title}
                    </h2>
                  )}
                  <div className="text-slate-600 dark:text-slate-350 font-sans tracking-wide leading-relaxed text-sm sm:text-base">
                    {renderContentText(section.content, section.id)}
                  </div>
                </section>
              ))}

              {filteredSections.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-slate-400 text-lg">No sections match your search query: "{searchQuery}"</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-bold mt-4 underline text-sm cursor-pointer"
                  >
                    Clear search filter
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 active:scale-95 z-50 animate-fade-in cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
