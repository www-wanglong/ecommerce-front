import React from 'react';
import { useSelector } from 'react-redux';
import Layout from './Layout';

function Home() {
  const state = useSelector(state => state)
  return (
    <Layout title="商城" subTitle="来吧">
      Layout Home{JSON.stringify(state)}
    </Layout>
  );
}

export default Home;
