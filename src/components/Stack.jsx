import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STACKLIST } from  '../constants/StackList';
import '../asset/styles/portfolio_v4.scss'

const Stack = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

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

    const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = () => {
    setFlippedIndex((prevState) => !prevState);
  };
    
    
    

    
    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <h2 className="port__title">
                경험과 공부를 통해 <br />
                저는 매일 성장하고 있습니다. 
                </h2>
                <div className="port__wrap">
                    {STACKLIST.map((port, key) => (
                        <div 
                            className={`port__item p${key + 1} ${flippedIndex === key ? 'on' : ''} card_item` }
                            key={key}
                            ref={(el) => (sectionRef.current[key] = el)}
                            onClick={handleCardClick}
                        >
                            <span className="num">{port.num}.</span>
                            <div className="front_card">
                                <button 
                                    // href={port.code} 
                                    className="img front_card" 
                                    rel="noreferrer noopener"
                                >
                                    <img src={port.img} alt={port.name} />
                                </button>
                            </div>
                            <div className="back_card">
                                <h3 className="title">{port.title}</h3>
                                <p className="desc">{port.desc}</p>
                                <a 
                                    href={port.view} 
                                    className="site" 
                                    rel="noreferrer noopener"
                                >
                                    사이트 보기</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Stack;
