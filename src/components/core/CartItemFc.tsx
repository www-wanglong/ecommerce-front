import React, { useState } from 'react';
import { CartItem, deleteItem, updateItem } from '../../helpers/cart';
import { Button, Image, Input } from 'antd';
import { ChangeEvent } from 'react-router/node_modules/@types/react';

interface Props {
  product: CartItem
  setCart: (cart: CartItem[]) => void
}

function CartItemFc({ product, setCart }: Props) {

  const [count, setCount] = useState<number>(product.count)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(event.target.value)
    setCart(updateItem(product._id, value))
    setCount(value)
  }

  const deleteCartProduct = () => {
    setCart(deleteItem(product._id))
  }

  return (
    <tr className="ant-table-row">
      <td className="ant-table-cell">
        <Image width={120} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      </td>
      <td className="ant-table-cell">{product.name}</td>
      <td className="ant-table-cell">{product.price}</td>
      <td className="ant-table-cell">{product.category.name}</td>
      <td className="ant-table-cell">
        <Input type="number" value={product.count} onChange={handleChange} />
      </td>
      <td className="ant-table-cell">
        <Button onClick={deleteCartProduct} danger>
          删除
        </Button>
      </td>
    </tr>
  );
}

export default CartItemFc;
