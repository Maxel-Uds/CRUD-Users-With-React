import React, { Component } from 'react';
import Axios from 'axios';
import Main from '../templates/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Deletar'
}

const baseUrl = 'http://localhost:8080/users';

const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState };

    clear() {
        this.setState({ user: initialState.user });
    }

    save() {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

        Axios[method](url, user)
        .then(response => {
            const list = this.getUdatedList(response.data);
            this.setState({ user: initialState.user, list });
        });
    }

    getUdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user); //Coloca determinado elemento na primeira posição do array
        return list;
    }

    render() {
        return (
            <Main {...headerProps}>
                Usuário
            </Main>
        );
    }
}