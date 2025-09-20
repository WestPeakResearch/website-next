import {StaticImageData} from "next/image";
import {Section} from "../Section/Section";
import clsx from "clsx";

interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: React.ReactNode;
  backgroundImage: StaticImageData;
  long?: boolean;
  height?: string;
}

export function Hero({
  title,
  subtitle,
  cta,
  backgroundImage,
  long,
  height = "250px",
}: HeroProps) {
  return (
    <Section backgroundImage={backgroundImage}>
      <div
        className={clsx(
          "text-white text-shadow-md/50 flex flex-col mt-navbar-height ",
          long
            ? "h-(--hero-height) justify-end [&>*]:max-w-[750px] [&>*]:mb-6"
            : "h-18 text-center justify-center",
        )}
        style={{"--hero-height": height} as React.CSSProperties}
      >
        <h1 className="text-6xl font-bold">{title}</h1>
        {long && <h2 className="text-2xl font-medium">{subtitle}</h2>}
        {cta}
      </div>
    </Section>
  );
}
