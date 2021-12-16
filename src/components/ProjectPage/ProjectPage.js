import React from "react";
import * as Styled from "../style";

function ProjectPage(props) {
  return (
    <Styled.ProjectContainer
      className="projectPage"
      ref={(el) => {
        props.scrollRef.current[3] = el;
      }}
    >
      <h1 style={{ marginTop: "30px" }}>Project</h1>
      <div className="projects">
        <div className="project pettlog">
          <div className="image">
            <img
              alt
              src="https://github.com/dalping/Image-Save/blob/main/etc/pettlog.png?raw=true"
            ></img>
          </div>
          <div className="desc">
            <h3>Pettlog</h3>
            <span>블로그 SNS 입니다.</span>
            <span></span>
          </div>
        </div>
        <div className="project findpet"></div>
      </div>
    </Styled.ProjectContainer>
  );
}

export default ProjectPage;
