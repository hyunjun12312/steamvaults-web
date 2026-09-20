import React from 'react';
import chromeWindowHd from '../assets/chrome_window_hd_final.png';
import { useLanguage } from '../context/LanguageContext';

export const ChromeExtensionSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-0 border-t border-white/[0.08] bg-black overflow-hidden">
      {/* Expansive Sapphire Blue Ambient Glow */}
      <div
        className="pointer-events-none absolute right-[5%] bottom-0 w-[580px] h-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 55% 60%, rgba(59, 130, 246, 0.22) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 75%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
          {/* Left Column: Copy & Chrome Extension CTA */}
          <div className="lg:col-span-5 text-left pb-16 sm:pb-24 lg:pb-28 space-y-5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
              <span>{t.extension.spotlight}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.12]">
              {t.extension.title}
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-[420px]">
              {t.extension.subtitle}
            </p>

            {/* CTA Button with Chrome Icon */}
            <div className="pt-2">
              <a
                href="https://chromewebstore.google.com/detail/steamvaults-%E2%80%94-cashout-top/gnlnnppbclknpebdmemnfibjdocdpmkp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:bg-zinc-200 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.18)] cursor-pointer"
              >
                {/* Official Google Chrome Logo SVG */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C7.58 2 3.84 4.88 2.5 8.87l3.86 6.69A8 8 0 0 1 12 4c2.6 0 4.93 1.24 6.42 3.16L19.92 5.66C17.9 3.4 15.11 2 12 2z"
                    fill="#EA4335"
                  />
                  <path
                    d="M12 20a7.99 7.99 0 0 1-6.93-4l-3.86 6.69C3.84 25.12 7.58 28 12 28c4.27 0 7.92-2.69 9.35-6.49l-4.47-7.74A7.98 7.98 0 0 1 12 20z"
                    fill="#34A853"
                    transform="scale(0.85) translate(2, -2)"
                  />
                  <path
                    d="M21.5 12c0-.52-.05-1.03-.15-1.52H12v3.04h5.36a4.6 4.6 0 0 1-1.99 3.01l3.07 2.38C20.24 17.26 21.5 14.83 21.5 12z"
                    fill="#4285F4"
                  />
                  <circle cx="12" cy="12" r="4" fill="white" />
                  <circle cx="12" cy="12" r="3" fill="#1a73e8" />
                </svg>
                <span>Chrome Extension</span>
              </a>
            </div>
          </div>

          {/* Right Column: Ultra-HD 4K Browser Window Mockup flush at bottom */}
          <div className="lg:col-span-7 flex justify-end w-full">
            <div className="relative w-full max-w-[580px] rounded-t-2xl border-t border-x border-white/[0.16] border-b-0 overflow-hidden shadow-[0_-10px_35px_rgba(0,0,0,0.6)] bg-[#0d1017]">
              <img
                src={chromeWindowHd}
                alt="SteamVaults Chrome Extension Window Mockup"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
