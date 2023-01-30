import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

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
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Пароль"
                        />
                    </div>
                        :
                    <div>
                        <Form.Control
                            className="mt-3"
                            placeholder="Название организации"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Ответственное лицо"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Адрес организации"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Телефон"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Пароль"
                        />
                    </div>
                    }
                    <Row className="">
                        <Button className="align-self-end mt-3"
                                variant={"outline-primary"}
                                style={{fontWeight: "bold"}}>
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
};

export default Auth;