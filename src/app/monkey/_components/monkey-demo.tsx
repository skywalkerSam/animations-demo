import Monkey3D from "./monkey-3d/Monkey3D";

export default function MonkeyDemo() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center">
      <figure className="hero-3d-layout">
        <div>
          <Monkey3D></Monkey3D>
        </div>
      </figure>
    </section>
  );
}
