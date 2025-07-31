import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>    <footer>
            <div className="footer-content">
                <div className="footer-disclaimer">
                    <p>1. Trade-in values will vary based on the condition, year, and configuration of your eligible
                        trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be
                        eligible to trade in for credit or an Apple Gift Card. Trade-in value may be applied toward
                        qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on
                        receipt of a qualifying device matching the description provided when estimate was made. Sales tax
                        may be assessed on full value of new device purchase. In-store trade-in requires presentation of a
                        valid photo ID (local law may require saving this information). Offer may not be available in all
                        stores, and may vary between in-store and online trade-in. Some stores may have additional
                        requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any
                        trade-in transaction for any reason. More details are available from Apple’s trade-in partner for
                        trade-in and recycling of eligible devices. Restrictions and limitations may apply.</p>
                    <p>to access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or
                        iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings &gt;
                        General &gt; Software Update. Tap Download and Install.</p>
                    <p>Available for qualifying applicants in the United States. Apple Card is issued by Goldman Sachs Bank
                        USA, Salt Lake City Branch.</p>
                    <p>Some offers may not be available in all regions. See <Link to="#">apple.com/promo</Link> for full
                        details.</p>
                </div>

                <div className="footer-links-grid">
                    <div className="footer-column">
                        <h5>Shop and Learn</h5>
                        <ul>
                            <li><Link to="#">Store</Link></li>
                            <li><Link to="#">Mac</Link></li>
                            <li><Link to="#">iPad</Link></li>
                            <li><Link to="#">iPhone</Link></li>
                            <li><Link to="#">Watch</Link></li>
                            <li><Link to="#">Vision</Link></li>
                            <li><Link to="#">AirPods</Link></li>
                            <li><Link to="#">TV & Home</Link></li>
                            <li><Link to="#">AirTag</Link></li>
                            <li><Link to="#">Accessories</Link></li>
                            <li><Link to="#">Gift Cards</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h5>Apple Store</h5>
                        <ul>
                            <li><Link to="#">Find a Store</Link></li>
                            <li><Link to="#">Genius Bar</Link></li>
                            <li><Link to="#">today at Apple</Link></li>
                            <li><Link to="#">Apple Camp</Link></li>
                            <li><Link to="#">Apple Store App</Link></li>
                            <li><Link to="#">Financing</Link></li>
                            <li><Link to="#">Trade In</Link></li>
                            <li><Link to="#">Order Status</Link></li>
                            <li><Link to="#">Shopping Help</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h5>For Business</h5>
                        <ul>
                            <li><Link to="#">Apple and Business</Link></li>
                            <li><Link to="#">Shop for Business</Link></li>
                        </ul>
                        <h5>For Education</h5>
                        <ul>
                            <li><Link to="#">Apple and Education</Link></li>
                            <li><Link to="#">Shop for K-12</Link></li>
                            <li><Link to="#">Shop for College</Link></li>
                        </ul>
                        <h5>For Healthcare</h5>
                        <ul>
                            <li><Link to="#">Apple in Healthcare</Link></li>
                            <li><Link to="#">Health on Apple Watch</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h5>Apple Values</h5>
                        <ul>
                            <li><Link to="#">Accessibility</Link></li>
                            <li><Link to="#">Education</Link></li>
                            <li><Link to="#">Environment</Link></li>
                            <li><Link to="#">Inclusion and Diversity</Link></li>
                            <li><Link to="#">Privacy</Link></li>
                            <li><Link to="#">Supplier Responsibility</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h5>About Apple</h5>
                        <ul>
                            <li><Link to="#">Newsroom</Link></li>
                            <li><Link to="#">Apple Leadership</Link></li>
                            <li><Link to="#">Career Opportunities</Link></li>
                            <li><Link to="#">Investors</Link></li>
                            <li><Link to="#">Ethics & Compliance</Link></li>
                            <li><Link to="#">Events</Link></li>
                            <li><Link to="#">Contact Apple</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>More ways to shop: <Link to="#">Find an Apple Store</Link> or <Link to="#">other retailer</Link> near you. Or
                        call 1-800-MY-APPLE.</p>
                    <ul>
                        <li>Copyright © 2025 Apple Inc. All rights reserved.</li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms of Use</Link></li>
                        <li><Link to="#">Sales and Refunds</Link></li>
                        <li><Link to="#">Legal</Link></li>
                        <li><Link to="#">Site Map</Link></li>
                    </ul>
                    <p>United States</p>
                </div>
            </div>
        </footer></div>
    )
}
export default Footer;