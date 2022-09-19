//import PromptSync from 'prompt-sync';
const prompt = require('prompt-sync')();

import { Cliente } from "./Cliente";

//const prompt = PromptSync();

const usuario= prompt('digite seu nome: ');
const idade= Number(prompt('digite sua idade: '));
const NumContato= Number(prompt('digite seu número de contato: '));
const sexo= prompt('digite seu sexo: ');
const CPF= Number(prompt('digite o seu CPF: '));
const email= prompt('digite seu e-mail: ');

const cliente = new Cliente ({
    usuario,
    idade,
    NumContato,
    sexo,
    CPF,
    email,
})
console.log(`o Cliente ${usuario} do sexo ${sexo} com o e-mail ${email}`);