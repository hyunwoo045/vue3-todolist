import { createApp } from "vue";
import App from "./App";
import store from "./store/index.js";

createApp(App).use(store).mount("#app");
