import { RiCloseCircleFill } from "react-icons/ri";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import "./LearningCard.css";

const LearningCard = ({ backgroundColor, learning, whenDeleting, whenFavorite }) => {
    const favorite = () => {
        whenFavorite(learning.id);
    }

    const propsFavorite = {
        size: 32,
        onClick: favorite,
        color: backgroundColor
    }
    
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
                <div className="favorite">
                    {learning.favorite 
                        ? <IoHeart {...propsFavorite} />
                        : <IoHeartOutline {...propsFavorite} />
                    }
                </div>
            </div>
        </div>
    )
}

export default LearningCard;
