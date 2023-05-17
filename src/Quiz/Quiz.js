import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { quizData } from "../data/quizData";
import "./Quiz.css";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quizData;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      radio: "",
    },
  });
  const { question, choices } = questions[activeQuestion];
  console.log("choices", choices);
  const onClickNext = () => {
    setActiveQuestion((prevQue) => prevQue + 1);
    setResult((prevResult) =>
      selectedAnswer
        ? {
            ...prevResult,
            score: prevResult.score + 5,
            correctAnswers: prevResult.correctAnswers + 1,
          }
        : {
            ...prevResult,
            wrongAnswers: prevResult.wrongAnswers + 1,
          }
    );
  };
  return (
    <div className="quizContainer">
      <div className="innerBox">
        <div className="title">Quiz</div>
        <div className="questionNumber">{`${activeQuestion + 1}/${
          questions.length
        }`}</div>
        <div className="question">{question}</div>
        <ul className="options">
          {choices.map((choice, index) => (
            <li className="optionList" key={index} onClick={() => alert(index)}>
              {choice}
            </li>
          ))}
        </ul>
        <div className="nextBtnWrapper">
          <button className="nextBtn" onClick={onClickNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
