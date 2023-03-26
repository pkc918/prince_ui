import { createApp } from "vue";
import App from "./App.vue";
import prince_ui from "@prince_ui/components";

const app = createApp(App);

app.use(prince_ui);
app.mount("#app");
