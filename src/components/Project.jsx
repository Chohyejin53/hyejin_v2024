import React, { useEffect, useRef } from "react";

import {CAREERLIST01, CAREERLIST02} from "../constants/CareerList";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {

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
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        })

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <div className="section_main_project" id="project">
            <div className="inner">
                <div className="swiper mySwiper swiper_01" ref={horizontalRef}>
                    <div className="swiper-wrapper">
                        {CAREERLIST01.map((project, index) => (
                            <div key={index} className="slide_area swiper-slide">
                                <h3 className="section_title">{`첫번째, 인컴즈에서의 이야기 (${project.num})`}</h3>
                                <div className="section_text">
                                    <p>IT기업의 체계적인 프로세스를 배웠습니다.</p>
                                    <p>기본이 탄탄한 퍼블리셔로 성장했습니다.</p>
                                </div>
                                <ul className="carrer_list">
                                    <li className="list_item">
                                        <a href={`https://${project.link}`} target="_blank" className="btn_link" rel="noreferrer">
                                            <div className="index_area">
                                                <span className="text_num">{project.num}</span>
                                            </div>
                                            <dl className="info_list">
                                                <dt className="info_title">Tag</dt>
                                                <dd className="info_des">
                                                    {project.tag.map((tag, index) => (
                                                        <span key={index} className="text_area">
                                                            <span className={`label_${index % 2 === 0 ? 'olive' : 'orange'}`}>{tag}</span>
                                                        </span>
                                                    ))}
                                                </dd>
                                            </dl>
                                            <dl className="info_list">
                                                <dt className="info_title">Period</dt>
                                                <dd className="info_des">{project.period}</dd>
                                            </dl>
                                            <dl className="info_list">
                                                <dt className="info_title">Ordering<br />departmen</dt>
                                                <dd className="info_des">{project.orderingDepartment}</dd>
                                            </dl>
                                            <dl className="info_list hyper">
                                                <dt className="info_title">http://</dt>
                                                <dd className="info_des linked">{project.link}</dd>
                                            </dl>
                                            <dl className="info_list">
                                                <dt className="info_title">Project</dt>
                                                <dd className="info_des">{project.project}</dd>
                                            </dl>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="swiper mySwiper swiper_02">
                    <div className="swiper-wrapper">
                        {CAREERLIST02.map((project, index) => (
                            <div key={index} className="slide_area swiper-slide">
                                <h3 className="section_title">{`첫번째, 인컴즈에서의 이야기 (${project.num})`}</h3>
                                <div className="section_text">
                                    <p>IT기업의 체계적인 프로세스를 배웠습니다.</p>
                                    <p>기본이 탄탄한 퍼블리셔로 성장했습니다.</p>
                                </div>
                                <ul className="carrer_list">
                                    <li className="list_item">
                                        <a href={`https://${project.link}`} target="_blank" className="btn_link" rel="noreferrer">
                                            <div className="index_area">
                                                <span className="text_num">{project.num}</span>
                                            </div>
                                            <dl className="info_list">
                                                <dt className="info_title">Tag</dt>
                                                <dd className="info_des">
                                                    {project.tag.map((tag, index) => (
                                                        <span key={index} className="text_area">
                                                            <span className={`label_${index % 2 === 0 ? 'olive' : 'orange'}`}>{tag}</span>
                                                        </span>
                                                    ))}
                                                </dd>
                                            </dl>
                                            <dl className="info_list">
                                                <dt className="info_title">Period</dt>
                                                <dd className="info_des">{project.period}</dd>
                                            </dl>
                                            <dl className="info_list">
                                                <dt className="info_title">Ordering<br />departmen</dt>
                                                <dd className="info_des">{project.orderingDepartment}</dd>
                                            </dl>
                                            <dl className="info_list hyper">
                                                <dt className="info_title">http://</dt>
                                                <dd className="info_des linked">{project.link}</dd>
                                            </dl>
                                            <dl className="info_list">
                                                <dt className="info_title">Project</dt>
                                                <dd className="info_des">{project.project}</dd>
                                            </dl>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
