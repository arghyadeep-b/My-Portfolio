/* eslint-disable react/prop-types */
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stat = ({ title, count }) => {
  const nums = count % 10;
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <span
        style={{
          fontSize: "3rem",
          color: "var(--secondary-color)",
        }}
      >
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => {
            setCounterOn(false);
          }}
        >
          {counterOn && (
            <CountUp start={0} end={count - nums} duration={3} delay={1} />
          )}
          +
        </ScrollTrigger>
      </span>
      <h2>{title}</h2>
    </div>
  );
};

export default Stat;
