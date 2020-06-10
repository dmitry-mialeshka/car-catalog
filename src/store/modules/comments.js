const SET_COMMENTS = 'SET_COMMENTS';
const SET_COMMENT = 'SET_COMMENT';
const RM_COMMENT = 'RM_COMMENT';
const SET_LOADING = 'SET_LOADING';
const SET_TOTAL = 'SET_TOTAL'

const state = () => ({
  loading: false,
  total:0,
  comments: [],
})
const mutations = {
  [SET_LOADING]: (state, loading) => state.loading = loading,

  [SET_COMMENTS](state, data) {
    state.comments = data.parsedComments.filter((comment)=> comment.model_id === data.model_id)
  },
  [SET_COMMENT](state, comment) {
    state.comments.unshift(comment)
  },
  [RM_COMMENT](state, id) {
    state.comments= state.comments.filter((comment) => comment.id !== id)
  },
  [SET_TOTAL] (state, comments) { state.total = comments.length },
}
const getters = {};

const actions = {
  setComments({commit, state},model_id) {
    commit(SET_LOADING, true)
    const localComments = localStorage.getItem('comments');
    if (!localComments) {
      localStorage.setItem('comments', JSON.stringify(state.comments));
    }
    const parsedComments = localComments ? JSON.parse(localComments) : state.comments
    commit(SET_COMMENTS, {parsedComments,model_id});
    commit(SET_TOTAL,state.comments)
    commit(SET_LOADING, false)
  },

  setComment({commit,state},comment) {
    commit(SET_LOADING, true)
    const localComments = localStorage.getItem('comments')
    const parsedComments = JSON.parse(localComments)
    parsedComments.push(comment)
    localStorage.setItem('comments',JSON.stringify(parsedComments))
    commit(SET_COMMENT, comment);
    commit(SET_TOTAL,state.comments)
    commit(SET_LOADING, false)
  },

  rmComment({commit,state},comment){
    commit(SET_LOADING,true)
    commit(RM_COMMENT,comment)
    localStorage.setItem('comments',JSON.stringify(state.comments))
    commit(SET_TOTAL,state.comments)
    commit(SET_LOADING,false)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}