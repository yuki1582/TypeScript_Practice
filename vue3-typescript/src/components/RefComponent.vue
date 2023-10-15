<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
const count = ref<number>(0);
const count2 : Ref<number> = ref(0);

</script>

<template>
    <h2>ref</h2>
    {{ count2 }}<br />
    <!-- <button @click="$event => count++">クリック</button> -->
    <button @click="$event => count2++">クリック</button>
</template>