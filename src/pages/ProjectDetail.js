import { Col, Row, Container } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../content/PROJECTS";
import { useEffect } from "react";
import Magnifier from "react-magnifier";

const ProjectDetail = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const { projectId } = useParams();
    const project = PROJECTS[projectId];

    return (
        <Container flexbox>
            <Row className="mt-5 m-2">
                <Col xs={1} className=''>
                    <Link to={'/'}><i className="fa-solid fa-angles-left projectBack"></i></Link>
                </Col>
                <Col xs={5}><h4 style={{ color: "slategray", fontFamily: 'monospace' }}>{project.name}</h4></Col>
            </Row>
            <Row className="d-flex pt-2 m-2">
                <Col md={4} className='bioBodyTextSmall pb-4'>
                    {project.longDesc}
                </Col>
                <Col>
                    <Magnifier width={'100%'} src={project.image} zoomFactor={2} mgWidth={200} mgHeight={200}/>
                </Col>
            </Row>
            <Row className="d-flex pt-4 m-2">
                <Col>
                    <Magnifier width={'100%'} src={project.image2} zoomFactor={2} />
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectDetail