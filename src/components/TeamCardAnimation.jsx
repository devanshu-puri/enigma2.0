"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const TeamCardAnimation = ({ cards }) => {
  const container = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cardsEls = cardRefs.current;

      if (!container.current || !cardsEls.length) return;

      // Pin wrapper while scrolling
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top+=80", // space for navbar
        end: "+=" + cardsEls.length * window.innerHeight,
        pin: ".sticky-cards-container",
        scrub: true,
      });

      // Timeline that fades/scales between cards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top+=80",
          end: "+=" + cardsEls.length * window.innerHeight,
          scrub: true,
        },
      });

      for (let i = 0; i < cardsEls.length - 1; i++) {
        // Fade out + shrink current card
        tl.to(
          cardsEls[i],
          { scale: 0.7, y: -100, opacity: 0, duration: 1, ease: "power1.inOut" },
          i
        );

        // Fade in + reset next card
        tl.to(
          cardsEls[i + 1],
          { scale: 1, y: 0, opacity: 1, duration: 1, ease: "power1.inOut" },
          i
        );
      }
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="sticky-cards-wrapper" ref={container}>
        <div className="sticky-cards-container relative h-screen w-full">
          {cards.map((card, index) => (
            <div
  key={index}
  className="sticky-card absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end pb-12"
  ref={(el) => (cardRefs.current[index] = el)}
  style={{
    zIndex: cards.length - index,
    opacity: index === 0 ? 1 : 0,
    transform: "scale(1)",
  }}
>

              {/* Info panel */}
              <div className="sticky-card-info bg-black/60 text-white p-4 rounded-xl mb-4 text-center max-w-lg">
                <h3 className="member-name text-2xl font-bold">{card.name}</h3>
                <p className="member-role text-lg">{card.role}</p>
                {card.link && card.link !== "#" && (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-btn inline-block mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 
                      0-5 2.239-5 5v14c0 2.761 
                      2.239 5 5 5h14c2.762 0 
                      5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 
                      19h-3v-11h3v11zm-1.5-12.268c-.966 
                      0-1.75-.79-1.75-1.764s.784-1.764 
                      1.75-1.764 1.75.79 
                      1.75 1.764-.783 1.764-1.75 
                      1.764zm13.5 
                      12.268h-3v-5.604c0-3.368-4-3.113-4 
                      0v5.604h-3v-11h3v1.765c1.396-2.586 
                      7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
              </div>

              {/* Image */}
              <img
                src={`assets/team/${card.img}`}
                alt={card.name}
                className="sticky-card-image max-h-[70vh] rounded-2xl shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </ReactLenis>
  );
};

export default TeamCardAnimation;
