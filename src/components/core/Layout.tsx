import { PageHeader } from 'antd';
import React from 'react';
import Navigation from './Navigation';

interface Props {
  children: React.ReactNode,
  title: string,
  subTitle: string
}

function Layout({ children, title, subTitle }: Props ) {
  return (
    <div>
      <Navigation />
      <PageHeader className="jumbotron" title={title} subTitle={subTitle} />
      <div style={{width: '80%', margin: "0 auto"}}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
