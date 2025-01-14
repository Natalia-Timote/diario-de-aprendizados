import LearningCard from "../LearningCard";
import "./Theme.css";

const Theme = (props) => {
    return (
        (props.learnings.length > 0) && <section className="theme" style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.title}</h3>
            <div className="theme-learning-card">
                {props.learnings.map(learning => <LearningCard key={learning.title} backgroundColor={props.primaryColor} title={learning.title} description={learning.description} languageOrTool={learning.languageOrTool} img={learning.img} />)}
            </div>
        </section>
    )
}

export default Theme;
