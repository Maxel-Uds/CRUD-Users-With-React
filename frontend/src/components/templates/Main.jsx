import React, { Fragment } from 'react';
import Header from './Header';
import './Main.css';

export default function main(props) {
    return (
        <Fragment>
            <Header/>
            <main className="content">
                Content
            </main>
        </Fragment>
    );
}