import { useEffect, useState } from "react";
import Settings from "./settings";

const useTranslation = () => {
  const [locale, setLocale] = useState(Settings.locale);
  useEffect(() => Settings.subscribe(setLocale), []);
  return locale;
};

export default useTranslation;
