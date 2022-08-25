<template>
    <div class="content">
        <div class="content__word">
            <p>马阿姨在接受安宁疗护的同时签署了生前预嘱，</p>
            <p>表示在自己病情恶化时不进ICU，不插管、不做过度抢救。</p>
            <p>马阿姨的家人都尊重她的意愿，一家人如平常那般说说家长里短，谈谈当下时局，平淡、温馨。</p>
            <p>她平日就是一个生活精致美丽的女人，</p>
            <p>住院期间病房总是布置得温馨美好，床头桌上摆放着她爱看的小说和杂志，病房里总是轻轻飘荡着她最爱听的音乐，枕下放着那条她最喜欢的丝巾。</p>
            <p>最后的日子里，无论是清醒还是昏迷，从没有听到过她诉苦、呻吟，</p>
            <p>她的脸上永远是平静的、安详的，正如她所愿，她把最美丽的样子留给了最爱的人。</p>
            <p>在那个飘着雪花的冬日，马阿姨走了，</p>
            <p>没有经历太多痛苦，就在那种平静、安详中走向了另一个世界，</p>
            <p>就像季夏日暮时分的玫瑰，恣意怒放过，然后坦然地与世界告别。</p>
            <p>目前，我国安宁疗护发展成果显著，在政策扶持下不断推进完善，</p>
            <p>但也还存在诸如供需矛盾、医护人员数量不足、价格标准不统一、法律法规有待完善等问题。</p>
            <p>期待在不久的将来，有更多的临终患者可以温和地走进良夜。</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'MainPage',
}
</script>

<style lang="scss" scoped>
.content{
    background-repeat: no-repeat !important;
	background-size: cover !important;
    height: 200vh;
    background-color: rgb(220, 220, 220);
    position: relative;
    &__word{
        position: absolute;
        width:100%;
        height: 100%;
        left:50%;
        margin-left: -50%;
        p{
            height:.4rem;
            line-height: .4rem;
            text-align: center;
            font-size: .15rem;
        }
        p:nth-child(1)::first-letter{
            font-size: .5rem;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-style: italic;
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