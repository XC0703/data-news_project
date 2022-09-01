<template>
    <div id="part0" class="content">
        <div id="meteorBox1">
            <meteorAnimation /> 
        </div>
        <div id="meteorBox2">
            <meteorAnimation /> 
        </div>
        <div id="meteorBox3">
            <meteorAnimation /> 
        </div>
        <ScrollTo />
        <div class="content__topBox">Hospice Care</div>
        <div class="content__middleBox">
            <img src="../../../public/static/images/bgs/bg0_element0.png"/>
        </div>
        <div class="content__bottomBox">
            <img src="../../../public/static/images/bgs/bg0_element1.png"/>
        </div>
        <canvas ref="myCanvas" style="width:100%; height: 100%;"></canvas>
    </div>
</template>

<script>
import ScrollTo from '@/components/ScrollTo.vue';
import meteorAnimation from '@/components/meteorAnimation.vue';
import { StarF } from "../../utils/starrySky.js";
const Star = StarF;
export default {
    name:'FirstPage',
    components:{ScrollTo,meteorAnimation},
    data() {
        return {
        myCanvas: {}, //画布
        bgImg: {}, //画布背景图
        starNum: 100, // 星星数量
        stars: [], // 所有星星数组
        lastTime: 0, // 最新时间
        deltaTime: 0, // 动画刷新间隔时间
        cvh: window.innerHeight,
        cvw: window.innerWidth
        };
    },
    created() {
        // 初始化星星对象
        this.initStar();
        // 初始化页面参数
        this.initParams();
    },
    mounted() {
        this.myCanvas = this.$refs.myCanvas;
        this.myCanvas.width = window.innerWidth;
        this.myCanvas.height = window.innerHeight;
        // 动画开始
        this.loop();
    },
    methods: {
        // 初始化对象属性
        initStar() {
        const _this = this;
        // 初始化星星位置, 大小
        Star.prototype.init = function(radiu) {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight * 0.6; //只出现在画布的60%高度以上位置
            this.radiu = radiu * 0.001 + Math.random() * 0.001;
            this.alpha = Math.floor(Math.random() * 5) * 2;
            this.timer = 0;
            this.period = 1;
        };

        // 画对应的序列帧
        Star.prototype.draw = function(ctx) {
            /* 
            context.createRadialGradient(x0,y0,r0,x1,y1,r1);
            x0	渐变的开始圆的 x 坐标
            y0	渐变的开始圆的 y 坐标
            r0	开始圆的半径
            x1	渐变的结束圆的 x 坐标
            y1	渐变的结束圆的 y 坐标
            r1	结束圆的半径
            */
            // 绘制星星
            const grd = ctx.createRadialGradient(
            this.x,
            this.y,
            this.radiu / 8,
            this.x,
            this.y,
            (this.radiu + this.alpha) * 2
            );
            grd.addColorStop(0.025, "#fff");
            grd.addColorStop(0.5, "hsl(217, 61%, 33%)");
            grd.addColorStop(1, "hsl(217, 64%, 6%)");
            // grd.addColorStop(1, "#181d4b");
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radiu + this.alpha * 0.2, 0, 2 * Math.PI);
            ctx.fill();
        };

        // 7帧序列帧轮流展示，每隔一定时间间隔换一帧
        Star.prototype.update = function() {
            this.timer += _this.deltaTime;
            // 控制星星闪烁频率
            if (this.timer > 100) {
            // 最大的时候准备缩小，最小的时候准备放大
            if (this.alpha == 10) {
                this.period = 0;
            } else if (this.alpha == 0) {
                this.period = 1;
            }
            // 控制星星放大缩小
            if (this.period == 0) {
                this.alpha -= 2;
            } else if (this.period == 1) {
                this.alpha += 2;
            }
            this.timer = 0;
            }
        };
        },
        // 初始化页面参数
        initParams() {
        this.bgImg = new Image();
        this.bgImg.src = require("../../../public/static/images/bgs/bg0.png");
        // 绘制不同大小的星星
        for (let i = 0; i < this.starNum; i++) {
            this.stars[i] = new Star();
            if (i < this.starNum / 3) {
            this.stars[i].init(2);
            } else if (i >= this.starNum / 3 && i < (this.starNum * 2) / 3) {
            this.stars[i].init(4);
            } else {
            this.stars[i].init(6);
            }
        }
        this.lastTime = Date.now();
        },
        // 群星闪烁动画
        loop() {
        const ctx = this.myCanvas.getContext("2d");
        const _this = this;
        let animation = window.webkitRequestAnimationFrame(function f() {
            animation = requestAnimationFrame(f);
            const now = Date.now();
            _this.deltaTime = now - _this.lastTime;
            _this.lastTime = now;
            _this.drawSky(ctx);
            _this.drawStars(ctx);
        });
        return animation;
        },
        //
        drawSky(ctx) {
        // ctx.fillStyle = "#393550";
        ctx.drawImage(this.bgImg, 0, 0, this.cvw, this.cvh);
        },
        // 星星绘制
        drawStars(ctx) {
        for (let i = 0; i < this.starNum; i++) {
            if (i < this.starNum / 2) {
            // this.stars[i].update();
            this.stars[i].draw(ctx);
            } else {
            this.stars[i].update();
            this.stars[i].draw(ctx);
            }
        }
        }
    }
}
</script>

<style lang="scss" scoped>
.content{
    background-repeat: no-repeat !important;
	background-size: 100% 100% !important;
    background:url('/public/static/images/bgs/bg0.png');
    height: 100vh;
    @media
    screen and (orientation:portrait) and (max-device-width:768px) and (max-device-height:1024px),
    screen and (orientation:landscape) and (max-device-width:1024px) and (max-device-height:768px) {
        height:7rem
    }
    width:100%;
    position: relative;
    &__topBox{
        color:#fff;
        width: 1rem;
        height: .2rem;
        position: absolute;
        left:50%;
        margin-left: -.5rem;
        margin-top:.8rem;
        text-align: center;
        line-height: .2rem;
        font-style: italic;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: .15rem;
        animation: showIn 0.5s ease;
    }
    &__middleBox{
        position: absolute;
        width:9rem;
        height:4rem;
        left:50%;
        margin-left:-4.5rem;
        margin-top:.5rem;
        font-size: .8rem;
        text-align: center;
        line-height: 1.1rem;
        font-family:Georgia, 'Times New Roman', Times, serif;
        color: #fff;
        animation: showIn 1s ease;
        img{
            width: 100%;
            height: 100%;
        }
    }
    &__bottomBox{
        position: absolute;
        width:5.5rem;
        height:.8rem;
        left:50%;
        margin-left:-2.75rem;
        text-align: center;
        color:#fff;
        margin-top:4rem;
        animation: fadeIn 1.2s ease;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
#meteorBox1{
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 1.2rem;
    top:.4rem;
}
#meteorBox2{
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 5rem;
    top:.4rem;
}
#meteorBox3{
    width: 2rem;
    height: 2rem;
    position: absolute;
    right: 1.2rem;
    top:.4rem;
}
@keyframes showIn{
    0%{
        opacity: 0;
    }
    20%{
        opacity: 0;
    }
    100%{
    opacity: 1;
    }
}
@keyframes fadeIn{
from{opacity:0;margin-top:5.6rem;}

to{opacity:1;margin-top:4rem;}
}
</style>