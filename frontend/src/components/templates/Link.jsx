import React from 'react';
import './Link.css';

export default function link(props) {
    return (
        <a href={props.path} className="link p-3">
            <i className={props.icon}></i> {props.label}
        </a>
    );
}