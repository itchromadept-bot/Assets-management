/* this code is made by nhico noel ortazon */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DownloadButton } from './AssetPDF';
import './AssetDashboard.css';

const AssetDashboard = () => {
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [assetCounts, setAssetCounts] = useState({
        laptop: 0,
        companyPhone: 0,
        companyDesktop: 0,
        others: 0,
        totalAssets: 0,
    });

    useEffect(() => {
        fetchAssets();
    }, []);

    const fetchAssets = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/assets');
            setAssets(response.data);
            calculateCounts(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching assets:', error);
            setLoading(false);
        }
    };

    const calculateCounts = (assetsData) => {
        let laptopCount = 0;
        let phoneCount = 0;
        let desktopCount = 0;
        let othersCount = 0;

        assetsData.forEach(asset => {
            if (asset.laptop) laptopCount++;
            if (asset.company_phone) phoneCount++;
            if (asset.company_desktop) desktopCount++;
            if (asset.others) othersCount++;
        });

        const total = laptopCount + phoneCount + desktopCount + othersCount;

        setAssetCounts({
            laptop: laptopCount,
            companyPhone: phoneCount,
            companyDesktop: desktopCount,
            others: othersCount,
            totalAssets: total,
        });
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredAssets = assets.filter(asset => {
        const query = searchQuery.toLowerCase();
        return (
            (asset.employee_id && asset.employee_id.toLowerCase().includes(query)) ||
            (asset.name && asset.name.toLowerCase().includes(query)) ||
            (asset.position && asset.position.toLowerCase().includes(query)) ||
            (asset.laptop_tag_num && asset.laptop_tag_num.toLowerCase().includes(query))
        );
    });

    if (loading) return <div>Loading dashboard...</div>;

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1 className="dashboard-title">IT Asset Dashboard</h1>
                <Link to="/admin" className="dashboard-link">Go to Admin View</Link>
            </div>
            <div className="asset-counts-grid">
                <div className="total-count-card count-card">
                    <span className="count-value">{assetCounts.totalAssets}</span>
                    <span className="count-label">Total Assets</span>
                </div>
                <div className="count-card">
                    <span className="count-value">{assetCounts.laptop}</span>
                    <span className="count-label">Laptops</span>
                </div>
                <div className="count-card">
                    <span className="count-value">{assetCounts.companyPhone}</span>
                    <span className="count-label">Company Phones</span>
                </div>
                <div className="count-card">
                    <span className="count-value">{assetCounts.companyDesktop}</span>
                    <span className="count-label">Company Desktops</span>
                </div>
                <div className="count-card">
                    <span className="count-value">{assetCounts.others}</span>
                    <span className="count-label">Other Assets</span>
                </div>
            </div>
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search by Employee ID, Name, or Tag #"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>
            <table className="asset-table">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Download Form</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAssets.map(asset => (
                        <tr key={asset.id}>
                            <td>{asset.employee_id}</td>
                            <td>{asset.name}</td>
                            <td>{asset.position}</td>
                            <td>{asset.status}</td>
                            <td>
                                <DownloadButton asset={asset} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AssetDashboard;
