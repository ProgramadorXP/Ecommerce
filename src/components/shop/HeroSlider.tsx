"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    tag: "Fashion Collection",
    title: "Discover your next",
    highlight: "Style",
    description:
      "Curated premium clothing designed for your modern lifestyle. Timeless silhouettes for every occasion.",
    cta: "Shop Fashion",
    link: "/products",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    tag: "Cutting-edge Tech",
    title: "The future of",
    highlight: "Innovation",
    description:
      "Experience high-performance technology. From powerful workstations to mobile essentials for your daily grind.",
    cta: "Explore Tech",
    link: "/products",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop",
    tag: "Active Lifestyle",
    title: "Power your",
    highlight: "Performance",
    description:
      "Gear up for your next challenge. Premium sports and wellness essentials designed to push your limits.",
    cta: "View Sport",
    link: "/products",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen md:h-[650px] overflow-hidden text-black dark:text-white">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === current ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          {/* Background Image with Theme-Aware Overlay */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />
            {/* Dynamic overlay: White in light mode, Black in dark mode */}
            <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/40 to-transparent dark:from-black/90 dark:via-black/40 dark:to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-white/80 via-transparent to-transparent dark:from-black/80 dark:via-transparent dark:to-transparent" />
          </div>

          <div className="container mx-auto h-full flex flex-col justify-center px-4 relative z-20">
            <div
              className={cn(
                "max-w-2xl space-y-6 transition-all duration-1000 delay-300",
                index === current
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0",
              )}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-[#5A6EFF]/20 backdrop-blur-md text-[#5A6EFF] dark:text-white text-xs font-bold uppercase tracking-widest border border-[#5A6EFF]/10 dark:border-white/10">
                {slide.tag}
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                {slide.title} <br />
                <span className="text-[#5A6EFF] italic">{slide.highlight}</span>
              </h1>
              <p className="text-black/80 dark:text-white/90 text-xl font-medium max-w-lg">
                {slide.description}
              </p>
              <div className="pt-6">
                <Link
                  href={slide.link}
                  className="inline-flex h-16 items-center justify-center rounded-2xl bg-[#5A6EFF] px-12 text-base font-black text-white shadow-2xl shadow-[#5A6EFF]/30 transition-all hover:scale-105 active:scale-95 no-underline border-none cursor-pointer"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-30">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "w-12 h-1 rounded-full transition-all duration-500",
                index === current
                  ? "bg-[#5A6EFF]"
                  : "bg-black/20 dark:bg-white/20",
              )}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
