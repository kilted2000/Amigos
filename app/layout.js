export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }


  export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
  }

  import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import Layout from '../components/Layout';

//import '@fortawesome/fontawesome-svg-core/styles.css';

import '../styles/globals.css';


//initFontAwesome();

export function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}