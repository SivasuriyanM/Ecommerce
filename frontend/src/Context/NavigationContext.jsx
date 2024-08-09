import { createContext, useContext, useState, useEffect } from "react";
import { getProducts } from "../services/productService";
const NavContext = createContext();

export default function ContextProvider({ children }) {
  const [nav, setNav] = useState("home");

  const [search, setSearch] = useState();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);
  return (
    <NavContext.Provider
      value={{
        nav,
        setNav,
        products,
        setProducts,
        cart,
        setCart,

        search,
        setSearch,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}
export const UserChange = () => {
  return useContext(NavContext);
};
