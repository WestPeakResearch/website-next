import Link from "next/link";

interface LinkButtonProps {
  href: string;
  target?: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  color?: string;
}

export default function LinkButton({
    href,
    children,
    disabled = false,
    target = "_self",
    color = "#113d69",
    className = "",}: LinkButtonProps) {
  const style = {
    "--btn-color": color,
  } as React.CSSProperties;
  return (
     <Link
     href={disabled ? "#" : href}
     target={target}
     aria-disabled={disabled}
     tabIndex={disabled ? -1 : 0}
     style={style}
     className={`
       inline-flex
       w-auto max-w-fit
       px-3 py-2 rounded-sm border
       text-[var(--btn-color)]
       border-[var(--btn-color)]
       hover:bg-[color-mix(in_srgb,var(--btn-color)_12%,transparent)]
       ${disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : ""}
       ${className}
     `}
   >
        {children}
    </Link>
  );
}