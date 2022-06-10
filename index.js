const config = require('./config.js');

let Pessoa = require('./obj/Pessoa.js');

let joao = new Pessoa(80, 1.75); // instanciando um objeto
console.log(joao.imc());

Pessoa = require('./obj/Aluno.js');
joao = new Pessoa(80, 1.75);
console.log(joao.imc());


Pessoa = require('./obj/'+config.Pessoa);  // importacao dinamica
joao = new Pessoa(80, 1.75);
console.log(joao.imc());

let PessoaDAO = require('./persistencelayer/'+config.PessoaDAO);
let pessoaBD = new PessoaDAO(joao);
console.log(pessoaBD.create());





