import { Card, CardImg, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectDisplay = ({ project }) => {
    const { id, name, image, shortDesc } = project;

    return (
        <Card >
            <CardTitle className="mappedPortfolioText" style={{ fontSize: '14px', fontWeight: 'bolder,', fontFamily: 'monospace', color: 'slategray' }}>{name}</CardTitle>
            <CardSubtitle className="mappedPortfolioText" style={{ fontSize: '12px', color: 'darkgrey' }}>{shortDesc}</CardSubtitle>
            <Link to={`project/${id}`}>
                <CardImg style={{ width: '100%' }} src={image} alt={name} className="pt-1 pb-4 mappedPortfolioImage" />
            </Link>
        </Card>
    )
}

export default ProjectDisplay