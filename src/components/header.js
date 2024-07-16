import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import News from "./news";
import Quiz from "./Quiz";
import Contact from "./Contact";
import About from "./about";
import Home from "./home";
import QuizResult from "./QuizResult";
import QuizReview from "./QuizReview";
function header() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
              Home
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={"/about"}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={"/news"}
              >
                News
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={"/quiz"}
              >
                Quiz
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={"/contact"}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/quiz/review" element={<QuizReview />}></Route>
        <Route path="/quiz/result" element={<QuizResult />}></Route>
      </Routes>
    </div>
  );
}

export default header;
