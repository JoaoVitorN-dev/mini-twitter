class ProfileController {
    constructor() {
        this.repository = new ProfileRepository();
        this.container = document.querySelector("#post");
        this.loading = new LoadingSpinner();
        this.init();
    }

    async init() {
        document.querySelector("#item-profile").addEventListener("click", async () => {
            this.container.innerHTML = this.loading.showLoading();
            document.querySelector("#icon-home").classList.remove("active");
            document.querySelector("#item-home").classList.remove("active");
            document.querySelector("#profile-desc").classList.add("active");
            document.querySelector("#icon-profile").classList.add("active");
            const dataProfile = await this.repository.getMyProfile();
            const dataPost = await this.repository.getMyPosts();
            const view = new ProfileView(dataPost, dataProfile);
            this.container.innerHTML = view.renderProfile();
            const renderPosts = document.querySelector("#container-tweet");
            renderPosts.innerHTML = view.renderMyPosts();
            this.showUpdateForm();
            this.likePost();
        });
    }

    showUpdateForm() {
        document.querySelector("#edit").addEventListener("click", async () => {
            const view = new ProfileView();
            this.container.innerHTML = view.renderEditProfile();
            this.handleUpdateUser();
        });
    }

    handleUpdateUser() {
        document.querySelector("#register-form").addEventListener("submit", async () => {
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            if (name && email) {
                try {
                    const result = await this.repository.updateUser(name, email);
                    if (result.message) {
                        alert(result.message);
                    } else {
                        alert("Não foi possível atualizar o perfil!");
                    }
                } catch (error) {
                    console.log("Erro ao atualizar o perfil ", error);
                }
            } else {
                alert("Preencha todos os campos para atualizar o perfil!");
            }

        })
    }

    likePost() {
        const iconLike = document.querySelectorAll("#icon-like");
        iconLike.forEach(element => {
            element.addEventListener("click", () => {
                const container = element.closest(".post-social-icons");
                const totalLikes = container.querySelector(".total-likes");
                let likeCount = parseInt(totalLikes.innerHTML);
                element.classList.toggle("liked");
                if (element.classList.contains("liked")) {
                    likeCount++;
                } else {
                    likeCount--;
                }
                totalLikes.innerHTML = likeCount;
            });
        })
    }

}