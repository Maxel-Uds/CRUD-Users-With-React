import React from 'react';
import Logo from '../../assets/imgs/logoReact.png';
import './Logo.css';

export default function logo(props) {
    return (
        <aside className="logo">
            <img src={Logo} alt="Logo do React"/>
        </aside>
    );
}