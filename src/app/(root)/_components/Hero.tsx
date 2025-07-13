import AnimatedIntro from "./animated-intro";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        {/* <Image src="/images/bg.png" alt="background" width={}></Image> */}
        <img src="/images/bg.png" alt="background"></img>
      </div>

      <div className="hero-layout">
        {/* Left: Hero Content */}
          <AnimatedIntro></AnimatedIntro>        

        {/* Right: 3d Model */}
      </div>
    </section>
  );
}
