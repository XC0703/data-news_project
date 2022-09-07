<template>
    <div id="part2_container6"></div>
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
        let myChart = echarts.init(document.getElementById("part2_container6"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(){
            let option = {
                title : {
                    text: '上海市提供不同安宁疗护服务的社区卫生服务中心',
                    x:'center',
                    top:-3,
                    textStyle:{
                        fontSize:15
                    },
                    subtext:"数据来源：上海市卫生健康委员会《上海市安宁疗护服务机构名单》",
                    subtextStyle: {
                        fontSize: 10
                    },
                },
                tooltip:{
                    trigger: 'item',
                    formatter:function(params){
                        if(params.dataIndex==1){
                            return '79家社区卫生服务中心提供安宁疗护门诊服务'
                        }else if(params.dataIndex==2){
                            return '251家社区卫生服务中心为居家的患者提供安宁疗护上门服务'
                        }else{
                            return '108家社区卫生服务中心提供安宁疗护病房'
                        }
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
#part2_container6 {
  width: 6rem;
  height: 3.5rem;
  margin: 0rem auto 0;
}
</style>


