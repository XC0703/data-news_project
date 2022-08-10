<template>
    <div>
        <full-page :options="options">
          <!-- 每个需要全屏滚动的页面都需要包在<div class="section"></div>中 -->
          <div 
            class="section" 
            v-for="index in 10" 
            :style="{background: 'url(/static/images/bg' + index + '.jpg)'}"
            :key="index"
          >
              section{{index}}
              <div 
                class="section1"
                v-if="index === 1"
              >		
              </div>
          </div>
        </full-page>
    </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
        options:{
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            afterLoad: this.afterLoad,
            autoScrolling: false,
            scrollOverflow: true,
            scrollBar: false,
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
</style>
