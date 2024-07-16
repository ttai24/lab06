import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function QuizReview() {
  const questions = useSelector((state) => state.questions);

  const renderQuestionItem = (item) => {
    const isAnswered = item.userAnswer !== "";
    const backgroundColor = isAnswered ? "mediumspringgreen" : "mistyrose";

    return (
      <Col
        sm={2}
        style={{
          height: "80px",
          backgroundColor,
          borderRadius: "10px",
          maxWidth: "140px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Link to={"/quiz"} style={{ color: "black" }}>
            Question No {item.id}
          </Link>
        </div>
        <Link to={"/quiz"} style={{ color: "black" }}>
          {isAnswered ? "Answered" : "Not Answered"}
        </Link>
      </Col>
    );
  };

  return (
    <>
      <h2
        style={{
          color: "white",
          backgroundColor: "rgb(33, 37, 41)",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Quiz Review
      </h2>
      <Row style={{ width: "100%", margin: "10px 10px" }}>
        {questions.map((item) => renderQuestionItem(item))}
      </Row>

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
    </>
  );
}

export default QuizReview;
