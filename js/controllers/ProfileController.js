class ProfileController {
    constructor() {
        this.repository = new ProfileRepository();
        this.container = document.querySelector("#post");
        this.init();
    }

    async init() {
        document.querySelector("#item-profile").addEventListener("click", async () => {
            const dataProfile = await this.repository.getMyProfile();
            const dataPost = await this.repository.getMyPosts();
            const view = new ProfileView(dataPost, dataProfile);
            this.container.innerHTML = view.renderProfile();
            const renderPosts = document.querySelector("#container-tweet");
            renderPosts.innerHTML = view.renderMyPosts();
            this.showUpdateForm();
        });
    }

    showUpdateForm() {
        document.querySelector("#edit").addEventListener("click", async () => {
            const view = new ProfileView();
            this.container.innerHTML = view.renderEditProfile();
            this.handleUpdateUser();
        });
    }

    handleUpdateUser(){
        document.querySelector("#register-form").addEventListener("submit", async() => {
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            try {
                const result = await this.repository.updateUser(name,email);
                if(result.message){
                    alert(result.message);
                    this.init();
                }else{
                    alert("Não foi possível atualizar o perfil!");
                }
            } catch (error) {
                console.log("Erro ao atualizar o perfil ",error);
            }
        })
    }
}