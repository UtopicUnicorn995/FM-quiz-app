import "../css/Home.css";
import "../css/Quiz.css";
import datas from "../data.json";
import Choies from "../components/Choices";

export default function Quiz({ quizType }) {
  console.log("this page also rerenders");
  console.log(quizType);

  return (
    <>
      <div className="content ">
        <div className="question-content__wrapper">
          <div className="question-content">
            <p className="question-number">Questions ? of 10</p>
            <p className="question-text">
              Which of these color contrast ratios defines the minimum WCAG 2.1
              Level AA requirement for normal text?
            </p>
          </div>
          <div className="timer-container">
            <div className="timer-bar"></div>
          </div>
        </div>
        <ul className="subjects">
          {datas.quizzes.map((data, key) => (
            <Choies
              className="subjects"
              key={key}
              img={data.icon}
              title={data.title}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
