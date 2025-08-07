import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// ✅ Updated icons
import mernIcon from "../assets/1.png";
import genAiIcon from "../assets/2.png";
import promptIcon from "../assets/3.png";
import daIcon from "../assets/4.png";

// ✅ Services array updated with correct icons
const services = [
  { title: "MERN Developer", icon: mernIcon },
  { title: "GenAI Enthusiast", icon: genAiIcon },
  { title: "Prompt Engineer", icon: promptIcon },
  { title: "Data Analyst", icon: daIcon },
];

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);

  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 100, scale: 0.8 },
      to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    },
    index * 0.2
  );

  // ✅ Enlarge icons for GenAI and Data Analyst
  const isLargeIcon = title === "GenAI Enthusiast" || title === "Data Analyst";
  const iconSize = isLargeIcon ? "w-24 h-24" : "w-16 h-16";

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div
        ref={cardRef}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className={`${iconSize} object-contain`}
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(
    paragraphRef,
    {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    0.3
  );

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        ref={paragraphRef}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a passionate and dedicated fresher with a strong interest in
        technology and development. I’m eager to explore real-world
        opportunities, learn new skills, and contribute meaningfully to
        innovative projects. With a curious mindset and a   <br />willingness to grow,
        I’m excited to begin my journey in the tech industry. Let's <br />work together to bring your ideas to life!
        <br /><br />I am also focusing on these apart from FrontEnd.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
