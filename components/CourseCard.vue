<template>
  <q-card v-if="dummy" class="my-card" @click="$emit('click')">
    <img :src="thumbnail" alt="썸네일" />

    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>

    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
interface Props {
  thumbnail: string;
  title: string;
  subtitle: string;
  dummy: boolean;
}

const { thumbnail, title, subtitle } = defineProps<Props>();


defineEmits<{
  click: [];
}>();

</script>
