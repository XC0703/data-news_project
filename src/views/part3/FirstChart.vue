<template>
    <div id="part3_container0">
        <div class="boxs">
            <div class="box">
                <div class="icon box1">
                    <div class="icon__word">
                        <span>1063所</span><br>安宁疗护机构
                    </div>
                </div>
                <div v-show="popUpShow1" class="toolTip" :style="positionStyle1">安宁疗护机构：1063所</div>
            </div>
            <div class="box">
                <div class="icon box2">
                    <div class="icon__word">
                        <span>5679人</span><br>注册护士
                    </div>
                </div>
                <div v-show="popUpShow2" class="toolTip" :style="positionStyle2">注册护士：5679人</div>
            </div>
            <div class="box">
                <div class="icon box3">
                    <div class="icon__word">
                        <span>68644张</span><br>核定床位
                    </div>
                </div>
                <div v-show="popUpShow3" class="toolTip" :style="positionStyle3">核定床位：68644张</div>
            </div>
            <div class="box">
                <div class="icon box4">
                    <div class="icon__word">
                        <span>6075人</span><br>职业医师
                    </div>
                </div>
                <div v-show="popUpShow4" class="toolTip" :style="positionStyle4">职业医师：6075人</div>
            </div>




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
        $(".box1").hover(function(event){
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
        $(".box2").hover(function(event){
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
        $(".box3").hover(function(event){
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
        $(".box4").hover(function(event){
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
  width: 8rem;
  height: 2.3rem;
  position: absolute;
  left:50%;
  margin-left: -4rem;
}
.boxs{
    width: 100%;
    height: 100%;
    display: flex;
}
.box {
    flex:1;
    padding-left: 0.25rem;
    .icon{
        position: relative;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        box-shadow: 0 0 .02rem rgba(15,38,80,0.20);
        border: rgb(15,38,80) solid  0.01rem;
        background-repeat: no-repeat !important;
        background-size: 80% 80% !important;
        background-position:center center;
        color:rgb(255,192,0);
        text-shadow: 0.02rem 0.02rem #666;
        cursor: pointer;
        transition: all 0.5s ease;
        &__word{
            font-size: .18rem;
            line-height: .3rem;
            position: absolute;
            bottom:-0.65rem;
            left:0.4rem;
            span{
                font-size: 0.24rem;
            }
        }
    }
    .icon:hover{
        box-shadow: 0 0 0.06rem rgba(15,38,80,0.60);
        .icon__word{
            font-size: .2rem;
            span{
            font-size: .26rem;
            }
        }
    }
}
.box1{
    background-image: url("../../../public/static/images/contents/part3_element1.png");
    .icon__word{
        left:0.2rem;
    }
}
.box2{
    background-image: url("../../../public/static/images/contents/part3_element2.png");
}
.box3{
    background-image: url("../../../public/static/images/contents/part3_element3.png");
    .icon__word{
        left:0.29rem;
    }
}
.box4{
    background-image: url("../../../public/static/images/contents/part3_element4.png");
}
.toolTip{
  position: fixed;
  max-width: 2.2rem;
  padding: .1rem;
  border: .01rem solid #666;
  background: #fff;
  border-radius: .03rem;
  z-index:99;
}
@keyframes move{
    from {
    }
    to {
        background-position: 0 0.12rem,0.12rem 0;
    }
}
</style>


