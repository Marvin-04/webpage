import React from 'react';

const About = () => {
    return (
        <div 
            className="about-page" 
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
            <h1>About Me</h1>
            <p>I’m a student currently taking a bachelor in science in computer science at pamantasan ng cabuyao, I like listening to music and sleeping all day</p>
        </div>
    );
};

export default About;
