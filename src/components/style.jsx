import styled from "styled-components";

export const SkillContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  background-color: rgb(201, 201, 201);
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  width: 100%;
  padding-top: 60px;
  background-color: white;

  .project {
    img {
      width: 100px;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  width: 80%;

  .skills {
    display: flex;
    flex-wrap: wrap;
  }

  .skill {
    /* width: 150px; */
    width: calc(100% / 7 - 2rem);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 1rem;
    transition: all 0.5s;

    img {
      width: 50%;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
