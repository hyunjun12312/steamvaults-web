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
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('sv_language') as Language;
    if (saved && (saved === 'ko' || saved === 'en' || saved === 'ru' || saved === 'zh')) {
      return saved;
    }
    // Check browser language
    const navLang = navigator.language.toLowerCase();
    if (navLang.startsWith('ko')) return 'ko';
    if (navLang.startsWith('ru')) return 'ru';
    if (navLang.startsWith('zh')) return 'zh';
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
