import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createProduct, fetchCategory, fetchProduct} from "../../http/productApi";
import {observer} from "mobx-react-lite";

const CreateProduct = observer(({show, onHide}) => {
    const {product} = useContext(Context)
    const [name, setName] = useState('')
    const [weight, setWeight] = useState(0)
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchCategory().then(data => product.setCategories(data))
        fetchProduct().then(data => product.setProducts(data.rows))
    }, [])

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('weight', `${weight}`)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('CategoryId', product.selectedCategory)
        createProduct(formData).then(data => onHide())
    }

    const selectFile = e => {
        setFile(e.target.files[0])
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
                    Add New Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} placeholder={"Name Product"}/>
                    <Form.Control value={weight} onChange={e => setWeight(Number(e.target.value))} className={"mt-2"}  placeholder={"Weight"}/>
                    <Form.Control value={price} onChange={e => setPrice(Number(e.target.value))} className={"mt-2"}  placeholder={"Price"}/>
                    <Dropdown className={"mt-2"}>
                        <Dropdown.Toggle>{product.selectedCategory || "Select Category"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.categories.map(category => <Dropdown.Item onClick={() => product.setSelectedCategory(category)} key={category.id}>{category.name_category}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control onChange={selectFile} className={"mt-2"} type="file"  placeholder={"Photo Product"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={addProduct}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateProduct;