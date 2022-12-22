   export type DetailCartItem = {
    id: number;
    name: string;
    imgURL: string;
    price: number;
    quantity: number;
  };
  
    type cartItem = {
    id: number;
    quantity: number;
  };
  
  type CartContext = {
    cartItems: cartItem[];
    getCartItems: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeCartItem: (id: number) => void;
    getNoOfItemsInCart: () => number;
    shouldShow: boolean;
    setShouldShow: (value: boolean) => void;
    handleHide: () => void;
    getItemsForCartOffCanvas: () => DetailCartItem[];
  };
  
