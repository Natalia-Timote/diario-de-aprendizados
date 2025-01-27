import { RiCloseCircleFill } from "react-icons/ri";
import "./LearningCard.css";

const LearningCard = ({ backgroundColor, learning, whenDeleting }) => {
    return (
        <div className="learning-card">
            <RiCloseCircleFill 
                size={24} 
                className="delete" 
                onClick={() => whenDeleting(learning.id)}
            />
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                <img src={learning.image} alt={learning.title} />
            </div>
            <div className="footer">
                <h4>{learning.title}</h4>
                <p>{learning.description}</p>
                <h5>{learning.languageOrTool}</h5>
            </div>
        </div>
    )
}

export default LearningCard;
