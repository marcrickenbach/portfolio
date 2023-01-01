import { Col, Row, Container } from "reactstrap"


const Header = () => {
    return (
        <Container flexbox>
            <Row className="justify-content-xs-center m-1 mt-4">
                <Col xs={12} sm={7} className="bio_col">
                    <p className="typewriter0"><span className="name_text"></span></p>
                    <p className="typewriter2"><span className="software_text"></span></p>
                    <p className="typewriter1"><span className="instrument_text"></span></p>
                </Col>
                <Col md={5} className='d-flex justify-content-xs-center socialsMenu'>
                    <a className="fade_in_icon btn btn-social-icon btn-instagram" href="http://instagram.com/fkmg_marc"
                        target="_blank"><i className="fa fa-instagram"></i></a>
                    <a className="btn btn-social-icon btn-github" href="https://github.com/marc-fkmg/" target="_blank"><i
                        className="fa fa-github"></i></a>
                    <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/marcrickenbach/"
                        target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-social-icon btn-bandcamp" href="https://marcrickenbach.bandcamp.com"
                        target="_blank"><i className="fa fa-bandcamp"></i></a>
                    <a className="btn btn-marcEmail" href="mailto:marc.rickenbach@gmail.com" target="_blank"><i
                        className="fa fa-envelope"></i></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Header