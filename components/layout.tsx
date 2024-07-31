import React from 'react';
import Head from 'next/head';
import Nav from './nav';

// Define the type for the layout props
type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = 'My App' }) => {
  return (
    <div className='px-2 max-w-[1150px] mx-auto relative'>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <Nav />
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Footer content */}
        {/* <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p> */}
      </footer>
    </div>
  );
};

export default Layout;
