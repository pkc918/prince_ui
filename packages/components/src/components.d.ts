import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    PButton: typeof components.Button;
  }
}
export {};
