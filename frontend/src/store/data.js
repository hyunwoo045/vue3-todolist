export default {
  namespaced: true,
  state: () => {
    return {
      todo: [
        { id: 1, title: "HTML" },
        { id: 2, title: "CSS" },
        { id: 3, title: "Javascript" },
      ],
      onProceed: [
        { id: 4, title: "React" },
        { id: 5, title: "Vue.js" },
      ],
      done: [{ id: 6, title: "Done..." }],
    };
  },
  mutations: {
    setNewList(state, payload) {
      const { grp, data } = payload;
      state[grp] = [...data];
    },
  },
};
