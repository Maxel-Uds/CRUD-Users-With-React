import React from 'react';
import Link from './Link';
import './Nav.css';

export default function nav(props) {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <Link path="#/" icon="fa fa-home" label="Início"/>
                <Link path="#/users" icon="fa fa-users" label="Usuários"/>
            </nav>
        </aside>
    );
}