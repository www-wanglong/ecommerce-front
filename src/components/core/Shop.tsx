import React, { useEffect, useState } from 'react';
import { Button, Col, Empty, Row, Space } from 'antd';
import Layout from './Layout';
import CheckBox from './CheckBox'
import RadioBox from './RadioBox';
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct } from '../../store/actions/product.actions';
import { AppState } from '../../store/reducers';
import { ProductState } from '../../store/reducers/product.reducer';
import ProductItem from './ProductItem';

function Shop() {

  const [myFilters, setMyFilters] = useState<{category: string[], price: number[]}>({category: [], price: []})
  const [skip, setSkip] = useState<number>(0)

  const dispatch = useDispatch()
  const { filter: { result: { data, size } } } = useSelector<AppState, ProductState>(state =>state.product)

  const handleCategoryFilter = (filters: string[]) => {
    setMyFilters({...myFilters, category: filters})
  }

  const handlePriceFilter = (price: number[]) => {
    setMyFilters({...myFilters, price})
  }

  const loadMore = () => {
    setSkip(skip + 4)
  }

  useEffect(() => {
    setSkip(0)
  }, [skip])

  useEffect(() => {
    dispatch(filterProduct({
      filter: myFilters,
      skip,
    }))
  }, [myFilters, skip])

  const filterDom = () => (
    <Space size="middle" direction="vertical">
      <CheckBox handleFilter={handleCategoryFilter} />
      <RadioBox handleFilter={handlePriceFilter} />
    </Space>
  )

  const productDom = () => (
    <Row gutter={[16, 16]}>
      {
        data.map( item => (
          <Col key={item._id} span="6">
            <ProductItem product={item} />
          </Col>
        ))
      }
    </Row>
  )

  const loadMoreButton = () => (
    <Row>
      {size > 4 && <Button onClick={loadMore}>加载更多</Button>}
    </Row>
  )

  const noData = () => (
    <Row>
      {size <= 4 && <Empty /> }
    </Row>
  )

  return (
    <Layout title="商品" subTitle="商品">
      <Row>
        <Col span="4">{filterDom()}</Col>
        <Col span="20">{productDom()} {loadMoreButton()} {noData()}</Col>
      </Row>
    </Layout>
  );
}

export default Shop;
