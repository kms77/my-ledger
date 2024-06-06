import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import myIcon from "../../assets/images/004-wallet.png";

const Home = () => {
    return(
        

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
            <img src={myIcon} alt="My Icon" style={{ width: '35vh', height: '35vh' }} />
            <br /><br />
            <h2 className="title-screen-logo" >MyLedger</h2>
        </div>
    );
}

export default Home;