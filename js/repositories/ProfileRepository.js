class ProfileRepository {
    constructor() {
        this.baseUrl = 'https://mini-twitter-api-vy9q.onrender.com/';
        this.token = localStorage.getItem("authToken");
    }

    getAction(endpoint) {
        return `${this.baseUrl}${endpoint}`
    }

    getMyPosts() {
        return new Promise(async (resolve, reject) => {
            const request = await fetch(this.getAction("api/posts/my-posts"), {
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

    getMyProfile() {
        return new Promise(async (resolve, reject) => {
            const request = await fetch(this.getAction("api/users/profile"), {
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

    async updateUser(username, email) {
        const tokenUrl = localStorage.getItem("authToken");
        const postContent = {
            username: username,
            email: email
        }
        const request = await fetch(this.getAction("api/users/profile"), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tokenUrl}`
            },
            body: JSON.stringify(postContent),
        });
        const json = await request.json();
        return json;
    }
}