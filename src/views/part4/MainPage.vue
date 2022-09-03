<template>
    <div class="content">
        <div class="content__word">
            <div class="content__word__leftAlign" style="margin-top:1rem">
                <p>马阿姨在接受安宁疗护的同时签署了生前预嘱，表示在自己病情恶化时不进ICU，不插管、不做过度抢救。马阿姨的家人都尊重她的意愿，</p>
                <p>一家人如平常那般说说家长里短，谈谈当下时局，平淡、温馨。</p>
            </div>
            <div class="content__word__leftAlign">
                <p>马阿姨平日就是一个生活精致美丽的女人，住院期间病房总是布置得温馨美好，床头桌上摆放着她爱看的小说和杂志，病房里总是轻轻飘荡</p>
                <p>着她最爱听的音乐，枕下放着那条她最喜欢的丝巾。最后的日子里，无论是清醒还是昏迷，从没有听到过她诉苦、呻吟，她的脸上永远是</p>
                <p>平静的、安详的，正如她所愿，她把最美丽的样子留给了最爱的人。</p>
            </div>
            <div class="content__word__leftAlign">
                <p>在那个飘着雪花的冬日，马阿姨走了，没有经历太多痛苦，就在那种平静、安详中走向了另一个世界，就像季夏日暮时分的玫瑰，恣意怒放过</p>
                <p>，然后坦然地与世界告别。</p>
            </div>
            <div class="content__word__leftAlign">
                <p>期待在不久的将来，有更多的临终患者可以温和地走进良夜。</p>
            </div>
        </div>
        <div class="content__mask">
        </div>
        <div class="content__footer">
            <FooterView />
        </div>
    </div>
</template>

<script>
import FooterView from './FooterView.vue'
export default {
    name:'MainPage',
    components:{FooterView}
}
</script>

<style lang="scss" scoped>
.content{
    background-repeat: no-repeat !important;
	background-size: 100% 100% !important;
    height: 15rem;
    position: relative;
    &__word{
        position: absolute;
        width:100%;
        height: 8rem;
        left:50%;
        margin-left: -50%;
        background-color: rgb(220, 220, 220);
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
                height:.8rem;
                line-height: .8rem;
            }
            .firstLine::first-letter{
                font-size: .5rem;
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
    &__mask{
        width: 100%;
        height: 100vh;
        @media
        screen and (orientation:portrait) and (max-device-width:768px) and (max-device-height:1024px),
        screen and (orientation:landscape) and (max-device-width:1024px) and (max-device-height:768px) {
            height:7rem
        }
        position: absolute;
        bottom: 0;
		background: rgba(0, 0, 0, .1);
    }
    &__footer{
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