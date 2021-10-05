import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProductById } from '../../store/actions/product.actions';
import { AppState } from '../../store/reducers';
import { ProductState } from '../../store/reducers/product.reducer';
import Layout from './Layout'
import ProductItem from './ProductItem';
function Product() {
  const { productId } = useParams<{productId: string}>()

  const dispatch = useDispatch()
  const { product } = useSelector<AppState, ProductState>(state => state.product)

  useEffect(() => {
    dispatch(getProductById({productId: productId}))
  }, [dispatch, productId])

  return (
    <Layout title="商品名称" subTitle="商品描述">
      <Row gutter={36}>
        <Col span="18">
          <ProductItem product={product.result} showDetailBtn={false} />
        </Col>
        <Col span="6"></Col>
      </Row>
    </Layout>
  );
}

export default Product;
