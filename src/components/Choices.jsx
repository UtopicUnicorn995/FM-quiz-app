import { Link } from "react-router-dom";
import "../css/Choices.css";

export default function Choies({ title, img, quiz }) {

  const iconBgColor = function () {
    switch (title) {
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
        <button onClick={() => quiz(title)} >
        <img
          src={`src/${img}`}
          alt={title}
          style={{ backgroundColor: iconBgColor() }}
        />
        {title}
      </button>
      </Link>
    </li>
  );
}
