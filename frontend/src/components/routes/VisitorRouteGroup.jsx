import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VisitorNavbar from "../navbars/VisitorNavbar";
import VisitorFooter from "../footers/VisitorFooter";
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
            <VisitorFooter />
        </BrowserRouter>
    );
};

export default VisitorRouteGroup;