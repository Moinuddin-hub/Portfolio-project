import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Animate } from "react-simple-animate";
import image from "./resume/moin resume (1).pdf";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Moin uddin
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="contacts">
          <div className="home__contact-me">
            <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          </div>
          <div className="home__contact-me">
            <button className="btn">
              <a href={image} download="Resume" className="btn__contact">
                Download
              </a>
            </button>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
