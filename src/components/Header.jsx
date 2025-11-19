import LanguageDropdown from "./LanguageDropdown";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 lg:px-0">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between gap-5 py-4 transition-all duration-500">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.avif" alt="Main logo" className="h-14 w-auto object-contain" />
          <img src="/logo2.png" alt="Secondary logo" className="h-16 w-auto object-contain sm:block" style={{filter:"brightness(0) invert(1)"}} />
        </a>

     
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
