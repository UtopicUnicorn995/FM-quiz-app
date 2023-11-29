import { useEffect } from "react";
import datas from "../data.json";
import Choies from "../components/Choices";


export default function Home({setQuizType}) {
  const quizOn = false

  useEffect(() => {
    setQuizType('')
  }, [])
  
  return (
    <>
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
              quizOn={quizOn}
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
