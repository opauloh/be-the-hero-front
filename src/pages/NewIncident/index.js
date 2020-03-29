import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { useState } from 'react';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
            history.push('/profile');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Register new incident</h1>
                    <p>To find a hero to solve this incident, please provide details.</p>
                    <Link className="backlink" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                    Back to home
                </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input type="text"
                        placeholder="Incident Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input type="text"
                        placeholder="Price (R$)"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}