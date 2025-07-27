"use client";
import { nameList, doList, emojiList } from "_data/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AnimatedIntro() {
  // Animations are neat, but don't keep the users waiting!
  useGSAP(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(".hero-text h1", { y: 0, opacity: 1 });
      return;
    }
    gsap.fromTo(
      ".hero-text h1",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power2.inOut" },
    );
  }, []);

  return (
    <div className="hero-text">
      <h1>
        <span className="slide">
          <span className="wrapper">
            {emojiList.map((word, i) => (
              <span key={i} className="flex items-center gap-1 pb-2 md:gap-3">
                <span>{word.text}</span>
              </span>
            ))}
          </span>
        </span>
      </h1>
      <br />
      <h1>
        i<span className="text-sky-400">&apos;</span>m
        <span className="slide">
          <span className="wrapper">
            {nameList.map((word, i) => (
              <span key={i} className="flex items-center gap-1 pb-2 md:gap-3">
                <span className="text-sky-400">{word.text}</span>
              </span>
            ))}
          </span>
        </span>
      </h1>
      <h1>
        i
        <span className="slide">
          <span className="wrapper">
            {doList.map((word, i) => (
              <span key={i} className="flex items-center gap-1 pb-2 md:gap-3">
                {/* <img
                          src={word.imgSrc}
                          alt={word.text}
                          className="bg-white-50 size-7 rounded-full p-1 md:size-10 md:p-2 xl:size-12"
                        ></img> */}
                <span className="text-sky-400">{word.text}</span>
              </span>
            ))}
          </span>
        </span>
      </h1>
      <h1>
        Stuff<span className="text-sky-400">.</span>
      </h1>
    </div>
  );
}
