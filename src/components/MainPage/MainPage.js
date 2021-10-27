import React,{useRef} from 'react'
import './MainPage.css'

function MainPage() {

    const tmp = useRef();

    const goScroll = () => {
        window.scrollTo({
            top: 710,
            behavior: "smooth"
          });
    }
    return (
        <div className="mainPage" ref={tmp}>
            <h1 ref={tmp}>Welcome Bokyung's Portfolio</h1>
            <div className="mainBtn"
            onClick={goScroll}>welcome</div>
        </div>
    )
}

export default MainPage
