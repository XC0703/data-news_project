<template>
    <div class="meteorContainer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script>
  export default {
    name:'meteorAnimation',
  };
</script>
<style lang="scss" scoped>
.meteorContainer{
    width: 100%;
    height: 100%;
}
span{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.01rem;
    height: 0.01rem;
    background-color: #fff;
    border-radius: 50%;
    /* 发光效果 */
    box-shadow: 0 0 0 0.001rem rgba(255,255,255,0.1),
    0 0 0 0.002rem rgba(255,255,255,0.1),
    0 0 0.005rem rgba(255,255,255,1);
    /* 执行动画 */
    animation: animate 3s linear infinite;
    transform: scale(0.1);
}
/* 拖尾效果 */
span::before{
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: .5rem;
    height: 0.01rem;
    background: linear-gradient(90deg,#fff,transparent);
}
/* 接下来分别为每一个流星设置位置、动画延迟时间、动画时长 */
span:nth-child(1){
    top: 0;
    right: 0;
    /* initial关键字用于设置CSS属性为它的默认值 */
    left: initial;
    /* 动画延迟时间 */
    animation-delay: 0s;
    /* 动画时长 */
    animation-duration: 1s;
}
span:nth-child(2){
    top: 0;
    right: 1rem;
    left: initial;
    animation-delay: 0.2s;
    animation-duration: 3s;
}
span:nth-child(3){
    top: .8rem;
    right: 0;
    left: initial;
    animation-delay: 0.4s;
    animation-duration: 2s;
}
span:nth-child(4){
    top: 0;
    right: 1.6rem;
    left: initial;
    animation-delay: 0.6s;
    animation-duration: 1.5s;
}
span:nth-child(5){
    top: 0;
    right: 2rem;
    left: initial;
    animation-delay: 0.8s;
    animation-duration: 2.5s;
}
span:nth-child(6){
    top: 0;
    right: .5rem;
    left: initial;
    animation-delay: 1s;
    animation-duration: 3s;
}
span:nth-child(7){
    top: .3rem;
    right: 0;
    left: initial;
    animation-delay: 1.2s;
    animation-duration: 1.75s;
}
span:nth-child(8){
    top: 0;
    right: .5rem;
    left: initial;
    animation-delay: 1.4s;
    animation-duration: 1.25s;
}
span:nth-child(9){
    top: 0;
    right: .7rem;
    left: initial;
    animation-delay: 0.75s;
    animation-duration: 2.25s;
}
span:nth-child(10){
    top: 0;
    right: 1rem;
    left: initial;
    animation-delay: 2.75s;
    animation-duration: 2.25s;
}
/* 定义动画 */
/* 流星划过动画 */
@keyframes animate {
    0%{
        transform:rotate(315deg) translateX(0);
        opacity: 1;
    }
    90%{

        opacity: 1;
    }
    100%{
        transform: rotate(315deg) translateX(-3rem);
        opacity: 0;
    }
}
</style>
  
  