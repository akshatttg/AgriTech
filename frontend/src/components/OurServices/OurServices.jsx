import React from 'react'
import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'
import './ourSerices.css'

const OurServices = () => {
    return (
        <Container className="main" fluid>
            <h1 className="main-title">COMPREHENSIVE SERVICES</h1>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nunc non arcu aliquet sollicitudin. Sed elementum placerat ex. Donec a lectus vel lectus faucibus mattis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nunc non arcu aliquet sollicitudin. Sed elementum placerat ex. Donec a lectus vel lectus faucibus mattis
            </p>
            <Container className="services">
                <Row>
                    <Col md={3}>
                        <h5 className="sub-title">Warehouses</h5>
                        <Image className="img" src="images/services/heavy.svg" fluid />
                        <p className="sub-desc">No need to worry of warehouse finding anymore. Just find them and rent!!</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Cold Storages</h5>
                        <Image className="img" src="images/services/gardening.svg" fluid />
                        <p className="sub-desc">No need to worry of cold storages finding anymore. Just find them and rent!!</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Delivery Partners</h5>
                        <Image className="img" src="images/services/supplier.svg" fluid />
                        <p className="sub-desc">We have reliable delivery partners.</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Restaurants</h5>
                        <Image className="img" src="images/services/consumer.svg" fluid />
                        <p className="sub-desc">Why to visit Mandi.Just contact resturants from here!</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default OurServices
