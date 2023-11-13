import { useState } from "react"
import '../css/choices.css'

export default function Choies({title, img}){

    const [type, setType] = useState('')
    
    const iconBgColor = function(){
        switch(title){
            case 'HTML':
                return '#FFF1E9';
                break;
            case "CSS":
                return '#E0FDEF';
                break;
            case 'JavaScript':
                return "#EBF0FF";
                break;
            case 'Accessibility':
                return '#F6E7FF';
                break
            default:
                return '#FFFFFF';
        }
    }

    return (
        <li><img src={`src/${img}`} alt={title} style={{backgroundColor: iconBgColor()}} />{title}</li>
    )
}