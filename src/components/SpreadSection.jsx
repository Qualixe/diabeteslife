import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroButton from "./Button";
import VideoGallery from "./VideoGallery";

export default function SpreadSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const facts = [
    "Provide a safe and private space for diabetes management and adequate storage for supplies.",
    "Provide access to food, water, toilet facilities, and breaks for people attend to medical needs.",
    "Foster an inclusive environment free from fear and diabetes-related stigma.",
    "Offer mental well-being support to employees.",
    "Make healthy food and snacks available in the workplace.",
    "Encourage physical activity through programs and incentives.",
    "Have a trained first aider and the necessary supplies to treat a diabetes-related emergency.",
    "Offer flexible working arrangements (e.g., part-time or remote work).",
    "Make information about diabetes available in the workplace.",
    "Organize diabetes screenings.",
  ];

  const colorVars = [
    "var(--color-one)",
    "var(--color-two)",
    "var(--color-three)",
    "var(--color-four)",
    "var(--color-five)"
  ];


  return (
    <section
      id="spread"
      className="w-full bg-background py-12  md:py-20 px-4  md:px-10 flex justify-center"
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center sm:space-y-6">


        

        


        <h2
          data-aos="fade-up"
          data-aos-delay="250"
          className=" text-2xl md:text-6xl font-bold font-myfont leading-tight text-gray-900"
        >
          10 Ways to Support Diabetes <span className="lg:block bg-accent bg-clip-text text-transparent animate-gradient-x">Awareness at Work</span> 
        </h2>


        <div
          className="mt-5 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full"
          data-aos="fade-up"
          data-aos-delay="300"
        >

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
                  {fact}
                </p>
              </div>
            ))}
          </div>

        
          {/* === Right Column: 6–10 === */}
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
                  {fact}
                </p>
              </div>
            ))}
          </div>

        </div>
                  {/* Button */}
      <div className="max-w-[1000px] mx-auto pt-12 text-center text-sm">
        <HeroButton text="Learn More" className="mx-auto"
          href="https://worlddiabetesday.org/"
        
        />

      </div>

      </div>
    </section>
  );
}
