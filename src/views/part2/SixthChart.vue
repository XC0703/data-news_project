<template>
    <div class="container13">
        <div class="container13__topBox">
                <div class="container13__topBox__left">
                    <div class="container13__topBox__left__top iconfont">
                        &#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;
                    </div>
                    <div class="container13__topBox__left__bot iconfont">
                        <div class="container13__topBox__left__bot__icon"> &#xe62d;</div>
                        <div class="container13__topBox__left__bot__icon"> &#xe62d;</div>
                        <div class="container13__topBox__left__bot__icon"> &#xe62d;</div>
                        <div class="container13__topBox__left__bot__icon"> &#xe62d;</div>
                    </div>
                </div>
                <div class="container13__topBox__right">每10张床至少配备4名护士</div>
                <div v-show="popUpShow1" class="toolTip" :style="positionStyle1">每10张床至少配备4名护士</div>
        </div>
        <div class="container13__bottomBox">
            <div class="container13__bottomBox__left iconfont">
                <div class="container13__bottomBox__left__icon">&#xe62d;</div>
                <div class="container13__bottomBox__left__icon">&#xe613;</div>
                <div class="container13__bottomBox__left__icon">&#xe613;</div>
                <div class="container13__bottomBox__left__icon">&#xe613;</div>
            </div>
            <div class="container13__bottomBox__right iconfont">按照与护士1:3的比例配备护理员</div>
            <div v-show="popUpShow2" class="toolTip" :style="positionStyle2">按照与护士1:3的比例配备护理员</div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "SixthChart",
  data() {
    return {
        popUpShow1:false,
        popUpShow2:false,
        positionStyle1:{top:'0px',left:'0px'},
        positionStyle2:{top:'0px',left:'0px'},
    };
  },
  mounted() {
    this.handleHover();
  },
  methods:{
    handleHover(){
        var that = this;
        var topBox = document.querySelectorAll(".container13 .container13__topBox");
        var botBox = document.querySelectorAll(".container13 .container13__bottomBox");
        $(".container13__topBox").hover(function(event){
                topBox[0].style.opacity = 1;
                botBox[0].style.opacity = 0.2;
                that.popUpShow1=true;
                const x = event.clientX + 15 + 'px'
                const y = event.clientY + 5 + 'px'
                that.positionStyle1 = { top: y, left: x } 
            },function(event){
                topBox[0].style.opacity = 0.8;
                botBox[0].style.opacity = 0.8;
                that.popUpShow1=false;
                const x = event.pageX + 15 + 'px'
                const y = event.pageY + 5 + 'px'
                that.positionStyle1 = { top: y, left: x } 
        })
        $(".container13__bottomBox").hover(function(event){
                botBox[0].style.opacity = 1;
                topBox[0].style.opacity = 0.2;
                that.popUpShow2=true;
                const x = event.clientX + 15 + 'px'
                const y = event.clientY + 5 + 'px'
                that.positionStyle2 = { top: y, left: x } 
            },function(event){
                topBox[0].style.opacity = 0.8;
                botBox[0].style.opacity = 0.8;
                that.popUpShow2=false;
                const x = event.pageX + 15 + 'px'
                const y = event.pageY + 5 + 'px'
                that.positionStyle2 = { top: y, left: x } 
        })
    }
}
};
</script>

<style lang="scss" scoped>
.container13 {
  width: 6rem;
  height: 2.5rem;
  margin: 0rem auto 0;
  box-shadow: 0 .04rem .08rem 0 rgba(0,0,0,0.20);
  cursor: pointer;
  &__topBox{
    width: 100%;
    height: 50%;
    display: float;
    opacity: 0.8;
    &__left{
        width:65%;
        height: 100%;
        float: left;
        color:rgb(21, 169, 206);
        &__top{
            width: 100%;
            height: 50%;
            font-size: .37rem;
            line-height: .5rem;
        }
        &__bot{
            width: 100%;
            height: 50%;
            font-size: .37rem;
            line-height: .5rem;
            display: flex;
            &__icon{
                flex: 1;
                text-align: center;
                font-size: .37rem;
                line-height: .5rem;
            }
        }
    }
    &__right{
        width:35%;
        height: 100%;
        float: right;
        text-align: center;
        font-size: .15rem;
        padding-top:.6rem
    }
  }
  &__bottomBox{
    width: 100%;
    height: 50%;
    display: float;
    opacity: 0.8;
    &__left{
        width: 57%;
        height: 100%;
        float: left;
        display: flex;
        padding:.2rem;
        color:rgb(21, 169, 206);
        &__icon{
            flex: 1;
            text-align: center;
            font-size: .8rem;
        }
    }
    &__right{
        width: 43%;
        height: 100%;
        float: right;
        text-align: center;
        font-size: .15rem;
        padding-top:.5rem
    }
  }
}
.toolTip{
  position: fixed;
  max-width: 2.2rem;
  padding: .1rem;
  border: .01rem solid #666;
  background: #fff;
  border-radius: .03rem;
}
</style>


