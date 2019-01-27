class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    show_profile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row mb-4">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}"/>
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <div class="mb-4"></div>
                    <ul class="list-group">
                        <li class="list-group-item">${user.company}</li>
                        <li class="list-group-item">${user.blog}</li>
                        <li class="list-group-item">${user.location}</li>
                        <li class="list-group-item">${user.created_at}</li>
                    </ul>
                </div>
            </div>
            <div id="repos"></div>
        </div>
        `;
    }
    show_repos(repos){
        let output = '';
        repos.forEach((repo, index) => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>`;
        });
        let repo_container = document.getElementById('repos');
        repo_container.innerHTML = output;
    }
    clear_profile(){
        this.profile.innerHTML = '';
    }
    show_alert(message, class_name){
        let alert_message = `<div class="${class_name}">${message}</div>`;
        const search_container = document.getElementById('search-container');
        search_container.innerHTML = '';
        search_container.innerHTML = alert_message;
        setTimeout(() => {
            search_container.innerHTML = "";
        }, 3000);
    }
}