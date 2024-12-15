import React from 'react';

function Card({ title, text, imgSrc, onAddToCart }) {
    return (
        <div className="card m-3" style={{ width: '18rem' }}>
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <button className="btn btn-primary" onClick={onAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Card;
