<template>
    <div class="content" :style="{background: 'url(/static/images/bgs/bg1.png)'}">
        <div class="content__leftBox">
            温和地<br/>&nbsp;&nbsp;&nbsp;&nbsp;走进那个良夜
        </div>
        <div class="content__rightBox">
            <div class="content__rightBox__word">安宁疗护，是生死之间供生命之船停泊的港湾</div>
            <div class="content__rightBox__word">当太阳的火焰熄灭，每个人终将迎来自己的“良夜”</div>
            <div class="content__rightBox__word">当生命之船无奈鸣笛，即将伴着暮色驶出人间</div>
            <div class="content__rightBox__word">人们或许可以选择，更加温和地走进那个良夜……</div>
        </div>
    </div>
</template>

<script>

export default {
    name:'FirstPage',
}
</script>

<style lang="scss" scoped>
.content{
    background-repeat: no-repeat !important;
	background-size: cover !important;
    height: 100vh;
    position: relative;
    &__leftBox{
        font-size: 1rem;
        line-height: 1.5rem;
        position: absolute;
        left:.2rem;
        bottom: 1rem;
        color: #fff;
    }
    &__rightBox{
        position: absolute;
        top:1rem;
        right:1rem;
        color:#fff;
        &__word{
            line-height: .5rem;
            font-size: .2rem;
        }
    }
}
</style>