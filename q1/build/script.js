"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import PromptSync from 'prompt-sync';
var prompt = require('prompt-sync')();
var Cliente_1 = require("./Cliente");
//const prompt = PromptSync();
var usuario = prompt('digite seu nome: ');
var idade = Number(prompt('digite sua idade: '));
var NumContato = Number(prompt('digite seu número de contato: '));
var sexo = prompt('digite seu sexo: ');
var CPF = Number(prompt('digite o seu CPF: '));
var email = prompt('digite seu e-mail: ');
var cliente = new Cliente_1.Cliente({
    usuario: usuario,
    idade: idade,
    NumContato: NumContato,
    sexo: sexo,
    CPF: CPF,
    email: email,
});
console.log("o Cliente ".concat(usuario, " do sexo ").concat(sexo, " com o e-mail ").concat(email));
