import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, email, whatsapp, city, uf
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id} `);

            history.push('/');
        } catch (err) {
            alert(`Erro no cadastro, tente novamente`);
        }


    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="backlink" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tem cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="NGO's Name"
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Whatsapp"
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="City"
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="State"
                            onChange={e => setUf(e.target.value)}
                            style={{ width: 100 }} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}