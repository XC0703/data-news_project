<template>
    <div class="part2_container5">
        <div class="part2_container5__left">
            <div class="part2_container5__left__box box1 iconfont">
                &#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;&#xe99b;
            </div>
            <div class="part2_container5__left__box box2 content1 iconfont">
                &#xe71b;
            </div>
            <div class="part2_container5__left__box box3 content2 iconfont">
                <div class="box3__icon iconfont"> &#xe62d;</div>
                <div class="box3__icon iconfont"> &#xe62d;</div>
                <div class="box3__icon iconfont"> &#xe62d;</div>
                <div class="box3__icon iconfont"> &#xe62d;</div>
            </div>
            <div class="part2_container5__left__box box4 content3 iconfont">
                <div class="box4__icon iconfont">
                    <div class="box4__icon__ico iconfont">&#xe613;</div>
                    <div class="box4__icon__ico iconfont">&#xe613;</div> 
                    <div class="box4__icon__ico iconfont">&#xe613;</div>     
                </div>
                <div class="box4__icon iconfont">
                    <div class="box4__icon__ico iconfont">&#xe613;</div>
                    <div class="box4__icon__ico iconfont">&#xe613;</div> 
                    <div class="box4__icon__ico iconfont">&#xe613;</div>     
                </div>
                <div class="box4__icon iconfont">
                    <div class="box4__icon__ico iconfont">&#xe613;</div>
                    <div class="box4__icon__ico iconfont">&#xe613;</div> 
                    <div class="box4__icon__ico iconfont">&#xe613;</div>     
                </div>
                <div class="box4__icon iconfont">
                    <div class="box4__icon__ico iconfont">&#xe613;</div>
                    <div class="box4__icon__ico iconfont">&#xe613;</div> 
                    <div class="box4__icon__ico iconfont">&#xe613;</div>     
                </div>
            </div>
        </div>
        <div class="part2_container5__right">
            <div class="part2_container5__right__box content1">???10?????????????????????1???????????????</div>
            <div v-show="popUpShow1" class="toolTip" :style="positionStyle1">???10?????????????????????1???????????????</div>
            <div class="part2_container5__right__box content2">???10??????????????????4?????????</div>
            <div v-show="popUpShow2" class="toolTip" :style="positionStyle2">???10??????????????????4?????????</div>
            <div class="part2_container5__right__box content3">???????????????1:3????????????????????????</div>
            <div v-show="popUpShow3" class="toolTip" :style="positionStyle3">???????????????1:3????????????????????????</div>
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
        popUpShow3:false,
        positionStyle1:{top:'0px',left:'0px'},
        positionStyle2:{top:'0px',left:'0px'},
        positionStyle3:{top:'0px',left:'0px'},
    };
  },
  mounted() {
    this.handleHover();
  },
  methods:{
    handleHover(){
        var that = this;
        var chartBox = document.querySelectorAll(".part2_container5 .part2_container5__left .part2_container5__left__box");
        var wordBox = document.querySelectorAll(".part2_container5 .part2_container5__right .part2_container5__right__box");
        $(".content1").hover(function(event){
                chartBox[0].style.opacity = 1;
                chartBox[1].style.opacity = 1;
                wordBox[0].style.opacity = 1;
                chartBox[2].style.opacity = 0.2;
                chartBox[3].style.opacity = 0.2;
                wordBox[1].style.opacity = 0.2;
                wordBox[2].style.opacity = 0.2;
                that.popUpShow1=true;
                const x = event.clientX + 15 + 'px'
                const y = event.clientY + 5 + 'px'
                that.positionStyle1 = { top: y, left: x } 
            },function(event){
                chartBox[0].style.opacity = 0.8;
                chartBox[1].style.opacity = 0.8;
                wordBox[0].style.opacity = 0.8;
                chartBox[2].style.opacity = 0.8;
                chartBox[3].style.opacity = 0.8;
                wordBox[1].style.opacity = 0.8;
                wordBox[2].style.opacity = 0.8;
                that.popUpShow1=false;
                const x = event.pageX + 15 + 'px'
                const y = event.pageY + 5 + 'px'
                that.positionStyle1 = { top: y, left: x } 
        })
        $(".content2").hover(function(event){
                chartBox[0].style.opacity = 1;
                chartBox[2].style.opacity = 1;
                wordBox[1].style.opacity = 1;
                chartBox[1].style.opacity = 0.2;
                chartBox[3].style.opacity = 0.2;
                wordBox[0].style.opacity = 0.2;
                wordBox[2].style.opacity = 0.2;
                that.popUpShow2=true;
                const x = event.clientX + 15 + 'px'
                const y = event.clientY + 5 + 'px'
                that.positionStyle2 = { top: y, left: x } 
            },function(event){
                chartBox[0].style.opacity = 0.8;
                chartBox[2].style.opacity = 0.8;
                wordBox[1].style.opacity = 0.8;
                chartBox[1].style.opacity = 0.8;
                chartBox[3].style.opacity = 0.8;
                wordBox[0].style.opacity = 0.8;
                wordBox[2].style.opacity = 0.8;
                that.popUpShow2=false;
                const x = event.pageX + 15 + 'px'
                const y = event.pageY + 5 + 'px'
                that.positionStyle2 = { top: y, left: x } 
        })
        $(".content3").hover(function(event){
                chartBox[2].style.opacity = 1;
                chartBox[3].style.opacity = 1;
                wordBox[2].style.opacity = 1;
                chartBox[0].style.opacity = 0.2;
                chartBox[1].style.opacity = 0.2;
                wordBox[0].style.opacity = 0.2;
                wordBox[1].style.opacity = 0.2;
                that.popUpShow3=true;
                const x = event.clientX + 15 + 'px'
                const y = event.clientY + 5 + 'px'
                that.positionStyle3 = { top: y, left: x } 
            },function(event){
                chartBox[2].style.opacity = 0.8;
                chartBox[3].style.opacity = 0.8;
                wordBox[2].style.opacity = 0.8;
                chartBox[0].style.opacity = 0.8;
                chartBox[1].style.opacity = 0.8;
                wordBox[0].style.opacity = 0.8;
                wordBox[1].style.opacity = 0.8;
                that.popUpShow3=false;
                const x = event.pageX + 15 + 'px'
                const y = event.pageY + 5 + 'px'
                that.positionStyle3 = { top: y, left: x } 
        })
    }
}
};
</script>

<style lang="scss" scoped>
.part2_container5 {
    width: 8.4rem;
    height: 3rem;
    margin: 0rem auto 0;
    box-shadow: 0 .04rem .08rem 0 rgba(0,0,0,0.20);
    opacity: 0.8;
    cursor: pointer;
    display: float;
    &__left{
        height: 100%;
        width:65%;
        color:rgb(33,105,179);
        float: left;
        &__box{
            width:100%;
            height:25%;
            line-height: .75rem;
            text-align: center;
        }
        .box1{
            font-size: .55rem;
        }
        .box2{
            font-size: .7rem;
        }
        .box3{
            display: flex;
            &__icon{
                flex: 1;
                text-align: center;
                font-size: .55rem;
            }
        }
        .box4{
            display: flex;
            &__icon{
                flex: 1;
                display: flex;
                &__ico{
                flex:1;
                text-align: center;
                font-size: .45rem;
            }
            }
        }
    }
    &__right{
        width:35%;
        height: 100%;
        float: right;
        &__box{
            width: 100%;
            height: 33.333333%;
            text-align: center;
            font-size: .18rem;
        }
        .content1{
            padding-top: 1.03rem;
        }
        .content2{
            padding-top: 0.72rem;
        }
        .content3{
            padding-top: .5rem;
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


