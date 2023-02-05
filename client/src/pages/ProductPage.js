import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../http/productApi";

const ProductPage = () => {
    const [product, setProduct] = useState({info:{}})
    const {id} = useParams()
    useEffect(() => {
       fetchOneProduct(id).then(data => setProduct(data))
    }, [])
        return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight -54}}>
             <Row>
                 <Col>
                    <Card
                        className="d-flex justify-content-between align-items-end shadow-lg flex-row p-3"
                        style={{width:700, fontSize:30, border: "none", borderRadius: 20}}
                    >
                        <div className="d-flex align-items-start flex-column">
                            <Image width={380} height={300} src={process.env.REACT_APP_API_URL + product.img}/>
                            <div style={{fontSize: 50, fontWeight:"bold"}}>{product.name_product}</div>
                            <div className="text-black-50" style={{fontSize: 18}}>{product.weight} грамм</div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center flex-column">
                            <div style={{fontSize: 40, fontWeight:"bold"}}>{product.price} BYN</div>
                            <Button variant={"outline-danger"} style={{fontWeight:"bold"}}>Добавить в корзину</Button>
                        </div>
                    </Card>
                 </Col>
             </Row>
        </Container>
    );
};

export default ProductPage;