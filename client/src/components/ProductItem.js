import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductItem = ({product}) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-3" onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}>
            <Card style={{width: 200, height: 210, cursor:"pointer"}} border={"light"}>
                <Image width={200} height={150} src={product.img}/>
                <div className="pt-2">
                    <div className="mx-1 d-flex justify-content-between align-items-center">
                        <div style={{fontSize: 18}}>{product.name_product}</div>
                        <div className="text-danger ">{product.price}</div>
                    </div>
                    <div className="mx-1 text-black-50" style={{fontSize: 13}}>{product.weight }</div>
                </div>
            </Card>
        </Col>
    );
};

export default ProductItem;