import React from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import "./Timeline.css";

const timelineItems = [
  {
    date: "2020",
    event: "Event 1",
  },
  {
    date: "2021",
    event: "Event 2",
  },
  {
    date: "2022",
    event: "Event 3",
  },
  // Add more timeline items
];

const Timeline = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="timeline">
      {timelineItems.map((item, index) => (
        <VisibilitySensor key={index}>
          {({ isVisible }) => (
            <motion.div
              className="timeline-item"
              variants={variants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-event">{item.event}</div>
            </motion.div>
          )}
        </VisibilitySensor>
      ))}
    </div>
  );
};

export default Timeline;
