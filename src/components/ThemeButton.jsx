import '../css/ThemeButton.css'
import lightSunImg from '../assets/images/icon-sun-dark.svg'
import lightMoonImg from "../assets/images/icon-moon-dark.svg"
import darkSunImg from '../assets/images/icon-sun-light.svg'
import darkMoonImg from "../assets/images/icon-moon-light.svg"


export default function ThemeButton(props){
    const isLightMode = props.className === 'light';

    return (
        <div key={props.className} className={`${props.className} button-container`}>
        <img src={isLightMode ? lightSunImg : darkSunImg} alt="Sun Image" />
        <button onClick={props.mode}><span></span></button>
        <img src={isLightMode ? lightMoonImg : darkMoonImg} alt="Moon Image" />
        </div>
    )
}