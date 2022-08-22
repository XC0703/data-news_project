<template>
    <!-- <div class="top flexa" v-scroll-to="'#container1'">
        <div class="title">container1</div>
    </div> -->
<section 
    id="menu" 
    :class="{close:close===true}">
    <nav role='navigation'
>
        <ul>
            <li id="btn-menu" @click="handleClick()"><a><i class="fa fa-bars fa-lg"></i></a></li>
            <li><a href="#">冰山下的人</a></li>
            <li><a href="#">患者</a></li>
            <li><a href="#">病友会</a></li>
            <li><a href="#">基因制药公司</a></li>
            <li><a href="#">医保政策</a></li>
            <li><a href="#">尾声</a></li>
        </ul>
    </nav>  
</section>
</template>

<script>
export default {
    name:'ScrollTo',
    data(){
        return{
            close:false
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
.fa-navicon:before, .fa-reorder:before, .fa-bars:before {
    content: "\f0c9";
}
#menu {
  height: 100vh;
  position: fixed;
  z-index: 2000;
  overflow: hidden;
}
#menu.close li {
  width: 60px;
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
#menu.close li:nth-of-type(7) {
  width: 0;
  transition: width 285ms ease-in-out;
}
#menu.close li a {
  margin-right: 10em;
}
#menu nav ul, #menu nav li {
  list-style: none;
  margin: 0;
  padding: 0;
}
#menu nav ul li, #menu nav li li {
  width: 150px;
  border-bottom: 1px solid #bdbdbd;
  text-align: right;
  height: 50px;
  background: #ffffff;
  transition: width 500ms ease-in-out;
}
#menu nav ul li#btn-menu a, #menu nav li li#btn-menu a {
  margin-right: 1em;
}
#menu nav ul li:nth-of-type(2), #menu nav li li:nth-of-type(2) {
  transition: width 420ms ease-in-out;
}
#menu nav ul li:nth-of-type(3), #menu nav li li:nth-of-type(3) {
  transition: width 360ms ease-in-out;
}
#menu nav ul li:nth-of-type(4), #menu nav li li:nth-of-type(4) {
  transition: width 320ms ease-in-out;
}
#menu nav ul li:nth-of-type(5), #menu nav li li:nth-of-type(5) {
  transition: width 300ms ease-in-out;
}
#menu nav ul li:nth-of-type(6), #menu nav li li:nth-of-type(6) {
  transition: width 290ms ease-in-out;
}
#menu nav ul li:nth-of-type(7), #menu nav li li:nth-of-type(7) {
  transition: width 285ms ease-in-out;
}
#menu nav ul li a, #menu nav li li a {
  position: absolute;
  right: 0;
  font-size: 2em;
  font-family: "Josefin Sans", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
  line-height: 2.4em;
  margin-right: 1em;
}
#menu nav ul li:hover li, #menu nav li li:hover li {
  border-bottom: 1px solid #dbdbdb;
}
#menu nav ul li:hover a, #menu nav li li:hover a {
  color: #cccccc;
}
</style>