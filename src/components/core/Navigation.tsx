import { Menu } from 'antd';
import { RouterState } from 'connected-react-router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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

  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item  className={isHome}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item className={isShop}>
        <Link to="/shop">商城</Link>
      </Menu.Item>
      <Menu.Item className={isSignIn}>
        <Link to="/signIn">登录</Link>
      </Menu.Item>
      <Menu.Item className={isSignUp}>
        <Link to="/signUp">注册</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navigation;
