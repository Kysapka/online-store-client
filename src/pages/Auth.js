import React, {useState} from 'react';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";
import {login, registration} from "../http/userAPI";


const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const click = async(e) => {
        e.preventDefault()
        if (isLogin) {
            const response = await login()
        } else {
            const response = await registration(email, password)
            console.log(response)
        }

    }

    return (
        <div className="container-xxl d-flex justify-content-center align-items-center"
             style={{height: window.innerHeight - 54}}
        >
            <div className="card p-5" style={{width: 600}}>
                <h2 className="mx-auto mb-4">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <form>
                    <div className="mb-3">
                        <input value={email} onChange={e => setEmail(e.target.value)} placeholder={"Введите e-mail адрес..."} type="email" className="form-control"
                               id="email"/>
                    </div>
                    <div className="mb-3">
                        <input value={password} onChange={e => setPassword(e.target.value)} placeholder={"Введите ваш пароль..."} type="password" className="form-control"
                               id="password"/>
                    </div>
                    <button onClick={click} type="submit" className="btn w-100 btn-outline-success">{isLogin ? 'Войти' : 'Регистрация'}</button>
                    {isLogin ?
                        <div className="mt-3">
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                        </div>
                        :
                        <div className="mt-3">
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>
                    }

                </form>
            </div>
        </div>
    );
};

export default Auth;