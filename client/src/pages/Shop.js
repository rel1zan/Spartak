import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryBar from "../components/CategoryBar";
import ProductList from "../components/ProductList";

const Shop = () => {
    return (
        <Container>
            <Row className="mt-4">
                <Col md={2}>
                    <CategoryBar/>
                </Col>
                <Col md={9}>
                    <ProductList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;