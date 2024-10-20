import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div 
            className="contact-page" 
            style={{ 
                backgroundColor: '#e6f0ff', 
                color: '#003366', 
                padding: '40px', 
                textAlign: 'center', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '50vh', 
                borderRadius: '8px', 
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', 
                margin: '20px auto', 
                maxWidth: '500px' // Limit max width
            }}
        >
            {submitted ? (
                <div>
                    <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Thank you, {formData.name}!</h1>
                    <p style={{ marginBottom: '5px' }}>Your message has been sent.</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Message:</strong> {formData.message}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="form-control" 
                            required 
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                borderRadius: '4px', 
                                border: '1px solid #ccc',
                                transition: 'border-color 0.3s'
                            }} 
                        />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="form-control" 
                            required 
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                borderRadius: '4px', 
                                border: '1px solid #ccc',
                                transition: 'border-color 0.3s'
                            }} 
                        />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            className="form-control" 
                            required 
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                borderRadius: '4px', 
                                border: '1px solid #ccc',
                                transition: 'border-color 0.3s'
                            }} 
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-success" 
                        style={{ 
                            padding: '10px 20px', 
                            backgroundColor: '#28a745', 
                            border: 'none', 
                            borderRadius: '4px', 
                            color: '#fff', 
                            cursor: 'pointer', 
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;

