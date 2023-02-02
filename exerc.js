//Respostas do exercício de estrutura de dados

//1

let meusgatos = ['Guaraná', 'Açaí', 'Kakau', 'Pitanga', 'Konshu', 'Amora', 'Pérola', 'Tigresa']
console.log(meusgatos)

//2

let onedirection = ['Harry', 'Liam', 'Louis', 'Nial', 'Zayn']
console.log(onedirection.unshift('Michael Jackson'));
console.log(onedirection)

//3

let estados = ['RJ', 'SP', 'MG']
estados.pop()
console.log(estados)

//4 
let bandasForro = ['Calcinha Preta', 'Calypso', 'Companhia do Calypso']
console.log(bandasForro.push('Asa de Aguia')); 
console.log(bandasForro.push('Avioes do Forro')); 
console.log(bandasForro)

//5

let maquiagens = ['batom', 'rimel', 'blush', 'sombra']
maquiagens.shift(); 
console.log(maquiagens);

//6

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort();
console.log(numbers);

//7
let objeto = {
Nome: 'Júlia',
Signo: 'Peixes',
Comidafavorita: 'Pizza'
}

//8 

objeto.Idade = '24';
console.log(objeto)

//9 

delete objeto.Signo;
console.log(objeto)

//10

console.log(objeto)

//11

let cadastro = [
    {
    nome: "Chaves",
    idade: 12,
    telefone: '4002-8922',
    amigos: ["Sanduíche", "Carambola", "Cachorro-quente", "Hambúrguer"]
    },
    {
    nome: "Chiquinha",
    idade: 13,
    telefone: '2556-0123',
    amigos: ["Anabelle", "Chucky", "Coisa 1", "Coisa 2"]
    },
    {
    nome: "Kiko",
    idade: 12,
    telefone: '3669-2526',
    amigos: ["Din eiro", "For tuna", "Video games", "Bola Quadrada"]
    },
    {
    nome: "Seu madruga",
    idade: 40,
    telefone: '2556-0123',
    amigos: ["Zé calote" , "Mário trambique", "Zelão", "Jaiminho"]
    },
    {
    nome: "Professor Girafales",
    idade: 52,
    telefone: '2273-7373',
    amigos: ["Dona Clotilde", "Seu Barriga", "Professora Juliana", "Zé Furtado"]
    }
];

console.log(cadastro[0].amigos[1])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[3])
console.log(cadastro[3].amigos[2])
console.log(cadastro[4].amigos[0])
