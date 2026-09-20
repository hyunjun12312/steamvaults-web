import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36 lg:py-44 bg-black overflow-hidden text-center">
      {/* Ambient Blue Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white mb-8 sm:mb-10">
          {t.finalCta.title}
        </h2>

        <div className="flex items-center justify-center gap-3.5">
          {/* Button 1: Solid White Button */}
          <a
            href="https://steamvaults.org/auth/steam/login"
            className="rounded-xl bg-white px-7 py-3 text-xs sm:text-sm font-bold text-black transition-all hover:bg-zinc-200 active:scale-95 shadow-lg"
          >
            {t.finalCta.signInBtn}
          </a>

          {/* Button 2: Bordered Dark Button */}
          <a
            href="#swap"
            className="rounded-xl border border-zinc-700/80 bg-[#141518] px-7 py-3 text-xs sm:text-sm font-medium text-white transition-all hover:bg-zinc-800 active:scale-95"
          >
            {t.finalCta.liveQuoteBtn}
          </a>
        </div>
      </div>
    </section>
  );
};
