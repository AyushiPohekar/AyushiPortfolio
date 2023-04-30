import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://c.pxhere.com/photos/63/d6/cellphone_desk_iphone_laptop_macbook_notebook_notepad_pencil-972233.jpg!s2"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h2 className="a-title">About Me</h2>

        <div className="a-desc">
          I am an Electrical Engineer by education who started exploring the
          fascinating world of Mern Stack Development .In this exciting journey
          till now I learned many technologies. I have passion for working on
          projects that involves problem
          solving,creating,attractive,unique,user-friendly UI designs and
          User-Interface that is dynamic.I also like to support it with strong
          backend.I have interest in MERN stack
          i.e.MongoDB,ExpressJS,ReactJS,NodeJS. I am hard-working individual who
          focus on details and problem solving.
        </div>
      </div>
    </div>
  );
};

export default About;
