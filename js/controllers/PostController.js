class PostController{
    constructor(){
        this.repository= new PostRepository();
        this.container = document.querySelector("#container-tweet");
        this.init();
    }

    async init(){
        const data = await this.repository.getAllPosts();
        const view = new PostView(data);
        this.container.innerHTML = view.render();
    }
}