import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const fetchData = () => {
        axios.get(`http://localhost:8080/products/${params.id}`)
            .then(function (res) {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(function (error) {
                console.error("Error fetching data: ", error);
            }
            )
    }

    const handleAddToCart = () => {
        axios.post(`http://localhost:8080/products/cart/add`, { productID: product.id })
            .then((res) => {
                console.log("Product added to cart:", res.data);
            })
            .catch((error) => {
                console.error("Error adding product to cart: ", error);
            });
    };

    useEffect(() => {
        console.log("Testing");
        fetchData()
    }, [params.id]);
    useEffect(() => {
        console.log({ product });
    }, [product])
    return (
        <div className="productDiv">
            <div className="productImgs">
                <img src={product.imgURL} />
            </div>
            <div className="productDesc">
                <p>{product.category}</p>
                <h1>{product.name}</h1>
                <h3>₹{product.price}</h3>
                <p>SIZE</p>
            </div>
            <div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
            </div>
        </div>)
}

export default ProductPage;