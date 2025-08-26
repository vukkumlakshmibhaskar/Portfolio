import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Resume Maker"
              description="An interactive web tool to create ATS-friendly resumes with live preview functionality. Allows customization of sections, styles, and export in multiple formats for job applications."
              ghLink="https://github.com/vukkumlakshmibhaskar/Resume_Maker"
              demoLink="https://resume-maker-zeta-six.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blood Donation System"
              description="A full-stack web application that connects blood donors with recipients through an OTP-based sign-up/login system. Includes request management, donor history tracking, live chat and a user-friendly dashboard."
              ghLink="https://github.com/vukkumlakshmibhaskar/BloodManangement"
              demoLink="https://blood-manangement.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ForeverBuy E-commerce"
              description="A scalable MERN stack e-commerce platform featuring product search, secure checkout, and responsive design. Integrated payment gateway and optimized for performance to ensure a seamless shopping experience."
              ghLink="https://github.com/vukkumlakshmibhaskar/Forever_Clone"
              demoLink="https://forever-clone-wine.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Restaurant Order & Table Booking System"
              description="Built a full-stack MERN application for seamless online food ordering and table reservations. Integrated secure MongoDB data storage, real-time booking status, and a responsive, user-friendly interface for customers and administrators."
              ghLink="https://github.com/vukkumlakshmibhaskar/restaurent_Table_booking"
              demoLink="https://restaurent-table-booking.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Gemini Clone"
              description="Developed a modern, responsive Gemini-inspired web application using React and Tailwind CSS. Implemented sleek UI components, smooth animations, and an intuitive layout for an engaging user experience."
              ghLink="https://github.com/vukkumlakshmibhaskar/Gemini-Clone"
              demoLink="https://gemini-clone-sandy-iota.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Bankist"
              description="A dynamic banking application where users can log in to view balances, track transactions, transfer money, request loans, and monitor financial activity in real time with a clean, intuitive UI."
              ghLink="https://github.com/vukkumlakshmibhaskar/bankist"
              demoLink="https://bankist-zeta-eight.vercel.app/login"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
