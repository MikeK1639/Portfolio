import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>Hey there! I'm Michael Kent, an extroverted full stack web developer with a passion for creating innovative and engaging online experiences. With a blend of technical expertise and a sociable nature, I thrive in collaborative environments where I can combine my love for coding with effective communication and teamwork.I believe that great websites and applications not only function flawlessly but also captivate users with their design and usability. That's why I'm constantly honing my skills in both front-end and back-end development, ensuring that every project I work on not only meets the technical requirements but also exceeds expectations in terms of user experience. Feel free to reach out to me, and let's embark on an exciting journey of bringing your ideas to life in the digital realm!
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML/CSS</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootsrap</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Node.Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage