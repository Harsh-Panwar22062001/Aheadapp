import React from 'react';
import { motion } from 'framer-motion';
import './Middle.css';

const cardioVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Middle = () => {
  return (
    <div className="middle-container">
      <div className="title">
        <h1>Does this sound familiar....👻</h1>
      </div>
      <div className="cardio-column">
        <motion.div
          className="cardio"
          variants={cardioVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
        >
          <h2>cardio 1</h2>
          <div className="emoji">😊</div>
          <p>Sample text for cardio 1.</p>
        </motion.div>
        <motion.div
          className="cardio"
          variants={cardioVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
        >
          <h2>cardio 2</h2>
          <div className="emoji">😍</div>
          <p>Sample text for cardio 2.</p>
        </motion.div>
        <motion.div
          className="cardio tilted"
          variants={cardioVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
        >
          <h2>cardio 3</h2>
          <div className="emoji">👍</div>
          <p>Sample text for cardio 3.</p>
        </motion.div>
        <motion.div
          className="cardio"
          variants={cardioVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
        >
          <h2>cardio 4</h2>
          <div className="emoji">🎉</div>
          <p>Sample text for cardio 4.</p>
        </motion.div>
      </div>
      <div className="cardyu">
        <div className="left-content">
          <h3>Left Side Text</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="right-content">
          <h3>Right Side Text</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
};

export default Middle;
