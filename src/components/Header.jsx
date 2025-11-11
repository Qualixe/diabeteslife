
export default function Header() {


  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 lg:px-0 ">
      {/*============= Header content ================*/}
      <nav
        className={`max-w-[1200px] mx-auto flex items-center gap-5  py-4 transition-all duration-500`}
      >
        {/* ================Logos================ */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.avif"
            alt="Main company logo"
            className="h-14 w-auto object-contain"
          />
          <img
            src="/logo2.png"
            alt="Secondary brand logo"
            className="h-16 w-auto object-contain sm:block"
            style={{filter: 'brightness(0) invert(1)'}}
            
          
          />
        </a>
      </nav>

    
    </header>
  );
}
