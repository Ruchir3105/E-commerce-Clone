import React from "react"
import FooterItem from "./FooterItem.jsx";
import FooterLinks from "../../facts/footerDetails.json"

const Footer = () => {
    return(
        <div className="footer">
            <div className = "leftPadding"></div>
            <div className = "footerinfodiv">
                <div className="upperdiv">
                    <div className="imgdiv">
                        <img alt="Style Sanctuary"/>
                    </div>
                    <div className="upperrightDiv">
                        {FooterLinks.map((FooterLink)=><FooterItem data={FooterLink}/>)}
                    </div>
                </div>
                <div className="lowerdiv">
                    <div className="leftLower">
                        <p>© 2024 Style Sanctuary. All right reserved.  </p>
                        <div className="storeInfo">
                            <div className="downApp">
                                <img src="smartphone-call.png"/>
                                <h3>Download our App</h3>
                            </div>
                            <div className="storeLoc">
                                <img src="shop.png"/>
                                <h3>Stores near me</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rightLower"></div>
                </div>
            </div>
            <div className = "rightPadding"></div>
        </div>
    )
}

export default Footer;