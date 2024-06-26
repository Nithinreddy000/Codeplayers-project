import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LicenseValidation.module.css';
import codeplayerslogo from '../assets/logo.png';
import infinitylogo from '../assets/infinityx.png';

const LicenseValidation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/license-validation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('guid', data.guid);
                navigate('/CompanySelection');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
          ////write your ui i.e frontend codes here///
        
        
        ////write your ui i.e frontend codes here///
        );
};

export default LicenseValidation;
