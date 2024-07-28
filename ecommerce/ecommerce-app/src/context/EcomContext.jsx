import { createContext, useState, useEffect } from "react";
import useAlert from "../hooks/useAlert";


const EcomContext = createContext()

export const EcomProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const { alertInfo, showHide} = useAlert();
  const [ cartItems, setCartItems ] = useState([]);

  useEffect( () => {
    fetchData()
  }, [])

  const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/product");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
  }
  const featuredProduct = product.filter((product) => product.featured === true)
  const topSellingProduct = product.filter((product) => product.topSelling === true)

//   adding items to cart

   const addToCart = (product) => {
      const existingItems = cartItems.findIndex(items => items.id === product.id);

      if (existingItems !== -1) {
         const itemsInCart = [...cartItems]
         const updateCartItems = itemsInCart[existingItems]
         updateCartItems.quantity += Number(product.quantity)
         updateCartItems.amount = Number(itemsInCart.price * itemsInCart.quantity)
         setCartItems(itemsInCart)
         showHide("error", `${product.name} already exist in your cart..`)
      }else {
        setCartItems([
            ...cartItems,
            {...product, amount: product.price * product.quantity}
        ])
        showHide("success", `${product.name} successfully added to cart`)
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
        const updateCartItems = itemsInCart[existingItems]
        updateCartItems.quantity = Number(newQuantity)
        updateCartItems.amount = updateCartItems.price * updateCartItems.quantity
        setCartItems(itemsInCart)
    }

  return (
    <EcomContext.Provider value= {{
        product,
        alertInfo,
        cartItems,
        featuredProduct,
        topSellingProduct,
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
