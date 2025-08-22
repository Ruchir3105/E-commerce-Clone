import React from "react";
import Categories from "./Categories.jsx";
import Personal from './Personal.jsx';
import { useNavigate } from "react-router-dom";


function Header() {
    const navigate = useNavigate();
    const goToResult = (e) => {
        navigate(e)
    }
    return (
        <div className="header">
            <Categories />
            <div className="logo" onClick={() => {goToResult("/")}}><h1>Style Sanctuary</h1></div>
            <Personal />
        </div>
    )
}

export default Header; 