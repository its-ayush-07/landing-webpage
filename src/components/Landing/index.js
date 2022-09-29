import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { LandingWrapper, Menu, Content } from "./LandingElements";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../Navbar";

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LandingWrapper>
      <Spline scene="https://prod.spline.design/O4T4WRxvG4luKqG1/scene.splinecode" />

      <Content>
        <Navbar toggle={toggle} />

        <h1>
          <span className="text">AT METAFY</span>

          <div class="message">
            <div class="word1">WE BUILD</div>
            <div class="word2">WE Connect</div>

            <div class="word3">WE Expand</div>
          </div>
        </h1>

        <div className="typewriter">
          <p className="line">
            At Metafy we are building blockchain based solutions for real-world
            problems and making the blockchain more easily accessible to the
            public. We are a team of developers, designers, and blockchain
            enthusiasts who are passionate about building a better future for
            the world. We are currently working on a few projects and are
            looking for more people to come join us in our mission to make the
            world a better place for everyone. We are looking for people who are
            passionate about blockchain and want to make a difference in the
            world. If you are interested in joining us, please reach out to us
            on our Discord server.
          </p>
        </div>
      </Content>
    </LandingWrapper>
  );
};

export default Landing;