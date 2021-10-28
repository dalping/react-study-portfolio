import React,{useRef} from 'react'
import './MainPage.css'

function MainPage(props) {

    return (
        <div className="mainPage" ref={el => {props.scrollRef.current[0] = el}}>
            <h1>Welcome Bokyung's Portfolio</h1>
            <div className="mainBtn">welcome</div>
        </div>
    )
}

export default MainPage
