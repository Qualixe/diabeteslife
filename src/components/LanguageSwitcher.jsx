import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ className = "" }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = async (lang) => {
    if (lang !== currentLang) {
      await i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
    }
  };

  const buttonBase =
    "px-2 py-1 font-regular text-sm transition-all duration-300 cursor-pointer";

  return (
    <div
      className={`inline-flex gap-0 rounded-0 overflow-hidden border border-white/20 shadow-sm ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        className={`${buttonBase} ${
          currentLang === "en"
            ? "bg-white text-black"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={`${buttonBase} ${
          currentLang === "bn"
            ? "bg-white text-black"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
        onClick={() => changeLanguage("bn")}
      >
        BN
      </button>
    </div>
  );
}
