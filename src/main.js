import { createApp } from "vue";
import App from "./App.vue";
import "./assets/global.scss";
import "normalize.css";
import router from './router'

createApp(App).use(router).mount("#app");
