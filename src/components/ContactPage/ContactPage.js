import React from 'react'
import './ContactPage.css'
import {
    MailOutlined, 
    PhoneOutlined,
    GithubOutlined,
    InstagramFilled,
    FacebookFilled
} from '@ant-design/icons'


function ContactPage() {
    return (
        <div className="bottomPage">
            <h1>Contact</h1>
            <div className="bottomInfo">
                <span style={{fontSize:'1.3rem'}}>김보경</span>
                <span><MailOutlined /> kbing14@naver.com</span>
            </div>
            <div style={{display:'flex',gap:'10px',marginTop:'20px'}}>
                <GithubOutlined className="icon" alt="https://github.com/dalping"/>
                <InstagramFilled className="icon"/>
            </div>
        </div>
    )
}

export default ContactPage
