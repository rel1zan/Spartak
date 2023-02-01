import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const CategoryBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <ListGroup className="mt-3">
            {product._categories.map(category =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={category.id === product.selectedCategory.id}
                    onClick={() => product.setSelectedCategory(category)}
                    key={category.id}
                >
                    {category.name_category}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default CategoryBar;