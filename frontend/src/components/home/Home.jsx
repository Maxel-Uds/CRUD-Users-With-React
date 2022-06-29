import React from 'react';
import Main from '../templates/Main';

export default function home(props) {
    return (
        <Main icon="home" title="Início" subtitle="Crud de cadastro de pessoas feito no curso de Desenvolvimento Web Moderno">
            <div className="display-4">Bem Vindo!</div>
            <hr/>
            <p className="mb-0">Sistema De Cadastro de Pessoas Feito com React para Estudo</p>
        </Main>
    );
}