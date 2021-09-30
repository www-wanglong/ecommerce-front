import React from 'react';
import Layout from './Layout';
import { Button, Form, Input, Result } from 'antd'
import { SignInPayload, signIn } from '../../store/actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { AuthState } from '../../store/reducers/auth.reducer';
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/models/auth';
import { Redirect } from 'react-router';

function SignIn() {

  const dispatch = useDispatch()

  // 获取登陆结果
  const auth = useSelector<AppState, AuthState>(state => state.auth)

  // 登录失败
  const showError = () => {
    if (auth.signIn.loaded && !auth.signIn.success) {
      return (
        <Result
          status="warning"
          title="登录失败!"
          subTitle={auth.signIn.message}
        />
      )
    }
  }

  const redirectToDashboard = () => {
    const auth = isAuth()
    if (auth) {
      const { user: { role } } = auth as Jwt

      if (role === 0) {
        // 组册用户
        return <Redirect to="/user/dashboard" />
      } else {
        // 管理员
        return <Redirect to="/admin/dashboard" />
      }
    }
  }

  const onFinish = (value: SignInPayload) => {
    dispatch(signIn(value))
  }

  const signInForm = () => (
    <Form onFinish={onFinish}>
      <Form.Item name="email" label="邮箱">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form.Item>
    </Form>
  )

  return (
    <Layout title="登录" subTitle="登录去吧">
      {showError()}
      {redirectToDashboard()}
      {signInForm()}
    </Layout>
  );
}

export default SignIn;
