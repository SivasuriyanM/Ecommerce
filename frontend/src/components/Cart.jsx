import React from "react";
import { UserChange } from "../Context/NavigationContext";
import CartProduct from "./CartProduct";

function Cart() {
  const { currentUser } = UserChange();

  console.log(currentUser.cart);

  return (
    <div>
      {currentUser.cart[0] === "" ? (
        <div
          style={{ margin: "250px", alignItems: "center", textAlign: "center" }}
        >
          <h1>Add Products to view them Here!!!</h1>
        </div>
      ) : (
        currentUser.cart.map((item, index) => (
          <CartProduct key={index} item={item} />
        ))
      )}
    </div>
  );
}

export default Cart;
