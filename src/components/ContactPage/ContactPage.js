import React from "react";
import * as Styled from "../style";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";

function ContactPage(props) {
  return (
    <Styled.ContactContainer
      className="bottomPage"
      ref={(el) => {
        props.scrollRef.current[4] = el;
      }}
    >
      <h1>Contact</h1>
      <div className="bottomInfo">
        <span style={{ fontSize: "1.3rem" }}>김보경</span>
        <div className="mail">
          <MailOutlined />
          <span>kbing14@naver.com</span>
        </div>
      </div>
      <div className="icons">
        <GithubOutlined
          className="icon"
          onClick={() => window.open("https://github.com/dalping", "_blank")}
        />
        <InstagramFilled className="icon" />
      </div>
    </Styled.ContactContainer>
  );
}

export default ContactPage;
