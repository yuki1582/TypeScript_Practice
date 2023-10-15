<script setup lang="ts">
import { reactive } from "vue";

type User = {
  id: number,
  name: string
}

const user1 : User = {
  id: 1,
  name: "中村"
}

const user2 = reactive({} as User);
user2.id = 3;
user2.name = "安藤";
</script>

<template>
    <h2>Reactive</h2>
    {{ user1.name }}<br />
    {{ user2.id }}<br />
    {{ user2.name }}
</template>