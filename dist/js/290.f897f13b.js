"use strict";(self["webpackChunkdata_news_project"]=self["webpackChunkdata_news_project"]||[]).push([[290],{9375:function(t,i,s){s.d(i,{H:function(){return e}});const e=function(){this.x,this.y,this.radiu,this.alpha,this.period,this.timer}},4290:function(t,i,s){s.r(i),s.d(i,{default:function(){return D}});var e=s(3396),a=s(9242);const n=t=>((0,e.dD)("data-v-75d67d4a"),t=t(),(0,e.Cn)(),t),r={class:"innerLayer"},h={class:"innerLayer__content bg1"},o=n((()=>(0,e._)("div",{class:"bg11"},null,-1))),d=[o],l={class:"innerLayer__content bg2"},c=n((()=>(0,e._)("div",{class:"bg22"},null,-1))),g=[c],m={class:"innerLayer__content bg3"},u=n((()=>(0,e._)("div",{class:"bg33"},null,-1))),w=[u],b={class:"innerLayer__content bg4"},p=n((()=>(0,e._)("div",{class:"bg44"},null,-1))),f=[p],v={class:"innerLayer__content"};function y(t,i,s,n,o,c){const u=(0,e.up)("FooterView");return(0,e.wg)(),(0,e.iD)("div",r,[(0,e.wy)((0,e._)("div",h,d,512),[[a.F8,!0===o.bg1]]),(0,e.wy)((0,e._)("div",l,g,512),[[a.F8,!0===o.bg2]]),(0,e.wy)((0,e._)("div",m,w,512),[[a.F8,!0===o.bg3]]),(0,e.wy)((0,e._)("div",b,f,512),[[a.F8,!0===o.bg4]]),(0,e.wy)((0,e._)("div",v,[(0,e.Wm)(u)],512),[[a.F8,!0===o.footer]])])}const _={id:"page",style:{width:"100%",height:"100%"}},C={ref:"myCanvas",style:{width:"100%",height:"100%"}};function S(t,i,s,a,n,r){return(0,e.wg)(),(0,e.iD)("div",_,[(0,e._)("canvas",C,null,512)])}var L=s(9375);const F=L.H;var I={data(){return{myCanvas:{},bgImg:{},starNum:100,stars:[],lastTime:0,deltaTime:0,cvh:window.innerHeight,cvw:window.innerWidth}},created(){this.initStar(),this.initParams()},mounted(){this.myCanvas=this.$refs.myCanvas,this.myCanvas.width=window.innerWidth,this.myCanvas.height=window.innerHeight,this.loop()},methods:{initStar(){const t=this;F.prototype.init=function(t){this.x=Math.random()*window.innerWidth,this.y=Math.random()*window.innerHeight*.6,this.radiu=.001*t+.001*Math.random(),this.alpha=2*Math.floor(5*Math.random()),this.timer=0,this.period=1},F.prototype.draw=function(t){const i=t.createRadialGradient(this.x,this.y,this.radiu/8,this.x,this.y,2*(this.radiu+this.alpha));i.addColorStop(.025,"#fff"),i.addColorStop(.5,"hsl(217, 61%, 33%)"),i.addColorStop(1,"hsl(217, 64%, 6%)"),t.fillStyle=i,t.beginPath(),t.arc(this.x,this.y,this.radiu+.2*this.alpha,0,2*Math.PI),t.fill()},F.prototype.update=function(){this.timer+=t.deltaTime,this.timer>100&&(10==this.alpha?this.period=0:0==this.alpha&&(this.period=1),0==this.period?this.alpha-=2:1==this.period&&(this.alpha+=2),this.timer=0)}},initParams(){this.bgImg=new Image,this.bgImg.src=s(979);for(let t=0;t<this.starNum;t++)this.stars[t]=new F,t<this.starNum/3?this.stars[t].init(2):t>=this.starNum/3&&t<2*this.starNum/3?this.stars[t].init(4):this.stars[t].init(6);this.lastTime=Date.now()},loop(){const t=this.myCanvas.getContext("2d"),i=this;let s=window.webkitRequestAnimationFrame((function e(){s=requestAnimationFrame(e);const a=Date.now();i.deltaTime=a-i.lastTime,i.lastTime=a,i.drawSky(t),i.drawStars(t)}));return s},drawSky(t){t.drawImage(this.bgImg,0,0,this.cvw,this.cvh)},drawStars(t){for(let i=0;i<this.starNum;i++)i<this.starNum/2||this.stars[i].update(),this.stars[i].draw(t)}}},T=s(89);const k=(0,T.Z)(I,[["render",S]]);var x=k,N={name:"PartInner",components:{FooterView:x},data(){return{bg1:!0,bg2:!1,bg3:!1,bg4:!1,footer:!1}},mounted(){this.createListener()},methods:{windowScrollListener(){var t=document.body.scrollTop||document.documentElement.scrollTop;t<=5100?(this.bg1=!0,this.bg2=!1,this.bg3=!1,this.bg4=!1,this.footer=!1):t<=9800?(this.bg1=!1,this.bg2=!0,this.bg3=!1,this.bg4=!1,this.footer=!1):t<=18e3?(this.bg1=!1,this.bg2=!1,this.bg3=!0,this.bg4=!1,this.footer=!1):t<=22e3?(this.bg1=!1,this.bg2=!1,this.bg3=!1,this.bg4=!0,this.footer=!1):(this.bg1=!1,this.bg2=!1,this.bg3=!1,this.bg4=!1,this.footer=!0)},createListener(){window.addEventListener("scroll",this.windowScrollListener)}}};const M=(0,T.Z)(N,[["render",y],["__scopeId","data-v-75d67d4a"]]);var D=M},979:function(t,i,s){t.exports=s.p+"img/part4_element0.6f9120cb.png"}}]);