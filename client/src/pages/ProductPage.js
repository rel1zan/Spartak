import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const ProductPage = () => {
    const product =  {id: 1, name_product: 'конфеты', weight: 300, price: 15, img: `http://sarmat-product.ru/wp-content/uploads/2015/01/%D0%BD%D0%B0%D0%B1%D0%BE%D1%80-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%82-%D0%A1%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BA-3751.jpg`}
        return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight -54}}>
             <Row>
                 <Col>
                    <Card
                        className="d-flex justify-content-between align-items-end shadow-lg flex-row p-3"
                        style={{width:700, fontSize:30, border: "none", borderRadius: 20}}
                    >
                        <div className="d-flex align-items-start flex-column">
                            <Image width={380} height={300} src={product.img}/>
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