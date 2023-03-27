<template>
    <button class="prince-button" :class="buttonType">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
import { ButtonType } from "./interface";
defineOptions({ name: "PButton" });

type ButtonProps = {
    type?: ButtonType;
};

const buttonProps = defineProps<ButtonProps>();

const buttonType = computed(() => {
    return {
        [`prince-button-${buttonProps.type}`]: buttonProps.type
    };
});
console.log(buttonType.value, "type");
</script>
