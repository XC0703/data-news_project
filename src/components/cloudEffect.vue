<template>
    <div class="banner">
        <div class="clouds">
            <img src="/static/images/clouds/cloud1.png" style="--i:1" alt="">
            <img src="/static/images/clouds/cloud2.png" style="--i:2" alt="">
            <img src="/static/images/clouds/cloud3.png" style="--i:1" alt="">
            <img src="/static/images/clouds/cloud4.png" style="--i:2" alt="">
            <img src="/static/images/clouds/cloud5.png" style="--i:1" alt="">
        </div>
    </div>
</template>

<script>

export default {
    name: "cloudEffect",
};
</script>

<style lang="scss" scoped>
.banner {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #ccd6d7;
    background-size: cover;
    background-position: bottom;
}
.banner .clouds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.banner .clouds img {
    position: absolute;
    bottom: 0;
    max-width: 100%;
    animation: animate calc(8s * var(--i)) linear infinite;
}
@keyframes animate {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>


