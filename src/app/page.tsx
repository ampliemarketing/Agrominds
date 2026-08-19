import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { RegionalContext } from "@/components/sections/RegionalContext";
import { WhatYoullLearn } from "@/components/sections/WhatYoullLearn";
import { Specialists } from "@/components/sections/Specialists";
import { Schedule } from "@/components/sections/Schedule";
import { Ebook } from "@/components/sections/Ebook";
import { Audience } from "@/components/sections/Audience";
import { ConversionBlock } from "@/components/sections/ConversionBlock";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Faq } from "@/components/sections/Faq";
import { LastCall } from "@/components/sections/LastCall";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RegionalContext />
        <WhatYoullLearn />
        <Specialists />
        <Schedule />
        <Ebook />
        <Audience />
        <ConversionBlock />
        <HowItWorks />
        <Faq />
        <LastCall />
      </main>
      <Footer />
    </>
  );
}
