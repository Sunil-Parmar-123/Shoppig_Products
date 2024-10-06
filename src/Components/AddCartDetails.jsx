import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import style from './AddCartDetails.module.css'

function AddCartDetails() {
  const item = useSelector((state) => state.cartItems);
  // console.log(item);

  return (
    <div className={style.container}>
      {item.map(({ productId, title, rating, price, imageUrl,quantity }) => (
        <CartItem
          key={productId}
          productId={productId}
          title={title}
          rating={rating}
          price={price}
          imageUrl={imageUrl}
          quantity={quantity}
        />
      ))}
    </div>
  );
}

export default AddCartDetails;
