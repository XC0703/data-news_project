<template>
    <div class="innerLayer">
        <div class="innerLayer__content bg1" v-show="bg1===true">
            <div class="bg11"></div>
        </div>
        <div class="innerLayer__content bg2" v-show="bg2===true">
            <div class="bg22"></div>
        </div>
        <div class="innerLayer__content bg3" v-show="bg3===true">
            <div class="bg33"></div>
        </div>
        <div class="innerLayer__content bg4" v-show="bg4===true">
            <div class="bg44"></div>
        </div>
        <div class="innerLayer__content" v-show="footer===true">
            <FooterView />
        </div>
    </div>
</template>

<script>
import FooterView from './FooterView.vue'
export default {
    name:'PartInner',
    components:{FooterView},
    data() {
        return {
            bg1:true,
            bg2:false,
            bg3:false,
            bg4:false,
            footer:false,
        };
  },

  mounted() {
    // 初始化加载
    this.createListener();
  },

   methods: {
    //监听窗口滚动
    windowScrollListener() {
        //获取操作元素最顶端到页面顶端的垂直距离
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(scrollTop);
        if(scrollTop<=4770){
            this.bg1=true;
            this.bg2=false;
            this.bg3=false;
            this.bg4=false;
            this.footer=false;
        }else if(scrollTop<=9960){
            this.bg1=false;
            this.bg2=true;
            this.bg3=false;
            this.bg4=false;
            this.footer=false;
        }else if(scrollTop<=18015){
            this.bg1=false;
            this.bg2=false;
            this.bg3=true;
            this.bg4=false;
            this.footer=false;
        }else if(scrollTop<=23900){
            this.bg1=false;
            this.bg2=false;
            this.bg3=false;
            this.bg4=true;
            this.footer=false;
        }else{
            this.bg1=false;
            this.bg2=false;
            this.bg3=false;
            this.bg4=false;
            this.footer=true;
        }
    },
    createListener() {
        //添加滚动监听事件
        //在窗口滚动时调用监听窗口滚动方法
        window.addEventListener('scroll', this.windowScrollListener);
    },
    }
}
</script>

<style lang="scss" scoped>
.innerLayer{
    width: 100%;
    height: 100vh;
    @media
    screen and (orientation:portrait) and (max-device-width:768px) and (max-device-height:1024px),
    screen and (orientation:landscape) and (max-device-width:1024px) and (max-device-height:768px) {
        height:7rem
    }
    position: fixed;
    bottom: 0;
    z-index: -1;
    .content{
        width: 100%;
        height: 100%;
    }
    .bg1{
        width: 100%;
        height: 100%;
        background-repeat: no-repeat !important;
        background-size: 100% 100% !important;
        background:url('/public/static/images/bgs/bg1.png');
    }
    .bg2{
        width: 100%;
        height: 100%;
        background-repeat: no-repeat !important;
        background-size: 100% 100% !important;
        background:url('/public/static/images/bgs/bg2.png');
    }
    .bg3{
        width: 100%;
        height: 100%;
        background-repeat: no-repeat !important;
        background-size: 100% 100% !important;
        background:url('/public/static/images/bgs/bg3.png');
    }
    .bg4{
        width: 100%;
        height: 100%;
        background-repeat: no-repeat !important;
        background-size: 100% 100% !important;
        background:url('/public/static/images/bgs/bg4.png');
    }
}
</style>