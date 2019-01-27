// initialize
const github = new Github;
const ui = new UI;

//search input
const search_user = document.getElementById('search-user');

//search input event listener
search_user.addEventListener('keyup' , (e) => {
    // get input text
    const user_text = e.target.value;
    if(user_text !== ''){
        github.get_user(user_text).then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.show_alert('User not Found', 'alert alert-danger');
            }else{
                //show profile
                ui.show_profile(data.profile);
                ui.show_repos(data.repos);
            }
        });
    }else{
        //clear profile
        ui.clear_profile();
    }
});