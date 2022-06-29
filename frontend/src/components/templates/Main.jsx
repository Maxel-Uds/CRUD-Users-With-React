import React, { Fragment } from 'react';
import Header from './Header';
import './Main.css';

export default function main(props) {
    return (
        <Fragment>
            <Header {...props}/>
            <main className="content">
                Content
            </main>
        </Fragment>
    );
}