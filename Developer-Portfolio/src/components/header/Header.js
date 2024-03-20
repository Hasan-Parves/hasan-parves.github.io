import React from "react";
import "./Header.css";
import Headroom from "react-headroom";
import {greeting, workExperiences, educations} from "../../portfolio";

function Header() {
  const exp = workExperiences.viewExperiences;
  const edu = educations.viewEducation;
  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          { exp === true &&
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          }
          { edu === true &&
            <li>
              <a href="#education">Education</a>
            </li>
          }
          <li>
            <a href="#blogs">Porjects</a>
          </li>
          <li>
            <a href="#opensource">GitHub</a>
          </li>
          {/*<li>
            <a href="#projects">Projects</a>
          </li>*/}
          {/*<li>
            <a href="#achievements">Achievements</a>
          </li>*/}
          {/* <li>
            <a href="#certs">Certfications</a>
          </li> */}
        
          {/*<li>
            <a href="#talks">Talks</a>
          </li>*/}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
