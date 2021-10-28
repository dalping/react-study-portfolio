import './App.css';
import Navbar from './components/Header/Header';
import ContactPage from './components/ContactPage/ContactPage';
import SkillPage from './components/SkillPage/SkillPage';
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import {useState, useEffect, useRef} from 'react';
import ProjectPage from './components/ProjectPage/ProjectPage';

function App() {

  let scrollRef = useRef([]);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const handleScroll = (page) => {

    const pageNames = {
      MAIN : 0,
      PROFILE : 1,
      SKILL : 2,
      PROJECT : 3,
      CONTACT : 4
    }
    scrollRef.current[pageNames[page]].scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <Navbar handleScroll={handleScroll}/>
      <MainPage scrollRef={scrollRef}/>
      <ProfilePage scrollRef={scrollRef}/>
      <SkillPage scrollRef={scrollRef}/>
      <ProjectPage scrollRef={scrollRef}/>
      <ContactPage scrollRef={scrollRef}/>
      <div className="topBtn" onClick={handleTop}>Top</div>
      <div className="copyright">Copyright © Bokyung Kim 2021</div>
    </div>
  );
}

export default App;
