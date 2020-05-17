<template>
    <div class="row">
      <form class="col s12" @submit.prevent="onSubmit">
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="Post Title" v-model="title" type="text" />
            <label for="Title" class="active">Title</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="Post Content" v-model="content" type="text" />
            <label for="Content" class="active">Content</label>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <button class="btn cyan waves-effect waves-light right" type="submit" name="action">
                Submit
                <i class="mdi-content-send right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import funcs from '../PostService';

export default {
    name: 'Postform',
    data: () => ({
        title: '',
        content: '',
    }),
    methods: {
        async onSubmit() {
            const title = this.title;
            const content = this.content;
            const newPost = {
                title,
                content
            }
            const post = await funcs.postContent(newPost);
            this.$emit("postCreated", post);
            this.title = '';
            this.content = '';
        },
    }
    
}
</script>

<style scoped>

</style>