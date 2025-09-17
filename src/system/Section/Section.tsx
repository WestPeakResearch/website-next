import Image, {StaticImageData} from "next/image";

type SectionColor = "primary" | "secondary" | "tertiary";

interface SectionProps {
  color?: SectionColor;
  backgroundImage?: StaticImageData;
  backgroundImageAlt?: string;
  darkenBackground?: boolean;
  children: React.ReactNode;
}

export function Section({
  color = "primary",
  backgroundImage,
  backgroundImageAlt,
  darkenBackground,
  children,
}: SectionProps) {
  const foregroundColorVariants = {
    primary: "text-primary-foreground",
    secondary: "text-secondary-foreground",
    tertiary: "text-tertiary-foreground",
  };

  const backgroundColorVariants = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  };

  const variantClasses = [foregroundColorVariants[color]];
  if (backgroundImage) {
    if (darkenBackground) {
      variantClasses.push("bg-black/40");
    }
  } else {
    variantClasses.push(backgroundColorVariants[color]);
  }

  return (
    <section
      className={`${variantClasses.join(" ")} w-full relative overflow-x-hidden`}
    >
      <div className="w-11/12 p-4 md:w-4/5 md:p-8 mx-auto max-w-[1600px]">
        {children}
      </div>
      {backgroundImage && (
        <div className="-z-10 absolute blur-sm top-0 w-full h-full transform-[scale(1.05)] ">
          <Image
            className="object-cover"
            src={backgroundImage}
            alt={backgroundImageAlt || "Background image"}
            fill={true}
          />
        </div>
      )}
    </section>
  );
}
