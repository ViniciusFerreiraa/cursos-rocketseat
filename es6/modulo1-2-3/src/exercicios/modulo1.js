class Users {
    constructor(){
        this.usersList = [
            {
                name: "Vini",
                email: "vini@teste.com",
                admin: true
            },
            {
                name: "stella",
                email: "stella@teste.com",
                admin: false
            },
        ];
    }

    addUser(name, email){
        this.usersList.push({name:name, email:email, admin:false});
        console.log("Novo user");
        console.log(this.usersList);
    }
}

class Admin extends Users {
    constructor(){
        super();
    }
    
    addAdmin(name, email){
        this.usersList.push({name:name, email:email, admin:true});
        console.log("Novo admin");
        console.log(this.usersList);
    }
}


const MeusUsers = new Users();
const MeusAdmins = new Admin();

MeusUsers.addUser('magda', 'magda@teste.com');
MeusAdmins.addAdmin('deb', 'deb@teste.com');
MeusUsers.addUser('tete', 'tete@teste.com');

// Exercício 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(function(item){
    return item.idade;
});

const maior18 = usuarios.filter(function(item){
    return item.idade >= 18 && item.empresa === "Rocketseat";
});

const find = usuarios.find(function(item){
    return item.empresa === "Google";
});

const sum = usuarios
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50);


console.log(idades);
console.log(maior18);
console.log(find);
console.log(sum);

// Exercício 3
// 3.1
const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });

const map = arr.map( item =>  item + 10 );
console.log(map);


// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//     return usuario.idade;
// }

const mostraIdade = usuario => usuario.idade
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
let nome = "Diego";
let idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//     return { nome, idade };
// }

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }

// const promise = (new Promise((resolve, reject) => resolve()));
const promise = () => new Promise((resolve, reject) => resolve());


//4
const empresa = {
    nome1: 'Rocketseat',
    endereco: {
        cidade2: 'Rio do Sul',
        estado3: 'SC',
    }
};

const { nome1, endereco: { cidade2, estado3 } } = empresa;

console.log(nome1);
console.log(cidade2);
console.log(estado3);


function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 })) 


// Exercicio 5.1
const arr2 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr2;

console.log(x);
console.log(y);

function soma(...params){
    return params.reduce((a, b) => a + b);
}

console.log(soma(x, 2, 4, 5, 6, 7, 8));
console.log(soma(x, 2));


// Exercicio 5.2
const usero1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};


const usero2 = {...usero1, nome: "Gabriel"};
const usero3 = {...usero1, endereco: { cidade: "Lontras" }};

console.log(usero1);
console.log(usero2);
console.log(usero3);


// Exercicio 6
const usuario12 = 'Diego';
const idade12 = 23;
console.log(`O usuário ${usuario12} possui ${idade12} anos`);

// 7º exercício
// Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
const nombre = 'Diego';
const age = 23;

// const usuario = {
//  nome: nome,
//  idade: idade,
//  cidade: 'Rio do Sul',
// }

const useariu = {
    nombre,
    age,
    cidade: 'Rio do Sul',
}

console.log(useariu);