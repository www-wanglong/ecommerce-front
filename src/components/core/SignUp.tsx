import React, { useEffect } from 'react';
import Layout from './Layout';
import { Button, Form, Input, Result } from 'antd'
import { resetSignUp, signUp, SignUpPayload } from '../../store/actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { AuthState } from '../../store/reducers/auth.reducer';
import { Link } from 'react-router-dom';

function SignUp() {

  const dispatch = useDispatch()
  // 获取注册结果
  const auth = useSelector<AppState, AuthState>(state => state.auth)
  const onFinish = (value: SignUpPayload) => {
    dispatch(signUp(value))
  }

  // 表单实例
  const [form] = Form.useForm()

  // 1.注册成功 清空表单
  useEffect(() => {
    if (auth.signUp.loaded && auth.signUp.success) {
      form.resetFields()
    }
  }, [auth])

  const showSuccess = () => {
    if (auth.signUp.loaded && auth.signUp.success) {
      return (
        <Result
          status="success"
          title="注册成功!"
          extra={[
            <Button type="primary" >
              <Link to="signIn">登录</Link>
            </Button>,
          ]}
        />
      )
    }
  }

  const showError = () => {
    if (auth.signUp.loaded && !auth.signUp.success) {
      return (
        <Result
          status="warning"
          title="注册失败!"
          subTitle={auth.signUp.message}
        />
      )
    }
  }

  const signUpForm = () => (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="name" label="昵称">
        <Input />
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">注册</Button>
      </Form.Item>
    </Form>
  )

  // 离开页面
  useEffect(() => {
    return () => {
      // 重置状态
      dispatch(resetSignUp())
    }
  }, [])


  return (
    <Layout title="注册" subTitle="">
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
}

export default SignUp;
