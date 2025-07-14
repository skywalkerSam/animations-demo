import AnimatedIntro from "./animated-intro";
import CtaButton from "./cta-button";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        {/* <Image src="/images/bg.png" alt="background" width={}></Image> */}
        <img src="/images/bg.png" alt="background"></img>
      </div>

      <div className="hero-layout">
        {/* Left: Hero Content */}
        <header className="flex w-screen flex-col justify-center px-5 md:w-full md:px-20">
          <div className="flex flex-col gap-7">
            <AnimatedIntro></AnimatedIntro>
            <CtaButton
              text="Explore..."
              className="h-10 w-45 md:h-12 md:w-60"
              id={1}
            ></CtaButton>
          </div>
        </header>

        {/* Right: 3d Model */}
      </div>
    </section>
  );
}
