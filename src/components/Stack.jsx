import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STACKLIST } from  '../constants/StackList';
import '../asset/styles/portfolio_v4.scss'

const Stack = () => {
    const horizontalRef = useRef(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRefs.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
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
            }
        })

        return () => {
            scrollTween.kill();
        };
    }, []);

    const [isFlipped, setIsFlipped] = useState([]);

    const handleFlip = (index) => {
        const flippedState = [...isFlipped];
        flippedState[index] = !flippedState[index];
        setIsFlipped(flippedState);
    };

    
    return (
        <section id="stack" ref={horizontalRef}>
            <div className="stack__inner">
                <h2 className="stack__title">
                경험과 공부를 통해 <br />
                저는 매일 성장하고 있습니다. 
                </h2>
                <div className="stack__wrap">
                    {STACKLIST.map((stack, key) => (
                        <div 
                            className={`stack__item p${key + 1} ${isFlipped[key] ? 'flipped' : ''} card_item` }
                            key={key}
                            ref={(el) => (sectionRefs.current[key] = el)}
                            onClick={() => handleFlip(key)}
                        >
                            <span className="num">{stack.num}.</span>
                            <div className="front_card">
                                <button 
                                    // href={stack.code} 
                                    className="img front_card" 
                                    rel="noreferrer noopener"
                                >
                                    <h3 className="title">{stack.title}</h3>
                                </button>
                            </div>
                            <div className="back_card">
                                <p className="desc">{stack.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Stack;
