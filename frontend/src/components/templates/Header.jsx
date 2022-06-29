import React from 'react';
import './Header.css';

export default function header(props) {
    return (
        <header className="header d-none d-sm-flex flex-column"> 
            <h1>
                <i className={`fa fa-${props.icon}`}></i> {props.title}
            </h1>
            <p className="lead text-muted">{props.subtitle}</p>
        </header>
    );
}