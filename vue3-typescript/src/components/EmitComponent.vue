<script setup lang="ts">

const emit = defineEmits<{(
  e : "btnClick", message: string) : void
  }>()

const buttonClick = (message: string) :void => {
  emit("btnClick", message)
}
</script>

<template>
  <h2>Emit</h2>
  <button @click="$event => buttonClick('子でクリックされた')">クリック</button>
</template>