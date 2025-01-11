import React from 'react';
import './DashboardPage.css';

function DashboardPage() {
    return (
        <div className="dashboard-page">
            {/* Header Section */}
            <header className="dashboard-header">
                <h1>Dashboard</h1>
                <p>Overview of your decentralized identity and activities.</p>
            </header>

            {/* Stats Section */}
            <section className="dashboard-stats">
                <div className="stat-card">
                    <h3>Total Identities Verified</h3>
                    <p>45</p>
                </div>
                <div className="stat-card">
                    <h3>Recent Transactions</h3>
                    <p>Verified 5 new identities today.</p>
                </div>
            </section>
        </div>
    );
}

export default DashboardPage;
