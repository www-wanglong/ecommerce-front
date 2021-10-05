import React, { useEffect } from 'react';
import { Divider, Button, Form, Input, Select, Row, Col } from 'antd';
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { CategoryState } from '../../store/reducers/category.reducer';
import { getCategory } from '../../store/actions/category.actions';
import { searchProduct } from '../../store/actions/product.actions';
import { ProductState } from '../../store/reducers/product.reducer';

function Search() {

  const dispatch = useDispatch()

  const { search } = useSelector<AppState, ProductState>(state => state.product)

  const { category } = useSelector<AppState, CategoryState>(state => state.category);

  useEffect(() => {
    dispatch(getCategory())

  }, [])

  const onFinish = (value: {category: string, search: string}) => {
    console.log(value)
    dispatch(searchProduct(value))
  }

  return (
    <>
      <Form onFinish={onFinish} layout="inline" initialValues={{category: "All"}}>
        <Input.Group compact>
          <Form.Item name="category">
            <Select>
              <Select.Option value="All">所有分类</Select.Option>
              {
                category.result.map( item => (
                  <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
                ))
              }
            </Select>
          </Form.Item>

          <Form.Item name="search">
            <Input placeholder="请输入搜索关键字" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">搜索</Button>
          </Form.Item>
        </Input.Group>
      </Form>

      <Divider />

      <Row gutter={[16, 16]}>
        <Col span="6">
          {
            search.map( item => (
              <ProductItem key={item._id} product={item} />
            ))
          }

        </Col>
      </Row>
    </>
  );
}

export default Search;
