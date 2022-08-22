<template>
    <!--时间线-->
    <div class="timeLine" style="overflow: hidden;">
        <div class="timeLine__contents">
            <div class="timeLine__contents__content">
                <p id="content1">{{timeLineList[0].year}}</p>
                <p id="content2">{{timeLineList[0].info}}</p>
            </div>
        </div>
        <div class="timeLine__line">
            <div class="timeLine__line__btns">
                <div class="timeLine__line__btns__leftBtn btn iconfont" @click="moveLeft">&#xe779;</div>
                <div class="timeLine__line__btns__rightBtn btn iconfont" @click="moveRight">&#xe775;</div>
            </div>
            <div class="ul_box">
                <ul class="my_timeline" ref="mytimeline">
                    <li class="my_timeline_item" 
                        v-for="(item,index) in timeLineList" 
                        :class="{active: index == timeIndex}"
                        :key="index"
                    >
                        <!--圈圈节点-->
                        <div 
                            class="my_timeline_node"
                            @click="changeActive(index)"
                        ></div>
                        <!--线-->
                        <div class="my_timeline_item_line" v-if="index!=7"></div>
                        <!--标注-->
                        <div class="my_timeline_item_content">
                            {{item.timestamp}}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// import $ from "jquery";

export default {
    name: 'FirstChart',
    data() {
        return {
            timeIndex: 0,
            timeLineList: [{
                    timestamp: '1960年',
                    year: '1960',
                    info: '西塞莉·桑德斯首次系统总结出对临终患者提供全面医疗照护的方案'
                }, {
                    timestamp: '1967年',
                    year: '1967',
                    info: '西塞莉·桑德斯在英国伦敦创立了世界上第一所临终关怀医院'
                }, {
                    timestamp: '1971年',
                    year: '1971',
                    info: '第一家位于伦敦的缓和医疗机构在英国谢菲尔德建立'
                }, {
                    timestamp: '1976年',
                    year: '1976',
                    info: '蒙特医生在加章人蒙特利尔的皇家维多利亚医院建立了全世界第一个驻院缓和医疗'
                }, {
                    timestamp: '1980年',
                    year: '1980',
                    info: '约瑟芬娜.马尼奥发起创立了第一个世界缓和医疗组织—一国际临终关怀协会'
                }, {
                    timestamp: '1987年',
                    year: '1987',
                    info: '全世界第一份缓和医疗专业学术期刊《缓和医学在英国正式创刊》'
                }, {
                    timestamp: '1989年',
                    year: '1989',
                    info: '爱尔兰在都柏林设立了第一个缓和医疗专科医生岗位'
                }, {
                    timestamp: '21世纪以来',
                    year: '21世纪以来',
                    info: '在世界卫生组织等国际组织的推动下稳步发展，成为全球医疗照顾的基本要素和衡量国家文明程度的窗口'
            }]
        }
    },
    methods: {
        getContent(){
            var contents = document.querySelectorAll('.timeLine .timeLine__contents .timeLine__contents__content p')
            return contents;
        },
        changeActive(index) {
            this.getContent()[0].style.opacity = 0;
            this.getContent()[1].style.opacity = 0;
            this.timeIndex = index;
            var that = this;
            setTimeout(function(){
            that.getContent()[0].innerHTML=that.timeLineList[that.timeIndex].year
            that.getContent()[1].innerHTML=that.timeLineList[that.timeIndex].info
            that.getContent()[0].style.opacity = 1;
            that.getContent()[1].style.opacity = 1;
            },500);
        },
        moveLeft()  {
            this.getContent()[0].style.opacity = 0;
            this.getContent()[1].style.opacity = 0;
            if(this.timeIndex!=0){
                this.timeIndex--;
            }
            var that = this;
            setTimeout(function(){
            that.getContent()[0].innerHTML=that.timeLineList[that.timeIndex].year
            that.getContent()[1].innerHTML=that.timeLineList[that.timeIndex].info
            that.getContent()[0].style.opacity = 1;
            that.getContent()[1].style.opacity = 1;
            },500);
        },
        moveRight() {
            this.getContent()[0].style.opacity = 0;
            this.getContent()[1].style.opacity = 0;
            if(this.timeIndex!=7){
                this.timeIndex++;
            }
            var that = this;
            setTimeout(function(){
            that.getContent()[0].innerHTML=that.timeLineList[that.timeIndex].year
            that.getContent()[1].innerHTML=that.timeLineList[that.timeIndex].info
            that.getContent()[0].style.opacity = 1;
            that.getContent()[1].style.opacity = 1;
            },300);
        },
    }
}
</script>

<style lang="scss" scoped>
.timeLine{
    width: 100%;
    height: 4rem;
    position: relative;
    &__contents{
        width: 100%;
        height: 2rem;
        position: relative;
        margin-bottom: .5rem;
        &__content{
        width: 4rem;
        height: 2.2rem;
        position: absolute;
        left: 50%;
        margin-left: -2rem;
        background-color: #fff;
        box-shadow: 0 .04rem .08rem 0 rgba(0,0,0,0.20);
        p:nth-child(1){
            font-size: .4rem;
            word-wrap:break-word;
            width: 3rem;
            height: .4rem;
            margin-top: .4rem;
            position: absolute;
            left:50%;
            margin-left: -1.5rem;
            text-align: center;
            line-height: .4rem;
            color:#f68720;
            transition: all 0.5s ease;
        }
        p:nth-child(2){
            width: 100%;
            height: 1.4rem;
            padding:.1rem;
            position: absolute;
            right: 0;
            bottom: 0;
            text-align: center;
            font-size: .18rem;
            color:#666;
            animation: showIn 1s ease;
            transition: all 0.2s ease;
        }
        }
        &__content:hover{
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.20);
        }
    }
    &__line{
        width: 100%;
        height: 1rem;
        padding:0 .2rem 0 .2rem;
        position: relative;
        &__btns{
            .btn{
                width: .4rem;
                height: .4rem;
                font-size: .4rem;
                border: .01rem solid #f68720;
                color:#f68720;
                border-radius: 50%;
                text-align: center;
                line-height: .4rem;
                position: absolute;
                top:50%;
                margin-top:-.2rem;
                z-index: 99999;
            }
            .btn:hover{
                background-color: #f68720;
                cursor: pointer;
            }
            &__leftBtn{
                left: 1rem;
            }
            &__rightBtn{
                right: 1.2rem;
            }
        }
    }
}
.ul_box {
    width: 11rem;
    height: 1rem;
    overflow: hidden;
    position: absolute;
    left:50%;
    top:50%;
    margin-top: -.5rem;
    margin-left: -5.5rem;
    .my_timeline{
        display: flex;
        margin:0.35rem 0 0 .8rem;
        padding:0 .1rem 0 .1rem
    }
}
.my_timeline_item {
    width: 2.5rem;
    flex: left;
    position: relative;
}
.my_timeline_node {
    box-sizing: border-box;
    border-radius: 50%;
    background-color:#e4e7ed,;
    width: .28rem; 
    height: .28rem;
    cursor: pointer;
    transition:all .5s ease;
}
.my_timeline_item_line {
    width: 100%;
    height: .1rem;
    margin: -.14rem 0 0 .28rem;
    border-top: .02rem solid #E4E7ED;
    border-left: none;
}
.my_timeline_item_content {
    margin: .1rem 0 0 -.1rem;
    color: #999;
    font-size:.18rem;
}
.my_timeline_item:nth-child(8){
    .my_timeline_item_content{
    position: absolute;
    top:.24rem;
    left:-.2rem;
    }
}
.my_timeline_item.active{
    .my_timeline_node{
        background-color: #fff !important;
        border: .06rem solid #f68720;
        width: .38rem; 
        height: .38rem;
        position: absolute;
        top:-.04rem
    }
    .my_timeline_item_line{
        margin: .14rem 0 0 .28rem;
    }
    .my_timeline_item_content{
        position: absolute;
        top:-.4rem;
        left:0rem;
    }
}
.my_timeline_item:nth-child(8).active{
    .my_timeline_item_content{
    left:-.2rem;
    }
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
</style>