import React, {useContext} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

const CreateProduct = ({show, onHide}) => {
    const {product} = useContext(Context)
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Name Product"}/>
                    <Form.Control className={"mt-2"}  placeholder={"Weight"}/>
                    <Form.Control className={"mt-2"}  placeholder={"Price"}/>
                    <Dropdown className={"mt-2"}>
                        <Dropdown.Toggle>Select Category</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.categories.map(category => <Dropdown.Item key={category.id}>{category.name_category}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className={"mt-2"} type="file"  placeholder={"Photo Product"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;