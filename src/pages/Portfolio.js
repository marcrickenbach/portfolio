import { Col, Row, Container } from "reactstrap"
import { PROJECTS } from "../content/PROJECTS";
import { useEffect } from "react";
import ProjectDisplay from "../components/ProjectDisplay";
import Bio from './Bio';

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Bio />
            <Container flexbox className='pb-3'>
                <Row className="justify-content-xs-center m-1">
                    {PROJECTS.map((project) => {
                        return (
                            <Col key={project.id} md={4} >
                                <ProjectDisplay project={project} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Portfolio
