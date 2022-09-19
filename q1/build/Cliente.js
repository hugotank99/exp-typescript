"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(_a) {
        var usuario = _a.usuario, idade = _a.idade, NumContato = _a.NumContato, sexo = _a.sexo, CPF = _a.CPF, email = _a.email;
        this.usuario = usuario;
        this.idade = idade;
        this.NumContato = NumContato;
        this.sexo = sexo;
        this.CPF = CPF;
        this.email = email;
    }
    Object.defineProperty(Cliente.prototype, "Contato", {
        get: function () {
            return this.NumContato;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.compra = function (item) {
        console.log('sua compra foi feita com sucesso!');
    };
    return Cliente;
}());
exports.Cliente = Cliente;
