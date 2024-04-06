import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VisitorNavbar from "../navbars/VisitorNavbar";
import Contact from "../../visitors/contact/Contact";
import AboutV from "../../visitors/about/AboutV";

const VisitorRouteGroup = () => {
    return (
        <BrowserRouter basename="/">
            <VisitorNavbar />
            <Routes>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<AboutV />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default VisitorRouteGroup;