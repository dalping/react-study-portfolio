import React from "react";
import * as Styled from "../style";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillPage(props) {
  return (
    <Styled.SkillContainer
      className="skillPage"
      ref={(el) => {
        props.scrollRef.current[2] = el;
      }}
    >
      <h1 style={{ marginTop: "30px" }}>Skills</h1>
      <Styled.IconContainer>
        <div className="skills">
          <div className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <span>HTML</span>
          </div>
          <div className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <span>CSS</span>
          </div>
          <div className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <span>React</span>
          </div>
          <div className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
            <span>Redux</span>
          </div>
          <div className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
            <span>MySQL</span>
          </div>
          <div className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <span>MongoDB</span>
          </div>
          <div className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            <span>Node.js</span>
          </div>
          <div className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />
            <span>Webpack</span>
          </div>
          <div className="skill">
            <div style={{ fontSize: "3rem" }}>💅</div>
            <span>Styled-Component</span>
          </div>
          <div className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />
            <span>Bootstrap</span>
          </div>
        </div>
      </Styled.IconContainer>
    </Styled.SkillContainer>
  );
}

export default SkillPage;
