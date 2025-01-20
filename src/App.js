import { useState } from "react";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Theme from "./components/Theme";

function App() {

  const themes = [
    {
      title: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      title: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      title: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      title: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      title: 'UX & Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5'
    },
    {
      title: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      title: 'Inovação e gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ];

  const [learnings, setLearnings] = useState([]);

  const toTheAddedLearning = (learning) => {
    console.log(learning);
    setLearnings([...learnings, learning])
  }

  const deleteLearning = () => {
    console.log("Deletando.");
  }

  return (
    <div className="App">
      <Home />
      <Form themes={themes.map(theme => theme.title)} whenRecordingLearning={learning => toTheAddedLearning(learning)} />
      
      {themes.map(theme => <Theme 
        key={theme.title}
        title={theme.title}
        primaryColor={theme.primaryColor}
        secondaryColor={theme.secondaryColor}
        learnings={learnings.filter(learning => learning.theme === theme.title)}
        whenDeleting={deleteLearning}
      />)}

      <Footer />

    </div>
  );
}

export default App;
