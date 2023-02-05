import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryBar from "../components/CategoryBar";
import ProductList from "../components/ProductList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCategory, fetchProduct} from "../http/productApi";

const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchCategory().then(data => product.setCategories(data))
        fetchProduct().then(data => product.setProducts(data.rows))
    }, [])
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
});

export default Shop;