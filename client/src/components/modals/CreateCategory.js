import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createCategory, fetchCategory, fetchProduct} from "../../http/productApi";
import {Context} from "../../index";

const CreateCategory = ({show, onHide}) => {
    const [name, setName] = useState('')
    const [unit, setUnit] = useState('')
    const {product} = useContext(Context)

    useEffect(() => {
        fetchCategory().then(data => product.setCategories(data))
        fetchProduct().then(data => product.setProducts(data.rows))
    }, [])

    const addCategory = () => {
        createCategory({name_category: name}).then(data => {
            setName('')
            onHide()
        })
        createCategory({unit_product: unit}).then(data => {
            setUnit('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Category
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} placeholder={"Name Category"}/>
                    <Form.Control value={unit} onChange={e => setUnit(e.target.value)} className={"mt-2"} placeholder={"Unit Product"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={addCategory}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCategory;