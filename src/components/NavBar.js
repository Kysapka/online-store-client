import React, {useContext} from 'react';
import {Context} from "../index";
import {SHOP_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {

    const {user} = useContext(Context)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-xxl">
                <NavLink to={SHOP_ROUTE} className="navbar-brand" href="#">КупиДевайс</NavLink>
                {user.isAuth
                    ?
                    <div style={{color: "white"}} className="ml-auto" id="navbarNav">
                        <button type="button" className="btn btn-outline-light">Админ панель</button>
                        <button type="button" className="btn btn-outline-light mx-4">Выйти</button>
                    </div>
                    :
                    <div style={{color: "white"}} className="ml-auto" id="navbarNav">
                        <button onClick={() => user.setIsAuth(true)} type="button" className="btn btn-outline-light">Авторизация</button>
                    </div>
                }
            </div>
        </nav>
    );
});

export default NavBar;