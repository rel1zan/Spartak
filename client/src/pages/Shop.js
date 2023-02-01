import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryBar from "../components/CategoryBar";

const Shop = () => {
    return (
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <CategoryBar/>
                </Col>
                <Col md={9}>

                </Col>
            </Row>
        </Container>
    );
};

export default Shop;