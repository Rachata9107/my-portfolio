import React, { useState } from "react";
import { Card, Nav, Image, ListGroup, Button, } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { skillDetails } from '../asset/SkillDetails'
import programming from '../asset/programming.json';
import { Player } from '@lottiefiles/react-lottie-player';

function Skills() {
  const [selectTab, setSelectTab] = useState({ logo: [] });

  return (
    <div className="skills-main-container">
      <Card className="skills-card">
        <Nav justify variant="pills" className="skills-nav-tab">
          {skillDetails.map((e, i) => (
            <Nav.Item key={i} className="skills-nav-item">
              <Button
                className="sklils-nav-button"
                variant="outline-light"
                key={i}
                onClick={() => setSelectTab(e)}
              >
                <img src={e.icon} />
                <h6>{e.subject}</h6>
              </Button>
            </Nav.Item>
          ))}
        </Nav>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="skills-motion"
            key={selectTab ? selectTab.subject : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            <Card.Body className="p-0">
              <ListGroup className="my-3">
                {selectTab.subject != undefined ? (
                  selectTab.details.map((e, i) => (
                    <ListGroup.Item
                      className="p-3"
                      key={i}
                      style={{ backgroundColor: `${i % 2 ? "#98B4AA" : "#74959A"}`, color: "#EEEEEE" }}
                    >
                      {e}
                    </ListGroup.Item>
                  ))
                ) : (
                  <></>
                )}
              </ListGroup>
              <div className="skills-logo">
                {selectTab.logo.length > 0 ? (
                  selectTab.logo.map((e, i) => (
                    <Image key={i} className="skills-img" src={e} thumbnail />
                  ))
                ) : selectTab.subject == undefined ? (
                  <div className="skills-lottie">
                    <Player
                      autoplay
                      speed={2.5}
                      onEvent={event => event == "complete" ? setSelectTab(skillDetails[0]) : ""}
                      src={programming} style={{ maxWidth: "600px", maxHeight: "600px" }}
                    >
                    </Player>
                  </div>
                ) : <></>}
              </div>
            </Card.Body>
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
}

export default Skills;
