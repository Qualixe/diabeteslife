import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageFontProvider({ children }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "bn") {
      document.body.classList.add("font-anek");
      document.body.classList.remove("font-apis");
    } else {
      document.body.classList.add("font-apis");
      document.body.classList.remove("font-anek");
    }
  }, [i18n.language]);

  return <>{children}</>;
}
