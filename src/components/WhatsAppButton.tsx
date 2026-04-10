"use client";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] group"
    >
      {/* Outer ripple rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30" style={{ animation: "whatsappRipple 2s ease-out infinite" }} />
      <span className="absolute inset-0 rounded-full bg-[#25D366]/20" style={{ animation: "whatsappRipple 2s ease-out infinite 0.5s" }} />

      {/* Main button */}
      <div 
        className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.55)] hover:scale-110 transition-all duration-300 cursor-pointer"
        style={{ animation: "whatsappPulse 2.5s ease-in-out infinite" }}
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" fill="white" className="w-9 h-9">
          <path d="M16.004 0h-.008C7.174 0 .004 7.17.004 16c0 3.5 1.134 6.742 3.058 9.375L1.06 31.316l6.155-1.975C9.764 31.07 12.76 32 16.004 32 24.83 32 32 24.826 32 16S24.83 0 16.004 0zm9.31 22.594c-.39 1.1-1.936 2.013-3.182 2.28-.854.18-1.968.325-5.722-1.23-4.805-1.99-7.9-6.867-8.14-7.187-.23-.32-1.936-2.58-1.936-4.92s1.224-3.49 1.66-3.97c.435-.48.95-.6 1.266-.6.317 0 .63.003.907.016.29.014.68-.11 1.064.812.39.94 1.33 3.25 1.447 3.488.116.24.194.517.04.833-.156.32-.234.517-.467.797-.234.28-.49.625-.702.84-.233.234-.476.488-.204.957.27.467 1.206 1.99 2.59 3.222 1.78 1.584 3.28 2.074 3.744 2.314.468.24.74.2 1.013-.12.27-.32 1.17-1.363 1.482-1.833.31-.468.623-.39 1.052-.234.43.156 2.736 1.29 3.204 1.526.468.24.78.354.896.55.116.194.116 1.133-.273 2.232z"/>
        </svg>
      </div>
    </a>
  );
}
