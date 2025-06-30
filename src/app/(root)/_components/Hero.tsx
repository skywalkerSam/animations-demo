// import Image from "next/image";
// import StarboyLogo from "~/app/_components/starboy-logo";

export default function Hero() {
  return (
    <div>
      {/* <div className="flex-center min-h-screen">
        <StarboyLogo></StarboyLogo>
      </div> */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
          {/* <Image src="/images/bg.png" alt="background" width={}></Image> */}
          <img src="/images/bg.png" alt="background"></img>
        </div>
        <div className="hero-layout">

        </div>
      </section>
    </div>
  );
}
