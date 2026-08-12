import HeroSketch from "@/components/HeroSketch";
import Reveal from "@/components/Reveal";
import TypingRole from "@/components/TypingRole";

export default function Hero() {
  return (
    <section
      className="hero"
      id="home"
    >
      {/* Animated pencil drawing */}

      <HeroSketch />

      {/* Main hero content */}

      <div className="hero-center">
        <Reveal y={6}>
          <h1 className="hero-title">
            Hi, I&apos;m{" "}
            <span className="hero-name">
              Anass
            </span>
          </h1>
        </Reveal>

        <Reveal
          delay={0.08}
          y={6}
        >
          <TypingRole />
        </Reveal>

        <Reveal
          delay={0.16}
          y={6}
        >
          <div className="hero-specialties">
            <span>Backend</span>

            <span className="hero-specialty-dot">
              ·
            </span>

            <span>Systems</span>

            <span className="hero-specialty-dot">
              ·
            </span>

            <span>Full-Stack</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}