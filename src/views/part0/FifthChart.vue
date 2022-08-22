<template>
    <div id="container5"></div>
</template>

<script>

let echarts = require("echarts/lib/echarts");

export default {
  name: "FourthChart",
  data() {
    return {};
  },

  mounted() {
    // 初始化加载
    this.mapChart();
  },

   methods: {
    // 配置渲染map
    mapChart() {
        let myChart = echarts.init(document.getElementById("container5"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(){
            let option = {
                backgroundColor: 'transparent',
                title : {
                    text: '最后疾病期间症状和疼痛比例',
                    x:'center',
                    top:-3,
                    textStyle:{
                        fontSize:12
                    },
                    subtext:"数据来源：中国缓和医疗发展蓝皮书（2019-2020）",
                    subtextStyle: {
                        fontSize: 7
                    },
                },
                tooltip:{
                        trigger: 'item',
                        formatter: function(params){
                            if(params.dataType==="edge"){
                                return params.data.source+'中'+params.data.target+'的比例为'+params.data.value+'%'
                            }
                        }
                },
                series: {
                    type: 'sankey',
                    layout: 'none',
                    layoutIterations: 0,
                    top:40,
                    emphasis: {
                        focus: 'adjacency',
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.45,
                        curveness: 0.5,
                        nodeGap:20
                    },
                    itemStyle: {
                        color: '#1f77b4',
                        borderColor: '#1f77b4',
                    },
                    label: {
                        color: 'rgba(0,0,0,1)',
                        fontFamily: 'Arial',
                        fontSize: 10,
                    },
                    data: [
                        {
                            name: '所有离世者',
                            itemStyle: {
                                color: 'rgba(112,48,160)',
                                borderColor: 'rgba(112,48,160)',                     
                            },
                        },
                        {
                            name: '排除意外和事故的离世者',
                            itemStyle: {
                                color: 'rgba(48,84,150)',
                                borderColor: 'rgba(48,84,150)',
                            },
                        },
                        {
                            name: '发热',
                        },
                        {
                            name: '咳嗽',
                        },
                        {
                            name: '呼吸问题',
                        },
                        {
                            name: '腹泻',
                        },
                        {
                            name: '呕吐',
                        },
                        {
                            name: '腹部问题',
                        },
                        {
                            name: '意识错乱',
                        },
                        {
                            name: '昏迷＞24h',
                        },
                        {
                            name: '突然昏迷',
                        },
                        {
                            name: '抽搐',
                        },
                        {
                            name: '小便问题',
                        },
                        {
                            name: '皮肤病',
                        },
                        {
                            name: '口/鼻/肛门流血',
                        },
                        {
                            name: '体重减轻',
                        },
                        {
                            name: '口/舌/溃疡白斑',
                        },
                        {
                            name: '僵硬/不能张嘴',
                        },
                        {
                            name: '面部肿胀',
                        },
                        {
                            name: '双脚浮肿',
                        },
                        {
                            name: '肿块',
                        },
                        {
                            name: '偏瘫',
                        },
                        {
                            name: '头发微红/微黄',
                        },
                        {
                            name: '脸色苍白',
                        },
                        {
                            name: '眼睛凹陷',
                        },
                        {
                            name: '喝水增多',
                        },
                        {
                            name: '有疼痛',
                        },
                        {
                            name: '严重胸部疼痛',
                        },
                        {
                            name: '严重腹痛',
                        },
                        {
                            name: '严重头痛',
                        },
                        {
                            name: '颈部疼痛',
                        },
                        {
                            name: '吞咽液体疼痛',
                        },
                        {
                            name: '日常生活得到帮助',
                        },
                    ],
                    links: [
                        { source: '所有离世者', target: '发热', value: 23.3 },
                        { source: '所有离世者', target: '咳嗽', value: 31.1 },
                        { source: '所有离世者', target: '呼吸问题', value: 38.8 },
                        { source: '所有离世者', target: '腹泻', value: 15.7 },
                        { source: '所有离世者', target: '呕吐', value: 18.8 },
                        { source: '所有离世者', target: '腹部问题', value: 19.9 },
                        { source: '所有离世者', target: '意识错乱', value: 21.8 },
                        { source: '所有离世者', target: '昏迷＞24h', value: 14.7 },
                        { source: '所有离世者', target: '突然昏迷', value: 34.6 },
                        { source: '所有离世者', target: '抽搐', value: 11.6 },
                        { source: '所有离世者', target: '小便问题', value: 27.6 },
                        { source: '所有离世者', target: '皮肤病', value: 6.9 },
                        { source: '所有离世者', target: '口/鼻/肛门流血', value: 7.0 },
                        { source: '所有离世者', target: '体重减轻', value: 57.5 },
                        { source: '所有离世者', target: '口/舌/溃疡白斑', value: 7.1 },
                        { source: '所有离世者', target: '僵硬/不能张嘴', value: 24.3 },
                        { source: '所有离世者', target: '面部肿胀', value: 14.7 },
                        { source: '所有离世者', target: '双脚浮肿', value: 39.1 },
                        { source: '所有离世者', target: '肿块', value: 13.6 },
                        { source: '所有离世者', target: '偏瘫', value: 23.7 },
                        { source: '所有离世者', target: '黄疸', value: 20.7 },
                        { source: '所有离世者', target: '头发微红/微黄', value: 3.0 },
                        { source: '所有离世者', target: '脸色苍白', value: 38.2 },
                        { source: '所有离世者', target: '眼睛凹陷', value: 31.1 },
                        { source: '所有离世者', target: '喝水增多', value: 16.2 },
                        { source: '所有离世者', target: '有疼痛', value: 59.3 },
                        { source: '所有离世者', target: '严重胸部疼痛', value: 26.7 },
                        { source: '所有离世者', target: '严重腹痛', value: 11.3 },
                        { source: '所有离世者', target: '严重头痛', value: 20.3 },
                        { source: '所有离世者', target: '颈部疼痛', value: 14.6 },
                        { source: '所有离世者', target: '吞咽液体疼痛', value: 25.3 },
                        { source: '所有离世者', target: '日常生活得到帮助', value: 59.7 },

                        { source: '排除意外和事故的离世者', target: '发热', value: 24.3 },
                        { source: '排除意外和事故的离世者', target: '咳嗽', value: 32.1 },
                        { source: '排除意外和事故的离世者', target: '呼吸问题', value: 40.3 },
                        { source: '排除意外和事故的离世者', target: '腹泻', value: 16.3 },
                        { source: '排除意外和事故的离世者', target: '呕吐', value: 19.6 },
                        { source: '排除意外和事故的离世者', target: '腹部问题', value: 21.3 },
                        { source: '排除意外和事故的离世者', target: '意识错乱', value: 22.4 },
                        { source: '排除意外和事故的离世者', target: '昏迷＞24h', value: 15.1 },
                        { source: '排除意外和事故的离世者', target: '突然昏迷', value: 34.6 },
                        { source: '排除意外和事故的离世者', target: '抽搐', value: 12.0 },
                        { source: '排除意外和事故的离世者', target: '小便问题', value: 28.5 },
                        { source: '排除意外和事故的离世者', target: '皮肤病', value: 7.2 },
                        { source: '排除意外和事故的离世者', target: '口/鼻/肛门流血', value: 7.1 },
                        { source: '排除意外和事故的离世者', target: '体重减轻', value: 60.1 },
                        { source: '排除意外和事故的离世者', target: '口/舌/溃疡白斑', value: 7.4 },
                        { source: '排除意外和事故的离世者', target: '僵硬/不能张嘴', value: 24.7 },
                        { source: '排除意外和事故的离世者', target: '面部肿胀', value: 15.3 },
                        { source: '排除意外和事故的离世者', target: '双脚浮肿', value: 41.0 },
                        { source: '排除意外和事故的离世者', target: '肿块', value: 14.5 },
                        { source: '排除意外和事故的离世者', target: '偏瘫', value: 23.7 },
                        { source: '排除意外和事故的离世者', target: '黄疸', value: 21.9 },
                        { source: '排除意外和事故的离世者', target: '头发微红/微黄', value: 3.2 },
                        { source: '排除意外和事故的离世者', target: '脸色苍白', value: 39.6 },
                        { source: '排除意外和事故的离世者', target: '眼睛凹陷', value: 32.2 },
                        { source: '排除意外和事故的离世者', target: '喝水增多', value: 17 },
                        { source: '排除意外和事故的离世者', target: '有疼痛', value: 61 },
                        { source: '排除意外和事故的离世者', target: '严重胸部疼痛', value: 27.9 },
                        { source: '排除意外和事故的离世者', target: '严重腹痛', value: 12.2 },
                        { source: '排除意外和事故的离世者', target: '严重头痛', value: 20.8 },
                        { source: '排除意外和事故的离世者', target: '颈部疼痛', value: 15.1 },
                        { source: '排除意外和事故的离世者', target: '吞咽液体疼痛', value: 26.2 },
                        { source: '排除意外和事故的离世者', target: '日常生活得到帮助', value: 62.1 },
                    ],
                },
            };
            myChart.setOption(option);
        }
        initEcharts()
    }
    }
};
</script>

<style lang="scss" scoped>
#container5 {
  width: 5rem;
  height: 4rem;
  margin: 0px auto 0;
}
</style>


