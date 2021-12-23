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
              onClick={() =>
                window.open(
                  "https://radiant-hamlet-78297.herokuapp.com/",
                  "_blank"
                )
              }
            ></img>
          </div>
          <div className="desc">
            <h3>Pettlog</h3>
            <span>블로그 SNS 입니다.</span>
            <span></span>
          </div>
        </div>
        <div className="project findpet">
          <div className="project pettlog">
            <div className="desc">
              <h3>Find Pet</h3>
              <span>유기동물 공고 사이트</span>
              <span></span>
            </div>
            <div className="image">
              <img
                alt
                src="https://github.com/dalping/Image-Save/blob/main/etc/findpet.png?raw=true"
                onClick={() =>
                  window.open(
                    "https://dalping.github.io/react-app-FindPet/",
                    "_blank"
                  )
                }
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Styled.ProjectContainer>
  );
}

export default ProjectPage;
