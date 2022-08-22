<template>
    <div id="container4"></div>
</template>

<script>

let echarts = require("echarts/lib/echarts");

export default {
  name: "ThirdChart",
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
        var data_pie = [
            {name:'心脏病',value:26.50,mortality:1062.00},
            {name:'脑血管疾病',value:24.41,mortality:977.99},
            {name:'恶性肿瘤',value:20.54,mortality:823.07},
            {name:'呼吸系统疾病',value:12.77,mortality:511.54},
            {name:'伤害',value:4.14,mortality:165.71},
            {name:'内分泌营养代谢疾病',value:2.95,mortality:118.26},
            {name:'消化系统疾病',value:1.93,mortality:77.37},
            {name:'其它疾病',value:1.51,mortality:60.64},
            {name:'神经系统疾病',value:1.36,mortality:54.64},
            {name:'死因不明',value:1.31,mortality:52.61},
            {name:'泌尿生殖系统疾病',value:0.93,mortality:37.34},
            {name:'精神障碍',value:0.46,mortality:18.40},
            {name:'肌肉骨骼和结缔组织疾病',value:0.31,mortality:12.55},
            {name:'血液造血免疫疾病',value:0.17,mortality:6.82},
            {name:'先天异常',value:0.01,mortality:0.46},
            {name:'寄生虫病',value:0.01,mortality:0.37},
        ]
        let myChart = echarts.init(document.getElementById("container4"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(){
            let option = {
                title : {
                    text: '各类疾病在死亡原因中的构成比',
                    x:'center',
                    textStyle:{
                        fontSize:12
                    },
                    subtext:"数据来源：中国缓和医疗发展蓝皮书（2019-2020）",
                    subtextStyle: {
                        fontSize: 7
                    },
                },
                tooltip : {
                    trigger: 'item',
                    formatter: function(params){
                        return params.name+"："+params.value+'%<br/>死亡率：'+params.data.mortality+'（单位：1/10万）'
                    }
                },
                calculable : true,
                series : [
                    {
                        type:'pie',
                        radius : [30, 110],
                        center : ['50%', '55%'],
                        roseType : 'area',
                        data:data_pie,
                        label:{
                            fontSize:10
                        }
                    }
                ]
            };
            myChart.setOption(option);
        }
        initEcharts()
    }
    }
};
</script>

<style lang="scss" scoped>
#container4 {
  width: 5rem;
  height: 3.2rem;
  margin: 0px auto 0;
}
</style>
