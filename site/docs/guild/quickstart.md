# Quick Start

本章节将介绍如何在项目中使用 Prince UI

## Usage

### Full Import

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```TypeScript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import prince_ui from "@prince_ui/components";

const app = createApp(App);

app.use(prince_ui);
app.mount("#app");

```

### On-demand Import

只想引入使用到的组件。

```vue
<template>
    <div>
        <Button>按钮</Button>
    </div>
</template>
<script lang="ts" setup>
import { Button } from "prince_ui";
</script>
```

## Code Prompt

如果你想在使用库的的时候出现提示功能。

```json
// tsconfig.json
"compilerOptions": {
    //...
    "types": ["prince_ui/lib/src/components"]
  },
```
