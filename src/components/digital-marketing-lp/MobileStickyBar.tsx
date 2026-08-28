"use client";

import { Phone, Calendar } from "lucide-react";

interface MobileStickyBarProps {
  onOpenAudit: () => void;
}

export function MobileStickyBar({ onOpenAudit }: MobileStickyBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#080f1e]/95 backdrop-blur-xl border-t border-white/[0.1] px-4 pt-3 pb-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href="tel:2164088962"
          className="flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/15 text-white font-extrabold text-xs h-12 px-3 rounded-xl border border-white/15 text-center active:scale-95 transition-all shadow-md"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="truncate">(216) 408-8962</span>
        </a>

        <button
          onClick={onOpenAudit}
          className="btn-shimmer flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 active:from-blue-700 active:to-cyan-600 text-white font-extrabold text-xs h-12 px-3 rounded-xl shadow-lg shadow-blue-600/30 border border-cyan-400/30 text-center active:scale-95 transition-all cursor-pointer whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Free Growth Audit</span>
        </button>
      </div>
    </div>
  );
}
