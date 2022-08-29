<template>
    <div id="container18"></div>
</template>

<script>

let echarts = require("echarts/lib/echarts");

export default {
  name: "FirstChart",
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
        var getxb1 = 2000; //市场上泰康的安宁疗护病房收费标准为：2000元/天/间。
        var getxb2 = 156.06; //安宁患者人均住院费用仅156.06元.
        let myChart = echarts.init(document.getElementById("container18"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(){
            let option = {
                title:{
                    text:'医院安宁疗护病房平均价格及代表企业病房价格一览',
                    left:"center",
                    subtext:"数据来源：上海市安宁疗护发展研究联盟",
                    subtextStyle: {
                        fontSize: 7
                    },
                    textStyle:{
                        fontSize:11
                    }
                },
                tooltip: {
                    show: true,
                    formatter:function(params){
                        if(params.dataIndex==0){
                            return '在市场上，泰康的安宁疗护病房收费标准为：2000元/天/间'
                        }else {
                            return "安宁患者人均住院费用仅156.06元"
                        }
                    }
                },
                series: [
                    {
                        name: '医院安宁疗护病房平均价格及代表企业病房价格一览',
                        type: 'pie',
                        radius: ['45%', '95%'],
                        startAngle: 180,
                        center: ['50%', '80%'],
                        roseType: 'radius',
                        label: {
                            show: true,
                            position: 'outer',
                            alignTo:'none',
                            bleedMargin:0,
                            overflow:'break',
                            fontSize: '8',
                            color:'#333',
                            distanceToLabelLine:4,
                        },
                        labelLine:{
                            show:true,
                            length:25,
                            length2:10,
                        },
                        data: [
                            {
                                value: getxb1,
                                name: "市场上泰康的安宁疗护病房收费标准",
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            {
                                                offset: 0,
                                                color: '#4C8DFA',
                                            },
                                            {
                                                offset: 1,
                                                color: '#5CCFFF',
                                            },
                                        ],
                                        false
                                    ),
                                },
                            },
                            {
                                value: getxb2,
                                name: "安宁患者人均住院费用",
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            {
                                                offset: 0,
                                                color: '#FFD18B',
                                            },
                                            {
                                                offset: 1,
                                                color: '#FDAD59',
                                            },
                                        ],
                                        false
                                    ),
                                },
                            },
                            {
                                value: getxb1 + getxb2,
                                name: '',
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                                itemStyle: {
                                    color: 'transparent',
                                    borderWidth: 0,
                                    shadowBlur: 0,
                                },
                            },
                        ],
                    },
                    {
                        type: 'pie',
                        radius: ['45%', '110%'],
                        startAngle: 180,
                        emphasis:{
                            scale:false
                        },
                        center: ['50%', '80%'],
                        roseType: 'radius',
                        data: [
                            {
                                value: getxb1,
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            {
                                                offset: 0,
                                                color: 'rgba(76,141,250,.3)',
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(92,207,255,.3)',
                                            },
                                        ],
                                        false
                                    ),
                                },
                            },
                            {
                                value: getxb2,
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            {
                                                offset: 0,
                                                color: 'rgba(255,209,139,.3)',
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(253,173,89,.3)',
                                            },
                                        ],
                                        false
                                    ),
                                },
                            },
                            {
                                value: getxb1 + getxb2,
                                name: '',
                                label: {
                                    show: false,
                                },
                                labelLine: {
                                    show: false,
                                },
                                itemStyle: {
                                    color: 'transparent',
                                    borderWidth: 0,
                                    shadowBlur: 0,
                                    borderColor: 'transparent',
                                    shadowColor: 'transparent',
                                },
                            },
                        ],
                        z: -1,
                    },
                ],
            };
            myChart.setOption(option);
        }
        initEcharts()
    }
    }
};
</script>

<style lang="scss" scoped>
#container18 {
  width: 5rem;
  height: 3rem;
  margin: 0rem auto 0;
}
</style>


