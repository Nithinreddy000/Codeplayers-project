import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './CompanyLogin.module.css';
import codeplayerslogo from '../assets/logo.png';
import infinitylogo from '../assets/infinityx.png';
const CompanyLogin = () => {
    const { companyId } = useParams();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/company-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, companyId }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('guid', data.guid);
                navigate('/BlankPage');
            } else {
                setError(data.message || 'Failed to login');
            }
        } catch (err) {
            setError('An error occurred during login');
        } finally {
            setLoading(false);
        }
    };

    return (
        ////write your ui i.e frontend codes here///
        
        
        ////write your ui i.e frontend codes here///
        );
    };
export default CompanyLogin;
