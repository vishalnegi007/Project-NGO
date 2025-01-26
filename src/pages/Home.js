import React from 'react'
import { Link } from 'react-router-dom'
import suit1 from '../assests/images/suit1.jpg';
import suit2 from '../assests/images/suit2.png';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="hero-content">
                <h1>Providing Shelter, One Suit at a Time</h1>
                <p>Join us in our mission to help the homeless with innovative solutions.</p>
                <Link to="/about" className="btn">Learn More</Link>
            </div>
            <section id="products" className="products">
                <h2>Our Products</h2>
                <div className="product-list">
                    <div className="product">
                        <img src={suit1} alt="Shelter Suit" />
                        <h3>Shelter Suit</h3>
                    </div>
                    <div className="product">
                        <img src={suit2} alt="Shelter Bag" />
                        <h3>Shelter Bag</h3>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home