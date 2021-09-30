import { Menu } from 'antd';
import { RouterState } from 'connected-react-router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/models/auth';
import { AppState } from '../../store/reducers/index'

function useActive (currentPath: string, path: string): string {
  return currentPath === path ? "ant-menu-item-selected" : ""
}

function Navigation() {

  const router = useSelector<AppState, RouterState>(state => state.router)

  const pathname = router.location.pathname

  const isHome = useActive(pathname, "/")
  const isShop = useActive(pathname, "/shop")
  const isSignIn = useActive(pathname, "/signIn ")
  const isSignUp = useActive(pathname, "/signUp")
  const isDashboard = useActive(pathname, getDashboardUrl())

  function getDashboardUrl () {
    let url = "/user/dashboard"
    if (isAuth()) {
      const { user: { role } } = isAuth() as Jwt
      if (role === 1) {
        url = 'admin/dashboard'
      }
    }
    return url
  }

  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item  className={isHome}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item className={isShop}>
        <Link to="/shop">商城</Link>
      </Menu.Item>
      {
        !isAuth() &&
        <>
          <Menu.Item className={isSignIn}>
            <Link to="/signIn">登录</Link>
          </Menu.Item>
          <Menu.Item className={isSignUp}>
            <Link to="/signUp">注册</Link>
          </Menu.Item>
        </>
      }
      {
        isAuth() &&
        <Menu.Item className={isDashboard}>
          <Link to={getDashboardUrl()}>首页</Link>
        </Menu.Item>
      }
      </Menu>

  );
}

export default Navigation;
