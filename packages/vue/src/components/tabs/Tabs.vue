<script setup lang="ts">
import { provide, ref } from 'vue';

const props = defineProps<{
  defaultValue: string;
}>();

const activeTab = ref(props.defaultValue);

provide('activeTab', activeTab);
</script>

<template>
  <div >
    <slot></slot>
  </div>
</template>

