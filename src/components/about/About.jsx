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
          As a dedicated MERN Stack Developer, I have excelled in
          problem-solving, crafting unique and user-friendly UI designs, and
          building robust backends. Proficient in MongoDB, ExpressJS, ReactJS,
          and NodeJS, I am actively seeking job opportunities to apply and
          enhance these skills. With a strong work ethic, a proven academic
          record, and a commitment to continuous learning, I am eager to
          contribute value to a forward-thinking company and further expand my
          skillset.
        </div>
      </div>
    </div>
  );
};

export default About;
