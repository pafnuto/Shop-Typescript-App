import { createContext, ReactNode, useContext, useState } from "react";
import { ItemCartContext, cartItem  } from './types'
import { useLocalStorage} from '../hooks/useLocalStorage'

export type ShoppingCartProviderProp = {
    children: ReactNode;
  };

  const ItemCartContext = createContext({} as ItemCartContext)

  export default function useCartContext() {
    return useContext(ItemCartContext)
  }

  export function ShoppingCartProvider({ children }: ShoppingCartProviderProp) {
    const [isOpen, setIsOpen] = useState(false)

    const [cartItems, setCartItems] = useLocalStorage<cartItem[]>("shopping-cart",[])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
  
    const openCart = () => setIsOpen(true)

    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: number) {
      return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function minusCartQuantity(id: number) {
      setCartItems(currItems => {
        if (currItems.find(item => item.id === id) == null) {
          return [...currItems, { id, quantity: 1 }]
        } else {
          return currItems.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 }
            } else {
              return item
            }
          })
        }
      })
    }
    function plusCartQuantity(id: number) {
      setCartItems(currItems => {
        if (currItems.find(item => item.id === id)?.quantity === 1) {
          return currItems.filter(item => item.id !== id)
        } else {
          return currItems.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 }
            } else {
              return item
            }
          })
        }
      })
    }
    function removeFromCart(id: number) {
      setCartItems(currItems => {
        return currItems.filter(item => item.id !== id)
      })
    }
    return (
      <ItemCartContext.Provider
        value={{
          getItemQuantity,
          plusCartQuantity,
          minusCartQuantity,
          removeFromCart,
          openCart,
          closeCart,
          cartItems,
          cartQuantity,
        }}
      >
        {children}
        <ItemCartContext isOpen={isOpen} />
      </ItemCartContext.Provider>
    )
  }