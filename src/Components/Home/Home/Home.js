import React from 'react';
import Header from '../Header/Header';
import Shows from '../Shows/Shows';
import Reviews from '../Reviews/Reviews';
import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <Shows></Shows>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;