import React from "react";
import {CAREERLIST01, CAREERLIST02} from "../constants/CareerList";


import '../asset/styles/portfolio_v4.scss'


function sortCareerList(careerList) {
    return careerList.slice().sort((a, b) => {
        const numA = parseInt(a.num);
        const numB = parseInt(b.num);
        return numB - numA;
    });
}

const Project = ({ tag }) => {
    const sortedCareerList01 = sortCareerList(CAREERLIST01);
    const sortedCareerList02 = sortCareerList(CAREERLIST02);
    
    const getLabelClass = (tag) => {
        if (tag.includes('maintenance')) {
            return 'maintenance';
        } else if (tag.includes('new')) {
            return 'new';
        } else {
            return tag.toLowerCase();
        }
    };


    return (
        <div className="section_main_project" id="project">
            <div className="inner">
                <h2 className="section_title">
                    저는 퍼블리셔로서, ui개발자로서
                    <br /> 다양한 프로젝트를 진행했습니다.
                </h2>
                <div className="carrer_box">
                    <div className="carrer_01">
                        <h3 className="section_sub_title">첫번째, 인컴즈에서의 이야기</h3>
                        <div className="section_text">
                            <p>IT기업의 체계적인 프로세스를 배웠습니다.</p>
                            <p>기본이 탄탄한 퍼블리셔로 성장했습니다.</p>
                        </div>
                        <ul className="carrer_list">
                            {sortedCareerList01.map((project, index) => (
                            <li key={index} className="list_item">
                                <a href={`https://${project.link}`} target="_blank" className="btn_link" rel="noreferrer">
                                    <div className="index_area">
                                        <span className="text_num">{project.num}</span>
                                    </div>
                                    <dl className="info_list">
                                        <dt className="info_title">Tag</dt>
                                        <dd className="info_des">
                                            {project.tag.map((tag, index) => (
                                                <span key={index} className="text_area">
                                                    <span className={`label label_${getLabelClass(tag)}`}>{tag}</span>
                                                </span>
                                            ))}
                                        </dd>
                                    </dl>
                                    <dl className="info_list">
                                        <dt className="info_title">Period</dt>
                                        <dd className="info_des">{project.period}</dd>
                                    </dl>
                                    <dl className="info_list">
                                        <dt className="info_title">Ordering<br />department</dt>
                                        <dd className="info_des">{project.orderingDepartment}</dd>
                                    </dl>
                                    <dl className="info_list hyper">
                                        <dt className="info_title">https://</dt>
                                        <dd className="info_des linked">{project.link}</dd>
                                    </dl>
                                    <dl className="info_list">
                                        <dt className="info_title">Project</dt>
                                        <dd className="info_des">{project.project}</dd>
                                    </dl>
                                </a>
                            </li> 
                            ))}
                        </ul>
                    </div>
                    <div className="carrer_02">
                        <h3 className="section_sub_title">두번째, 교보문고에서의 이야기</h3>
                        <div className="section_text">
                            <p>많은 협의체들과 함께 의사결정하는 과정을 통해 네트워킹에 대해 배웠습니다.</p>
                            <p>새로운 팀과 새로운 과제들을 바탕으로 새로운 것에 도전할 줄 아는 웹 개발자로 성장할 발판을 마련했습니다.</p>
                        </div>
                        <ul className="carrer_list">
                            {sortedCareerList02.map((project, index) => (
                            <li key={index} className="list_item">
                                <a href={`https://${project.link}`} target="_blank" className="btn_link" rel="noreferrer">
                                    <div className="index_area">
                                        <span className="text_num">{project.num}</span>
                                    </div>
                                    <dl className="info_list">
                                        <dt className="info_title">Tag</dt>
                                        <dd className="info_des">
                                            {project.tag.map((tag, index) => (
                                                <span key={index} className="text_area">
                                                    <span className={`label label_${getLabelClass(tag)}`}>{tag}</span>
                                                </span>
                                            ))}
                                        </dd>
                                    </dl>
                                    <dl className="info_list">
                                        <dt className="info_title">Period</dt>
                                        <dd className="info_des">{project.period}</dd>
                                    </dl>
                                    <dl className="info_list">
                                        <dt className="info_title">Ordering<br />department</dt>
                                        <dd className="info_des">{project.orderingDepartment}</dd>
                                    </dl>
                                    <dl className="info_list hyper">
                                        <dt className="info_title">https://</dt>
                                        <dd className="info_des linked">{project.link}</dd>
                                    </dl>
                                    <dl className="info_list">
                                        <dt className="info_title">Project</dt>
                                        <dd className="info_des">{project.project}</dd>
                                    </dl>
                                </a>
                            </li> 
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
