
const SET_COMMENTS = 'SET_COMMENTS';
const SET_COMMENT = 'SET_COMMENT';
const RM_COMMENT = 'RM_COMMENT';
const SET_LOADING = 'SET_LOADING';
const state = () => ({
  loading: false,
  total:0,
  comments: [],
})
const mutations = {
  [SET_LOADING]: (state, loading) => state.loading = loading,

  [SET_COMMENTS](state, comments) {
    state.comments = comments
  },
  [SET_COMMENT](state, comment) {
    state.comments.unshift(comment)
  },
  [RM_COMMENT](state, id) {
    state.comments= state.comments.filter((comment) => comment.id !== id)
  }
}
const getters = {};

const actions = {
  setComments({commit, state}) {
    commit(SET_LOADING, true)
    const localComments = localStorage.getItem('comments');
    if (!localComments) {
      localStorage.setItem('comments', JSON.stringify(state.comments));
    }
    const parsedComments = localComments ? JSON.parse(localComments) : state.comments
    commit(SET_COMMENTS, parsedComments);
    commit(SET_LOADING, false)
  },

  setComment({commit},comment) {
    const localComments = localStorage.getItem('comments')
    const parsedComments = JSON.parse(localComments)
    parsedComments.push(comment)
    localStorage.setItem('comments',JSON.stringify(parsedComments))
    commit(SET_COMMENT,comment)
  },
  rmComment({commit,state},comment){
    commit(SET_LOADING,true)
    commit(RM_COMMENT,comment)
    localStorage.setItem('comments',JSON.stringify(state.comments))
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