import { createContext, useState, useEffect, useContext } from "react";
import useAlert from "../hooks/useAlert";
import AuthContext from "./AuthContext";


const EcomContext = createContext()

export const EcomProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const { alertInfo, showHide} = useAlert();
  const [ cartItems, setCartItems ] = useState([]);
  const [ state, dispatch] = useContext(AuthContext);
  const isAuthenticated = state.accessToken !== null;

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/product");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
  }
  const featuredProduct = product.filter((product) => product.featured === true)
  const topSellingProduct = product.filter((product) => product.topSelling === true)

   //   adding items to cart
   const addToCart = (prod) => {
      const existingItems = cartItems.findIndex(items => items.id === prod.id);
      if (existingItems !== -1) {
         const itemsInCart = [...cartItems]
         const updateCartItem = itemsInCart[existingItems]
         updateCartItem.quantity += Number(prod.quantity)
         updateCartItem.amount = Number(updateCartItem.price * updateCartItem.quantity)
         setCartItems(itemsInCart)
         showHide("error", `${prod.name} already exist in your cart..`)
      }else {
        setCartItems([
            ...cartItems,
            { ...prod, amount: prod.price * prod.quantity }
        ])
        showHide("success", `${prod.name} successfully added to cart`)
      }
    //   setCartItems([...cartItems, existingItems])
   }

    //    calculate subtotal
     const calculateSubTotal = () => {
        return cartItems.reduce((acc, curr) => acc + curr.amount , 0)
     }

    //  calculate Vat
    const calculateVat = ( vat = 0.075) => {
        const subtotal = calculateSubTotal()
        return subtotal * vat;
    }

    // calculate total amount
    const calculateTotalAmount = () => {
        const subtotal = calculateSubTotal()
        const vat = calculateVat()
        return subtotal + vat;
    }

    // remove cart items
    const removeCartItems = (id) => {
        if (window.confirm("Are you sure you want tot delete?...")) {
            const deleteItems = cartItems.filter((items) => items.id !== id);
            setCartItems(deleteItems);
            showHide("success", "Product deleted successfully")
        }
    }

    // update cart items
    const updateCartItems = (id, newQuantity) => {
        const existingItems = cartItems.findIndex(items => items.id === id);
        const itemsInCart = [...cartItems]
        const updateCartItem = itemsInCart[existingItems]
        updateCartItem.quantity = parseInt(newQuantity, 10)
        updateCartItem.amount = updateCartItem.price * updateCartItem.quantity
        setCartItems(itemsInCart)
    }

    

  return (
    <EcomContext.Provider value= {{
        product,
        alertInfo,
        cartItems,
        featuredProduct,
        topSellingProduct,
        isAuthenticated,
        showHide,
        addToCart,
        calculateSubTotal,
        calculateVat,
        calculateTotalAmount,
        removeCartItems,
        updateCartItems,
    }}>
           {children}
    </EcomContext.Provider>
  )
}

export default EcomContext;
