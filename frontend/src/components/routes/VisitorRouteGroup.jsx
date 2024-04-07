import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VisitorNavbar from "../navbars/VisitorNavbar";
import VisitorFooter from "../footers/VisitorFooter";
import Contact from "../../visitors/contact/Contact";
import AboutV from "../../visitors/about/AboutV";
import AccountingMenu from "../../visitors/accounting/AccountingMenu";
import CalculatorTaxe from "../../visitors/calculator-taxe/CalculatorTaxe";
import InvoiceManagement from "../../visitors/accounting/InvoiceManagement";

const VisitorRouteGroup = () => {
    return (
        <BrowserRouter basename="/">
            <VisitorNavbar />
            <Routes>
                <Route path="contact" element={<Contact />}></Route>
                <Route path="about" element={<AboutV />}></Route>
                <Route path="contabil" element={<AccountingMenu />}></Route>
                <Route path="facturi" element={<InvoiceManagement />} />
                <Route path="calculator" element={<CalculatorTaxe />}></Route>
            </Routes>
            <VisitorFooter />
        </BrowserRouter>
    );
};

export default VisitorRouteGroup;