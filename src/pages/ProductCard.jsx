import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const goToProductPage = (url) => navigate(url);
    return (
        <div className="card" onClick={() => goToProductPage(`/products/${product.id}`)}>
            <img src={product.imgURL} alt={product.name} />
            <p>{product.category}</p>
            <p>{product.name}</p>
            <b>₹ {product.price}</b>
        </div>
    );
}

export default ProductCard;
