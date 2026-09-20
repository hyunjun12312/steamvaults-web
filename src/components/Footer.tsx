import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-black py-12 sm:py-16 text-zinc-400 text-xs">
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8">
        {/* Left: (1) Site Info  (2) Links  (3) Support  (4) Legal */}
        <div className="flex items-center gap-6 text-[11px] text-zinc-400">
          <a href="/site-info" className="hover:text-white transition-colors">(1) Site Info</a>
          <a href="/links" className="hover:text-white transition-colors">(2) Links</a>
          <a href="/support" className="hover:text-white transition-colors">(3) Support</a>
          <a href="/legal" className="hover:text-white transition-colors">(4) Legal</a>
        </div>

        {/* Right: All systems operational ● */}
        <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
          <span>All systems operational</span>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
        </div>
      </div>
    </footer>
  );
};
