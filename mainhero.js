import React from 'react'
import first from '../apple-website/image/iphon.jpg';
import second from '../apple-website/image/ipadpro.jpg';
import { Link } from "react-router-dom";
// import Youtubeapi from './youtube/Youtubeapi';

function Main() {
    return (
        <main>
            <section className="hero-section iphone-hero" id="iPhone" >
                <h1>iPhone</h1>
                <h2>Give your old device a new beginning.</h2>
                <div className="hero-links">
                    <Link to="#" className="learn-more-btn">Learn more <i className="fas fa-chevron-right"></i></Link>
                    <Link to="#" className="buy-btn">Buy <i className="fas fa-chevron-right"></i></Link>
                </div>
                <img src={first} alt="iPhone" className="hero-image" />
            </section>

            <section className="hero-section ipad-pro-hero" id="iPad">
                <h1>iPad Pro</h1>
                <h2>Unbelievably thin. Unbelievably powerful.</h2>
                <div className="hero-links">
                    <Link to="#" className="learn-more-btn">Learn more <i className="fas fa-chevron-right"></i></Link>
                    <Link to="#" className="buy-btn">Buy <i className="fas fa-chevron-right"></i></Link>
                </div>
                <img src={second} alt="iPad Pro" className="hero-image" />
            </section>

            <div className="grid-container">
                <section className="grid-2-col">
                    <div className="grid-item macbook-air-card" id="macbook">
                        <h3>MacBook Air</h3>
                        <h4>Power. It's in the Air.</h4>
                        <div className="item-links">
                            <Link to="#" className="learn-more-btn">Learn more <i className="fas fa-chevron-right"></i></Link>
                            <Link to="#" className="buy-btn">Buy <i className="fas fa-chevron-right"></i></Link>
                        </div>
                    </div>
                    <div className="grid-item ipad-card" id="ipad" >
                        <h3>iPad</h3>
                        <h4>Lovable. Drawable. Magical.</h4>
                        <div className="item-links">
                            <Link to="#" className="learn-more-btn">Learn more <i className="fas fa-chevron-right"></i></Link>
                            <Link to="#" className="buy-btn">Buy <i className="fas fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </section>
                <section className="grid-2-col">
                    <div className="grid-item dark-bg apple-watch-card" id="watch" >
                        <h3><i className="fab fa-apple"></i> WATCH</h3>
                        <h4>Smarter. Brighter. Mightier.</h4>
                        <div className="item-links">
                            <Link to="#" className="learn-more-btn">Learn more <i className="fas fa-chevron-right"></i></Link>
                            <Link to="#" className="buy-btn">Buy <i className="fas fa-chevron-right"></i></Link>
                        </div>
                    </div>
                    <div className="grid-item airpods-pro-card" id="airpods">
                        <h3>AirPods Pro 2</h3>
                        <h4>Rebuilt from the sound up.</h4>
                        <div className="item-links">
                            <Link to="#" className="learn-more-btn">Learn more <i className="fas fa-chevron-right"></i></Link>
                            <Link to="#" className="buy-btn">Buy <i className="fas fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </section>

                <section className="grid-2-col">
                    <div className="grid-item trade-in-card" id="tradein">
                        <h3><i className="fab fa-apple"></i> Trade In</h3>
                        <h4>Get credit toward a new one.</h4>
                        <div className="item-links">
                            <Link to="#" className="learn-more-btn">See what your device is worth <i
                                className="fas fa-chevron-right"></i></Link>
                        </div>
                    </div>
                    <div className="grid-item apple-card-card" id="cards">
                        <h3><i className="fab fa-apple"></i> Card</h3>
                        <h4>Get 3% Daily Cash back with Apple Card.</h4>
                        <div className="item-links">
                            <Link to="#" className="learn-more-btn">Learn more <i className="fas fa-chevron-right"></i></Link>
                            <Link to="#" className="buy-btn">Apply now <i className="fas fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </section>
            </div>
            {/* <section>
                <Youtubeapi />
            </section> */}
        </main>

    )
}
export default Main;