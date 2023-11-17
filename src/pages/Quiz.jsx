import { useState } from "react";
import "../css/Home.css";
import "../css/Quiz.css";
import datas from "../data.json";
import Choies from "../components/Choices";

export default function Quiz({ quizType }) {
  console.log("this page also rerenders");
  console.log(quizType);
  const [questionNumber, setQuestionNumber] = useState(1)


  function selectQuizQuestions(){
    switch (quizType) {
        case "Accessibility":
          return datas.quizzes[3].questions;
          break;
        case "CSS":
          return datas.quizzes[1].questions;
          break;
        case "Javascript":
          return datas.quizzes[2].questions;
          break;
        case "HTML":
          return datas.quizzes[0].questions;
          break;
        default:
          return "";
      }
  }

  

  return (
    <>
      <div className="content ">
        <div className="question-content__wrapper">
          <div className="question-content">
            <p className="question-number">Questions ? of 10</p>
            <p className="question-text">
              {selectQuizQuestions()[questionNumber].question}
            </p>
          </div>
          <div className="timer-container">
            <div className="timer-bar"></div>
          </div>
        </div>
        <ul className="subjects">
          {selectQuizQuestions()[questionNumber].options.map((data, key) => (
            <Choies
              className="subjects"
              key={key}
              quiz={quizType}
              number={questionNumber}
              title={data}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
