import React from 'react'
import {
    Container,
    Row,
    CardDeck,
    Card,
    Button
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Meta from '../../components/Helmet/Meta';
import './FarmerStyle.css'

const FarmerScreen = () => {
    return (
        <div>
            <Meta
                title="AgriTech | Farmers"
            />
            <Container className='farmerContainer'>
                <h1 className='title'>FARMER</h1>
                <h4 className="farmer-title">If you are a farmer then you are at perfect platfrom from where you can sell your production also.</h4>
                <Row className="row-one justify">
                    <CardDeck>
                        <Card border="primary" style={{ width: '25rem' }}>
                            <Card.Body>
                                <Card.Title className="card-titile">Sell your Harvest</Card.Title>
                                <LinkContainer to="/farmers/purchaseSeeds">
                                    <Button className="btn-explore btn-md m-2">EXPLORE MORE</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                        <Card border="primary" style={{ width: '25rem' }}>
                            <Card.Body>
                                <Card.Title className="card-titile">Warehoueses</Card.Title>
                                <LinkContainer to="/login?redirect=supplier">
                                    <Button className="btn-explore btn-md m-2">EXPLORE MORE</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                        <Card border="primary" style={{ width: '25rem' }}>
                            <Card.Body>
                                <Card.Title className="card-titile">Cold Storages</Card.Title>
                                <LinkContainer to="/farmers/lendMachines">
                                    <Button className="btn-explore btn-md m-2">EXPLORE MORE</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Row>
            </Container>
        </div>
    )
}

export default FarmerScreen
