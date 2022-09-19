interface newclientes{
    usuario:string;
    idade:number;
    NumContato:number;
    sexo:string;
    CPF: number;
    email: string;
}

export class Cliente {
    public usuario: string;
    public idade: number;
    private NumContato: number;
    public sexo: string;
    private CPF: number;
    private email: string;
    
    public get Contato(): number {
        return this.NumContato;
    }

constructor({ usuario, idade, NumContato, sexo, CPF, email}:newclientes){
    this.usuario= usuario;
    this.idade= idade;
    this.NumContato= NumContato;
    this.sexo= sexo;
    this.CPF= CPF;
    this.email= email;
}
public compra(item:string){    
   console.log('sua compra foi feita com sucesso!')
}
}
