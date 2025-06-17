class PostController {
    constructor() {
        this.repository = new PostRepository();
        this.container = document.querySelector("#container-tweet");
        this.loading = new LoadingSpinner();
        this.init();
    }

    async init() {
        this.container.innerHTML = this.loading.showLoading();
        const data = await this.repository.getAllPosts();
        const view = new PostView(data);
        this.container.innerHTML = view.render();
        this.createPost();
        this.likePost();
    }

    createPost() {
        document.querySelector("#tweet").addEventListener("click", async () => {
            const description = document.querySelector("#post-description");
            const descriptionValue = description.value;
            if (descriptionValue) {
                try {
                    const result = await this.repository.createNewPost(descriptionValue);
                    if (result.content) {
                        alert("Postagem Criada com Sucesso");
                        this.init();
                    } else {
                        alert("Não foi possivel criar a postagem!")
                    }
                } catch (error) {
                    console.log("Erro na criação da postagem", error)
                } finally {
                    description.value = "";
                }
            } else {
                alert("É necessário preencher o campo de postagem!")
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
               if(element.classList.contains("liked")){
                likeCount++;
               }else{
                likeCount--;
               }
               totalLikes.innerHTML = likeCount;

            });

        })
    }
}