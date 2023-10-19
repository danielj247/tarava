<script setup lang="ts">
import { inject, defineProps, computed, Ref } from 'vue';

const props = defineProps<{
  value: string;
}>();

const activeTab: Ref<string> | undefined = inject('activeTab');

const isActive = computed(() => activeTab?.value === props.value);
</script>

<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>

