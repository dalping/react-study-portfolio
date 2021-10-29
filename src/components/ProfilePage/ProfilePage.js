import React from 'react'
import './ProfilePage.css'

function ProfilePage(props) {
    return (
        <div className="profilePage" ref={el => {props.scrollRef.current[1] = el}}>
            <h1 style={{marginTop:'30px'}}>Profile</h1>
            <div className="profiles">

            </div>
        </div>
    )
}

export default ProfilePage
