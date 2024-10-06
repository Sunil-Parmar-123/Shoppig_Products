import React from "react";
import style from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { decreaseCartItem, increaseCartItem } from "../Slice/CartSlice";

function CartItem({ productId, title, rating, price, imageUrl, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className={style.flex}>
      <div className={style.flex}>
        <div className={style.img}>
          <img className={style.img} src={imageUrl} alt={title} />
        </div>
        <div className={style.h1parent}>
          <h5 className={style.h5}>{title}</h5>
          <p className="rating">{+rating} ★ ★ ★ ★</p>
        </div>
      </div>

      <div className={style.continer2}>
      <div className={style.price}>
        <p>${price}</p>
      </div>
      <div className={style.quantity}>
        <button onClick={() => dispatch(decreaseCartItem(productId))}>-</button>
        <h6>Quantity : {quantity}</h6>
        <button onClick={() => dispatch(increaseCartItem(productId))}>+</button>
      </div>
    <div className={style.price}>
      <p>${quantity * price}</p>
      </div>
       
      </div>
    </div>
  );
}

export default CartItem;
