import React from "react";
import { Button, Card, } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const projectDetails = [
  {
    title: "My Portfolio",
    subTitle: "Front-end, Back-end",
    text: "A website to showcase my experience, education, talent and portfolio.",
    tool: [
      {
        title: "React",
        color: "#5FD5F5",
      },
    ],
    buttonLink: [
      {
        title: "website",
        link: "#",
      },
      {
        title: "source code",
        link: "#",
      },
    ],
  },
  {
    title: "Car Reservation Service",
    subTitle: "Back-end",
    text: "Website for booking a car within the company.",
    tool: [
      {
        title: "React",
        color: "#5FD5F5",
      },
      {
        title: "PHP",
        color: "#6678AE",
      },
      {
        title: "MySQL",
        color: "#E88F20",
      },
    ],
    buttonLink: [
      {
        title: "website",
        link: "http://3.1.29.26/crs",
      },
      {
        title: "source code",
        link: "#",
      },
    ],
  },
  {
    title: "Covid Report",
    subTitle: "Front-end, Back-end",
    text: "A website for reporting the status of coronavirus infection (COVID-19) in Thailand.",
    tool: [
      {
        title: "React",
        color: "#5FD5F5",
      },
    ],
    buttonLink: [
      {
        title: "website",
        link: "https://pknzpknz.000webhostapp.com/covid-report/",
      },
      {
        title: "source code",
        link: "#",
      },
    ],
  },
  {
    title: "Vender Covid",
    subTitle: "Back-end",
    text: "Website for approval to enter the company.",
    tool: [
      {
        title: "Vue",
        color: "#49B180",
      },
      {
        title: "PHP",
        color: "#6678AE",
      },
      {
        title: "MySQL",
        color: "#E88F20",
      },
    ],
    buttonLink: [
      {
        title: "website",
        link: "http://3.1.29.26/vendercovid/client/index.php",
      },
      {
        title: "source code",
        link: "#",
      },
    ],
  },
  {
    title: "IMDB Review",
    subTitle: "Front-end, Back-end",
    text: "Website for movie reviews from IMDB.",
    tool: [
      {
        title: "React",
        color: "#5FD5F5",
      },
      {
        title: "PHP",
        color: "#6678AE",
      },
      {
        title: "MySQL",
        color: "#E88F20",
      },
    ],
    buttonLink: [
      {
        title: "website",
        link: "https://pknzpknz.000webhostapp.com/imdb-review/",
      },
      {
        title: "source code",
        link: "#",
      },
    ],
  },
  {
    title: "IIoT B12",
    subTitle: "Back-end",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tool: [
      {
        title: "React",
        color: "#5FD5F5",
      },
      {
        title: "Node.js",
        color: "#4CAF50",
      },
      {
        title: "SQL Server",
        color: "#E6322B",
      },
    ],
    buttonLink: [
      {
        title: "website",
        link: "#",
      },
      {
        title: "source code",
        link: "#",
      },
    ],
  },
  {
    title: "Locker Management",
    subTitle: "Back-end",
    text: "Website for managing lockers of employees in the company.",
    tool: [
      {
        title: "React",
        color: "#5FD5F5",
      },
      {
        title: "Node.js",
        color: "#4CAF50",
      },
      {
        title: "SQL Server",
        color: "#E6322B",
      },
    ],
    buttonLink: [
      {
        title: "website",
        link: "#",
      },
      {
        title: "source code",
        link: "#",
      },
    ],
  },
  {
    title: "Water quality monitoring system",
    subTitle: "Final Project",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tool: [
      {
        title: "Arduino",
        color: "#007A7D",
      },
      {
        title: "C++",
        color: "#5D8FC6",
      },
      {
        title: "Blynk",
        color: "#22BA87",
      },
    ],
    buttonLink: [
      {
        title: "website",
        link: "#",
      },
      {
        title: "source code",
        link: "#",
      },
    ],
  },
];

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
