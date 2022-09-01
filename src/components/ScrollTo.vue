<template>
    <!-- <div class="top flexa" v-scroll-to="'#container1'">
        <div class="title">container1</div>
    </div> -->
<section 
    id="menu" 
    :class="{close:close===true}"
>
    <nav role='navigation'>
        <ul>
            <li id="btn-menu" @click="handleClick()"><a class="iconfont">&#xe600;</a></li>
            <li><a href="#" v-scroll-to="'#part0'">首页</a></li>
            <li><a href="#" v-scroll-to="'#part1'">起源</a></li>
            <li><a href="#" v-scroll-to="'#part2'">现状</a></li>
            <li><a href="#" v-scroll-to="'#part3'">困境</a></li>
            <li><a href="#" v-scroll-to="'#part4'">尾声</a></li>
        </ul>
    </nav>  
</section>
</template>

<script>
export default {
    name:'ScrollTo',
    data(){
        return{
            close:true
        }
    },
    methods:{
    handleClick(){
        this.close=!this.close
        }
    }
}
</script>


<style lang="scss" scoped>
#menu {
  position: absolute;
  overflow: hidden;
}
#menu.close li {
  width: .5rem;
  transition: width 500ms ease-in-out;
}
#menu.close li:nth-of-type(2) {
  width: 0;
  transition: width 420ms ease-in-out;
}
#menu.close li:nth-of-type(3) {
  width: 0;
  transition: width 360ms ease-in-out;
}
#menu.close li:nth-of-type(4) {
  width: 0;
  transition: width 320ms ease-in-out;
}
#menu.close li:nth-of-type(5) {
  width: 0;
  transition: width 300ms ease-in-out;
}
#menu.close li:nth-of-type(6) {
  width: 0;
  transition: width 290ms ease-in-out;
}
#menu.close li:nth-of-type(2) a,#menu.close li:nth-of-type(3) a,
#menu.close li:nth-of-type(4) a,#menu.close li:nth-of-type(5) a,
#menu.close li:nth-of-type(6) a {
  right:10rem
}
#menu nav ul li:nth-of-type(2){
  transition: width 420ms ease-in-out;
}
#menu nav ul li:nth-of-type(3){
  transition: width 360ms ease-in-out;
}
#menu nav ul li:nth-of-type(4){
  transition: width 320ms ease-in-out;
}
#menu nav ul li:nth-of-type(5){
  transition: width 300ms ease-in-out;
}
#menu nav ul li:nth-of-type(6){
  transition: width 290ms ease-in-out;
}
#menu nav ul li{
  position: relative;
  width: .5rem;
  height: .35rem;
  border-bottom: .01rem solid #bdbdbd;
  // text-align: right;
  background: #ffffff;
  transition: width 500ms ease-in-out;
  cursor: pointer;
  a{
    width:.5rem;
    height: 100%;
    position: absolute;
    right: 0;
    font-size: .2rem;
    font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
    color: #000000;
    line-height: .35rem;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
  }
}
#menu nav ul li:hover li{
  border-bottom: .01rem solid #dbdbdb;
}
#menu nav ul li:hover a{
  color: #cccccc;
}
</style>