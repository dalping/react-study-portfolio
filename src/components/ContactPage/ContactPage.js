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
                <span>홍길동</span>
                <span><MailOutlined /> userId1234@naver.com</span>
                <span><PhoneOutlined /> 010-1234-5678</span>
            </div>
            <div style={{display:'flex',gap:'10px',marginTop:'20px'}}>
                <GithubOutlined className="icon"/>
                <InstagramFilled className="icon"/>
                <FacebookFilled className="icon"/>
            </div>
        </div>
    )
}

export default ContactPage
