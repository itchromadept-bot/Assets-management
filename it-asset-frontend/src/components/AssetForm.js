/* this code is made by nhico noel ortazon */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './AssetForm.css';

const AssetForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const assetData = location.state?.assetData || {};

    const [formData, setFormData] = useState({
        date: assetData.date ? new Date(assetData.date).toISOString().split('T')[0] : '',
        employee_id: assetData.employee_id || '',
        name: assetData.name || '',
        position: assetData.position || '',
        department: assetData.department || '',
        email: assetData.email || '',
        company: assetData.company || '',
        laptop: assetData.laptop || '',
        laptop_status: assetData.laptop_status || '',
        laptop_tag_num: assetData.laptop_tag_num || '',
        company_phone: assetData.company_phone || '',
        phone_status: assetData.phone_status || '',
        phone_tag_num: assetData.phone_tag_num || '',
        company_desktop: assetData.company_desktop || '',
        desktop_status: assetData.desktop_status || '',
        desktop_tag_num: assetData.desktop_tag_num || '',
        others: assetData.others || '',
        others_status: assetData.others_status || '',
        others_tag_num: assetData.others_tag_num || '',
        software_list: assetData.software_list || '',
        intended_use: assetData.intended_use || '',
        remarks: assetData.remarks || '',
        status: assetData.status || '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (assetData.id) {
                await axios.put(`http://localhost:3001/api/assets/${assetData.id}`, formData);
                alert('Asset updated successfully!');
            } else {
                await axios.post('http://localhost:3001/api/assets', formData);
                alert('Asset added successfully!');
            }
            navigate('/admin');
        } catch (error) {
            console.error('Error saving asset:', error);
            alert('Error saving asset.');
        }
    };

    return (
        <div className="asset-form-container">
            <h1>{assetData.id ? 'Edit IT Asset' : 'Add New IT Asset'}</h1>
            <form onSubmit={handleSubmit} className="asset-form">
                <div className="form-group">
                    <label>Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Employee ID:</label>
                    <input type="text" name="employee_id" value={formData.employee_id} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Position:</label>
                    <input type="text" name="position" value={formData.position} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Department:</label>
                    <input type="text" name="department" value={formData.department} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Company:</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Laptop:</label>
                    <input type="text" name="laptop" value={formData.laptop} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Laptop Status:</label>
                    <input type="text" name="laptop_status" value={formData.laptop_status} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Laptop Tag #:</label>
                    <input type="text" name="laptop_tag_num" value={formData.laptop_tag_num} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Company Phone:</label>
                    <input type="text" name="company_phone" value={formData.company_phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone Status:</label>
                    <input type="text" name="phone_status" value={formData.phone_status} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone Tag #:</label>
                    <input type="text" name="phone_tag_num" value={formData.phone_tag_num} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Company Desktop:</label>
                    <input type="text" name="company_desktop" value={formData.company_desktop} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Desktop Status:</label>
                    <input type="text" name="desktop_status" value={formData.desktop_status} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Desktop Tag #:</label>
                    <input type="text" name="desktop_tag_num" value={formData.desktop_tag_num} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Others:</label>
                    <textarea name="others" value={formData.others} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Others Status:</label>
                    <input type="text" name="others_status" value={formData.others_status} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Others Tag #:</label>
                    <input type="text" name="others_tag_num" value={formData.others_tag_num} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Software List:</label>
                    <textarea name="software_list" value={formData.software_list} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Intended Use:</label>
                    <textarea name="intended_use" value={formData.intended_use} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Remarks:</label>
                    <textarea name="remarks" value={formData.remarks} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Status:</label>
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="">Select Status</option>
                        <option value="Cleared">Cleared</option>
                        <option value="Not Cleared">Not Cleared</option>
                    </select>
                </div>
                <button type="submit" className="submit-button">{assetData.id ? 'Update Asset' : 'Save Asset'}</button>
            </form>
        </div>
    );
};
export default AssetForm;