type SectionColor = "primary" | "secondary" | "tertiary";

interface SectionProps {
  color?: SectionColor;
  children: React.ReactNode;
}

export function Section({color = "primary", children}: SectionProps) {
  const colorVariants = {
    primary: "text-primary-foreground bg-primary",
    secondary: "text-secondary-foreground bg-secondary",
    tertiary: "text-tertiary-foreground bg-tertiary",
  };

  return (
    <section className={`${colorVariants[color]} w-full`}>
      <div className="w-11/12 p-4 md:w-4/5 md:p-8 mx-auto max-w-[1600px]">
        {children}
      </div>
    </section>
  );
}
