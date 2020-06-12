<template>
  <form class="reply">
    <div class="avatar">
      <img src="https://www.meme-arsenal.com/memes/8b6f5f94a53dbc3c8240347693830120.jpg" alt="">
    </div>
    <input
      type="text"
      class="reply--text--name"
      placeholder="name"
      v-model.trim="user"
      maxlength="10"
      required
    />
    <input
      type="text"
      v-model.trim="reply"
      class="reply--text"
      placeholder="Leave a comment..."
      maxlength="250"
      required
    />
    <button class="submit reply--button" @click.prevent="submitComment"><i class="fa fa-paper-plane"></i> Send</button>
  </form>
</template>

<script>
import { v4 } from "uuid";
import { mapActions, mapState } from "vuex";

export default {
  name: 'CommentsList',
  data() {
    return {
      reply: '',
      user: '',
    }
  },
  computed: {
    ...mapState({
      loading: state => state.comments.loading,
      product: (state) => state.products.one,
    })
  },
  methods: {
    submitComment() {
      if (this.reply !== '') {
        this.setComment({ id: v4(), user: this.user, model_id: this.product.model_id, text: this.reply })
        this.reply = '';
      }
    },
    ...mapActions("comments", [ "setComment" ]),
  },
}
</script>
<style scoped>
.reply {
  display: flex;
  position: relative;
  align-items: center;
  background-color: #EBEBEB;
  border-radius: 30px;
  padding: 5px 10px;
  overflow: hidden;
}

.reply .avatar {
  position: absolute;
}

.reply .avatar > img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.reply .reply--text--name {
  min-height: 15px;
  padding: 10px 5px 10px 55px;
  margin-right: 10px;
  border: 0;
  color: #333;
  width: 150px;
  outline: 0;
  background-color: transparent;
  box-shadow: none;
}

.reply .reply--text {
  min-height: 10px;
  padding: 10px 10px 10px 10px;
  border: 0;
  color: #333;
  width: 100%;
  outline: 0;
  background-color: transparent;
  box-shadow: none;
  visibility: hidden;
}

.reply input.reply--text--name:valid + .reply--text {
  visibility: visible;
}

.reply input.reply--text:valid {
  margin-right: 71px;
}

.reply input.reply--text:valid + .reply--button {
  right: 10px;
}

.reply .reply--button {
  position: absolute;
  right: -100px;
  border: 1px solid #2a629c;
  background-color: transparent;
  color: #2a629c;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 15px;
  line-height: 1.5;
  border-radius: 30px;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, right 0.25s ease-in-out;
  outline: 0;
}

.reply .reply--button:hover {
  color: #fff;
  background-color: #2a629c;
}

.reply .reply--button:focus,
.reply .reply--button:active {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style>
