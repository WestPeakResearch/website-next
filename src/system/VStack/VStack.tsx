import clsx from "clsx";

export function VStack({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx(className, "flex flex-col gap-6")}>{children}</div>
  );
}
