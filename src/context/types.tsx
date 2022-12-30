export type StoreProps = {
  id: number
  name: string
  price: number
  img: string
}

   export type DetailCartItem = {
    id: number;
    name: string;
    imgURL: string;
    price: number;
    quantity: number;
  };
  
  export type cartItem = {
    id: number;
    quantity: number;
  };
  
  export type ItemCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    plusCartQuantity: (id: number) => void
    minusCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: cartItem[]
  }
  
  
