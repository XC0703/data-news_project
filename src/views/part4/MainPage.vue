<template>
    <div class="part4_content">
        <div class="content">
            <div class="content__word">
                <div class="content__word__leftAlign" style="margin-top:0.8rem">
                    <p>开头提到的那位马阿姨在确诊肿瘤晚期后，并没有过度消沉，而是在接受安宁疗护的同时签署了生前预嘱，表示在自己病情恶化时不进ICU，</p>
                    <p>不插管、不做过度抢救。马阿姨的家人都尊重她的意愿，一家人如平常那般说说家长里短，谈谈当下时局，平淡、温馨。</p>
                </div>
                <div class="content__word__leftAlign">
                    <p>马阿姨平日就是一个生活精致美丽的女人，住院期间病房总是布置得温馨美好，床头桌上摆放着她爱看的小说和杂志，病房里总是轻轻飘荡着</p>
                    <p>她最爱听的音乐，枕下放着那条她最喜欢的丝巾。在一个飘着雪花的冬日，马阿姨走了，没有经历太多痛苦，就在那种平静、安详中走向了另</p>
                    <p>一个世界，如她所愿，她把最美丽的样子留给了最爱的人。</p>
                </div>
                <div class="content__word__leftAlign">
                    <p>2022年4月16日，中国安宁疗护事业建设与发展研讨会在北京举行。16年前的这一天，中国生命关怀协会成立；经过16年的努力，中国的安宁</p>
                    <p>疗护事业虽然仍存在一些问题，但随着这些问题被越来越多的人关注和解决，如今中国安宁疗护也正在迎来发展的春天。</p>
                </div>
                <div class="content__word__leftAlign">
                    <p>《第二批全国安宁疗护试点工作基线调查报告》指出，我国87个试点地区中，30个试点地区出台安宁疗护政策文件；22个试点地区将安宁疗护</p>
                    <p>纳入区域卫生发展规划；13个试点地区将安宁疗护纳入社区卫生服务发展规划；10个试点地区制定安宁疗护发展规划；37个试点地区制定安宁</p>
                    <p>疗护试点实施方案；14个试点地区制定安宁疗护服务财政补助政策。</p>
                </div>
                <div class="content__word__leftAlign">
                    <p>期待在不久的将来，有更多的临终患者可以温和地走进那个良夜。</p>
                </div>
            </div>
        </div>
        <div class="content_bg" style="top: 0;">
            <ContentView />
        </div>
        <div class="content_bg" style="top: 2.2rem;">
            <ContentView />
        </div>
        <div class="mask">
                <div class="mask__word">
                    <p>数据收集及整理：崔雨琦 彭思语 刘婧</p>
                    <p>网页制作：徐聪</p>
                    <p>美工：谷婷薇</p>
                    <p>联系邮箱：488548816@qq.com</p>
                    <p>2022 © 四川大学</p>
                </div>
        </div>
    </div>
</template>

<script>
import ContentView from '../../components/ContentView.vue'
export default {
    name:'MainPage',
    components:{ ContentView},
}
</script>

<style lang="scss" scoped>
.part4_content{
    width:100%;
    height:15rem;
    text-align: center;
    position: relative;
}
.content{
    background-repeat: no-repeat !important;
	background-size: 100% 100% !important;
    height: 9.2rem;
    width:100%;
    position: relative;
    margin:0 auto;
    background-color: rgba(220, 220, 220,0.8);
    z-index: 1;
    &__word{
        position: absolute;
        width:10.2rem;
        height: 9.2rem;
        left:50%;
        margin-left: -5.1rem;
        &__special{
            width:100%;
            margin-bottom: .6rem;
            color:#333;
            margin-top:.4rem;
            span{
                display: inline-block;
                font-family: "STKaiti";
                height:.4rem;
                width: 100%;
                line-height: .4rem;
                text-align: center;
                font-size: .15rem;
                font-weight:bold;
            }
        }
        &__leftAlign{
            width: 100%;
            margin-bottom: .4rem;
            p{
                width: 10rem;
                height:.4rem;
                margin: 0 auto;
                text-align: left;
                font-size: .16rem;
                font-family: "STKaiti";
                line-height: .4rem;
            }
            .firstLine{
                height:.5rem;
                line-height: .5rem;
            }
            .firstLine::first-letter{
                font-size: .35rem;
                font-style: italic;
            }
        }
        &__centerAlign{
            p{
                height:.4rem;
                line-height: .4rem;
                text-align: center;
                font-size: .16rem;
            }
        }
    }
}
.content_bg{
    width:100%;
    height: 7rem;
    position: absolute;
    background-color: #fff;
}
.mask{
    width: 100%;
    height: 100vh;
    @media
    screen and (orientation:portrait) and (max-device-width:768px) and (max-device-height:1024px),
    screen and (orientation:landscape) and (max-device-width:1024px) and (max-device-height:768px) {
        height:7rem
    }
	background: rgba(0, 0, 0, .1);
    &__word{
            width: 5rem;
            height: 2rem;
            position: absolute;
            left:50%;
            margin-left:-2.5rem;
            margin-top: 1rem;
            p{
                width: 100%;
                height: .3rem;
                font-size: .15rem;
                line-height: .2rem;
                text-align: center;
                color:#fff
            }
            p:nth-child(4){
                margin-top: 0.8rem;
            }
    }
}
.chartBoxs{
    width: 100%;
    height: 4em;
    position: relative;
}
.chartBox{
    width: 100%;
    height: 4rem;
    position: absolute;
    // left:50%;
    // margin-left: -2.5rem !important;
    margin: 0 auto;
    &__chart{
        height: 9rem;
        position: absolute;
        left: 1.5rem;
    }
}
</style>