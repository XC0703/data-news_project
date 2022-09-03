<template>
    <div id="container19"></div>
</template>

<script>

let echarts = require("echarts/lib/echarts");

export default {
  name: "SecondChart",
  data() {
    return {};
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
        if(scrollTop<18340){
            this.isRender=false;
        }else if(this.isPC==true&&scrollTop>18340&&scrollTop<=19380&&this.isRender==false){
            this.$nextTick(()=>{
                this.mapChart();
            })
            this.isRender=true;
        }else if(scrollTop>19380){
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
        var uploadedDataURL1 = "/static/images/contents/part3_element2.png";
        var uploadedDataURL2 = "/static/images/contents/part3_element3.png";
        var uploadedDataURL3 = "/static/images/contents/part3_element4.png";
        var uploadedDataURL4 = "/static/images/contents/part3_element5.png";
        var sportsIcon = {
            a: uploadedDataURL1,
            b: uploadedDataURL2,
            c: uploadedDataURL3,
            d: uploadedDataURL4,
        }
        var chartDom = document.getElementById("container19");
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
                    text:'我国安宁疗护基本医疗机械数',
                    left:"center",
                    subtext:"数据来源：中国生命关怀协会调研部",
                    subtextStyle: {
                        fontSize: 10
                    },
                    textStyle:{
                        fontSize:15
                    }
                },
                tooltip:{
                    show:true,
                    formatter:function(){
                        return '安宁疗护机构：1063所</br>注册护士：5679人</br>核定床位：68644张</br>安宁疗护职业医师：6075人'
                    }
                },
                radar: [{
                    axisName: {
                        fontSize: '15',
                        color: '#333333',
                        formatter: function(params) {
                            var str = '';
                            switch (params) {
                                case '安宁疗护机构':
                                    str = '{a|}\n' + params + '';
                                    break;
                                case '注册护士':
                                    str = '{b|}\n' + params;
                                    break;
                                case '核定床位':
                                    str = '{c|}\n' + params;
                                    break;
                                case '安宁疗护职业医师':
                                    str = '{d|}\n' + params;
                                    break;
                            }
                            return str
                        },
                        lineHeight: 30,
                        rich: {
                            a: {
                                width: 30,
                                height: 30,
                                align: 'center',
                                backgroundColor: {
                                    image: sportsIcon.a
                                }
                            },
                            b: {
                                width: 30,
                                height: 30,
                                align: 'center',
                                backgroundColor: {
                                    image: sportsIcon.b
                                }
                            },
                            c: {
                                width: 30,
                                height: 30,
                                align: 'center',
                                backgroundColor: {
                                    image: sportsIcon.c
                                }
                            },
                            d: {
                                width: 30,
                                height: 30,
                                align: 'center',
                                backgroundColor: {
                                    image: sportsIcon.d
                                }
                            }
                        }
                    },
                    indicator: [{
                            name: '安宁疗护机构',
                            max:70000,
                            color:'rgb(240,204,121)',
                            axisLabel:{show:false}
                        },
                        {
                            name: '注册护士',
                            max:70000,
                            color:'rgb(240,204,121)',
                            axisLabel:{show:false}
                        },
                        {
                            name: '核定床位',
                            max:70000,
                            color:'rgb(240,204,121)',
                            axisLabel:{show:false}
                        },
                        {
                            name: '安宁疗护职业医师',
                            max:70000,
                            color:'rgb(240,204,121)',
                        }
                    ],
                    shape:'circle',
                    center: ['50%', '52%'],
                    radius: 180,
                    startAngle:180,
                    splitNumber: 7,
                    splitArea: {
                        areaStyle: {
                            color: '#fff',
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 4
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999',
                            width: 1
                        },
                        symbol:['none', 'arrow'],
                        symbolSize : [5, 10]
                    },
                    axisLabel:{
                        show:true,
                        hideOverlap:true,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0, 0, 0, 0.1)',
                            width: 2
                        },
                    }
                }],
                series: [{
                    name: '雷达图',
                    type: 'radar',
                    emphasis: {
                        lineStyle: {
                            width: 2
                        }
                    },
                    data: [
                        {
                            value: [1063, 5679, 68644, 6075],
                            itemStyle: {
                                color: '#39A5FE',
                            },
                            areaStyle: {
                                color: '#39A5FE'
                            }
                        }
                    ]
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
#container19 {
  width: 7rem;
  height: 6rem;
  margin: 0rem auto 0;
}
</style>


