import { createStore } from "vuex";
import dragging from "./dragging";
import data from "./data";

export default createStore({
  modules: { dragging, data },
});
