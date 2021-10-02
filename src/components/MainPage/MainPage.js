import React from 'react'
import './MainPage.css'

function MainPage() {

    const goScroll = () => {
        window.scrollTo({
            top: 710,
            behavior: "smooth"
          });
    }
    return (
        <div className="mainPage">
            <h1>Welcome FEstudy Page!</h1>
            <div className="mainBtn"
            onClick={goScroll}>welcome</div>
        </div>
    )
}

export default MainPage
