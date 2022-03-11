import React from "react";
import { Card, Container, Image } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

import pImg from "./image/profile.jpg";

function Home() {
  return (
    <div className="home-container">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={"home"}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
        >
          <Container>
            <Card className="shadow-lg p-0 bg-body rounded bg-opacity-25">
              <Card.Body className="p-3 text-white">
                <Image className="home-img" src={pImg} width="350" thumbnail />
                <Card.Title className="mt-1">
                  <h1>Rachata Rongluan</h1>
                </Card.Title>
                <Card.Subtitle className="mb-2">
                  <h2>Software Engineer</h2>
                </Card.Subtitle>
                <Card.Text className="home-text">
                  {/* <p>
                        888/107 No.3 Bowin Sub-district, Sriracha District,
                        Chonburi 20230.
                      </p> */}
                  (+66) 095 567 9717, Rachata.9107@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Home;
