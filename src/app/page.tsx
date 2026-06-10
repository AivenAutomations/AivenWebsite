import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { WhyAiven } from "@/components/sections/WhyAiven";
import { Contact } from "@/components/sections/Contact";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <CaseStudy />
        <WhyAiven />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
