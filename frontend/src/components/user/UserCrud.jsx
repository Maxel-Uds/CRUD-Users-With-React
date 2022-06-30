import React, { Component } from 'react';
import Axios from 'axios';
import Main from '../templates/Main';
import './UserCrud.css';

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

    componentDidMount() {
        Axios(baseUrl)
        .then(response => this.setState({ list: response.data }));
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
            const list = this.getUpdatedList(response.data);
            this.setState({ user: initialState.user, list });
        });
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user); //Coloca determinado elemento na primeira posição do array
        return list;
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    load(user) {
        this.setState({ user });
    }
 
    remove(user) {
        Axios.delete(`${baseUrl}/${user.id}`)
        .then(response => {
            const list = this.state.list.filter(u => u !== user);
            this.setState({ list });
        });
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th> 
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}><i className="fa fa-pencil"></i></button>
                        <button className="btn btn-danger table-btn" onClick={() => this.remove(user)}><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            );
        });
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
                {this.renderTable()}
            </Main>
        );
    }
}