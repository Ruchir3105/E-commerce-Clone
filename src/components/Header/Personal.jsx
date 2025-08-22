import React from "react";
import { useNavigate } from "react-router-dom";

function Personal(){
    const navigate = useNavigate();
    const goToResult = (e) =>{
        navigate(e);
    }
    return (
        <div className="personal">
            <img src="search.png" alt="Search"/>
            <img src="bag.png" alt="Bag"/>
            <img src = "profile.png" alt="Profile" onClick={()=>{goToResult("/login")}}/>
        </div>
    )
}

export default Personal;