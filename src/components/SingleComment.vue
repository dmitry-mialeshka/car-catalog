<template>
  <div class="container">
    <div class="row comment">
      <div class="avatar ">
        <img src="https://www.meme-arsenal.com/memes/8b6f5f94a53dbc3c8240347693830120.jpg" alt="">
      </div>
      <div class="text">
        <a class="username" href="#">@{{ comment.user }}</a> <span>{{ comment.text }}</span>
      </div>
      <div class="icon">
        <i class="fa fa-close" v-on:click="rm(comment.id)"></i>
      </div>
    </div>
  </div>
</template>
<script>

import { mapActions } from "vuex";

export default {
  name: 'singleComment',
  props: [ 'comment' ],
  methods: {
    ...mapActions({
      rm: "comments/rmComment"
    }),
  },
}
</script>
<style scoped>
.comment {
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  color: #333;
  background-color: #F2F2F2;
  border-radius: 30px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.comment .avatar {
  align-self: flex-start;
}

.comment .avatar > img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  align-self: start;
}

.comment .text {
  text-align: left;
  margin-left: 5px;
}

.comment .text span {
  margin-left: 5px;
}

.comment .text .username {
  font-weight: bold;
  color: #333;
}

.comment .icon {
  margin-left: auto;
}
</style>
