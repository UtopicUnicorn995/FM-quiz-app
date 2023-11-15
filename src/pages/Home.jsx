import { useState } from "react";
import "../css/Home.css";
import datas from "../data.json";
import Choies from "../components/Choices";
import ThemeButton from "../components/ThemeButton";
import cssImg from "../assets/images/icon-css.svg"
import htmlImg from "../assets/images/icon-html.svg"
import jsImg from "../assets/images/icon-js.svg"
import accessabilityImg from "../assets/images/icon-accessibility.svg";

export default function Home({ handleModeChange, mode }) {
  const [quizType, setQuizType] = useState(null);

  function changeMode() {
    const newMode = mode === "light" ? "dark" : "light";
    handleModeChange(newMode);
  }

  function selectQuiz(){
    switch (quizType) {
        case "Accessibility":
          return accessabilityImg;
          break;
        case "CSS":
          return cssImg;
          break;
        case "Javascript":
          return jsImg;
          break;
        case "HTML":
          return htmlImg;
          break;
        default:
          return "";
      }
  }

  return (
    <>
      <div className="button-theme__container">
        {quizType ? (
          <div className="quiz-btn">
            <img src={selectQuiz()} alt={quizType} className={quizType}/>
            <p>
            {quizType}
            </p>
          </div>
        ) : <div></div>}
        <ThemeButton className={mode} mode={changeMode} />
      </div>

      <div className="content">
        <header className="header">
          <h1>
            Welcome to the <span>Frontend Quiz!</span>
          </h1>
          <p>Pick a subject to get started.</p>
        </header>
        <ul className="subjects">
          {datas.quizzes.map((data, key) => (
            <Choies
              className="subjects"
              key={key}
              quiz={setQuizType}
              img={data.icon}
              title={data.title}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
