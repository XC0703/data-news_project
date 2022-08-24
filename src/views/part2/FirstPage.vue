<template>
    <div id="part2" class="content" :style="{background: 'url(/static/images/bgs/bg2.png)'}">
        <ScrollTo />
    </div>
</template>

<script>
import ScrollTo from '@/components/ScrollTo.vue';
export default {
    name:'FirstPage',
    components:{ScrollTo}
}
</script>

<style lang="scss" scoped>
.content{
    background-repeat: no-repeat !important;
	background-size: cover !important;
    height: 100vh;
    position: relative;
}
</style>