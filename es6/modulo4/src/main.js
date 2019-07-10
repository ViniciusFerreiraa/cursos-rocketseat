import api from './api';

class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById("repo-form");
        this.inputEl = document.getElementById("repo-input");
        this.listEl = document.getElementById("repo-list");

        this.regiterHandlers();
    }

    regiterHandlers(){
        this.formEl.onsubmit = event => {
            event.preventDefault();

            const repoInput = this.inputEl.value;
            if (repoInput.length === 0)
                return;

            this.setLoading();
            this.addRepository(repoInput);
            this.inputEl.value = '';
        }
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else{
            document.getElementById('loading').remove();
        }
    }

    async addRepository(repoName){
        try{
            const response = await api.get(`/repos/${repoName}`);
            const {name, description, html_url, owner:{ avatar_url} } = response.data;
            
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            
            this.render();
        } catch{
            alert('O repositório que você procura não existe');
        }

        this.setLoading(false);
    }
    
    render(){
        const repo = this.repositories[this.repositories.length -1];

        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', repo.avatar_url);

        let titleEl = document.createElement('strong');
        titleEl.appendChild(document.createTextNode(repo.name));

        let descriptionEl = document.createElement('p');
        descriptionEl.appendChild(document.createTextNode(repo.description));
        
        let linkEl = document.createElement('a');
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute('href', repo.html_url);
        linkEl.appendChild(document.createTextNode('Acessar'));

        let itemEl = document.createElement('li');
        itemEl.appendChild(imgEl);
        itemEl.appendChild(titleEl);
        itemEl.appendChild(descriptionEl);
        itemEl.appendChild(linkEl);
        
        this.listEl.appendChild(itemEl);
    }
}

new App();