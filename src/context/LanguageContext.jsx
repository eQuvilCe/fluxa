import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../data/translations.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('fluxa-lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('fluxa-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => translations[lang] || translations.en, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
