import React from 'react'
import './SkillPage.css'
import {
    Html5Filled
} from '@ant-design/icons'
import { faCss3Alt,faHtml5,faJsSquare,faReact} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillPage() {
    return (
        <div className="skillPage">
            <h1>Skills</h1>
            <div className="skillList">
                <div>
                    <span className="title"><FontAwesomeIcon icon={faHtml5}/> HTML</span> 
                    <span className="content"></span>
                </div>
                <div>
                    <span className="title"><FontAwesomeIcon icon={faCss3Alt}/> CSS</span> 
                    <span className="content">반응형 레이아웃, Styled Component</span>
                </div>
                <div>
                    <span className="title"><FontAwesomeIcon icon={faJsSquare}/> JavaScript</span> 
                    <span className="content">비동기</span>
                </div>
                <div>
                    <span className="title"><FontAwesomeIcon icon={faReact}/> React.js</span> 
                    <span className="content">Hooks, Redux, Context API</span>
                </div>
            </div>
        </div>
    )
}

export default SkillPage
