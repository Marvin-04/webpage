import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SubmissionSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { name, email, message } = location.state || {};

  const handleSubmitAnother = () => {
    navigate('/contact'); // Navigate back to the contact page
  };

  return (
    <section id="submission-success" style={styles.container}>
      <h2 style={styles.heading}>Submission Successful</h2>
      <p style={styles.message}>Thank you, <strong>{name}</strong>! Your message has been sent.</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
      <button style={styles.button} onClick={handleSubmitAnother}>
        Submit Another Message
      </button>
    </section>
  );
}

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#e6f0ff',
    color: '#003366',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '500px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  message: {
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default SubmissionSuccess;
