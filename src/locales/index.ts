import en from './en.json';
import cs from './cs.json';

export type Locale = 'en' | 'cs';
export type TranslationKey = keyof typeof en;

export const locales: Record<Locale, Record<string, string>> = { en, cs };
