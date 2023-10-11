


  export const metadata = {
    title: 'BarkAmigos',
    description: 'Welcome to Next.js',
  }

  //import React from 'react';
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

export default function RootLayout({
  children,
}) {
  return (
    <UserProvider>
    <html lang="en">
      <body>{children}</body>
    </html>
    </UserProvider>
  )
}