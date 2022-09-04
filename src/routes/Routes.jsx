import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage.jsx'
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import TestePage from "../pages/TestePage/TestePage.jsx";

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>} />
            <Route path= "*" element = {<ErrorPage/>} />
            <Route path= "TestePage" element = {<TestePage/>} />
        </Routes>
      </BrowserRouter>
    )
}