<template>
    <Part0View />
    <Part1View />
    <Part2View />
    <Part3View />
    <Part4View />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  components: {
    Part0View: defineAsyncComponent(() => import('./views/part0/Part0View')),
    Part1View: defineAsyncComponent(() => import('./views/part1/Part1View')),
    Part2View: defineAsyncComponent(() => import('./views/part2/Part2View')),
    Part3View: defineAsyncComponent(() => import('./views/part3/Part3View')),
    Part4View: defineAsyncComponent(() => import('./views/part4/Part4View')),
  },
}
</script>

<style lang="scss" scoped>
</style>
