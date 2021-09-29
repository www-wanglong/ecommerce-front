import React from 'react';
import Layout from './Layout';
import { Button, Form, Input } from 'antd'

function SignIn() {
  return (
    <Layout title="登录" subTitle="">
      <Form>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary">登录</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}

export default SignIn;
