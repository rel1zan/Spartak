import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"white",fontWeight:"bold", textDecoration: "none"}} to={SHOP_ROUTE}>SPARTAK</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"}>Admin</Button>
                        <Button variant={"outline-light"} className="ml-4">Sign in</Button>
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