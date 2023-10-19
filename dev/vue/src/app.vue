<script setup lang="ts">
import { TaravaBuilder, /* AvatarRenderer */ } from "@tarava/vue";
// import { ref } from "vue";

// const renderer = ref();
</script>

<template>
  <main class="max-w-5xl mx-auto px-4 box-border">
    <!-- Use the component as is  -->
    <div className="flex flex-col items-center justify-center gap-y-4 pt-10 px-10 lg:flex-row">
      <TaravaBuilder :width="400" :height="400" />
    </div>

    <!-- Build you own with the slots -->
    <!-- <div>
      <TaravaBuilder :width="400" :height="400">
        <template>
          <AvatarRenderer ref="renderer" :width="400" :height="400" />
        </template>
        <template #selector="{ assets, setHeadAsset, setEyebrowsAsset, setEyesAsset, setMouthAsset, setNoseAsset }">
          <button @click="setHeadAsset(assets.head[0])">set head 0</button>
          <button @click="setEyebrowsAsset(assets.eyebrows[0])">set eyebrows 0</button>
          <button @click="setEyesAsset(assets.eyes[0])">set eyes 0</button>
          <button @click="setNoseAsset(assets.nose[0])">set nose 0</button>
          <button @click="setMouthAsset(assets.mouth[0])">set mouth 0</button>
        </template>
      </TaravaBuilder>
    </div> -->
  </main>
</template>
