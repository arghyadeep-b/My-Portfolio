import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <SiLeetcode />
      </div>
    </div>
  );
}

export default SocialMedia;
