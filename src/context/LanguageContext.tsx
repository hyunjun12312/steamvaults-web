import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language, TranslationSchema } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const SUPPORTED: Language[] = ['ko', 'en', 'zh-CN', 'zh-TW', 'ja', 'ru', 'es', 'pt-BR', 'de', 'vi'];

  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('sv_language') as Language;
    if (saved && SUPPORTED.includes(saved)) {
      return saved;
    }
    // Check browser language
    const navLang = (navigator.language || '').toLowerCase();
    if (navLang.startsWith('ko')) return 'ko';
    if (navLang === 'zh-tw' || navLang === 'zh-hk') return 'zh-TW';
    if (navLang.startsWith('zh')) return 'zh-CN';
    if (navLang.startsWith('ja')) return 'ja';
    if (navLang.startsWith('ru')) return 'ru';
    if (navLang.startsWith('es')) return 'es';
    if (navLang.startsWith('pt')) return 'pt-BR';
    if (navLang.startsWith('de')) return 'de';
    if (navLang.startsWith('vi')) return 'vi';
    if (navLang.startsWith('en')) return 'en';
    return 'ko'; // Default to Korean
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('sv_language', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] || translations.ko,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
