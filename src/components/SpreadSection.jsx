import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroButton from "./Button";
import { useTranslation, Trans } from "react-i18next";

export default function SpreadSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  // Facts from translation JSON
  const facts = t("spread.facts", { returnObjects: true });

  const colorVars = [
    "var(--color-one)",
    "var(--color-two)",
    "var(--color-three)",
    "var(--color-four)",
    "var(--color-five)",
  ];

  return (
    <section
      id="spread"
      className="w-full bg-background py-12 md:py-20 px-4 md:px-10 flex justify-center"
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center sm:space-y-6">
        
        {/* Title */}
              <h2
          data-aos="fade-up"
          data-aos-delay="250"
          className=" text-2xl md:text-6xl font-bold  leading-tight text-gray-900"
        >
          {t('spread.title')} <span className="lg:block bg-accent bg-clip-text text-transparent animate-gradient-x">{t('spread.subtitle')}</span> 
        </h2>

        {/* Facts Grid */}
        <div
          className="mt-5 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Left Column 1–5 */}
          <div className="space-y-4">
            {facts.slice(0, 5).map((fact, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className="flex font-myfont items-center justify-start gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-500 min-h-auto md:min-h-[100px]"
              >
                <div
                  className="font-bold rounded-full w-10 h-10 flex items-center justify-center text-base shadow-sm shrink-0"
                  style={{
                    backgroundColor: colorVars[index % colorVars.length],
                    color: "var(--color-secondary)",
                  }}
                >
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed text-left">
                  <Trans i18nKey={`spread.facts.${index}`} />
                </p>
              </div>
            ))}
          </div>

          {/* Right Column 6–10 */}
          <div className="space-y-4">
            {facts.slice(5).map((fact, index) => (
              <div
                key={index + 5}
                data-aos="fade-left"
                data-aos-delay={index * 100}
                className="flex font-myfont items-center justify-start gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-500 min-h-auto sm:min-h-[100px]"
              >
                <div
                  className="font-bold rounded-full w-10 h-10 flex items-center justify-center text-base shadow-sm shrink-0"
                  style={{
                    backgroundColor: colorVars[colorVars.length - 1 - index],
                    color: "var(--color-secondary)",
                  }}
                >
                  {index + 6}
                </div>
                <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed text-left">
                  <Trans i18nKey={`spread.facts.${index + 5}`} />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="max-w-[1000px] mx-auto pt-12 text-center text-sm">
          <HeroButton
            text={t("spread.cta")}
            className="mx-auto"
            href="https://worlddiabetesday.org/"
          />
        </div>
      </div>
    </section>
  );
}
