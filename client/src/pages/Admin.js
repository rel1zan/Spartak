import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateCategory from "../components/modals/CreateCategory";
import CreateProduct from "../components/modals/CreateProduct";

const Admin = () => {
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    return (
        <Container className="d-flex flex-column align-items-center">
            <Button className="mt-4 p-2" style={{width:250}} onClick={() => setProductVisible(true)}>Add Product</Button>
            <Button className="mt-4 p-2" style={{width:250}} onClick={() => setCategoryVisible(true)}>Add Category</Button>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
        </Container>
    );
};

export default Admin;