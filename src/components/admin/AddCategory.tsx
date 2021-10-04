import Layout from '../core/Layout';
import { Button, Form, Input, message } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../config';
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/models/auth';
import { Link } from 'react-router-dom';

function AddCategory() {

  const [name, setName] = useState<string>("")

  const { user, token } = isAuth() as Jwt

  // 监听数据变化
  useEffect(() => {
    // 创建请求
    async function addCategory() {
      try {
        let response = await axios.post<{name: string}>(`${API}/category/create/${user._id}`,
        {
          name: name
        },
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        message.success(`$[${response.data.name}] 添加成功`)
      } catch (error) {
        console.log(error)
        message.error('创建失败', 1)
      }
    }

    console.log('name', name)
    if (!!name) {
      addCategory()
    }
  }, [name])

  const onFinish = (value: { name: string }) => {
    setName(value.name)
  }

  return (
    <Layout title="添加分类" subTitle="">
      <Form onFinish={onFinish}>
        <Form.Item name="name" label="分类名称">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">添加分类</Button>
        </Form.Item>
      </Form>
      <Button>
        <Link to="/admin/dashboard">返回首页</Link>
      </Button>
    </Layout>
  );
}

export default AddCategory;
