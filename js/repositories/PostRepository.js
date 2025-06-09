class PostRepository{
    constructor(){
        this.baseUrl='https://mini-twitter-api-vy9q.onrender.com/';
    }

    getAction(endpoint){
        return `${this.baseUrl}${endpoint}`
    }

    getAllPosts(){
        return new Promise(async (resolve, reject) => {
            const request = await fetch(this.getAction("api/posts"));
            const json = await request.json();
            console.log("Resposta do repositorio: ",json)
            resolve(json);
        })
    }
}