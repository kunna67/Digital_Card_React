import React from "react";
import myImage from "../Images/Kunnal.jpeg";
import "../CSS/Info.css";

export default function Info() {
  return (
    <div className="Info">
      <img src={myImage} alt="Ash Moreno" className="--info-image" />
      <h1>Kunnal Bansal</h1>
      <h2>Frontend Developer</h2>
      <p>
        <a
          href="https://www.kunnal.dev"
          target="_blank"
          rel="noreferrer"
          className="--info-portfolio"
        >
          Kunnalkb.dev
        </a>
      </p>
      <div className="--info-buttons">
        <button className="--info-email">
          <a href="mailto:kunnalbansal646@gmail.com">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button className="--info-linkedin">
          <a
            href="https://www.linkedin.com/in/kunnal-bansal-75273a207/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}