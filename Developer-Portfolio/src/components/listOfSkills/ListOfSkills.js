import React from "react";
import "./ListOfSkills.css";
import { skillsSection } from "../../portfolio";

const SkillLegend = () => {
  return (
    <div className="legend">
      <div className="legend-item">
        <div className="circle" style={{ backgroundColor: '#E6E6E6' }}></div>
        <span>Beginner</span>
      </div>
      <div className="legend-item">
        <div className="circle" style={{ backgroundColor: '#CCCCCC' }}></div>
        <span>Basic</span>
      </div>
      <div className="legend-item">
        <div className="circle" style={{ backgroundColor: '#999999' }}></div>
        <span>Professional</span>
      </div>
      <div className="legend-item">
        <div className="circle" style={{ backgroundColor: '#666666' }}></div>
        <span>Advanced</span>
      </div>
      <div className="legend-item">
        <div className="circle" style={{ backgroundColor: '#333333' }}></div>
        <span>Expert</span>
      </div>
    </div>
  );
};

const SkillCircles = ({ skill, level }) => {
  const renderCircles = () => {
    const circles = [];
    let greenShades = ['#E6E6E6', '#CCCCCC', '#999999', '#666666', '#333333']; // Darkest/strongest green applied to level 5

    for (let i = 0; i < level; i++) {
      let circleStyle = { backgroundColor: greenShades[i] };
      circles.push(<div key={i} className="circle" style={circleStyle}></div>);
    }
    return circles;
  };

  return (
    <div className="skill">
      <span className="skill-name">{skill}</span>
      <div className="circle-container">{renderCircles()}</div>
    </div>
  );
};

export default function ListOfSkills() {
  return (
    <div className="app">
    <h1>Skills</h1>
    <SkillLegend />
    <br /> {/* Add a break here */}
    <div className="skill-grid">
      {skillsSection.listSkills.map((skill, index) => (
        <SkillCircles key={index} skill={skill.name} level={skill.level} />
      ))}
    </div>
  </div>

   
  );
}
