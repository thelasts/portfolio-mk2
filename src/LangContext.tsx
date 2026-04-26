import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { locales, Locale, TranslationKey } from './locales';

interface LangContextType {
    lang: Locale;
    setLang: (l: Locale) => void;
    nls: (key: TranslationKey) => string;
}

const Ctx = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Locale>(() => {
        const b = navigator.language.slice(0, 2) as Locale;
        return b in locales ? b : 'en';
    });

    const nls = useCallback(
        (key: TranslationKey) => locales[lang][key] ?? key,
        [lang],
    );

    return (
        <Ctx.Provider value={{ lang, setLang, nls }}>
            {children}
        </Ctx.Provider>
    );
}

export function useLang() {
    const ctx = useContext(Ctx);
    if (!ctx) throw new Error('useLang() must be inside <LangProvider>');
    return ctx;
}