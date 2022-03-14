import React from "react";
import { Button, Card, } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { projectDetails } from '../asset/ProjectDetails';

function Project() {
  return (
    <div className="project-container">
      <AnimatePresence exitBeforeEnter>
        {projectDetails.map((e, i) => (
          <motion.div
            key={i}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 + i / 10 }}
          >
            <Card className="project-card">
              <Card.Body className="d-grid" align="start">
                <div>
                  {e.tool.map((e, i) => (
                    <div
                      key={i}
                      className="project-tool"
                      style={{ backgroundColor: `${e.color}` }}
                    >
                      {e.title}
                    </div>
                  ))}
                </div>
                <Card.Title>{e.title}</Card.Title>
                <Card.Subtitle>{e.subTitle}</Card.Subtitle>
                <Card.Text>{e.text}</Card.Text>
                <div>
                  {e.buttonLink.map((e, i) => (
                    <Button
                      key={i}
                      className="me-1"
                      variant="outline-dark"
                      size="sm"
                      target="_blank"
                      href={e.link}
                      disabled={e.link == "#" ? true : false}
                    >
                      {e.title}
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Project;
