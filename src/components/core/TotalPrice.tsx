import { Typography } from 'antd';
import React, { useEffect } from 'react';
import { CartItem } from '../../helpers/cart';

interface Props {
  cart: CartItem[],
  setTotalPrice: (price: number) => void
}

function TotalPrice({cart, setTotalPrice}: Props) {

  const getTotalPrice = () => {
    return cart.reduce((currentValue, nextValue) => {
      return (currentValue += nextValue.price * nextValue.count)
    }, 0).toFixed(2)
  }

  useEffect(() => {
    setTotalPrice(parseFloat(getTotalPrice()))
  }, [cart])
  return (
    <Typography.Title level={5}>
      商品总价：{getTotalPrice()}
    </Typography.Title>
  );
}

export default TotalPrice;
