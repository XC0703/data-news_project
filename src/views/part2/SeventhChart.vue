<template>
    <div id="container14"></div>
</template>

<script>

let echarts = require("echarts/lib/echarts");

export default {
  name: "SeventhChart",
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
        let myChart = echarts.init(document.getElementById("container14"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(){
            let option = {
                title : {
                    text: '上海社区卫生服务中心提供的安宁疗护服务种类',
                    x:'center',
                    top:-3,
                    textStyle:{
                        fontSize:15
                    },
                    subtext:"数据来源：上海市卫健委官网",
                    subtextStyle: {
                        fontSize: 10
                    },
                },
                tooltip:{
                    trigger: 'item',
                    formatter:function(params){
                        return params.data.name+'：'+params.data.value[1]+ '个'
                    }
                },
                series: [{
                    type: 'treemap',
                    roam:false,
                    nodeClick:false,
                    bottom:0,
                    breadcrumb:{
                        show:false
                    },
                    label: {
                        fontSize: 16,
                        color: '#fff',
                        show: true,
                        position: [5, 5],
                        formatter: function(params) {
                            var arr = [
                                '{association|' + params.data.name + '}',
                                '{peoNum|' + params.data.value[1] + '}'
                            ];
                            return arr.join('\n\n');
                        },
                        rich: {
                            association: {
                                fontSize: 16,
                                color: '#fff',
                            },
                            peoNum: {
                                fontSize: 25,
                                color: '#fff',
                                fontFamily: 'liquidCrystal',
                            },
                        }
                    },
                    // leafDepth: 1,
                    data: [{
                        name: '门诊服务',
                        value: [10,79],
                        itemStyle:{
                            color:'rgb(65,85,199)'
                        }
                    }, {
                        name: '居家上门',
                        value: [40,251],
                        itemStyle:{
                            color:'rgb(15,38,80)'
                        }
                    }, {
                        name: '提供病房',
                        value: [15,108],
                        itemStyle:{
                            color:'rgb(113,161,219)'
                        }
                    }]
                }]
            };
            myChart.setOption(option);
        }
        initEcharts()
    }
    }
};
</script>

<style lang="scss" scoped>
#container14 {
  width: 6rem;
  height: 3.5rem;
  margin: 0rem auto 0;
}
</style>


