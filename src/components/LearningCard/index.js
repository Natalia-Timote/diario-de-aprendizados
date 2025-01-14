import "./LearningCard.css";

const LearningCard = ({ img, title, description, languageOrTool, backgroundColor }) => {
    return (
        <div className="learning-card">
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
