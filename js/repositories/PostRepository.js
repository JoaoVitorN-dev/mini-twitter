class PostRepository {
    constructor() {
        this.baseUrl = 'https://mini-twitter-api-vy9q.onrender.com/';
        this.token =localStorage.getItem("authToken");
    }

    getAction(endpoint) {
        return `${this.baseUrl}${endpoint}`
    }

    getAllPosts() {
        return new Promise(async (resolve, reject) => {
            const request = await fetch(this.getAction("api/posts"), {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${this.token}`
                }
            });
            const json = await request.json();
            console.log("Resposta do repositorio: ", json)
            resolve(json);
        })
    }

    createNewPost(descriptionPost) {
        return new Promise(async (resolve, reject) => {
            const postContent = {
                content: descriptionPost
            }
            const request = await fetch(this.getAction("api/posts"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                body: JSON.stringify(postContent),
            });
            const json = await request.json();
            resolve(json);
        })
    }
}