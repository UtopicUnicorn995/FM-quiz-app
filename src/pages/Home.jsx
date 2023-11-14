import '../css/Home.css'
import { useEffect, useState } from 'react'
import datas from '../data.json'
import Choies from '../components/Choices'
import ThemeButton from '../components/ThemeButton'

export default function Home(){

    const [mode, setMode] = useState('light')

    function changeMode(){
        if(mode === 'light'){
            setMode('dark')
        }else{
            setMode('light')
        } 
    }

    return (
        <div className={`home ${mode}`}>
            <div className="button-theme__container">
                <ThemeButton className={mode} mode={changeMode}/>
            </div>
            <div className="content">
                <header className="header">
                    <h1>Welcome to the <span>Frontend Quiz!</span></h1>
                    <p>Pick a subject to get started.</p>
                </header>
                <ul className="subjects">
                    {datas.quizzes.map((data, key) => (
                        <Choies className="subjects" key={key} img={data.icon} title={data.title}/>     
                    ))}
                </ul>
            </div>
        </div>
    )
}