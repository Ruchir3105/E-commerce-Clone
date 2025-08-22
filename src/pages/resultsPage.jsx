import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResultsPage = () => {
    const navigate = useNavigate();
    const { category } = useParams(); 
    const [products, setProducts] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    const fetchData = (category) => {
        const url = category ? `http://localhost:8080/products?category=${category}` : "http://localhost:8080/products";
        axios.get(url)
            .then(function (res) {
                console.log(res.data[0]);
                setProducts(res.data);
                setTotalCount(res.data.length);
            })
            .catch(function (error) {
                console.error("Error fetching data: ", error);
            });
    }

    useEffect(() => {
        fetchData(category);
    }, [category]); 

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        navigate(selectedCategory ? `/products/category/${selectedCategory}` : "/products");
    }

    return (
        <div className="resultsDiv">
            <div className="filterDiv">
                <div className="filterPaddingLeft"></div>
                <div className="filter">
                    <h2>Filter by <br /> Category</h2>
                    <div className="filterFunctionality dropdown">
                        <select onChange={handleCategoryChange}>
                            <option value="">All</option>
                            <option value="BOTTOMS">Bottoms</option>
                            <option value="TEES">Tees</option>
                            <option value="SHIRTS">Shirts</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="contentDiv">
                Home - LATEST COLLECTION
                <h1>LATEST COLLECTION</h1>
                <div className="pagesAndSort">
                    <div className="pages"><b>SHOWING ALL {totalCount} RESULTS</b></div>
                    <div className="sortFeature">
                        <select name="sort" id="sort">
                            <option value="Popularity"><b>Sort By: Popularity</b></option>
                            <option value="AverageRating"><b>Sort By: Average Rating</b></option>
                            <option value="latest" default><b>Sort By: Latest</b></option>
                            <option value="lowToHigh"><b>Sort By: Low to High</b></option>
                            <option value="highToLow"><b>Sort By: High to Low</b></option>
                        </select>
                    </div>
                </div>
                <div className="productCards">
                    <div className="productGrid">
                        {products.map((item, index) => (
                            <div className="productCard" key={index}>
                                <ProductCard product={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultsPage;
