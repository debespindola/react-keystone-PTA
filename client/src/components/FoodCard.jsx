import React from 'react';

const FoodCard = (props) => {
  
  return ( 
    <div className="menu-hotdog">

        <div className="image-text">

          <img className="hotdog-images"
          src={props.product.picture}
          alt="Hot Dog Clássico"/>

          <div className="product-information">
            <h2>{props.product.name}</h2>
            <p className="description">Pão e salsicha do jeito que você já conhece 
              e saboroso como você nunca viu.</p>
            <p className="price">{props.product.price}</p>
          </div>

        </div>

        <button className="order-button">
          Adicionar
        </button>

    </div>

   );
}
 
export default FoodCard;