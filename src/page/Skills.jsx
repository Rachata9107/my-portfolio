import React, { useState } from "react";
import { Card, Nav, Image, ListGroup, Button, } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const htmlLogo = "https://img.icons8.com/color/96/000000/html-5--v1.png";
const cssLogo = "https://img.icons8.com/color/96/000000/css3.png";
const javascriptLogo = "https://img.icons8.com/color/96/000000/javascript--v1.png";
const reactLogo = "https://img.icons8.com/officel/96/000000/react.png";
const nodejsLogo = "https://img.icons8.com/color/100/000000/nodejs.png";
const phpLogo = "https://img.icons8.com/dusk/96/000000/php-logo.png";
const pythonLogo = "https://img.icons8.com/color/96/000000/python--v1.png";
const mysqlLogo = "https://img.icons8.com/color/96/000000/mysql-logo.png";
const sqlserverLogo = "https://img.icons8.com/color/96/000000/microsoft-sql-server.png";

const allLogo = {
  logo: [
    htmlLogo,
    cssLogo,
    javascriptLogo,
    reactLogo,
    nodejsLogo,
    phpLogo,
    pythonLogo,
    mysqlLogo,
    sqlserverLogo,
  ],
};

const skillDetails = [
  {
    subject: "Front End",
    details: ["HTML", "CSS", "Javascript", "React.js"],
    logo: [htmlLogo, cssLogo, javascriptLogo, reactLogo],
  },
  {
    subject: "Back End",
    details: ["Node.js", "Express.js", "PHP", "Python"],
    logo: [nodejsLogo, phpLogo, pythonLogo],
  },
  {
    subject: "DataBase",
    details: ["MySQL", "Microsoft SQL Server"],
    logo: [mysqlLogo, sqlserverLogo],
  },
  {
    subject: "Languages",
    details: [
      "Thai(Native)",
      "English(Elementary)",
    ],
    logo: [],
  },
  {
    subject: "Other",
    details: [
      "Mitsubishi PLC",
      "Fanuc Robot",
      "Arduino",
      "ESP",
      "Raspberry Pi",
    ],
    logo: [],
  },
];

function Skills() {
  const [selectTab, setSelectTab] = useState(allLogo);

  return (
    <div className="skills-main-container">
      <Card className="shadow-lg p-4 m-auto bg-body rounded bg-opacity-75" style={{ maxWidth: "44rem", minHeight: "29.3rem" }}>
        <Nav justify variant="pills">
          {skillDetails.map((e, i) => (
            <Nav.Item key={i} className="d-grid m-1">
              <Button
                className="p-2"
                variant="secondary"
                key={i}
                onClick={() => setSelectTab(e)}
              >
                {e.subject}
              </Button>
            </Nav.Item>
          ))}
        </Nav>
        <Card.Body className="p-0">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectTab ? selectTab.subject : "empty"}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
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
                ) : (
                  <></>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Skills;
