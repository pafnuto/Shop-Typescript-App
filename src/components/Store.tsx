import React from 'react';
import { StoreProps } from '../context/types'

export function Store ({ id, name, price, img }: StoreProps) {

  const {
    itemCartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  const quantity = getItemQuantity(id)
  return (
    <div>Items</div>
  )
}
