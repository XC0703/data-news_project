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
            <li :class="{activePart:partIndex===0}"><a href="#" v-scroll-to="'#part0'">引入</a></li>
            <li :class="{activePart:partIndex===1}"><a href="#" v-scroll-to="'#part1'">起源</a></li>
            <li :class="{activePart:partIndex===2}"><a href="#" v-scroll-to="'#part2'">现状</a></li>
            <li :class="{activePart:partIndex===3}"><a href="#" v-scroll-to="'#part3'">困境</a></li>
            <li :class="{activePart:partIndex===4}"><a href="#" v-scroll-to="'#part4'">尾声</a></li>
        </ul>
    </nav>  
</section>
</template>

<script>
export default {
    name:'ScrollTo',
    data(){
        return{
            close:false,
            partIndex:0,
        }
    },
    mounted(){
      // 初始化加载
      this.createListener();
    },
    methods:{
      handleClick(){
          this.close=!this.close
      },
      //监听窗口滚动
      windowScrollListener() {
          //获取操作元素最顶端到页面顶端的垂直距离
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          // console.log(scrollTop)
          if(scrollTop<3630){
            this.partIndex = 0;
          }else if(scrollTop<8320){
            this.partIndex = 1;
          }else if(scrollTop<16210){
            this.partIndex = 2;
          }else if(scrollTop<20800){
            this.partIndex = 3;
          }else{
            this.partIndex = 4;
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
#menu {
  overflow: hidden;
  position: fixed;
  left:0;
  top:0;
  z-index:100;
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
.activePart a{
  color:  rgb(33,105,179) !important;
}
</style>