import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completedUserQuestion } from "../redux/action";
import { Col, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = useSelector((state) => state.questions);
  console.log(questions[currentQuestion]);
  const dispatch = useDispatch();

  const handleCompletedUserQuestion = (id) => {
    dispatch(
      completedUserQuestion({
        id: currentQuestion,
        userAnswerID: id,
      })
    );
  };

  const nextQuestion = () => {
    setCurrentQuestion((prevState) => prevState + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion((prevState) => prevState - 1);
  };

  const goToFirstQuestion = () => {
    setCurrentQuestion(0);
  };

  const goToLastQuestion = () => {
    setCurrentQuestion(questions.length - 1);
  };

  return (
    <div>
      <h2
        style={{
          color: "white",
          backgroundColor: "rgb(33, 37, 41)",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Javascript Quiz
      </h2>
      <span style={{ paddingLeft: "20px" }}>
        <span style={{ fontSize: "20px", fontWeight: "600" }}>
          Q.{questions[currentQuestion].id}
        </span>{" "}
        {questions[currentQuestion].question}
      </span>
      <Row style={{ width: "100%" }}>
        {questions[currentQuestion].answers.map((item) => (
          <Col sm={6} key={item.id}>
            <Button
              variant={
                questions[currentQuestion].userAnswer === item.id
                  ? "primary"
                  : "info"
              }
              style={{
                backgroundColor: "rgb(207, 226, 255)",
                width: "80%",
                textAlign: "left",
                marginLeft: "20px",
                marginTop: "10px",
              }}
              onClick={(e) => handleCompletedUserQuestion(item.id)}
            >
              {item.text}
            </Button>
          </Col>
        ))}
      </Row>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <div
          style={{
            borderTop: "1px solid rgb(33, 37, 41)",
            padding: "10px 0",
            borderBottom: "1px solid rgb(33, 37, 41)",
            width: "30%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="primary"
            disabled={currentQuestion === 0}
            onClick={goToFirstQuestion}
          >
            First
          </Button>
          <Button
            variant="primary"
            disabled={currentQuestion === 0}
            onClick={prevQuestion}
          >
            Prev
          </Button>
          <Button
            variant="primary"
            disabled={currentQuestion === questions.length - 1}
            onClick={nextQuestion}
          >
            Next
          </Button>
          <Button
            variant="primary"
            disabled={currentQuestion === questions.length - 1}
            onClick={goToLastQuestion}
          >
            Last
          </Button>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Link to={"/quiz"}>
          <Button variant="info" style={{ marginLeft: "10px" }}>
            Quiz
          </Button>
        </Link>
        <Link to={"/quiz/review"}>
          <Button variant="info" style={{ marginLeft: "10px" }}>
            Quiz Review
          </Button>
        </Link>
        <Link to={"/quiz/result"}>
          <Button variant="info" style={{ marginLeft: "10px" }}>
            Submit
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Quiz;
