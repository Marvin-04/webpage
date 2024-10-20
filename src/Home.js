import React from 'react';

const Home = () => {
    return (
        <div 
            className="home-page" 
            style={{ 
                backgroundColor: '#e6f0ff', 
                color: '#003366', 
                padding: '20px', 
                textAlign: 'center', // Center text
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', // Center the content
                justifyContent: 'center', // Center the content vertically
                minHeight: '50vh' // Make it fill the viewport height
            }}
        >
            <h1>Hello, Welcome to my profile</h1>
            <p>Take a look around, It ain’t much but atleast its an honest work!</p>
        </div>
    );
};

export default Home;
