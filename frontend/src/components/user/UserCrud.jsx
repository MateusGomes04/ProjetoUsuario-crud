import React, { Component } from "react";
import Main from "../templetes/Main";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar, Excluir!'
}

export default class UserCrud extends Component {
    render() {
        return (
            //isso não é um bloco de codigo e sim uma expressão
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}