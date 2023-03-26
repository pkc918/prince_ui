import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";

type ComponentName = keyof typeof components;

export default {
  install: (app: App) => {
    for (let componentName in components) {
      app.use(components[componentName as ComponentName]);
    }
  },
};
