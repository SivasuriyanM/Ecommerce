import React from "react";

import { UserChange } from "../Context/NavigationContext";

function Search() {
  const { search, products, setCart } = UserChange();

  const result = products.find(({ name }) => name === search);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <img
                style={{ width: "940px", height: "540px" }}
                src={result.image}
                alt={result.name}
              />
            </td>
            <td>
              <tr>
                <td>
                  <img
                    style={{ width: "150px", height: "140px" }}
                    src={result.image}
                    alt={result.name}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{ width: "150px", height: "140px" }}
                    src={result.image}
                    alt={result.name}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    style={{ width: "150px", height: "140px" }}
                    src={result.image}
                    alt={result.name}
                  />
                </td>
              </tr>
            </td>
          </tr>
          <tr>
            <td>
              <h2>{result.name}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Product Specifications:</h4>
              <p>{result.specifications}</p>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <h3>Price: ${result.price}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Features:</h4>
              {result.features.map((feature, index) => (
                <tr key={index}>
                  <td>{feature}</td>
                </tr>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              <h4>Testimonials:</h4>
              {result.testimonials.map((testimonial, index) => (
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
                  setCart(result);
                  alert(`${result.name} Added to Cart`);
                }}
              >
                {" "}
                Add To Cart
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Search;
