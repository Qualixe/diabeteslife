import { useTranslation } from "react-i18next";
import HeroButton from "./Button";

const Hero = () => {
  const { t } = useTranslation();

  const handleCanPlay = (e) => {
    const video = e.target;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.poster = "/HeroBgFallback.avif";
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full md:h-screen px-4 lg:px-0 flex items-center justify-start overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/HeroBgFallback.avif"
        onCanPlay={handleCanPlay}
      >
        <source src="/HeroBG.mp4" type="video/mp4" />

        <img
          src="/HeroBgFallback.avif"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div
        className="
          w-full max-w-[1200px] relative z-10 mx-auto 
          pt-40 sm:pt-28 md:pt-32
          text-left text-white
        "
      >
        {/* Main Heading */}
        <h1
          className="
            font-bold  mb-2 md:mb-5 drop-shadow-lg leading-tight
            max-w-3xl
            text-3xl sm:text-5xl md:text-6xl lg:text-[60px]
          "
        >
          {t("hero.title")}
          <span className="ml-2.5 lg:ml-0 lg:block bg-accent bg-clip-text text-transparent animate-gradient-x">
            {t("hero.subtitle")}
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="
            text-md sm:text-base md:text-2xl 
            mb-4 md:mb-9 max-w-lg leading-relaxed text-gray-100 
            pt-4 md:pt-5  font-regular
          "
        >
          {t("hero.description")}
        </p>

        {/* CTA Button */}
        <div className="text-sm md:text-[16px] md:pb-0 md:mb-0 mb-10">
          <HeroButton
            text={t("hero.button")}
            href="https://worlddiabetesday.org/t2d-risk-test/"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
