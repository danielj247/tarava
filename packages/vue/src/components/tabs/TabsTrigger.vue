<script setup lang="ts">
import { inject, defineProps, Ref, computed } from 'vue';

const props = defineProps<{
  value: string;
}>();

const activeTab: Ref<string> | undefined = inject('activeTab');

const isActive = computed(() => activeTab?.value === props.value);

function setActive() {
  if (!activeTab) return;

  activeTab.value = props.value;
};
</script>


<template>
  <button :class="isActive && 'bg-white text-black shadow'" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" @click="setActive">
    <slot></slot>
  </button>
</template>