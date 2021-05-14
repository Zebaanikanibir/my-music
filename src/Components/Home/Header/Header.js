import React from 'react';
import Bar from '../Bar/Bar';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeadNavbar from '../HeadNavbar/HeadNavbar';

import './Header.css';
const Header = () => {
    return (
        <div className="header-container">
            <HeadNavbar></HeadNavbar>
            <HeaderMain></HeaderMain>
            <Bar></Bar>
           
        </div>
    );
};

export default Header;