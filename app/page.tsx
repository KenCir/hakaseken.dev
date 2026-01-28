"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { About } from "@/components/About";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowArrow(!entry.isIntersecting);
      },
      {
        threshold: 0.5, // Heroが半分以上見えているか
      },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <main className="min-h-screen bg-background text-foreground">
        <section className="relative h-svh flex items-center justify-center">
          <div className="text-center space-y-8 px-6">
            <Image
              src="/avatar.webp"
              alt="HakaseKen icon"
              width={541}
              height={541}
              className="mx-auto w-32 h-32 rounded-full object-cover border border-white/10 shadow-md"
              priority
            />

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight space-y-8">
              博瀬 健(Hakase Ken)
            </h1>
            <p className="text-lg text-muted-foreground">
              Programmer / Engineer
            </p>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className={`
            absolute bottom-6 left-1/2 -translate-x-1/2
            transition-all duration-300
            ${showArrow ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </a>
        </section>

        {/* 👇 Heroの直下に置く監視用 */}
        <div ref={heroRef} className="h-px" />

        <About />

        <Experience />

        <Skills />

        <SocialLinks />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
