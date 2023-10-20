<script setup lang="ts">
import { ref, defineProps, nextTick } from 'vue'
import useTarava from "@/composables/useTarava";
import AvatarRenderer from '@/components/AvatarRenderer.vue';
import AssetSelector from '@/components/AssetSelector.vue';
import { AssetType } from '@tarava/types';

import type { Ref } from 'vue'
import type { Asset, Avatar } from '@tarava/types';

const props = defineProps<{
  height: number
  width: number
}>();

const emit = defineEmits<{
  (e: 'select', type: AssetType, asset: Asset, avatar: Avatar): void
}>()

const canvas = ref<HTMLCanvasElement>()
const { store, setAvatar, avatar, assets, onInit, setHeadAsset, setEyebrowsAsset, setEyesAsset, setMouthAsset, setNoseAsset } = useTarava(canvas as Ref<HTMLCanvasElement>);

function handleSelect(type: AssetType, asset: Asset) {  
  switch (type) {
    case AssetType.HEAD:
      setHeadAsset(asset)
      break;
    case AssetType.EYEBROWS:
      setEyebrowsAsset(asset)
      break;
    case AssetType.EYES:
      setEyesAsset(asset)
      break;
    case AssetType.NOSE:
      setNoseAsset(asset)
      break;
    case AssetType.MOUTH:
      setMouthAsset(asset)
      break;
  }

  if (!avatar.value) return;

  emit('select', type, asset, avatar.value);
}

onInit(async () => {
  if (!store.value || !assets.value) return;

  setAvatar({
    head: assets.value.head[0],
    eyebrows: assets.value.eyebrows[0],
    eyes: assets.value.eyes[0],
    nose: assets.value.nose[0],
    mouth: assets.value.mouth[0],
  })
})
</script>

<template>
  <slot name="renderer" :ref="canvas">
    <AvatarRenderer ref="canvas" :width="props.width" :height="props.height" />
  </slot>
  <slot name="selector" :assets="assets" :setHeadAsset="setHeadAsset" :setEyebrowsAsset="setEyebrowsAsset" :setEyesAsset="setEyesAsset" :setMouthAsset="setMouthAsset" :setNoseAsset="setNoseAsset">
    <AssetSelector v-if="assets" :assets="assets" :selected="avatar" @select="handleSelect" />
  </slot>
</template>