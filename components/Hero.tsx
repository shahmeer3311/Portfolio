"use client";

import { useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Spotlights
      tl.from(".spotlight", {
        opacity: 0,
        scale: 0.7,
        y: -120,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      })

        // Small heading
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          "-=0.8"
        )

        // Main heading
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
          },
          "-=0.4"
        )

        // Description
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          "-=0.4"
        )

        // Button
        .from(
          ".hero-button",
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );

      // Floating animation for spotlights
      gsap.to(".spotlight", {
        y: 20,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.3,
          from: "random",
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <div ref={heroRef} id="home" className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="spotlight -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />

        <Spotlight
          className="spotlight h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />

        <Spotlight
          className="spotlight left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center
          justify-center dark:bg-black-100 bg-white
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="hero-subtitle uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <div className="hero-title">
            <TextGenerateEffect
              words="Building Intelligent Web Applications with Modern Technologies"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
          </div>

          <p className="hero-description text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Shahmeer, a Next.js Developer.
          </p>

          <div className="hero-button">
            <a href="#projects" className="w-full md:w-auto">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;