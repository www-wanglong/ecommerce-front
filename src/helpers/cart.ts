/**
 * 将商品添加到购物车
 */

import { Product } from "../store/models/product";

export interface CartItem extends Product {
  count: number
}

export const addItem = (item: Product, next: () => void) => {
  let cart: CartItem[] = []
  if (typeof window !== 'undefined') {
    let cartProducts = localStorage.getItem('cart')
    if (cartProducts) {
      JSON.parse(cartProducts!)
    }

    cart.push({
      ...item,
      count: 1,
    })

    // 去重
    cart = Array
      .from(new Set(cart.map( item => item._id )))
      .map( _id => cart.find(item => item._id === _id) ) as CartItem[]

    localStorage.setItem('cart', JSON.stringify(cart))

    next()
  }
}