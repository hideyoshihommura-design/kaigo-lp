"use client";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solution } from "@/components/sections/Solution";
import { UseCases } from "@/components/sections/UseCases";
import { Results } from "@/components/sections/Results";
import { Curriculum } from "@/components/sections/Curriculum";
import { Features } from "@/components/sections/Features";
import { Subsidy } from "@/components/sections/Subsidy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Seminar } from "@/components/sections/Seminar";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FloatingCTA } from "@/components/sections/FloatingCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <UseCases />
      <Results />
      <Curriculum />
      <Features />
      <Subsidy />
      <Testimonials />
      <Seminar />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <FloatingCTA />
      <Footer />
    </main>
  );
}
