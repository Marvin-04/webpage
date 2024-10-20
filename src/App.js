import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import SubmissionSuccess from './SubmissionSuccess'; // Include this if you're using the submission success page

function App() {
    return (
        <Router>
            <div 
                className="app" 
                style={{ 
                    backgroundColor: '#f7f7f7', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'flex-start', 
                    minHeight: '100vh', 
                    padding: '20px'
                }}
            >
                <nav className="navbar" style={{ marginBottom: '20px', width: '100%', maxWidth: '800px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'space-around' }}>
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/about">About</Link></li>
                        <li><Link className="nav-link" to="/skills">Skills</Link></li>
                        <li><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div style={{ width: '100%', maxWidth: '800px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/submission-success" element={<SubmissionSuccess />} />
                    </Routes>
                </div>

                <footer style={{ marginTop: 'auto', padding: '20px', textAlign: 'center', width: '100%' }}>
                    <p>&copy; 2024 Marvin James G. Gagagarin</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
