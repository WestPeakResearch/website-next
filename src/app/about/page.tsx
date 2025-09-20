import {Hero} from "@/system/Hero/Hero";
import stockpitch from "@/images/backgrounds/stockpitch.jpg";

export default function About() {
  return (
    <Hero
      title="About Us"
      subtitle="Where UBC students ignite their spark for finance."
      backgroundImage={stockpitch}
      long
    />
  );
}
