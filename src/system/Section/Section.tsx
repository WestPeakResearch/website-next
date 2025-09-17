export function Section({children}: {children: React.ReactNode}) {
  return (
    <section className="w-11/12 p-4 md:w-4/5 md:p-8 mx-auto max-w-[1600px]">
      {children}
    </section>
  );
}
