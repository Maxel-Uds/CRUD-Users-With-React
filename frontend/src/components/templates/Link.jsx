import React from 'react';
import { Link } from 'react-router-dom';
import './Link.css';

export default function link(props) {
    return (
        <Link to={props.path} className="link p-3">
            <i className={props.icon}></i> {props.label}
        </Link>
    );
}