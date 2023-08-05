import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Redirect } from 'react-router-dom';

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return <Redirect to={siteConfig.baseUrl + 'beranda'} />;
}

export default Home;
