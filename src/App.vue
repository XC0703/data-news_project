<template>
    <div>
        <full-page :options="options">
          <!-- 每个需要全屏滚动的页面都需要包在<div class="section"></div>中 -->
          <div 
            class="section" 
            v-for="index in 10" 
            :class="[
                {'section1':index % 10===1},
                {'section2':index % 10===2},
                {'section3':index % 10===3},
                {'section4':index % 10===4},
                {'section5':index % 10===5},
                {'section6':index % 10===6},
                {'section7':index % 10===7},
                {'section8':index % 10===8},
                {'section9':index % 10===9},
                {'section10':index % 10===10},
            ]"
            :key="index"
            :style="'background-image'+':'+'url(/static/images/bg' + index + '.jpg)'"
          >
              section{{index}}
              <div 
                v-if="index === 2"
              >	
                <mapChart />
              </div>
              <div 
                v-if="index === 3"
              >	
                <timeLine />
              </div>
          </div>
        </full-page>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  components: {
    timeLine: defineAsyncComponent(() => import('./components/timeLine')),
    mapChart: defineAsyncComponent(() => import('./components/mapChart')),
  },
  data () {
    return {
        options:{
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            afterLoad: this.afterLoad,
            autoScrolling: false,
            scrollOverflow: true,
            touchSensitivity: 1,
            scrollBar: false,
            scrollingSpeed: 10,
            menu: '#menu',
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.section{
	background-repeat: no-repeat !important;
	background-size: cover !important;
}
.section1{
  -webkit-animation: fadeinout 5s linear forwards;
  animation: fadeinout 5s linear forwards;
}
.section3{
  background-image: none !important
}
@-webkit-keyframes fadeinout {
0%{ opacity: 0; }
50% { opacity: 0.5; }
100% { opacity: 1; }
}

@keyframes fadeinout {
0%{ opacity:0; }
50% { opacity: 0.5; }
100% { opacity: 1; }
}
</style>
