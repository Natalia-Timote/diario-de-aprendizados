import LearningCard from "../LearningCard";
import "./Theme.css";
import hexToRgba from 'hex-to-rgba';

const Theme = ( { theme, learnings, whenDeleting, changeColor, whenFavorite }) => {
    return (
        (learnings.length > 0) && <section className="theme" style={{ backgroundColor: hexToRgba(theme.color, '0.5') }}>
            <input type="color" onChange={event => changeColor(event.target.value, theme.id)} value={theme.color} className="change-color" />
            <h3 style={{ borderColor: theme.color }}>{theme.title}</h3>
            <div className="theme-learning-card">
                {learnings.map((learning, indice) => {
                    return <LearningCard 
                        key={indice} 
                        learning={learning}
                        backgroundColor={theme.color}  
                        whenDeleting={whenDeleting}
                        whenFavorite={whenFavorite}
                    />
                })}
            </div>
        </section>
    )
}

export default Theme;
