class Github{
    constructor(){
        this.client_id = '8205252bd0cce8b3b71e';
        this.client_secret = '8f244259101313693a1f08ee11b2ffd1aba6a649';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async get_user(user){
        const profile_response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repo_response = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // per_page=${this.repos_count}&sort=${this.repos_sort}&
        const profile_data = await profile_response.json();
        const repos_data = await repo_response.json();
        return {
            profile: profile_data,
            repos: repos_data
        }
    }
}