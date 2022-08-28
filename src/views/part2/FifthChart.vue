<template>
    <div class="container12">
        <div class="container12__topBox">
            <div class="container12__rowBox">
                <div class="container12__rowBox__left iconfont">
                    &#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;
                </div>
                <div class="container12__rowBox__right iconfont">&#xe71b;</div>
            </div>
        </div>
        <div class="container12__midBox">
            <div class="container12__rowBox">
                <div class="container12__rowBox__left iconfont">
                    &#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;
                </div>
                <div class="container12__rowBox__right iconfont">&#xe99c;</div>
            </div>
            <div class="container12__rowBox">
                <div class="container12__rowBox__left iconfont">
                    &#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;
                </div>
                <div class="container12__rowBox__right iconfont">&#xe99c;</div>
            </div>
            <div class="container12__rowBox">
                <div class="container12__rowBox__left iconfont">
                    &#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;
                </div>
                <div class="container12__rowBox__right iconfont">&#xe99c;</div>
            </div>
            <div class="container12__rowBox">
                <div class="container12__rowBox__left iconfont">
                    &#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;&#xe8ff;
                </div>
                <div class="container12__rowBox__right iconfont">&#xe99c;</div>
            </div>
        </div>
        <div class="container12__bottomBox">
            应根据当地实际需求和资金情况，兼顾发展设置床位数，床位总数应在五十张以上，每10张床位至少配备1名职业医师。
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "FifthChart",
  data() {
    return {};
  },
  mounted() {
    this.handleHover();
  },
  methods:{
    handleHover(){
        var topBox = document.querySelectorAll(".container12 .container12__topBox");
        var midBox = document.querySelectorAll(".container12 .container12__midBox");
        $(".container12__topBox").hover(function(){
                topBox[0].style.opacity = 1;
                midBox[0].style.opacity = 0.2;
            },function(){
                topBox[0].style.opacity = 0.8;
                midBox[0].style.opacity = 0.8;
        })
        $(".container12__midBox").hover(function(){
                midBox[0].style.opacity = 1;
                topBox[0].style.opacity = 0.2;
            },function(){
                topBox[0].style.opacity = 0.8;
                midBox[0].style.opacity = 0.8;
        })
    }
}
};
</script>

<style lang="scss" scoped>
.container12 {
  width: 4.7rem;
  height: 3.1rem;
  margin: 0rem auto 0;
  box-shadow: 0 .04rem .08rem 0 rgba(0,0,0,0.20);
//   background-color: #fff;
  &__rowBox{
    width: 100%;
    height: 0.5rem;
    display: float;
    cursor: pointer;
    &__left{
        font-size: .4rem;
        line-height: .5rem;
        margin-right: .1rem;
        float: left;
    }
    &__right{
        font-size: .4rem;
        line-height: .5rem;
        float: right;
    }
  }
  &__topBox{
    width: 100%;
    height: 0.5rem;
    opacity: 0.8;
    .container12__rowBox{
        color:rgb(21, 169, 206)
    }
  }
  &__midBox{
    width: 100%;
    height: 2.1rem;
    opacity: 0.8;
    .container12__rowBox{
        color:rgb(84, 86, 87)
    }
  }
  &__bottomBox{
    width: 100%;
    height: 0.5rem;
    font-size: .15rem;
    line-height: 0.25rem;
  }
}
</style>


