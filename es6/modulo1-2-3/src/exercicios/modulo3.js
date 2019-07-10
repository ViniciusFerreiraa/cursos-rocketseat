//A
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
    await delay();
    console.log('Exercício A');
    console.log("1s");
    
    await delay();
    console.log("2s");
    
    await delay();
    console.log("2s");
}
umPorSegundo();

//B
import axios from 'axios';
class gitApi{
    static async getUser(user) {
        try{
            const response = await axios.get(`https://api.github.com/users/${user}`)
            console.log('Exercício B');
            console.log(response.data.name);
        } catch(err) {
            console.log('Exercício B');
            console.warn('Usuário não existe');
        }
    }
}

gitApi.getUser('ViniciusFerreiraa');
gitApi.getUser('diego3g124123');

//C
class Github {
    static async getRepositories(repo) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log('Exercício C');
            console.log(response.data);
        }catch{
            console.log('Exercício C');
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

//D
const buscaUsuario = async usuario => {
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log('Exercício D');
        console.log(response.data);
    }catch{
        console.log('Exercício D');
        console.log('Usuário não existe');
    }
}

buscaUsuario('ViniciusFerreiraa');