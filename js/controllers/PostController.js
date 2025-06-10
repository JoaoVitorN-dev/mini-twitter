class PostController {
    constructor() {
        this.repository = new PostRepository();
        this.container = document.querySelector("#container-tweet");
        this.init();

    }

    async init() {
        const data = await this.repository.getAllPosts();
        const view = new PostView(data);
        this.container.innerHTML = view.render();
        this.createPost();
    }

    createPost() {
        document.querySelector("#tweet").addEventListener("click", async () => {
            const description = document.querySelector("#post-description");
            const descriptionValue = description.value;
            try {
                const result = await this.repository.createNewPost(descriptionValue);
                if(result.content){
                    alert("Postagem Criada com Sucesso");
                    this.init();
                }else{
                    alert("Não foi possivel criar a postagem!")
                }
            } catch (error) {
                console.log("Erro na criação da postagem", error)
            }finally{
                description.value= "";
            }
            
        })
    }
}