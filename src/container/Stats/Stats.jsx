import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Stat } from "../../components";

import "./Stats.scss";

const Stats = () => {
  return (
    <>
      <h2 className="head-text">Stats & Ratings</h2>

      <div className="app__stats-container">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__stats-item"
        >
          <Stat title={"Problems Solved"} count={454} />
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__stats-item"
        >
          <Stat title={"Contest Rating"} count={1588} />
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__stats-item"
        >
          <Stat title={"Projects"} count={30} />
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__stats-item"
        >
          <Stat title={"Contributions"} count={178} />
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Stats, "app__testimonial"),
  "stats",
  "app__primarybg"
);
