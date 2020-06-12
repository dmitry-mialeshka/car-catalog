<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 comments">
        <div class="comments_wrapper_classes">
          <CommentsForm/>
          <hr>
          <CommentsList
            v-for="comment in list"
            :key="comment.id"
            :comment="comment"
          />
          <Pagination
            v-on:currentPage="setCurrentPage"
            v-on:perPage="setPerPage"
            :currentPage="currentPage"
            :perPage="perPage"
            :total="total"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Pagination from "../Pagination";
import CommentsForm from "./Comments-form";
import CommentsList from "./Comments-list";

export default {
  name: "Comments",
  data() {
    return {
      perPage: 2,
      currentPage: 1,
    }
  },
  created() {
    this.setComments(this.product.model_id);
  },
  components: {
    CommentsList,
    CommentsForm,
    Pagination,
  },

  computed: {
    ...mapState({
      loading: state => state.comments.loading,
      comments: state => state.comments.comments,
      product: (state) => state.products.one,
      total: (state) => state.comments.total
    }),
    list() {
      return this.comments.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
  },
  methods: {
    setCurrentPage(value) {
      this.currentPage = value
    },
    setPerPage(value) {
      this.perPage = value
    },
    ...mapActions("comments", [ "setComments", "setComment" ]),
  },
};
</script>
<style scoped>

.comments {
  margin-top: 5px;
}

hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
