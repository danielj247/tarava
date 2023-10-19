<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/tabs'
import { AssetType } from '@tarava/types'

import type { LoadAssets, Asset, Avatar } from '@tarava/types';

const props = defineProps<{
  assets: LoadAssets;
  selected: Avatar;
}>();

const emit = defineEmits<{
  (e: 'select', type: AssetType, asset: Asset): void
}>()
</script>

<template>
  <Tabs :default-value="AssetType.HEAD">
    <TabsList>
      <TabsTrigger :value="AssetType.HEAD">Head</TabsTrigger>
      <TabsTrigger :value="AssetType.EYEBROWS">Eyebrows</TabsTrigger>
      <TabsTrigger :value="AssetType.EYES">Eyes</TabsTrigger>
      <TabsTrigger :value="AssetType.NOSE">Nose</TabsTrigger>
      <TabsTrigger :value="AssetType.MOUTH">Mouth</TabsTrigger>
    </TabsList>
    <TabsContent :value="AssetType.HEAD">
      <div className="grid grid-cols-2 gap-2 w-full">
        <div
          v-for="(asset, ix) in props.assets[AssetType.HEAD]"
          :key="ix"
          :class="['bg-gray-100 p-4 rounded-lg', asset === props.selected?.[AssetType.HEAD] && 'ring-2 ring-black']"
          @click="emit('select', AssetType.HEAD, asset)"
        >
          <img :src="asset.img.src" :alt="`Asset item ${ix}`" class="w-full" />
        </div>
      </div>
    </TabsContent>
    <TabsContent :value="AssetType.EYEBROWS">
      <div className="grid grid-cols-2 gap-2 w-full">
        <div
          v-for="(asset, ix) in props.assets[AssetType.EYEBROWS]"
          :key="ix"
          :class="['bg-gray-100 p-4 rounded-lg', asset === props.selected?.[AssetType.EYEBROWS] && 'ring-2 ring-black']"
          @click="emit('select', AssetType.EYEBROWS, asset)"
        >
          <img :src="asset.img.src" :alt="`Asset item ${ix}`" class="w-full" />
        </div>
      </div>
    </TabsContent>
    <TabsContent :value="AssetType.EYES">
      <div className="grid grid-cols-2 gap-2 w-full">
        <div
          v-for="(asset, ix) in props.assets[AssetType.EYES]"
          :key="ix"
          :class="['bg-gray-100 p-4 rounded-lg', asset === props.selected?.[AssetType.EYES] && 'ring-2 ring-black']"
          @click="emit('select', AssetType.EYES, asset)"
        >
          <img :src="asset.img.src" :alt="`Asset item ${ix}`" class="w-full" />
        </div>
      </div>
    </TabsContent>
    <TabsContent :value="AssetType.NOSE">
      <div className="grid grid-cols-2 gap-2 w-full">
        <div
          v-for="(asset, ix) in props.assets[AssetType.NOSE]"
          :key="ix"
          :class="['bg-gray-100 p-4 rounded-lg', asset === props.selected?.[AssetType.NOSE] && 'ring-2 ring-black']"
          @click="emit('select', AssetType.NOSE, asset)"
        >
          <img :src="asset.img.src" :alt="`Asset item ${ix}`" class="w-full" />
        </div>
      </div>
    </TabsContent>
    <TabsContent :value="AssetType.MOUTH">
      <div className="grid grid-cols-2 gap-2 w-full">
        <div
          v-for="(asset, ix) in props.assets[AssetType.MOUTH]"
          :key="ix"
          :class="['bg-gray-100 p-4 rounded-lg', asset === props.selected?.[AssetType.MOUTH] && 'ring-2 ring-black']"
          @click="emit('select', AssetType.MOUTH, asset)"
        >
          <img :src="asset.img.src" :alt="`Asset item ${ix}`" class="w-full" />
        </div>
      </div>
    </TabsContent>
  </Tabs>
</template>