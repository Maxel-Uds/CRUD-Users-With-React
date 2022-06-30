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

    constructor(props) {
        super(props);

        this.updateField = this.updateField.bind(this);
        this.clear = this.clear.bind(this);
        this.save = this.save.bind(this);
    }

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

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name" value={this.state.user.name} onChange={this.updateField} placeholder="Nome Completo..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" value={this.state.user.email} onChange={this.updateField} placeholder="Email..."/>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                   <div className="col-12 d-flex justify-content-center">
                       <button className="btn btn-primary" onClick={this.save}>Salvar</button>
                       <button className="btn btn-secondary mx-2" onClick={this.clear}>Cancelar</button>
                   </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        );
    }
}