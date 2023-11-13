import '../css/home.css'
import { useEffect, useState } from 'react'
import datas from '../data.json'
import Choies from '../components/Choices'
import ThemeButton from '../components/ThemeButton'

export default function Home(){
    return (
        <div className="home light">
            <div className="button-theme__container">
                <ThemeButton/>
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