<template>
  <swiper-item class="wd-swiper__item" @click="handleClick">
    <slot></slot>
  </swiper-item>
</template>

<script lang="ts">
export default {
  name: 'wd-swiper-item',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { swiperItemProps } from './types'

defineProps(swiperItemProps)
const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
