import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
// import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
// import olximage from '../../Assets/olx-clone image.png'
// import netfliximage from '../../Assets/React-App-netflix-clone.png'
// import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
// import charlespizza from '../../Assets/Charlestown-Pizza.png'
// import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={useradminpanel}
                isBlog={false}
                title="Date on a Dime"
                description="An app for everyone! This application takes in user location and provides a weather forecast as well as chooses a night out for you and whomever you want to bring! "
                ghLink="https://jamesgit22.github.io/Date-on-a-Dime/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={olximage}
                isBlog={false}
                title="Heartfelt-RSVP"
                description="This is an application to help with the head aches of wedding planning by taking care of the RSVP process. The future and MR and MRS and will create an invitation list and prospective guests and the guest will then sign in using a 1+1 authentication process and RSVP to the gathering."
                ghLink="https://mikek1639.github.io/Heartfelt-RSVP/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={netfliximage}
                isBlog={false}
                title=""
                description=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={gridlinesbuilders}
                isBlog={false}
                title=""
                description=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={charlespizza}
                isBlog={false}
                title=""
                description=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={todolist}
                isBlog={false}
                title=""
                description=" "
                ghLink=""

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist