<template>
  <q-card class="my-card" @click="$emit('click')">
    <img :src="thumbnail" alt="썸네일" />

    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>
      {{zz}}
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
interface Props {
  thumbnail: string;
  title: string;
  subtitle: string;
}

const { thumbnail, title, subtitle } = defineProps<Props>();


const abcd = 1;

const test = "aabbcc@@@@@@AFSDFSDHJFHSADKGFHJALSDHFGLJADS";

const zz = test * abcd;

defineEmits<{
  click: [];
}>();

document.body.style.overflowY = "scrollXG";

document.body.querySelector("asda")?.getAttribute('dasdasd')

document.body.hidden();
</script>
