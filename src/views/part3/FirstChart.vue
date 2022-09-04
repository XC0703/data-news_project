<template>
    <div id="container18"></div>
</template>

<script>

let echarts = require("echarts/lib/echarts");

export default {
  name: "FirstChart",
  data() {
    return {
        isPC:true,
        isRender:false,
    };
  },

  mounted() {
    // 初始化加载
    this.createListener();
  },

   methods: {
    //监听窗口滚动
    windowScrollListener() {
        // 判断屏幕类型
        if(window.screen.width>window.screen.height){
            this.isPC = true;
        }else{
            this.isPC = false;
        }
        //获取操作元素最顶端到页面顶端的垂直距离
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(scrollTop)
        if(scrollTop<18180){
            this.isRender=false;
        }else if(this.isPC==true&&scrollTop>18180&&scrollTop<=19220&&this.isRender==false){
            this.$nextTick(()=>{
                this.mapChart();
            })
            this.isRender=true;
        }else if(scrollTop>19220){
            this.isRender=false;
        }
    },
    createListener() {
        this.mapChart();
        //添加滚动监听事件
        //在窗口滚动时调用监听窗口滚动方法
        window.addEventListener('scroll', this.windowScrollListener);
    },
    // 配置渲染map
    mapChart() {
        var getxb1 = 2000; //市场上泰康的安宁疗护病房收费标准为：2000元/天/间。
        var getxb2 = 156.06; //安宁患者人均住院费用仅156.06元.
        var chartDom = document.getElementById("container18");
        let myChart = echarts.getInstanceByDom(chartDom)
        if(myChart!=null){
            myChart.dispose();
            myChart = echarts.init(chartDom);
            window.addEventListener("resize", ()=>{
                myChart.resize();
            });
        }else{
            myChart = echarts.init(chartDom);
        }
        function initEcharts(){
            let option = {
                title:{
                    text:'医院安宁疗护病房平均价格及部分企业病房价格一览',
                    left:"center",
                    subtext:"数据来源：上海市安宁疗护发展研究联盟",
                    subtextStyle: {
                        fontSize: 10
                    },
                    textStyle:{
                        fontSize:15
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
                        name: '医院安宁疗护病房平均价格及部分企业病房价格一览',
                        type: 'pie',
                        radius: ['45%', '95%'],
                        startAngle: 180,
                        center: ['50%', '75%'],
                        roseType: 'radius',
                        label: {
                            show: true,
                            position: 'outer',
                            alignTo:'none',
                            bleedMargin:0,
                            overflow:'break',
                            fontSize: '10',
                            color:'#333',
                            distanceToLabelLine:4,
                        },
                        labelLine:{
                            show:true,
                            length:40,
                            length2:20,
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
                        center: ['50%', '75%'],
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
  width: 7rem;
  height: 5rem;
  margin: 0rem auto 0;
}
</style>


