import React from 'react';

const Skills = () => {
    return (
        <div 
            className="skills-page" 
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
            <h1>My Skills</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>JavaScript</li>
                <li>React</li>
                <li>CSS</li>
                <li>Node.js</li>
            </ul>
        </div>
    );
};

export default Skills;
