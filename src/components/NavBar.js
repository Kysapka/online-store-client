import React, {useContext} from 'react';
import {Context} from "../index";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom"


const NavBar = observer(() => {
const history = useNavigate()
    const {user} = useContext(Context)

    const logOut = () => {
    user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-xxl">
                <NavLink to={SHOP_ROUTE} className="navbar-brand" href="#">КупиДевайс</NavLink>
                {user.isAuth
                    ?
                    <div style={{color: "white"}} className="ml-auto" id="navbarNav">
                        <button
                            onClick={() => history(ADMIN_ROUTE)}
                            type="button"
                            className="btn btn-outline-light"
                        >Админ панель
                        </button>
                        <button
                            onClick={() => logOut()}
                            type="button"
                            className="btn btn-outline-light mx-4"
                        >Выйти
                        </button>
                    </div>
                    :
                    <div style={{color: "white"}} className="ml-auto" id="navbarNav">
                        <button onClick={() => history(LOGIN_ROUTE)} type="button" className="btn btn-outline-light">Авторизация</button>
                    </div>
                }
            </div>
        </nav>
    );
});

export default NavBar;