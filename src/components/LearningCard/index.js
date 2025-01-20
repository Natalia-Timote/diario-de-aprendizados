import { RiCloseCircleFill } from "react-icons/ri";
import "./LearningCard.css";

const LearningCard = ({ img, title, description, languageOrTool, backgroundColor, whenDeleting }) => {
    return (
        <div className="learning-card">
            <RiCloseCircleFill size={24} className="delete" onClick={whenDeleting} />
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                <img src={img} alt={title} />
            </div>
            <div className="footer">
                <h4>{title}</h4>
                <p>{description}</p>
                <h5>{languageOrTool}</h5>
            </div>
        </div>
    )
}

export default LearningCard;
