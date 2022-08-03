class Profile {
    constructor() {
        this.clientId = "",
        this.clientSecret = ""
    }

    async getProfile(username) {
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);

        const profile = await profileResponse.json();

        const todoResponse=await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);

        const toDo=await todoResponse.json();

        return {
            profile,
            toDo
        }


    }
}