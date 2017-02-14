/**
 * 选择时间组件
 * @description 
 * @author 李明村
 * @date 2016/2/6
 * 
 * 
 */

<template>
  <div class="date-picker">
    <input v-model="dateVal" @click="getDate"  readonly="readonly">
    <div class="maskLayer" :class="{ 'class-opacity': opacity }" v-if="show" @click="pop"></div>
    <div class="list" v-if="show">
      <div class='date-div no-mode-translate-demo-wrapper' v-for="(items,set) in boxArr">
        <ul>
          <i :class='items.classTop' @click="slideTop(items.clickTop)"><img :src="$img('arrowTop.png')"></i>
          <transition :name="className" v-for="(item,key) in items.num">
            <li :class='key' v-if="getOnValue(items.on)" key="onYear">{{item}}</li>
            <li :class='key' v-else="" key="off">{{item}}</li>
          </transition>
          <i :class='items.classBottom'><img :src="$img('arrowBottom.png')" @click="slideBottom(items.clickBottom)"></i>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'date-picker',
    data () {
        return {
        show: false,
        opacity: true,
        onYear: false,
        onMonth: false,
        onDate: false,
        className:'',
        dateVal:new Date(parseInt(Date.now())).toLocaleDateString().replace(/\//g,'-'),
        yearLab: {'first':'','second':'','third':''},
        monthLab: {'first':'','second':'','third':''},
        dateLab: {'first':'','second':'','third':''},
        yearArr:{'num':'','clickTop':'yt','clickBottom':'yb',
                 'classTop':'inc-year-top','classBottom':'inc-year-bottom','on':'onYear'},
        monthArr:{'num':'','clickTop':'mt','clickBottom':'mb',
                 'classTop':'inc-month-top','classBottom':'inc-month-bottom','on':'onMonth'},
        dateArr:{'num':'','clickTop':'dt','clickBottom':'db',
                 'classTop':'inc-month-top','classBottom':'inc-month-bottom','on':'onDate'},
        boxArr:{'year':'','month':'','date':''},
      }
    },
    methods: {
      getDate: function() {
        this.show=!this.show;
        //获取input框数值
        var strs=this.dateVal.split("-");
        this.yearLab['first']=(strs[0]-1)+'年';
        this.yearLab['second']=strs[0]+'年';
        this.yearLab['third']=(parseInt(strs[0])+1)+'年';
        this.monthLab['first']=(strs[1]-1)+'月';
        this.monthLab['second']=strs[1]+'月';
        this.monthLab['third']=(parseInt(strs[1])+1)+'月';
        this.dateLab['first']=(strs[2]-1)+'日';
        this.dateLab['second']=strs[2]+'日';
        this.dateLab['third']=(parseInt(strs[2])+1)+'日';
        this.getBox();  //获得二维数组
      },
      getOnValue: function(val){
        if(val=='onYear') {
          return this.onYear;
        }
        else if(val=='onMonth') {
          return this.onMonth;
        }
        else {
          return this.onDate;
        }
      },
      pop (){
          if(this.show=true){
              this.show=false;
              this.opacity=true
          }
      },
      getBox: function() {
        this.yearArr['num']=this.yearLab;
        this.monthArr['num']=this.monthLab;
        this.dateArr['num']=this.dateLab;
        this.boxArr['year']=this.yearArr;
        this.boxArr['month']=this.monthArr;
        this.boxArr['date']=this.dateArr;
      },
      //向上滑动
      slideTop: function(val) {
        //年费向上滑动
        if(val=='yt') {
          this.className='no-mode-translate-fade';
          this.setOn('year');
          this.yearLab['first']=this.yearLab['second'];
          this.yearLab['second']=this.yearLab['third'];
          this.yearLab['third']=(parseInt(this.yearLab['third'])+1)+'年';
          this.changeVal(0,this.yearLab['second']);
          if(parseInt(this.monthLab['second'])==2) {
            this.getDate1();
          }
        }
        //月份向上滑动
        else if(val=='mt'){
          this.className='no-mode-translate-fade';
          this.setOn('month');
          this.monthLab['first']=this.monthLab['second'];
          this.monthLab['second']=this.monthLab['third'];
          this.monthLab['third']=(parseInt(this.monthLab['third'])+1)+'月';
          if(parseInt(this.monthLab['third'])>12) {
            this.monthLab['third']=1+'月';
          }
          this.changeVal(1,this.monthLab['second']);
          this.getDate1();
        }
        //日份向上滑动
        else {
          this.className='no-mode-translate-fade';
          this.setOn('date');
          this.dateLab['first']=this.dateLab['second'];
          this.dateLab['second']=this.dateLab['third'];
          this.dateLab['third']=(parseInt(this.dateLab['third'])+1)+'日';
          var lastMonthDay=this.getMaxDay();
          if(parseInt(this.dateLab['third'])>lastMonthDay) {
            this.dateArr['third']=1+'日';
          }
          this.changeVal(2,this.dateLab['second']);
        }
      },
      //向下滑动
      slideBottom: function(val) {
        if(val=='yb') {
          this.className='on-mode-translate-fade';
          this.setOn('year');
          this.yearLab['third']=this.yearLab['second'];
          this.yearLab['second']=this.yearLab['first'];
          this.yearLab['first']=(parseInt(this.yearLab['first'])-1)+'年';
          this.changeVal(0,this.yearLab['second']);
          if(parseInt(this.monthLab['second'])==2) {
            this.getDate1();
          }
        }
        else if(val=='mb') {
          this.className='on-mode-translate-fade';
          this.setOn('month');
          this.monthLab['third']=this.monthLab['second'];
          this.monthLab['second']=this.monthLab['first'];
          this.monthLab['first']=(parseInt(this.monthLab['first'])-1)+'月';
          if(parseInt(this.monthLab['first'])<1) {
            this.monthLab['first']=12+'月';
          }
          this.changeVal(1,this.monthLab['second']);
          this.getDate1();
        }
        else {
          this.className='on-mode-translate-fade';
          this.setOn('date');
          this.dateLab['third']=this.dateLab['second'];
          this.dateLab['second']=this.dateLab['first'];
          this.dateLab['first']=(parseInt(this.dateLab['first'])-1)+'日';
          var lastMonthDay=this.getMaxDay();
          if(parseInt(this.dateLab['first'])<1) {
            this.dateLab['first']=lastMonthDay+'日';
          }
          this.changeVal(2,this.dateLab['second']);
        }
      },
    //判断月份获取最大日期
    getDate1: function() {
      var lastMonthDay=this.getMaxDay();
      if((parseInt(this.dateLab['third'])+parseInt(this.dateLab['second'])+parseInt(this.dateLab['first']))/3<lastMonthDay) {
          if(parseInt(this.dateLab['second'])==1||parseInt(this.dateLab['third'])==1) {
          this.dateLab['second']=lastMonthDay+'日';
          this.dateLab['first']=(lastMonthDay-1)+'日';
          this.dateLab['third']=1+'日';
        }
      }
      else {
        this.dateLab['second']=lastMonthDay+'日';
        this.dateLab['first']=(lastMonthDay-1)+'日';
        this.dateLab['third']=1+'日';
      }
      this.changeVal(2,this.dateLab['second']);
    },
    //改变输入框时间
    changeVal: function(num,date) {
      var y=this.dateVal.split("-");
      y[num]=parseInt(date);
      var v=y.join('-');
      this.dateVal=v;
      this.getBox();
      this.$emit('getDate', this.dateVal);
    },
    //获取日期最大一天
    getMaxDay: function() {
      var flag;
      var lastMonthDay;
      var year=parseInt(this.yearArr['second']);
      var month=parseInt(this.monthArr['second']);
      if((year%4==0)&&(year%100!=0)) {
        flag=1;  //闰年
      }
      else {
        flag=0;  //平年
      }
      if([1,3,5,7,8,10,12].indexOf(month)!=-1) {
        lastMonthDay=31;
      }
      else if(month==2) {
        if(flag==1) {
          lastMonthDay=29;
        }
        else {
          lastMonthDay=28;
        }
      }
      else {
        lastMonthDay=30;
      }
      return lastMonthDay;
    },
    //设置on函数
    setOn:function(val) {
      if(val=='year') {
        this.onYear=!this.onYear;
      }
      if(val=='month') {
        this.onMonth=!this.onMonth;
      }
      if(val=='date') {
        this.onDate=!this.onDate;
      }
    }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "../../../sass/function";
.maskLayer{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    z-index:100;
}
.list{
    position: fixed;
    bottom:0;
    left: 0;
    width: 100%;
    z-index:200;
    height:150px;
    background:#fff;
    ul{
      max-height:pxToRem(200);
      overflow: hidden;
      
    }
    ul{
      max-height:pxToRem(200);
      overflow: auto;
      background:#fff;
    }
    ul li{
      border-bottom:1px solid #CDCDCD;
      width: 100%;
      height:pxToRem(50);
      line-height: pxToRem(53);
      color: #000;
      text-align:center;
    }
}    
.class-opacity{
    opacity: 0.7;
    background-color: #000
}
.time-box{
  width:100%;
  height:120px;
  border:1px solid black;
  margin:0 auto;
  display:none;
}
.active {
  display:block;
}
.date-div {
  width:32%;
  float: left;
  height:100%;
  position: relative;
}
.date-div ul i{
  position: absolute;
  display:block;
}
.date-div .inc-year-top {
  left:53%;
  top:0px;
}
.date-div .inc-year-bottom {
  left:53%;
  top:9.5em;
}
.date-div .inc-month-top {
  left:52%;
  top:0px;
}
.date-div .inc-month-bottom {
  left:52%;
  top:9.5em;
}
.date-div li{
  clear: both;
  float:left;
  line-height: 1.9em;
  margin-left:1em;
}
.date-div .li-last {
  border:none;
}
//移动按键
.no-mode-translate-demo-wrapper {
  
}
.no-mode-translate-demo-wrapper .first{
  position:absolute;
  top:10px;
}
.no-mode-translate-demo-wrapper .second{
  position:absolute;
  top:50px;
}
.no-mode-translate-demo-wrapper .third{
  position:absolute;
  top:90px;
}
.no-mode-translate-fade-enter-active, .no-mode-translate-fade-leave-active,.on-mode-translate-fade-enter-active,.on-mode-translate-fade-leave-active{
  transition: all .4s;
}
.no-mode-translate-fade-enter,.no-mode-translate-fade-leave-active,.on-mode-translate-fade-enter,.on-mode-translate-fade-leave-active{
  opacity: 0;
}
.no-mode-translate-fade-enter {
  transform: translateY(40px);
}
.no-mode-translate-fade-leave-active {
  transform: translateY(-40px);
}
.on-mode-translate-fade-enter {
  transform: translateY(-40px);
}
.on-mode-translate-fade-leave-active {
  transform: translateY(40px);
}
</style>
