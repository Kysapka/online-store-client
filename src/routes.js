import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    LOGIN_ROUTE,
    INVALID_ROUTE
} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";
import Auth from "./pages/Auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin />
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket />
    },
]

export const publicRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin />
    },
    {
        path: SHOP_ROUTE,
        Component: <Shop />
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth />
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: <DevicePage />
    },
    {
        path: INVALID_ROUTE,
        Component: <Shop />
    },
]