import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"white",fontWeight:"bold", textDecoration: "none"}} to={SHOP_ROUTE}>SPARTAK</NavLink>
                {user.isAuth ?
                    <Nav>
                        <Button onClick={() => history.push(ADMIN_ROUTE)} className="mx-1" variant={"outline-light"} >Admin</Button>
                        <Button variant={"outline-light"} className="ml-4" onClick={() => logOut()}>Log off</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
})

export default NavBar;