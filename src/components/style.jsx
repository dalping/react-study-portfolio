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

export const ContactContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  .bottomInfo {
    color: rgb(163, 163, 163);
    display: flex;
    flex-direction: column;
    margin: 10px;
    .mail {
      display: flex;
      gap: 5px;
      justify-content: center;
      align-items: center;
    }
  }

  .icons {
    display: flex;
    gap: 20px;
    margin-top: 20px;

    .icon {
      font-size: 50px;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export const ProjectContainer = styled.div`
  width: 100%;
  padding-top: 60px;
  background-color: white;

  .projects {
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 50px;

    .project {
      display: flex;
      .image {
        width: 100%;
        cursor: pointer;

        img {
          width: 100%;
          border: 2px solid black;
          border-radius: 5px;
        }
      }
      .desc {
        width: 100%;
      }
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
