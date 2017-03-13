
<template>
    <div>
    <div id="calendar">
    <!-- 年份、月份 -->
        <div class="month">
            <ul>
                <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
                <li class="year-month" @click="pickYear(currentYear,currentMonth)">
                    <span class="choose-year">{{ currentYear }}年</span>
                    <span class="choose-month">{{ currentMonth }}月</span>
                </li>
                <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
            </ul>
        </div>
        <!-- 星期 -->
        <ul class="weekdays">
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
            <li>日</li>
        </ul>
        <!-- 日期 -->
        <ul class="days">
            <li @click="pick(day)" v-for="day in days">
            <span class="task" v-if="taskShow"></span>
                <!-- 本月 -->
                <span v-if="day.getMonth()+1 != currentMonth" class="other-month datecir">
                    {{day.getDate()}}
                </span>
                <!-- 日期 -->
                <span v-else class="datecir">
                <!-- 今天 加了当日的背景颜色-->
                    <span v-if="day.getFullYear()==new Date().getFullYear()&&day.getMonth()==new Date().getMonth()&&day.getDate()==new Date().getDate()" class="active">
                        {{day.getDate()}}
                    </span>
                    <span v-else>{{day.getDate()}}</span>
                </span>
            </li>
        </ul>
        <!-- 弹出提示框 --> 
        <div class="layer" v-if="willshow">
          
            <div class="tip">
                <span class="close" @click=close()></span>
                <div class="tip_title">
                    <!-- <router-link to="message" class="tip_title_message"><h2>新建生产计划信息</h2></router-link>
                    <router-link to="harvest" class="tip_title_harvest"><h2>选择种植批次</h2></router-link> -->
                    <navbar :taps="taps"></navbar>
                </div>
               <message></message>
                <div class="tip_footer">
              <div class="footer_btn">
                  <a class="save" @click='save'>保存</a>
                  <a class="cancel" @click='close'>取消</a>
              </div>
          </div>
            </div>
        </div>
    </div>
    <!-- <all></all> -->
    </div>
</template>
<script>
 // import All from '../componesnts/product/allcalendar.vue';
 import Navbar from '../components/public/navbar.vue'
 import  Message from '../components/product/message.vue';

export default {
  name: 'hello',
        data() {
            return {
              active:0,
              currentView:'child1',
                taps:[
                  {name:'新建生产计划信息','key':'message'},
                  {name:'选择种植批次','key':'harvest'}
                ],
                currentDay: 1,
                currentMonth: 1,
                currentYear: 1970,
                currentWeek: 1,
                days: [],
                willshow:false,
                taskShow:false,
                msg:'',
            }
        },
        created() {
            this.initData(null);
        },
        mounted(){
            this.getData()
        },
        methods: {
            getData() {
                this.$http.get(this.$adminUrl('manure/query')).then((response)=>{
                    console.log(response)
                },(response)=>{

                })
            },
            initData(cur) {
                var date;
                if(cur) {
                    date = new Date(cur);
                } else {
                    date = new Date();
                }
                this.currentDay = date.getDate();
                this.currentYear = date.getFullYear();
                this.currentMonth = date.getMonth() + 1;
                this.currentWeek = date.getDay(); // 1...6,0
                if(this.currentWeek == 0) {
                    this.currentWeek = 7;
                }
                var str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay);
                // console.log("today:" + str + "," + this.currentWeek);
                this.days.length = 0;
                // 今天是周日，放在第一行第7个位置，前面6个
                for(var i = this.currentWeek - 1; i >= 0; i--) {
                    var d = new Date(str);
                    d.setDate(d.getDate() - i);
                    console.log("y:" + d.getDate());
                    this.days.push(d);
                }
                for(var i = 1; i <= 35 - this.currentWeek; i++) {
                    var d = new Date(str);
                    d.setDate(d.getDate() + i);
                    this.days.push(d);
                } 
            },
            //弹出生产计划框
            pick(date) {
                this.willshow=!this.willshow
                var today=this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
                this.msg=today
            },
            save:function(){
                this.taskShow=!this.taskShow
            },
            //判断select框文本改变触发的事件
            select(){    

            },
            close(){
                this.willshow=!this.willshow
                
            },
            pickPre(year, month) {
                // setDate(0); 上月最后一天
                // setDate(-1); 上月倒数第二天
                // setDate(dx) 参数dx为 上月最后一天的前后dx天
                var d = new Date(this.formatDate(year, month, 1));
                d.setDate(0);
                this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
            },
            pickNext(year, month) {
                var d = new Date(this.formatDate(year, month, 1));
                d.setDate(35);
                this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
            },
             // 返回 类似 2016-01-02 格式的字符串
            formatDate(year, month, day) {
                var y = year;
                var m = month;
                if(m < 10) m = "0" + m;
                var d = day;
                if(d < 10) d = "0" + d;
                return y + "-" + m + "-" + d
            },
        },
        components:{
            // All,
            Navbar,
            Message
        }
    }
</script>

<style lang='sass'>
    @import "../../sass/_percent.scss";
.active{
  color:red
}
html, body {
  height: 100%;
}

* {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}

#calendar {
  width: 1514px;
  margin: 0 auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

/*年份、月份*/

.month {
  width: 100%;
  background: #f5f5f5;
  border: 1px solid #cccdcd;
  ul {
    display: flex;
    justify-content: center;
    li {
      font-size: 16px;
    }
  }
}

.year-month {
  width: 140px;
  &:hover {
    cursor: pointer;
  }
}

.choose-year {
  padding-left: 20px;
  padding-right: 20px;
  line-height: 61px;
}

.choose-month {
  padding-right: 20px;
  line-height: 61px;
}

.arrow {
  padding: 20px;
  &:hover {
    color: blue;
    cursor: pointer;
  }
}

/*星期*/

.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    display: inline-block;
    width: 13.6%;
    text-align: center;
  }
}

.days {
  padding: 0;
  margin: 0;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid #ddd;
  li {
    list-style-type: none;
    display: inline-block;
    width: 14.2%;
    height: 95px;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 15px;
    font-size: 16px;
    position: relative;
  }
}

.task {
  display: inline-block;
  width: 80%;
  height: 20px;
  background: red;
}

.days li .active {
  padding: 6px 10px;
  border-radius: 50%;
  background: #35baf6;
  color: #fff;
}

.datecir {
  display: inline-block;
  position: absolute;
  top: 11px;
  left: 7px;
}

.days li .other-month {
  padding: 5px;
  color: #ccc;
}

/*新建弹出框*/

.layer {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 199999;
  position: absolute;
  top: 0;
  left: 0;
}

.tip {
  width: 620px;
  height: 500px;
  background: #fff;
  position: absolute;
  top: 50%;
  margin-top: -250px;
  left: 50%;
  margin-left: -310px;
  overflow-x: visible;
  /*overflow-y: auto;*/
}

.close {
  display: block;
  width: 30px;
  height: 30px;
  background: url(/public/close.png) no-repeat;
  background-position: -149px -31px;
  position: absolute;
  right: -10px;
  top: -10px;
  z-index: 9999999;
  &:hover {
    background-position: -180px -31px;
    cursor: pointer;
  }
}

.tip_title {
  width: 616px;
  height: 51px;
  border-bottom: 1px solid #9fa0a0;
  margin: 0 auto;
  position: relative;
}
.tip_title_message{
  left: 0px;
  bottom: 0px;
}
.tip_title_harvest{
  left: 170px;
  bottom: 0px;  
}
.tip_title_message,.tip_title_harvest{
  width: 164px;
  height: 36px;
  display: inline-block;
  color: rgb(0, 153, 204);
  font-size: 18px;
  position: absolute;
  text-align: center;
  line-height: 36px;
}
/*.active{
    background: rgb(0, 153, 204);
}
.unactive{
    background: #fff;
}*/
.router-link-active{
    background: red;  
    color: #fff;  
}
</style>

