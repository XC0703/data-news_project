    // 图片绘制星星对象
    export const Star = function() {
        this.x; // 位置
        this.y; // 位置
        this.picNo; //帧序列
        this.timer; // 闪烁频率控制器
      };
      
      // 颜色填充渐变星星对象
      export const StarF = function() {
        this.x; // 位置
        this.y; // 位置
        this.radiu; //星星大小
        this.alpha; // 控制星星闪烁变量
        this.period; // 闪烁周期
        this.timer; // 闪烁频率控制器
      };
  