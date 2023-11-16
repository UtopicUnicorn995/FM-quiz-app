import { Link } from "react-router-dom";
import "../css/Choices.css";

export default function Choies( props ) {

  const iconBgColor = function () {
    switch (props.title) {
      case "HTML":
        return "#FFF1E9";
        break;
      case "CSS":
        return "#E0FDEF";
        break;
      case "Javascript":
        return "#EBF0FF";
        break;
      case "Accessibility":
        return "#F6E7FF";
        break;
      default:
        return "#FFFFFF";
    }
  };

  return (
    <li>
        <Link to='/quiz'>
        <button onClick={() => quiz(props.title)} >
        <img
          src={`src/${props.img}`}
          alt={props.title}
          style={{ backgroundColor: iconBgColor() }}
        />
        {props.title}
      </button>
      </Link>
    </li>
  );
}
