import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import secureauth from '../assets/images/secureauth.png';
import manageiden from '../assets/images/manageiden.png';
import revoke1 from '../assets/images/revoke1.png';
import heroImage from '../assets/images/hero-image.png';
import testimonialImage from '../assets/images/test.png';
import testimonialImage1 from '../assets/images/test1.png';

function LandingPage() {
    return (
        <div className="landing-page">

            <section className="hero">
                <img src={heroImage} alt="Hero" className="hero-image" />
                <div className="hero-content">
                    <h1>Welcome to My Identity App!</h1>
                    <p>Your decentralized digital identity solution.</p>
                    <div className="cta">
                        <Link to="/profile" className="btn-primary">Go to Profile</Link>
                        <Link to="/dashboard" className="btn-secondary">Go to Dashboard</Link>
                    </div>
                </div>
            </section>

            <section className="features">
                <h2>Features</h2>
                <div className="feature-cards">
                    <div className="feature-card">
                        <img src={secureauth} alt="Secure Authentication" />
                        <h3>Secure Authentication</h3>
                        <p>Ensure safe and secure login with blockchain-based authentication.</p>
                    </div>
                    <div className="feature-card">
                        <img src={manageiden} alt="Manage Identity" />
                        <h3>Manage Identity</h3>
                        <p>Manage and verify your decentralized identity across platforms.</p>
                    </div>
                    <div className="feature-card">
                        <img src={revoke1} alt="Revoke Access" />
                        <h3>Revoke Access</h3>
                        <p>Users can view third-party applications that have access to their identity and revoke access to any service or app.</p>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h2>What Our Users Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <img src={testimonialImage} alt="User "
                            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                        />
                        <h3>Jane Doe</h3>
                        <p>"This app has transformed the way I manage my identity online. Highly recommend!"</p>
                    </div>
                    <div className="testimonial-card">
                        <img src={testimonialImage1} alt="User "
                            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                        />
                        <h3>Jenny Smith</h3>
                        <p>"I feel much safer knowing I have control over my digital identity."</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2025 My Identity App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;