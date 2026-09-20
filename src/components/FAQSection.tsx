import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 lg:py-36 bg-black">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="border-t border-zinc-800">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-zinc-800">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between py-6 text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-medium text-white tracking-wide group-hover:text-blue-300 transition-colors">
                    {item.q}
                  </span>
                  <span className="text-zinc-500 text-base font-light group-hover:text-white transition-colors">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-4 text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1 text-left">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


