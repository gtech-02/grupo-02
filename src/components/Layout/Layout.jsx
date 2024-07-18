import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Definindo o componente de layout
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;