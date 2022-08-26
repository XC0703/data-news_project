<template>
    <div id="container11"></div>
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
        let myChart = echarts.init(document.getElementById("container11"));
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
                        fontSize:12
                    },
                    subtext:"数据来源：上海市卫健委官网",
                    subtextStyle: {
                        fontSize: 7
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
                    }, {
                        name: '居家上门',
                        value: [40,251],
                    }, {
                        name: '提供病房',
                        value: [15,108],
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
#container11 {
  width: 4rem;
  height: 2.2rem;
  margin: 0rem auto 0;
}
</style>


