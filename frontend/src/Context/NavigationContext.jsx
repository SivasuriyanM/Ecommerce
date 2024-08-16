import { createContext, useContext, useState, useEffect } from "react";
import { getProducts } from "../services/productService";
import { getUsers } from "../services/UserService";
const NavContext = createContext();

export default function ContextProvider({ children }) {
  const [nav, setNav] = useState("home");
  const [search, setSearch] = useState();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([""]);
  const [user, setUser] = useState();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    const fetchUser = async () => {
      const users = await getUsers();
      setUser(users);
      const currentuser = localStorage.getItem("currentUser");
      console.log("User Set to:", currentuser);
      if (typeof currentuser !== "undefined") {
        const loginUser = users.find(({ name }) => name === currentuser);
        setCurrentUser(loginUser);
        console.log("CurrentUser func works");
      } else {
        setCurrentUser(undefined);
      }
    };
    fetchUser();
  }, []);

  console.log("Initial nav State", nav);
  return (
    <NavContext.Provider
      value={{
        nav,
        setNav,
        products,
        cart,
        setCart,
        user,
        setUser,
        currentUser,
        setCurrentUser,
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
