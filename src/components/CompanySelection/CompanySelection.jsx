import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CompanySelection.module.css';
import codeplayerslogo from '../assets/logo.png';
import refresh from '../assets/refresh2.gif';
import searchIcon from '../assets/search2.gif';

const API_URL = 'http://localhost:5000/api/companies';
const GUID_KEY = 'guid';

const CompanySelection = () => {
    const [companies, setCompanies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCompanies();
    }, []);

    useEffect(() => {
        handleSearch();
    }, [searchQuery, companies]);

    const fetchCompanies = async () => {
        setLoading(true);
        try {
            const response = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem(GUID_KEY)}`
                }
            });
            const data = await response.json();

            if (response.ok) {
                setCompanies(data);
                setFilteredCompanies(data);
            } else {
                setError(data.message || 'Failed to fetch companies');
            }
        } catch (err) {
            setError('An error occurred while fetching companies');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        const filtered = companies.filter(company => 
            company.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCompanies(filtered);
    };

    const handleCompanyClick = (companyId) => {
        navigate(`/CompanyLogin/${companyId}`);
    };

    const handleRefresh = () => {
        fetchCompanies();
    };

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    return (
          ////write your ui i.e frontend codes here///
        
        
        ////write your ui i.e frontend codes here///
        );
};

export default CompanySelection;
