import * as fs from "fs";
const store = {
  namespaced: true,
  state: {
    makes: {},
  },

  getters: {
    makes: (state) => state.makes,
  },

  mutations: {
    saveDataFromServer: (state, makes) => ({
      ...state,
      data: makes,
    }),
  },

  actions: {
    loadDataAction: ({ commit, dispatch }) => {
      dispatch("root/loader/updateStatusAction", true, { root: true });
      loadJSON("../../../data/makes.json")
        .then((makes) => {
          commit("saveMakesData", makes);
          dispatch("root/loader/updateStatusAction", false, { root: true });
        })
        .catch((err) => console.log(err));
    },
  },
};
const loadJSON = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf8", (err, content) => {
      if (err) {
        reject(err);
      } else {
        try {
          resolve(JSON.parse(content));
        } catch (err) {
          reject(err);
        }
      }
    });
  });
};
export default store;
