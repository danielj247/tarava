<script setup lang="ts">
import { defineProps, defineExpose } from 'vue'

const props = defineProps<{
  height: number
  width: number
}>();

</script>

<template>
  <canvas :data-width="props.width" :data-height="props.height" />
</template>