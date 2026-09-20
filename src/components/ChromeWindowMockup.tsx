import React from 'react';
import { Lock, Shield } from 'lucide-react';

export const ChromeWindowMockup: React.FC = () => {
  return (
    <div className="w-full max-w-[560px] rounded-t-2xl border-t border-x border-white/[0.16] bg-[#12151e] shadow-[0_-10px_35px_rgba(0,0,0,0.6)] overflow-hidden select-none">
      {/* 1. macOS Browser Window Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0b0e14] border-b border-white/[0.08]">
        {/* Left: macOS Window Controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm border border-black/30" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm border border-black/30" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm border border-black/30" />
        </div>

        {/* Center: Address Bar */}
        <div className="flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#161a24] border border-white/[0.08] text-[11px] text-zinc-300 w-full max-w-[260px] mx-2 justify-center shadow-inner">
          <Lock className="w-3 h-3 text-blue-400 shrink-0" />
          <span className="font-mono text-zinc-300 truncate">steamvaults.org/inventory</span>
        </div>

        {/* Right: Chrome Controls */}
        <div className="flex items-center gap-2 text-zinc-500">
          <div className="w-2 h-2 rounded-full bg-blue-400/80 animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-400 font-semibold">v0.7.6</span>
        </div>
      </div>

      {/* 2. Main Webpage Content Area */}
      <div className="p-5 sm:p-6 grid grid-cols-12 gap-5 items-center bg-gradient-to-br from-[#131722] via-[#0f121b] to-[#0c0e15]">
        {/* Left Side: Headline & Button */}
        <div className="col-span-7 space-y-4 relative z-10">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-[1.18]">
            Instant at, 1-click <br />
            inventory inspection
          </h3>

          {/* Action Button with Cursor & Curved Arrow */}
          <div className="relative inline-block pt-1">
            <button
              type="button"
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_24px_rgba(59,130,246,0.6)] border border-blue-400/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Instant 1-click inventory</span>
            </button>

            {/* Vector White Hand Cursor clicking the button */}
            <div className="absolute -bottom-3 right-1 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)] z-20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10 2v10.5l-2.07-2.07a1.8 1.8 0 0 0-2.55 2.54l5.12 5.13a4.5 4.5 0 0 0 3.18 1.32H17a4 4 0 0 0 4-4v-5a1.5 1.5 0 0 0-3 0V9a1.5 1.5 0 0 0-3 0v-.5a1.5 1.5 0 0 0-3 0V2a1.5 1.5 0 0 0-3 0z"
                  fill="white"
                  stroke="#111827"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Elegant Curved Arrow pointing towards the inventory drawer */}
            <div className="absolute -right-14 -bottom-1 pointer-events-none hidden sm:block z-10">
              <svg width="64" height="28" viewBox="0 0 64 28" fill="none">
                <path
                  d="M4 16 C 24 28, 46 24, 58 8"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="2 0"
                />
                <path
                  d="M50 7 L 59 7 L 57 16"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Steam Inventory Drawer Mockup */}
        <div className="col-span-5 rounded-xl border border-white/[0.12] bg-[#161a26]/95 p-3 shadow-2xl backdrop-blur-md space-y-2.5">
          {/* User Profile Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-1.5 min-w-0">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-[9px] font-bold text-white shadow-sm shrink-0">
                D
              </div>
              <span className="text-[11px] font-bold text-white truncate max-w-[76px]">
                Dima_TF Demos
              </span>
            </div>
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-blue-500/20 border border-blue-500/30 text-[9px] font-mono font-bold text-blue-400 shrink-0">
              <Shield className="w-2.5 h-2.5" />
              <span>USDT 1,250</span>
            </div>
          </div>

          {/* Section Subtitle */}
          <div className="flex items-center justify-between text-[9px] text-zinc-400 font-medium px-0.5">
            <span>COLLECTIONS</span>
            <span className="font-mono text-zinc-500">6 ITEMS</span>
          </div>

          {/* 3x2 Grid of Weapon Skins */}
          <div className="grid grid-cols-3 gap-1.5">
            {/* 1. AK-47 Case Hardened (Gold / Tier 1) */}
            <div className="p-1.5 rounded-lg border border-amber-500/50 bg-gradient-to-b from-amber-500/20 to-amber-950/20 flex flex-col items-center justify-center aspect-square shadow-sm hover:border-amber-400 transition-colors group">
              <div className="w-full flex justify-end">
                <span className="text-[7px] font-mono font-bold text-amber-300">T1</span>
              </div>
              <div className="my-auto text-amber-400 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-4" viewBox="0 0 28 14" fill="currentColor">
                  <path d="M2 8h4l2-2h10l2 2h6v2h-4l-1 3h-2l1-3H10l-2 3H5l2-3H2V8z" opacity="0.9" />
                </svg>
              </div>
              <span className="text-[7px] font-mono text-amber-400 font-bold truncate w-full text-center">AK-47</span>
            </div>

            {/* 2. AWP Dragon Lore / Redline (Covert Red) */}
            <div className="p-1.5 rounded-lg border border-rose-500/50 bg-gradient-to-b from-rose-500/20 to-rose-950/20 flex flex-col items-center justify-center aspect-square shadow-sm hover:border-rose-400 transition-colors group">
              <div className="w-full flex justify-end">
                <span className="text-[7px] font-mono font-bold text-rose-300">★</span>
              </div>
              <div className="my-auto text-rose-400 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-4" viewBox="0 0 28 14" fill="currentColor">
                  <path d="M1 8h7l2-3h12l5 2v1h-5l-1 4h-2l1-4H11l-3 4H4l2-4H1V8z" opacity="0.9" />
                </svg>
              </div>
              <span className="text-[7px] font-mono text-rose-400 font-bold truncate w-full text-center">AWP</span>
            </div>

            {/* 3. Karambit Doppler (Sapphire Blue) */}
            <div className="p-1.5 rounded-lg border border-blue-500/50 bg-gradient-to-b from-blue-500/20 to-blue-950/20 flex flex-col items-center justify-center aspect-square shadow-sm hover:border-blue-400 transition-colors group">
              <div className="w-full flex justify-end">
                <span className="text-[7px] font-mono font-bold text-blue-300">0.01</span>
              </div>
              <div className="my-auto text-blue-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-4" viewBox="0 0 24 14" fill="currentColor">
                  <path d="M4 11c3-6 10-8 16-4-4 4-8 6-12 5l-4 3c-1-1-1-3 0-4z" opacity="0.9" />
                </svg>
              </div>
              <span className="text-[7px] font-mono text-blue-400 font-bold truncate w-full text-center">Karambit</span>
            </div>

            {/* 4. Specialist Gloves (Yellow/Gold) */}
            <div className="p-1.5 rounded-lg border border-yellow-500/50 bg-gradient-to-b from-yellow-500/20 to-yellow-950/20 flex flex-col items-center justify-center aspect-square shadow-sm hover:border-yellow-400 transition-colors group">
              <div className="w-full flex justify-end">
                <span className="text-[7px] font-mono font-bold text-yellow-300">Gloves</span>
              </div>
              <div className="my-auto text-yellow-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-4" viewBox="0 0 24 14" fill="currentColor">
                  <path d="M6 3h4v4h3V5h3v4h2v5H6V3z" opacity="0.9" />
                </svg>
              </div>
              <span className="text-[7px] font-mono text-yellow-400 font-bold truncate w-full text-center">Gloves</span>
            </div>

            {/* 5. M4A4 Howl (Covert Orange/Red) */}
            <div className="p-1.5 rounded-lg border border-orange-500/50 bg-gradient-to-b from-orange-500/20 to-orange-950/20 flex flex-col items-center justify-center aspect-square shadow-sm hover:border-orange-400 transition-colors group">
              <div className="w-full flex justify-end">
                <span className="text-[7px] font-mono font-bold text-orange-300">Howl</span>
              </div>
              <div className="my-auto text-orange-400 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-4" viewBox="0 0 28 14" fill="currentColor">
                  <path d="M2 9h5l2-3h9l2 2h6v2h-4l-1 3h-2l1-3H11l-2 3H6l2-3H2V9z" opacity="0.9" />
                </svg>
              </div>
              <span className="text-[7px] font-mono text-orange-400 font-bold truncate w-full text-center">M4A4</span>
            </div>

            {/* 6. Butterfly Knife (Violet / Fade) */}
            <div className="p-1.5 rounded-lg border border-purple-500/50 bg-gradient-to-b from-purple-500/20 to-purple-950/20 flex flex-col items-center justify-center aspect-square shadow-sm hover:border-purple-400 transition-colors group">
              <div className="w-full flex justify-end">
                <span className="text-[7px] font-mono font-bold text-purple-300">★</span>
              </div>
              <div className="my-auto text-purple-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-4" viewBox="0 0 24 14" fill="currentColor">
                  <path d="M5 2l5 5-2 2-5-5 2-2zm8 0l6 6-2 2-6-6 2-2zm-2 7l3 3-5 5-3-3 5-5z" opacity="0.9" />
                </svg>
              </div>
              <span className="text-[7px] font-mono text-purple-400 font-bold truncate w-full text-center">Butterfly</span>
            </div>
          </div>

          {/* Action Buttons in Drawer */}
          <div className="pt-1 space-y-1.5">
            <button
              type="button"
              className="w-full py-1.5 rounded-lg bg-white/[0.09] hover:bg-white/[0.15] text-[9.5px] font-bold text-zinc-200 text-center cursor-pointer transition-colors border border-white/[0.08] flex items-center justify-center gap-1"
            >
              <span>Inspect & Export to Steam</span>
            </button>
            <div className="text-[8.5px] text-zinc-500 text-center font-mono hover:text-zinc-400 cursor-pointer">
              Close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
