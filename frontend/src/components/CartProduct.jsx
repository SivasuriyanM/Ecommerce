import React, { useState } from "react";
import { delToCart } from "../services/UserService";
import { UserChange } from "../Context/NavigationContext";

function CartProduct({ item }) {
  const { currentUser } = UserChange();
  const [buy, setBuy] = useState(false);
  console.log(item._id);
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <img
              style={{ width: "940px", height: "540px" }}
              src={item.image}
              alt={item.name}
            />
          </td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h2>{item.name}</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <p>{item.specifications}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <h3>Price: ${item.price}</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Features:</h4>
                    {item.features.map((feature, index) => (
                      <tr key={index}>
                        <td>{feature}</td>
                      </tr>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Testimonials:</h4>
                    {item.testimonials.map((testimonial, index) => (
                      <tr key={index}>
                        <td>{testimonial}</td>
                      </tr>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <table>
              <tbody>
                <th>Order Summary</th>
                <tr>
                  <td>Sub total:</td>
                  <td>{item.price}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>{item.price} + 5%</td>
                </tr>
                <tr>
                  <td>Discount:</td>
                  <td>{item.price} - 5%</td>
                </tr>
                <hr />
                <tr>
                  <td>Total:</td>
                  <td>{item.price}</td>
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
                <tr>
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
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <td>
              <button
                onClick={() => {
                  delToCart(currentUser._id, "cart", item._id);
                  window.location.reload();
                }}
              >
                Remove
              </button>
            </td>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CartProduct;
