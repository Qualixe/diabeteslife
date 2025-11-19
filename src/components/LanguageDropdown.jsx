import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Check, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "bn", label: "বাংলা" }
];

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    languages.find((l) => l.code === i18n.language) || languages[0]
  );
  const buttonRef = useRef(null);
  const [dropdownStyles, setDropdownStyles] = useState({});

  const toggleDropdown = () => setOpen(!open);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.code);
    setSelected(lang);
    document.documentElement.lang = lang.code;
    setOpen(false);
  };



  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-lg text-white text-sm hover:bg-white/20 transition-shadow shadow-md"
      >
        {selected.label}
        <ChevronDown className="w-4 h-4 text-white/70" />
      </button>

      {open && (
        <ul
          className="absolute z-50 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-md py-2 text-white text-sm"
          style={{ ...dropdownStyles }}
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className={`cursor-pointer select-none px-5 py-2 hover:bg-white/20 flex justify-between items-center`}
            >
              {lang.label}
              {selected.code === lang.code && <Check className="w-4 h-4 ml-2 text-accent" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
