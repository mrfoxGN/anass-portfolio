import Image from "next/image";

export default function HeroArtwork() {
  return (
    <div
      className="hero-artwork"
      aria-hidden="true"
    >
      <Image
        src="/images/hero-artwork.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-artwork-image"
      />
    </div>
  );
}