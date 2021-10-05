import { Button, Card, Col, Row, Typography, Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../store/models/product'
const { Title, Paragraph } = Typography

interface Props {
  product: Product
}

function ProductItem({ product }: Props) {
  return (
    <Card
      actions={[
        <Button>
          <Link to="">查看详情</Link>
        </Button>,
        <Button>
          <Link to="">加入购物车</Link>
        </Button>
      ]}
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
