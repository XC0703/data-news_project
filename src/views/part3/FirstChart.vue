<template>
    <div id="part3_container0">
        <div class="boxs">
            <div class="box box1">
                <div class="box__arrow1 iconfont">&#xe775;</div>
                <div class="box__arrow2 iconfont">&#xe772;</div>
            </div>
            <div class="box box2">
                <div class="box__arrow1 iconfont">&#xe775;</div>
                <div class="box__arrow2 iconfont">&#xe772;</div>
            </div>
            <div class="icon_top icon"><span>1063所</span><br>安宁疗护机构</div>
            <div v-show="popUpShow1" class="toolTip" :style="positionStyle1">安宁疗护机构：1063所</div>
            <div class="icon_right icon"><span>5679人</span><br>注册护士</div>
            <div v-show="popUpShow2" class="toolTip" :style="positionStyle2">注册护士：5679人</div>
            <div class="icon_bottom icon"><span>68644张</span><br>核定床位</div>
            <div v-show="popUpShow3" class="toolTip" :style="positionStyle3">核定床位：68644张</div>
            <div class="icon_left icon"><span>6075人</span><br>职业医师</div>
            <div v-show="popUpShow4" class="toolTip" :style="positionStyle4">职业医师：6075人</div>
            
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "FirstChart",
  data() {
    return {
        popUpShow1:false,
        popUpShow2:false,
        popUpShow3:false,
        popUpShow4:false,
        positionStyle1:{top:'0px',left:'0px'},
        positionStyle2:{top:'0px',left:'0px'},
        positionStyle3:{top:'0px',left:'0px'},
        positionStyle4:{top:'0px',left:'0px'},
    };
  },
  mounted() {
    this.handleHover();
  },
  methods:{
    handleHover(){
        var that = this;
        $(".icon_top").hover(function(event){
                that.popUpShow1=true;
                const x = event.clientX + 15 + 'px'
                const y = event.clientY + 5 + 'px'
                that.positionStyle1 = { top: y, left: x } 
            },function(event){
                that.popUpShow1=false;
                const x = event.pageX + 15 + 'px'
                const y = event.pageY + 5 + 'px'
                that.positionStyle1 = { top: y, left: x } 
        })
        $(".icon_right").hover(function(event){
                that.popUpShow2=true;
                const x = event.clientX + 15 + 'px'
                const y = event.clientY + 5 + 'px'
                that.positionStyle2 = { top: y, left: x } 
            },function(event){
                that.popUpShow2=false;
                const x = event.pageX + 15 + 'px'
                const y = event.pageY + 5 + 'px'
                that.positionStyle2 = { top: y, left: x } 
        })
        $(".icon_bottom").hover(function(event){
                that.popUpShow3=true;
                const x = event.clientX + 15 + 'px'
                const y = event.clientY + 5 + 'px'
                that.positionStyle3 = { top: y, left: x } 
            },function(event){
                that.popUpShow3=false;
                const x = event.pageX + 15 + 'px'
                const y = event.pageY + 5 + 'px'
                that.positionStyle3 = { top: y, left: x } 
        })
        $(".icon_left").hover(function(event){
                that.popUpShow4=true;
                const x = event.clientX + 15 + 'px'
                const y = event.clientY + 5 + 'px'
                that.positionStyle4 = { top: y, left: x } 
            },function(event){
                that.popUpShow4=false;
                const x = event.pageX + 15 + 'px'
                const y = event.pageY + 5 + 'px'
                that.positionStyle4 = { top: y, left: x } 
        })
    }
}
};
</script>

<style lang="scss" scoped>
#part3_container0 {
  width: 5rem;
  height: 5rem;
  margin: 0rem auto 0;
}
.boxs{
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    margin-top:1.3rem;
    margin-left: 1.3rem;
}
.box {
    width: 1.2rem;
    height: 1.2rem;
    background: linear-gradient(0deg, transparent 0.06rem, rgb(15,38,80) 0.06rem) repeat-y,
                linear-gradient(90deg, transparent 50%, rgb(15,38,80) 0) repeat-x;
    background-size: 0.01rem 0.12rem,  0.12rem 0.01rem;
    background-position: 0 0, 0 0;
    animation: move 0.5s infinite linear;
    position: absolute;
    &__arrow1{
        position: absolute;
        right: -.08rem;
        top:-.08rem;
        color:rgb(15,38,80);
    }
    &__arrow2{
        position: absolute;
        left:-.07rem;
        bottom: -.08rem;
        color:rgb(15,38,80);
    }
}
.box1{
    right: 0;
    bottom: 0;
}
.box2{
    transform: rotate(180deg);
    left: 0;
    top:0;
    .box__icon1{
        background-image: url("../../../public/static/images/contents/part3_element4.png");
        background-repeat: no-repeat !important;
	background-size: 100% 100% !important;
    }
    .box__icon2{
        background-image: url("../../../public/static/images/contents/part3_element5.png");
        background-repeat: no-repeat !important;
	background-size: 100% 100% !important;
    }
}
.icon{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0,0.1);
    box-shadow: 0 0 .02rem rgba(15,38,80,0.20);
    border: rgb(15,38,80) solid  0.01rem;
    position: absolute;
    background-repeat: no-repeat !important;
	background-size: 80% 80% !important;
    background-position:center center;
    color:rgb(240,204,121);
    font-size: .14rem;
    text-align: center;
    padding-top: .28rem;
    cursor: pointer;
    transition: all 0.5s ease;
    span{
        font-size: .22rem;
        line-height: .3rem;
    }
}
.icon:hover{
    box-shadow: 0 0 0.06rem rgba(15,38,80,0.40);
    span{
        font-size: .24rem;
    }
}
.icon_top{
    background-image: url("../../../public/static/images/contents/part3_element2.png");
    top:-1.1rem;
    left:0.7rem;
}
.icon_right{
    background-image: url("../../../public/static/images/contents/part3_element3.png");
    right:-1.1rem;
    top:0.7rem;
}
.icon_bottom{
    background-image: url("../../../public/static/images/contents/part3_element4.png");
    bottom:-1.1rem;
    left:0.7rem;
}
.icon_left{
    background-image: url("../../../public/static/images/contents/part3_element5.png");
    left:-1.1rem;
    bottom:0.7rem;
}
.toolTip{
  position: fixed;
  max-width: 2.2rem;
  padding: .1rem;
  border: .01rem solid #666;
  background: #fff;
  border-radius: .03rem;
}
@keyframes move{
    from {
    }
    to {
        background-position: 0 0.12rem,0.12rem 0;
    }
}
</style>


