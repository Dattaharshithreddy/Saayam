import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { L, Lang } from './types';

const KEY = 'saayam.lang';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (text: L) => string };

const LanguageContext = createContext<Ctx>({ lang: 'te', setLang: () => {}, t: (x) => x.te });

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Telugu first: the people who struggle most with these processes read Telugu.
  const [lang, setLangState] = useState<Lang>('te');

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((v) => {
        if (v === 'en' || v === 'te') setLangState(v);
      })
      .catch(() => {});
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    AsyncStorage.setItem(KEY, l).catch(() => {});
  }, []);

  const t = useCallback((text: L) => text[lang], [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
