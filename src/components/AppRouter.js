import React, {useContext} from 'react';
import {Route, Routes} from 'react-router'
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {

    const {user} = useContext(Context)

    return (
        <div>
            <Routes>
                {user.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} />
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} />
                )}
            </Routes>
        </div>
    );
};

export default AppRouter;