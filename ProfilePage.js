import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
    return (
        <div className="profile-page">
            {/* Header Section */}
            <header className="profile-header">
                <h1>Your Profile</h1>
                <p>Manage your decentralized identity.</p>
            </header>

            {/* Profile Details Section */}
            <section className="profile-details">
                <div className="profile-card">
                    <h2>Identity Information</h2>
                    <div className="profile-info">
                        <p><strong>Name:</strong> John Doe</p>
                        <p><strong>Email:</strong> john.doe@example.com</p>
                        <p><strong>Address:</strong> 0x1234567890abcdef...</p>
                    </div>
                </div>

                {/* Profile Actions Section */}
                <div className="profile-actions">
                    <button className="btn-primary">Edit Profile</button>
                    <button className="btn-secondary">Logout</button>
                </div>
            </section>
        </div>
    );
}

export default ProfilePage;