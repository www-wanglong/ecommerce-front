import { Button, Card, Col, Row, Typography } from 'antd';
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
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Title level={5}>测试商品</Title>
      <Paragraph ellipsis={{rows: 2}}>测试商品描述</Paragraph>
      <Row>
        <Col span="12">销量</Col>
        <Col span="12" style={{textAlign: 'right'}}>价格</Col>
      </Row>
      <Row>
        <Col span="12">上架时间</Col>
        <Col span="12" style={{textAlign: 'right'}}>所属分类</Col>
      </Row>
    </Card>
  );
}

export default ProductItem;
