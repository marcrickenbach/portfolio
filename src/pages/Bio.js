import { Col, Row, Container, Button } from "reactstrap";
import { useState, useEffect } from "react";
import profileImage from '../content/images/IMG_4603.png';

const Bio = () => {

  const [showBioButton, setShowBioButton] = useState(false);

  const handleShowBio = () => {
    
    if (!showBioButton) {
      setShowBioButton(true);
      console.log('Show Bio: true');
      return
    }
    setShowBioButton(false);
    console.log('Show Bio: false');

  }

  if (!showBioButton) {
    return (
      <Container flexbox>
        <Row className="justify-content-xs-center m-1 mt-5 mb-5">

          <Col xs={7} className="bio_col">
            <Button className='bioButtonOP' size='sm' color='link' onClick={handleShowBio} style={{color: 'black'}}><u>vitals</u></Button>
          </Col>
        </Row>
      </Container>
    )
  } else {
    return (
      <Container flexbox className="mb-5">
        <Row className="justify-content-xs-center m-1 mt-5 mb-5">
        <Col xs={7} className="bio_col">
            <Button className='bioButtonCL' size='sm' color='link' onClick={handleShowBio} style={{color: 'black', textDecoration: 'none'}}>vitals /</Button>
          </Col>
        </Row>
        <Row className="justify-content-xs-center m-1">
          <Col xs={12} lg={8} className="bio_col bioBodyTextSmall">
            <p>
              I am a software and hardware engineer with a passion for musical applications. My current projects draw on my academic work in atmospheric aesthetics and sound studies, and focus on the space between environments and artistic creation. I am particularly interested in Stimmungen -- atmospheres, moods, attunements, voicings -- and have written on the subject as it relates to architecture, phenomenology and the history of thought in the the last century. You can find my writing <a href='https://academicworks.cuny.edu/gc_etds/4366/' target='_blank' className='textLinks'>here</a>. 
            </p>
            <p>
              I design and build instruments under <a href='http://www.fkmg-circuits.com' target='_blank' className='textLinks'>FKMG</a> and am trained in Full Stack web development. I am open to collaborations and taking on projects, so please feel free to <a href='mailto:marc.rickenbach@gmail.com' target='_blank' className='textLinks'>get in touch</a>!
            </p>
            <ul style={{  marginLeft: '-1.1rem'}}>
              <li>Embedded C/C++</li>
              <li>HTML, CSS, JavaScript, MERN, React Native</li>
              <li>PCB Design in KiCad</li>
              <li>Experience with ST family of microcontrollers</li>
            </ul>
            <ul style={{  marginLeft: '-1.1rem'}}>
              <li>The Graduate Center, CUNY</li>
              <li>New York University</li>
              <li>Loyola Marymount University</li>
            </ul>
          </Col>
          {/* <Col className="bioBodyTextSmall test_col">
            <img width='75%' src={profileImage} style={{ borderRadius: 20 }} />
          </Col> */}
        </Row>
      </Container>
    )
  }



}

export default Bio