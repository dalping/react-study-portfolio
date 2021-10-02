import './App.css';
import Navbar from './components/Header/Header';
import ContactPage from './components/ContactPage/ContactPage';
import SkillPage from './components/SkillPage/SkillPage';
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import {useState, useEffect} from 'react';
import ProjectPage from './components/ProjectPage/ProjectPage';

function App() {

  const [ScrollY, setScrollY] = useState(0);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
  }

  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
      <ProfilePage/>
      <SkillPage/>
      <ProjectPage/>
      <ContactPage/>
      <div className="topBtn" onClick={handleTop}>Top</div>
    </div>
  );
}

export default App;
