class List {
    constructor(){
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();
        
        this.users = ["Vini"];
        this.numbers = [];
    }

    addTodo(){
        this.todos.push('novo todo');
        console.log(this.todos);
    }

    addNumber(num){
        this.numbers.push(num);
        console.log(this.numbers);
    }
    
    showUsers(){
        console.log(this.users);
    }

    static soma(a, b){
        return a + b;
    }
}

const MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function(){
    MinhaLista.addTodo("newnew");
}

MinhaLista.showUsers();
MinhaLista.addNumber(TodoList.soma(10, 3));
MinhaLista.addNumber(TodoList.soma(14, 3));


//Modulo 2
import user from './exercicios/modulo2';
user.info();

import { idade } from './exercicios/modulo2';
console.log(idade);

import user2, {idade as idadeUssuario } from './exercicios/modulo2';

user2 .info();
console.log(idadeUssuario);

// Modulo 3

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});

// minhaPromise().then( response => {
//     console.log(response);
// })

async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();

import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response);
        } catch (err){
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('ViniciusFerreiraa');
Api.getUserInfo('ViniciusFerreira1232');