export default {
  namespaced: true,
  state: () => {
    return {
      isDragging: false,
      dragSample: "",
      dragNode: "",
    };
  },

  mutations: {
    setDragState(state, payload) {
      const { e, params } = payload;
      state.dragNode = e;
      state.dragSample = params;
      state.isDragging = true;
      const dragEndHandler = () => {
        state.dragNode.removeEventListener("dragend", dragEndHandler);
        state.dragSample = null;
        state.dragNode = null;
      };
      state.dragNode.addEventListener("dragend", dragEndHandler);
    },
    setDragSample(state, params) {
      state.dragSample = params;
    },
  },
};
