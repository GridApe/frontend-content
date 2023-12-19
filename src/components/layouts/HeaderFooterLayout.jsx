// component for header and footer layout
import React from 'react'
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const HeaderFooterLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default HeaderFooterLayout;