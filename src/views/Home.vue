<template>
    <div class='row'>
        <h2>Home Page</h2>
        <Postform @postCreated="addPost"/>
        <div class="col s6" v-for="(post , index) in posts" 
        v-bind:item="posts" 
        :index="index" 
        :key="post.id"
        >
            <div class="card">
                <div class="card-content">
                    <p class='card-title'>{{ post.title }}</p>
                    <p> {{ post.content }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import funcs from '../PostService';
import Postform from '../components/Postform.vue';

export default {
    name: 'Home',
    components: {
        Postform
    },
    data: () => ({
        posts: []
    }),
    methods: {
        addPost(post) {
            this.posts.unshift(post);
        }
    },
    created: async function () {
        this.posts = await funcs.getPostsUsingAxios();

    }
}
</script>