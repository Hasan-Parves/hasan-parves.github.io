import React, { useState, useEffect, createRef } from "react";
import { educations } from "../../portfolio";
import { Fade } from "react-reveal";
import "./Education.css"; // Assuming you have a CSS file for styling
import ColorThief from "colorthief";

export default function EducationSection() {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();

function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

    if (educations.viewEducation) {
        return (
            <div id="education">
                <Fade bottom duration={1000} distance="20px">
                    <div className="education-container" id="education">
                        <h1 className="education-heading">Education</h1>
                        {educations.degrees.map((degree, index) => (
                            <div key={index} className="education-item">
                                <img crossOrigin={"anonymous"} ref={imgRef} className="education-roundedimg" src={degree.uniLogo} alt={degree.university} onLoad={() => getColorArrays()}/>
                                <h2 className="degree">{degree.degree}</h2>
                                <p className="university">{degree.university}</p>
                                <p className="university">{degree.place}</p>
                                <p className="date">{degree.date}</p>
                                <p className="thesisTopic"><span className="thesis-topic-title">Thesis:</span> <span className="thesis-topic">{degree.thesisTopic}</span></p>
                                <p className="thesisTopic"><span className="thesis-topic-title">Major Project: </span> <span className="thesis-topic">{degree.projectTopic}</span></p>
                                <p className="tech-stack">Tech Stack: {degree.techStack}</p>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        );
    }
    return null;
}
