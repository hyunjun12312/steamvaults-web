import React, { useState, useRef, useEffect } from 'react';
import { Earth, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../i18n/translations';

import svLogo from '../assets/sv_logo.png';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ko', label: '한국어' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ru', label: 'Русский' },
  { code: 'es', label: 'Español' },
  { code: 'pt-BR', label: 'Português' },
  { code: 'de', label: 'Deutsch' },
  { code: 'vi', label: 'Tiếng Việt' },
];

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 sm:px-8">
        {/* Left: Official SteamVaults Brand with SV badge */}
        <a href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <img
            src={svLogo}
            alt="SteamVaults"
            className="h-6 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-[16px] font-bold tracking-tight select-none">
            <span className="text-[#57b9ee]">Steam</span>
            <span className="text-white">Vaults</span>
          </span>
        </a>

        {/* Center: [Sell  Buy  Escrow  Tools  How it works] */}
        <nav className="hidden sm:flex items-center text-[11px] font-medium text-zinc-400">
          <span className="text-zinc-500">[</span>
          <a href="#swap" className="text-white hover:text-blue-400 px-2 transition-colors">{t.nav.sell}</a>
          <a href="#swap" className="hover:text-white px-2 transition-colors">{t.nav.buy}</a>
          <a href="#swap" className="hover:text-white px-2 transition-colors">{t.nav.escrow}</a>
          <a href="#radar" className="hover:text-white px-2 transition-colors">{t.nav.tools}</a>
          <a href="#faq" className="hover:text-white px-2 transition-colors">{t.nav.howItWorks}</a>
          <span className="text-zinc-500">]</span>
        </nav>

        {/* Right: Language Selector + Sign in with Steam */}
        <div className="flex items-center gap-3">
          {/* Language Selector Dropdown (borderless, matching target design) */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 py-1 text-xs font-normal text-zinc-400 hover:text-white transition-colors cursor-pointer select-none"
            >
              <Earth className="w-3.5 h-3.5 text-zinc-400" />
              <span>{currentLang.label}</span>
              <ChevronDown className="w-3 h-3 text-zinc-400" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-36 max-h-80 overflow-y-auto rounded-xl border border-white/10 bg-[#0e1017]/95 p-1 shadow-2xl backdrop-blur-md z-50 animate-in fade-in zoom-in-95 duration-150">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLanguage(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-1.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                      language === l.code
                        ? 'bg-white/10 text-white font-semibold'
                        : 'text-zinc-400 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <span>{l.label}</span>
                    {language === l.code && <span className="text-zinc-400 text-xs">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sign in with Steam Pill */}
          <a
            href="https://steamvaults.org/auth/steam/login"
            className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold text-black transition-all hover:bg-zinc-200 active:scale-95 shadow-sm whitespace-nowrap"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15.5l-2.4-1.2a2.5 2.5 0 0 1-1.1-2.05c0-1.38 1.12-2.5 2.5-2.5.6 0 1.15.21 1.58.56l3.52-2.46A6.98 6.98 0 0 1 12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5h-.1l-1.9 2.85C10.63 20 11.3 20 12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8z" />
            </svg>
            <span>{t.nav.signIn}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

