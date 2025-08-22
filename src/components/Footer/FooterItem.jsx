import React from "react";

const FooterItem= ({data}) => {
    console.log({data});
    return (
        <div className = "shop">
            <h2>{data.heading}</h2>
            <ul>
                {data.subDetails.map((item)=><li>{item}</li>)}
            </ul>
        </div>
    )
}

export default FooterItem;