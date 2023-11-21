import { useState } from "react";
import "../css/Home.css";
import "../css/Quiz.css";
import datas from "../data.json";
import Choies from "../components/Choices";
import errorImg from '../assets/images/icon-error.svg'

export default function Quiz({ quizType }) {
  const [questionNumber, setQuestionNumber] = useState(1)
  const quizOn = true
  

  function nextQuestion(){
    if(questionNumber < 9){
      setQuestionNumber(prevNumber => prevNumber + 1)
    }
    else{
      setQuestionNumber(0)
      console.log('Done with all of this shit')
    }
  }


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
            <p className="question-number">Questions {questionNumber + 1} of 10</p>
            <p className="question-text">
              {selectQuizQuestions()[questionNumber].question}
            </p>
          </div>
          <div className="timer-container">
            <div className="timer-bar"></div>
          </div>
        </div>
        <ul className="subjects">
          {selectQuizQuestions()[questionNumber].options.map((data, index) => (
            <Choies
              quizOn={quizOn}
              className="subjects"
              key={index}
              index={index}
              quiz={quizType}
              number={questionNumber}
              title={data}
            />
          ))}
          <li><button className="submit-btn" onClick={nextQuestion}>Submit Answer</button></li>
          <li className="error-message"><img src={errorImg} alt="" />Sorry. Timer ran out</li>
        </ul>
      </div>
    </>
  );
}
