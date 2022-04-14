import { useContext } from 'react';
import Intro from './components/Intro';
import About from './components/About'
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Darkmode from './components/Darkmode';
import { ThemeContext } from './context';
import Credit from './components/Credit';

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{
      backgroundColor: darkMode ? '#222' : 'white',
      color: darkMode && 'white'
    }}>
      <Darkmode />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
      <Credit />
    </div>
  );
}

export default App;
