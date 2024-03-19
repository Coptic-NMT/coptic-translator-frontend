import {useLocale} from 'next-intl';
 
export default function useTextDirection(locale: string) {
  const defaultLocale = useLocale();
  if (!locale) locale = defaultLocale;
  return locale === "ar" ? 'rtl' : 'ltr';
}