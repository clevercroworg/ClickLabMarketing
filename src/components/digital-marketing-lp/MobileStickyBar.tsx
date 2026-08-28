"use client";

import { Phone, Calendar } from "lucide-react";

interface MobileStickyBarProps {
  onOpenAudit: () => void;
}

export function MobileStickyBar({ onOpenAudit }: MobileStickyBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080f1e]/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:p-3 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.4)]">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:2164088962"
          className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-black text-xs py-3.5 px-3 rounded-2xl border border-slate-700 text-center active:scale-95 transition-all"
        >
          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
            <Phone className="w-3 h-3 fill-current text-cyan-400" />
          </div>
          <span className="truncate">(216) 408-8962</span>
        </a>

        <button
          onClick={onOpenAudit}
          className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 active:from-blue-700 active:to-cyan-600 text-white font-black text-xs py-3.5 px-3 rounded-2xl shadow-lg shadow-blue-600/30 border border-blue-400/30 text-center active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Free Growth Audit</span>
        </button>
      </div>
    </div>
  );
}
