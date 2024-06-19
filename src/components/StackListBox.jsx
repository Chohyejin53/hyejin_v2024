import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STACKLIST } from "../constants/StackList";
import "../asset/styles/portfolio_v4.scss";

const StackListBox = () => {
  const horizontalRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionRefs.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -130 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 100px",
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 0.5,
        markers: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  const [isFlipped, setIsFlipped] = useState(
    new Array(STACKLIST.length).fill(false)
  );

  const handleFlip = (index) => {
    const flippedState = [...isFlipped];
    flippedState[index] = !flippedState[index];
    setIsFlipped(flippedState);
  };

  return (
    <section className="section_01" ref={horizontalRef}>
      <div className="inner">
        <h2 className="section_sub_title">
          경험과 공부를 통해 <br />
          저는 매일 성장하고 있습니다.
        </h2>
        <div className="stack_wrap">
          {STACKLIST.map((stack, key) => (
            <div
              className={`stack_item ${
                isFlipped[key] ? "flipped" : ""
              } stack_item`}
              key={key}
              ref={(el) => (sectionRefs.current[key] = el)}
              onClick={() => handleFlip(key)}
            >
              <div className="front_card">
                <span className="num">{stack.num}.</span>
                <h3 className="title">{stack.title}</h3>
              </div>
              <div className="back_card">
                <ul className="stack_list">
                  {stack.desc.map((item, key) => (
                    <li key={key} className="list_item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackListBox;
