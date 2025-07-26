import './App.css'
import Home from "./pages/Home/Home.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layouts from "./component/layouts/Layouts.jsx";
import Card from "./component/card/Card.jsx";
import ROUTES from "./routes/routes.js";
import About from "./pages/about/About.jsx";

function App() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path={ROUTES.HOME} element={<Layouts/>}>
                <Route index element={<Home/>}/>
                <Route path={ROUTES.CARD} element={<Card/>}/>
                <Route path={ROUTES.ABOUT} element={<About/>}/>
            </Route>
        )
    )
    return (
        <>
            <RouterProvider router={routes}/>
        </>
    )
}

export default App
