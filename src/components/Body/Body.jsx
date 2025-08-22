import React, {Component} from "react";
import  MerchCard from "./MerchCard.jsx";
import CategoryCard from "./CategoryCard.jsx"
import NewIn from "./NewinCard.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from "react-router-dom";
// import { NavLink } from "react-router-dom";


function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style , background: "black"}}
        onClick={onClick}
        />
    );
    }

const Body = () => {
    const  navigate= useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />
        };
    const settingsCat = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />
        };
        const goToResult = (e) =>{
            navigate(e)
        }
    return(
        <div className="body">
            <div className="openingimg">
                <img src="img1.jpg"/>
            </div>
            <div className="trending">
                <div className="lefttrendingdiv">
                    <img src="img2.jpg"/>
                </div>
                <div className="righttrendingdiv">
                    <img src="img3.jpg"/>
                </div>
            </div>
            <div className = "discountdiv" onClick={()=>{
                goToResult("/products")
            }}>
                <img src="img4.png"/>
            </div>
            <div className="merchandise">
                <Slider {...settings}>
                    <MerchCard/>
                    <MerchCard/>
                    <MerchCard/>
                    <MerchCard/>
                    <MerchCard/>
                </Slider>
            </div>
            <h1><b>CATEGORIES</b></h1>
            <div className="categoriesdiv">
                <Slider {...settingsCat}>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                </Slider>
            </div>
            <h1><b>NEW IN</b></h1>
            <div className="newin">
                <Slider {...settingsCat}>
                    <NewIn/>
                    <NewIn/>
                    <NewIn/>
                    <NewIn/>
                    <NewIn/>
                </Slider>
            </div>
            <h1><b>BEST SELLERS</b></h1>
            <div className="newin">
                <Slider {...settingsCat}>
                    <NewIn/>
                    <NewIn/>
                    <NewIn/>
                    <NewIn/>
                    <NewIn/>
                </Slider>
            </div>
            <div className="details">
                <div className="shipping">
                    <img src="shipping_under_48.jpg"/>
                    <h2>SHIPPING WITHIN 48 HOURS</h2>
                    <p>Your order will be shipped within 48 hours from the</p><br></br><p>time since order is placed!</p>
                </div>
                <div className="delivery">
                    <img src="free_delivery.jpg"/>
                    <h2>5% OFF || DELIVERY</h2>
                    <p>5% OFF on Pre-paid orders. Free delivery on COD</p><br></br><p>orders above ₹1499.</p>
                </div>
                <div className="madeinIndia">
                    <img src="madeinindia.jpg"/>
                    <h2>MADE IN INDIA</h2>
                    <p>Our products are 100% made in India. From raw</p><br></br><p>fabric to the final product!</p>
                </div>
            </div>
        </div>
    )
}

export default Body;