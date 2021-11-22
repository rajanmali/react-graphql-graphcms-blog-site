import { useState, useEffect } from 'react';

// Components
import Layout from '../components/Layout';

// Styles
import 'tailwindcss/tailwind.css';
import '../assets/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
