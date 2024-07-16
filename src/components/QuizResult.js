import React from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function QuizResult() {
  const questions = useSelector((state) => state.questions);
  const correctAnswerMap = {};

  questions.forEach((question) => {
    question.answers.forEach((answer) => {
      if (answer.correct) {
        correctAnswerMap[question.id] = answer.id;
      }
    });
  });

  console.log(correctAnswerMap);
  console.log(questions);

  const renderQuestionForm = (item) => {
    const isCorrectAnswer = item.userAnswer === correctAnswerMap[item.id];
    const backgroundColor = isCorrectAnswer ? "mediumspringgreen" : "mistyrose";

    return (
      <Form
        style={{
          padding: "20px",
          margin: "20px 10px ",
          borderRadius: "5px",
          backgroundColor,
        }}
        key={item.id}
      >
        <div>
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            Q.{item.id}{" "}
          </span>
          {item.question}
        </div>

        {item.answers &&
          item.answers.map((answer) => (
            <div key={answer.id}>
              <Form.Check
                style={{ marginTop: "5px" }}
                inline
                label={answer.text}
                name={answer.id}
                type="radio"
                readOnly
                checked={answer.id === item.userAnswer ? true : false}
              />
            </div>
          ))}

        <div
          style={{
            backgroundColor: "silver",
            padding: "5px 5px",
            border: "2px solid black",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          <span style={{ marginLeft: "10px" }}>Right answer is: </span>
          {item.answers &&
            item.answers[correctAnswerMap[item.id]] &&
            item.answers[correctAnswerMap[item.id]].text}
        </div>
      </Form>
    );
  };

  return (
    <div>
      <h2
        style={{
          color: "white",
          backgroundColor: "rgb(33, 37, 41)",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Quiz Result
      </h2>
      <div>{questions.map((item) => renderQuestionForm(item))}</div>
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

export default QuizResult;
