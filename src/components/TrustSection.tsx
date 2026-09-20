import React from 'react';
import { Bot, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TrustSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 lg:py-36 border-t border-white/[0.06] bg-black text-center">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        {/* Eyebrow */}
        <div className="text-[11px] font-bold text-blue-400 tracking-wider uppercase mb-3">
          {t.trust.eyebrow}
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-white mb-12 sm:mb-16">
          {t.trust.title}
        </h2>

        {/* 3 Columns with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {/* Column 1: Steam OpenID with Orange Steam Logo */}
          <div className="p-5 rounded-2xl bg-[#0e0f14]/80 border border-white/[0.06] hover:border-blue-500/30 transition-all space-y-2 group">
            <div className="flex items-center gap-2.5 text-[#e07038]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15.5l-2.4-1.2a2.5 2.5 0 0 1-1.1-2.05c0-1.38 1.12-2.5 2.5-2.5.6 0 1.15.21 1.58.56l3.52-2.46A6.98 6.98 0 0 1 12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5h-.1l-1.9 2.85C10.63 20 11.3 20 12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8z" />
              </svg>
              <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">{t.trust.openIdTitle}</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.trust.openIdDesc}
            </p>
          </div>

          {/* Column 2: Mobile Confirmation with Blue Smartphone Icon */}
          <div className="p-5 rounded-2xl bg-[#0e0f14]/80 border border-white/[0.06] hover:border-blue-500/30 transition-all space-y-2 group">
            <div className="flex items-center gap-2.5 text-blue-400">
              <Smartphone className="w-5 h-5" />
              <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">{t.trust.steamGuardTitle}</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.trust.steamGuardDesc}
            </p>
          </div>

          {/* Column 3: Instant Bot Credit with Blue Robot Icon */}
          <div className="p-5 rounded-2xl bg-[#0e0f14]/80 border border-white/[0.06] hover:border-blue-500/30 transition-all space-y-2 group">
            <div className="flex items-center gap-2.5 text-blue-400">
              <Bot className="w-5 h-5" />
              <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">{t.trust.botTitle}</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.trust.botDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
