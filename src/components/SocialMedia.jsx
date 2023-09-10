import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { HiDocumentDownload } from "react-icons/hi";

function SocialMedia() {
  const [linkedin, github, leetcode] = [
    "https://www.linkedin.com/in/arghyadeep-bhowmick/",
    "https://github.com/arghyadeep-b",
    "https://leetcode.com/arghyadeep-bhowmick/",
  ];

  const handleClick = (link) => {
    window.open(link);
  };

  const downloadCV = () => {
    // window.location.href = "http://localhost:3000/ERP_CV1.pdf";
    fetch("http://localhost:3000/ERP_CV1.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Arghyadeep-Bhowmick_CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="app__social">
      <div onClick={() => handleClick(linkedin)}>
        <BsLinkedin />
      </div>
      <div onClick={() => handleClick(leetcode)}>
        <SiLeetcode />
      </div>
      <div onClick={() => handleClick(github)}>
        <BsGithub />
      </div>
      <div onClick={downloadCV}>
        <HiDocumentDownload style={{ scale: "1.1" }} />
      </div>
    </div>
  );
}

export default SocialMedia;
