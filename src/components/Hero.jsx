import HeroButton from "./Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full md:h-screen   flex items-center justify-start overflow-hidden"
    >
      {/*======== Background Video============== */}
      <video
        className="absolute inset-0 w-full h-full  object-cover"
        src="/HeroBG.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/HeroBgFallback.avif"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0  bg-black/30"></div>

      {/* Content */}
      <div
        className="
          w-full max-w-[1200px] relative z-10 mx-auto 
          px-4 sm:px-6 
          pt-40 sm:pt-28 md:pt-32
          text-left text-white
        "
      >
        {/* Main Heading */}
        <h1
          className="
            font-bold font-myfont mb-2 md:mb-5 drop-shadow-lg leading-tight
            max-w-3xl
            text-3xl sm:text-5xl md:text-6xl lg:text-[60px]
          "
        >
          Know More and Do More
          
          <span className="ml-2.5 lg:ml-0 lg:block bg-accent bg-clip-text text-transparent animate-gradient-x">
            for Diabetes at Work
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="
            text-md sm:text-base md:text-2xl 
            mb-4 md:mb-9  max-w-lg leading-relaxed text-gray-100 
            pt-4 md:pt-5 font-myfont font-regular
          "
        >
          Join our movement to raise awareness and promote a healthier future
          for everyone.
        </p>

        {/* CTA Button */}
        <div className="text-sm md:text-[16px]  md:pb-0 md:mb-0 mb-10">
        <HeroButton text="Are you in Diabetes Risk?"
          href="https://worlddiabetesday.org/t2d-risk-test/"
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
