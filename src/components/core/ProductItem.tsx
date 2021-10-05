import { Button, Card, Col, Row, Typography, Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../store/models/product'
import { addItem } from '../../helpers/cart'
import { useDispatch } from 'react-redux';
import { push } from "connected-react-router"
const { Title, Paragraph } = Typography

interface Props {
  product: Product,
  showDetailBtn?: boolean,
  showCartBtn?: boolean,
}

function ProductItem({ product, showDetailBtn = true,  showCartBtn = true}: Props) {

  const dispatch = useDispatch()

  const addToCart = () => {
    addItem(product, () => {
      dispatch(push('/cart'))
    })
  }

  const actionButtons = () => {
    let buttons = []
    if (showDetailBtn) {
      buttons.push(
        <Button>
          <Link to={`/product/${product._id}`}>查看详情</Link>
        </Button>
      )
    }
    if (showCartBtn) {
      buttons.push(
        <Button type="link" onClick={addToCart}>
          加入购物车
        </Button>
      )
    }
    return buttons;
  }

  return (
    <Card
      actions={actionButtons()}
      cover={<Image alt={product.name} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Title level={5}>{product.name}</Title>
      <Paragraph ellipsis={{rows: 2}}>{product.description}</Paragraph>
      <Row>
        <Col span="12">销量:{product.sold}</Col>
        <Col span="12" style={{textAlign: 'right'}}>价格:{product.price}</Col>
      </Row>
      <Row>
        <Col span="12">上架时间:{product.createdAt}</Col>
        <Col span="12" style={{textAlign: 'right'}}>所属分类:{product.category.name}</Col>
      </Row>
    </Card>
  );
}

export default ProductItem;
