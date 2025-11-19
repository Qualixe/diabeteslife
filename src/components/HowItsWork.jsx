import { CircleCheckBig } from "lucide-react";
import HeroButton from "./Button";
import { useTranslation, Trans } from "react-i18next";

const HowItsWork = () => {
  const { t } = useTranslation();

  // key points from translation JSON
  const points = t("how.points", { returnObjects: true });

  return (
    <section
      id="howitswork"
      className="py-12 px-4 md:px-10 md:py-20 bg-white w-full"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-10 md:gap-16">
        
        {/* === Left: Image === */}
        <div
          className="flex-1 flex justify-center md:justify-start"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="/Hero-Image.webp"
            alt={t("how.title")}
            className="rounded-2xl w-full max-w-md md:max-w-3xl hover:scale-102 transition-transform duration-700"
          />
        </div>

        {/* === Right: Text Content === */}
        <div
          className="flex-1 text-left mt-6 sm:mt-8 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {/* Title + Subtitle */}
          <h2 className="font-bold text-black leading-tight mb-4 text-[clamp(2rem,5vw,3.5rem)]">
            <Trans i18nKey="how.title" />{" "}
            <span className="bg-accent bg-clip-text text-transparent">
              <Trans i18nKey="how.subtitle" />
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm md:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed font-myfont font-regular text-gray-900">
            <Trans i18nKey="how.description" />
          </p>

          {/* Key Points */}
          <div className="mt-3 sm:mt-6 space-y-3">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start lg:items-center mt-0.5 md:mt-0 p-0 bg-white rounded-2xl gap-2 sm:gap-3"
                data-aos="fade-left"
                data-aos-delay={`${300 + index * 100}`}
              >
                <div className="shrink-0 text-primary w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-lg">
                  <CircleCheckBig className="w-full h-full" />
                </div>
                {/* Use Trans for points */}
                <p className="text-base lg:text-lg md:text-md text-gray-900 leading-snug">
                  <Trans i18nKey={`how.points.${index}`} />
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 flex justify-start text-sm md:text-[10px] lg:text-[16px]">
            <HeroButton
              text={t("how.cta")}
              href="https://worlddiabetesday.org/diabetes-workplace-quiz/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItsWork;
