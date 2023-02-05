import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [name_org, setName] = useState('')
    const [person_org, setPerson] = useState('')
    const [address_org, setAddress] = useState('')
    const [phone_org, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(phone_org,password)
            } else {
                data = await registration(name_org,person_org,address_org,phone_org,password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

    return (

        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight -54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{ isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    {isLogin ?
                    <div>
                        <Form.Control
                            className="mt-3"
                            placeholder="Телефон"
                            value={phone_org}
                            onChange={event => setPhone(event.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Пароль"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            type='password'
                        />
                    </div>
                        :
                    <div>
                        <Form.Control
                            className="mt-3"
                            placeholder="Название организации"
                            value={name_org}
                            onChange={event => setName(event.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Ответственное лицо"
                            value={person_org}
                            onChange={event => setPerson(event.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Адрес организации"
                            value={address_org}
                            onChange={event => setAddress(event.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Телефон"
                            value={phone_org}
                            onChange={event => setPhone(event.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Пароль"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            type='password'
                        />
                    </div>
                    }
                    <Row className="">
                        <Button
                            className="align-self-end mt-3"
                            variant={"outline-primary"}
                            style={{fontWeight: "bold"}}
                            onClick={click}
                        >
                            { isLogin ? 'Войти' : "Зарегистрироваться"}
                        </Button>
                        { isLogin ?
                        <div className="d-flex justify-content-center mt-3">
                            Нет аккаунта ? <NavLink to={REGISTRATION_ROUTE} className="px-2"> Зарегистрируйтесь</NavLink>
                        </div>
                            :
                        <div className="d-flex justify-content-center mt-3">
                            Есть аккаунт ? <NavLink to={LOGIN_ROUTE} className="px-2"> Войдите</NavLink>
                        </div>
                        }
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;