import React, { useState } from "react";
import { UserChange } from "../Context/NavigationContext";

function Cart() {
  const { cart } = UserChange();
  const [buy, setBuy] = useState(false);
  console.log(cart);
  return (
    <div>
      {" "}
      <table>
        <tbody>
          <tr>
            <td>
              <img
                style={{ width: "940px", height: "540px" }}
                src={cart.image}
                alt={cart.name}
              />
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h2>{cart.name}</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <p>{cart.specifications}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <h3>Price: ${cart.price}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Features:</h4>
                      {cart.features.map((feature, index) => (
                        <tr key={index}>
                          <td>{feature}</td>
                        </tr>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Testimonials:</h4>
                      {cart.testimonials.map((testimonial, index) => (
                        <tr key={index}>
                          <td>{testimonial}</td>
                        </tr>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        onClick={() => {
                          setBuy(true);
                        }}
                      >
                        Order
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        {buy ? (
          <div>
            <h3>Available Payment Methods:</h3>
            <button>Gpay</button>
            <button>Credit Card</button>
            <button>UPI</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Cart;
