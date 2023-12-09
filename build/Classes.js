"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsLetter = void 0;
const leitor = __importStar(require("readline-sync"));
const mysql_1 = __importDefault(require("./mysql"));
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class NewsLetter {
    constructor() {
        this.usuarios = [];
    }
    construtor() {
        this.usuarios = [];
    }
    criarUsuarioBanco(usuarios) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield executeDatabaseQuery(`INSERT INTO cadastro (nome, email) VALUES (?, ?)`, [usuarios.nome, usuarios.email]);
                console.log(`\nUsuario: ${usuarios.nome} inserido no BD com sucesso!`);
            }
            catch (err) {
                console.log('Erro: ', err);
            }
        });
    }
    cadastrarUsuario() {
        let nome = leitor.question("Informe o nome: ");
        let email = leitor.question("Informe o email: ");
        let usuario = new Usuario(nome, email);
        mysql_1.default.criarUsuarioBanco(usuario);
    }
}
exports.NewsLetter = NewsLetter;
function executeDatabaseQuery(query, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield mysql_1.default.execute(query, params);
            return result;
        }
        catch (err) {
            console.error('Erro na execucao da consulta', err);
            throw err;
        }
    });
}
