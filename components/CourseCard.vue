<template>
  <q-card class="my-card" @click="$emit('click')">
    <img :src="thumbnail" alt="썸네일" />

    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>
      <div>
        좋아요 : {{likeCount}}
      </div>
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


const likeCount = 1;

defineEmits<{
  click: [];
}>();

</script>
