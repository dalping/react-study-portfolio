import './App.css';
import Navbar from './components/Header/Header';
import ContactPage from './components/ContactPage/ContactPage';
import SkillPage from './components/SkillPage/SkillPage';
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import {useState, useEffect, useRef} from 'react';
import ProjectPage from './components/ProjectPage/ProjectPage';

function App() {

  let scrollRef = useRef();

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const goScroll = (target) => {
    scrollRef.current = target;
  }

  return (
    <div className="App">
      <Navbar/>
      <MainPage ref={el =>{scrollRef.current[0] = el}}/>
      <ProfilePage ref={el =>{scrollRef.current[1] = el}}/>
      <SkillPage ref={el =>{scrollRef.current[2] = el}} />
      <h1 ref={el =>{scrollRef.current[5] = el}}>si</h1>
      <ProjectPage ref={el =>{scrollRef.current[3] = el}}/>
      <ContactPage ref={el =>{scrollRef.current[4] = el}}/>
      <div className="topBtn" onClick={handleTop}>Top</div>
      <div className="copyright">Copyright © Bokyung Kim 2021</div>
    </div>
  );
}

export default App;
