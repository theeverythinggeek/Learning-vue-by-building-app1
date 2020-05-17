import axios from 'axios';

const baseAPIurl = 'http://localhost:3000/'

// Run cmd to start fake server: json-server --watch db.json
const funcs = {
    async postContent(data) {
        const response = await fetch(`${baseAPIurl}posts`, {
            method: "post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        return json;
    },
    async getPosts() {
        const response = await fetch(`${baseAPIurl}posts`);
        const json = await response.json();
        return json;
    },
    async getPostsUsingAxios() {
        const response = await axios.get(`${baseAPIurl}posts`);
        return response.data;
    }
}

export default funcs


// export default async function getPosts() {
//     const response = await fetch(`${baseAPIurl}posts`);
//     const json = await response.json();
//     return json;
// }