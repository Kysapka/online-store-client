import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import TestDropDown from "./components/testDropDown";

function App() {

    console.log(process.env.REACT_APP_API_URL)

    return (
        // <BrowserRouter>
        //     <NavBar />
        //     <AppRouter/>
        //
        // </BrowserRouter>
    <TestDropDown />
    );
}

export default App;
