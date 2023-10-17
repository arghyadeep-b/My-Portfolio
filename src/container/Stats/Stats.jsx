import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Stat } from "../../components";
import { client } from "../../client";

import "./Stats.scss";

const Stats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const query = '*[_type == "stats"]';

    client.fetch(query).then((data) => {
      setStats(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Stats & Ratings</h2>

      <div className="app__stats-container">
        {stats.map((stat) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__stats-item"
            key={stat.title}
          >
            <Stat
              title={stat.title}
              count={stat.count}
              className="app__stat-container"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Stats, "app__testimonial"),
  "stats",
  "app__primarybg"
);
