import { useState } from "react";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Theme from "./components/Theme";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [themes, setThemes] = useState([
    {
      id: uuidv4(),
      title: 'Programação',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      title: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      title: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      title: 'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      title: 'UX & Design',
      color: '#D86EBF'
    },
    {
      id: uuidv4(),
      title: 'Mobile',
      color: '#FEBA05'
    },
    {
      id: uuidv4(),
      title: 'Inovação e gestão',
      color: '#FF8A29'
    },
  ]);

  const [learnings, setLearnings] = useState([]);

  const deleteLearning = (id) => {
    setLearnings(learnings.filter(learning => learning.id !== id));
  }

  const changeLearningCardColor = (color, id) => {
    setThemes(themes.map(theme => {
      if(theme.id === id) {
        theme.color = color;
      }
      return theme;
    }))
  }

  const newTheme = (addTheme) => {
    setThemes([...themes, { ...addTheme, id: uuidv4() }]);
  }

  return (
    <div className="App">
      <Home />
      <Form 
        themes={themes.map(theme => theme.title)} 
        whenRecordingLearning={learning => setLearnings([...learnings, learning])} 
        whenRecordingTheme={newTheme} 
      />
      <section className="themes">
        <h1>Aprendizados por temas</h1>
        {themes.map((theme, indice) => 
          <Theme 
            key={indice}
            theme={theme}
            learnings={learnings.filter(learning => learning.theme === theme.title)}
            whenDeleting={deleteLearning}
            changeColor={changeLearningCardColor}
          />
        )}
      </section>
      <Footer />

    </div>
  );
}

export default App;
