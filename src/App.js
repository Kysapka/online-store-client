import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

function App() {
    const apiUrl = process.env.REACT_APP_API_URL
    console.log(apiUrl)
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter/>
        </BrowserRouter>
);
}

export default App;
