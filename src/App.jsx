import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz';
import ThemeButton from "./components/ThemeButton";
import cssImg from "./assets/images/icon-css.svg"
import htmlImg from "./assets/images/icon-html.svg"
import jsImg from "./assets/images/icon-js.svg"
import accessabilityImg from "./assets/images/icon-accessibility.svg";



function App() {
  const [mode, setMode] = useState('light')
  const [quizType, setQuizType] = useState('HTML');

  function handleModeChange(modeState){
    setMode(modeState)
  }

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
    <Router>
      <div className={`home ${mode}`}>
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
      <Routes>
        <Route exact path='/' element={<Home setQuizType={setQuizType} mode={mode} />}/>
        <Route exact path='/quiz' element={ <Quiz  quizType={quizType} />}/>
       
      </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
