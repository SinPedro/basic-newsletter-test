import * as leitor from "readline-sync"
import banco from "./mysql";

class Usuario {
    nome: string
    email: string
    constructor(nome: string, email: string) {
        this.nome = nome
        this.email = email
    }
}
export class NewsLetter {
    usuarios: Array<Usuario> = [];

    construtor(){
        this.usuarios = []
    }
    async criarUsuarioBanco(usuarios: Usuario): Promise<void>{
        try {
            await executeDatabaseQuery(`INSERT INTO cadastro (nome, email) VALUES (?, ?)`, [usuarios.nome, usuarios.email])
            console.log(`\nUsuario: ${usuarios.nome} inserido no BD com sucesso!`);
        } catch (err) {
            console.log('Erro: ', err);
        }
     }

    //cadastrarUsuario(): void {
    // let nome = document.getElementById("nome");
    // let email = document.getElementById("email");

    // let usuario: Usuario = new Usuario(nome, email)
    // banco.criarUsuarioBanco(usuario)
    // getters
    //}
    cadastrarUsuario(): void {
        let nome:       string = leitor.question("Informe o nome: ")
        let email:      string = leitor.question("Informe o email: ")

        let usuario: Usuario = new Usuario(nome, email)
        banco.criarUsuarioBanco(usuario)
}
}   
async function executeDatabaseQuery(query: string, params: any[]): Promise<any> {
    try {
        const result = await banco.execute(query, params)
        return result
    } catch (err) {
        console.error('Erro na execucao da consulta', err);
        throw err
    }
}
