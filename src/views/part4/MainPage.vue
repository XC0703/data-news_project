<template>
    <div class="content">
        <div class="content__word">
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
    height: 100vh;
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
        p:nth-child(3),p:nth-child(7),p:nth-child(11),p:nth-child(14),
        p:nth-child(16),p:nth-child(20),p:nth-child(23),p:nth-child(25),
        p:nth-child(27),p:nth-child(30),p:nth-child(34),p:nth-child(37),
        p:nth-child(40),p:nth-child(43),p:nth-child(46),p:nth-child(52){
            margin-bottom: .3rem;
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