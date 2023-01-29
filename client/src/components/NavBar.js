import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Form, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="primary" variant="dark">
            <Container className="container-lg">
                <NavLink className="" to={SHOP_ROUTE} style={{color:"white", fontWeight:"bold"}}>SPARTAK</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto justify-content-between" style={{width: '150px'}}>
                        <Button variant={"outline-light"}>Admin</Button>
                        <Button variant={"outline-light"}>Sing In</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Registration</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
})

export default NavBar;