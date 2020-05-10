import api from "./api";


class App {
    constructor() {
        this.repositories = [];

        this.form = document.querySelector("#repo-form");
        this.input = document.querySelector("input[name=repository]");
        this.list = document.querySelector("#repo-list");

        this.registerHandlers()
    }

    registerHandlers() {
        this.form.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingElemment = document.createElement("span");
            loadingElemment.innerText = "Loading..."
            loadingElemment.setAttribute("id", "loading")
            this.form.appendChild(loadingElemment);
        } else {
            document.querySelector("#loading").remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repository = this.input.value.trim();

        if (repository.length === 0) return;
        this.setLoading();
        try {
            const response = await api.get(`/repos/${repository}`);

            console.log(response);


            const {name, description, owner: {avatar_url}, html_url} = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });

            this.input.value = "";

            this.render();
        } catch (error) {
            alert("repo not found");
        } finally {
            this.setLoading(false);
        }
    }

    render() {
        this.list.innerHTML = "";
        this.repositories.forEach(repo => {
            let img = document.createElement("img");
            img.setAttribute("src", repo.avatar_url);

            let name = document.createElement("strong");
            name.innerText = repo.name;

            let description = document.createElement("p");
            description.innerText = repo.description;

            let link = document.createElement("a");
            link.setAttribute("target", "_blank");
            link.setAttribute("href", repo.html_url);
            link.innerText = "Access";


            let item = document.createElement("li");

            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(description);
            item.appendChild(link);

            this.list.appendChild(item);
        });
    }
}

new App;
