type TextVariant = "title" | "subtitle" | "body";

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
}

export function Text({variant = "body", children}: TextProps) {
  switch (variant) {
    case "title":
      return <h1 className="text-4xl font-bold">{children}</h1>;
    case "subtitle":
      return <h2 className="text-2xl font-medium">{children}</h2>;
    case "body":
      return <p>{children}</p>;
  }
}
