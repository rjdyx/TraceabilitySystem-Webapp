<template>
    <div>

        <canvas id="canvas" width="1120" height="899" >当前浏览器不支持</canvas>
        <img :src="imageSrc" id="Img" width="80%" @click="showpop"/>
        <div v-show="showpic" class="wrap">
            <div class="box" ref="box" @click="toHide">
                <div class="innerBox" ref="iBox">
                    <img :src="imageSrc" alt="图片" >
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    @import "../../sass/function";
    @import "../../sass/_percent.scss";

    #canvas{
        position: absolute;
        left:70%;
        top:54px;
        margin-left: -560px;
        margin-right: 0;
        display:none;
    }
    #Img{
        display: block;
        margin: 0 auto;
    }
    .wrap{
        position: fixed;
        top:0;
        left:0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0,0,0,0.9);
        z-index:100;
    }
    .box{
        overflow:auto;
        bottom:20px;
        height: 100vh;
        width: 100%;
        margin-left: 1%;
        border-radius:5px;
        box-sizing:border-box;
        padding-top: 20px;
        .vertical{
            top:66%!important;
        }
    }
    .innerBox{
        width: 90%;
        margin-left: 5%;
        padding-bottom: 20px;
        position: relative;
        top:50%;
        transform:translate(0,-50%);
        img{
            width: 100%;
        }
    }
</style>
<script>

    export default{
        name: 'dailylog',
        data(){
            return{
                title: [['农业日志']],
                empty: [[]],
                fixation: [['时间:'],['天气:'],['记录人:'],['第    期']],
                data1: [['种植区','果蔬名称']],
                data2: [['播种/育苗','移栽']],
                data3: [['施肥']],
                data4: [['病虫害防治']],
                data5: [['生长周期(天)','种植面积(垄)','采收重量(斤)','操作人']],
                data6: [['品种','方式','品种','密度(cm)','种类','数量(kg)','方式','名称','施用方法','对象']],
                dailylog: [],
                daily_record: [],
                imageSrc: '',
                showpic: false
            }
        },
        mounted () {
            this.getDailylog();          
        },
        methods: {
            //获取日志详细信息
            getDailylog () {
                this.$http.get(this.$adminUrl('dailylog/getlog'),{params:this.$route.params}).then((response)=>{
                    //计算canvas高度
                    this.canvasHeight = 180 + 80 * response.data.arr.length;
                    var canvas = document.getElementById("canvas");
                    canvas.height = this.canvasHeight;

                    //标题
                    this.tabHead(1120,40,1,1,0,0,this.title);
                    //天气
                    this.tabHead(1120,30,1,1,0,40,this.empty);
                    //地块，作物
                    this.tabHead(70,110,1,2,0,70,this.data1);
                    //播种，移栽
                    this.tabHead(140,40,1,2,140,70,this.data2);
                    //施肥
                    this.tabHead(210,40,1,1,420,70,this.data3);
                    //病虫害
                    this.tabHead(210,40,1,1,630,70,this.data4);
                    //除草后6个
                    this.tabHead(70,110,1,4,840,70,this.data5);
                    //品种后的所有
                    this.tabHead(70,70,1,10,140,110,this.data6);

                    this.$set(this, 'dailylog', response.data.arr);
                    this.tabHead(70,80,this.dailylog.length,16,0,180,this.dailylog);

                    //获取时间，天气，操作人，期数
                    this.$set(this, 'daily_record', response.data.daily_record);
                    this.getMessage();

                    //时间列固定
                    this.getFixation(); 

                    //显示图片日志
                    this.show();
                }, (response)=>{

                });
            },
            //画fixation
            getFixation () {
                var c=document.getElementById("canvas");
                var cxt=c.getContext("2d");
                cxt.textAlign='center';
                cxt.font='17px Arial';
                //时间
                var beginX=140;
                var beginY=65;
                cxt.fillText(this.fixation[0],beginX,beginY);

                //天气
                var beginWeatherX=500;
                var beginWeatherY=65;
                cxt.fillText(this.fixation[1],beginWeatherX,beginWeatherY);

                //记录员
                var beginOperatorX=760;
                var beginOperatorY=65;
                cxt.fillText(this.fixation[2],beginOperatorX,beginOperatorY);

                //期数
                var beginNumberX=980;
                var beginNumberY=65;
                cxt.fillText(this.fixation[3],beginNumberX,beginNumberY);
            },
            //画message
            getMessage () {
                var c=document.getElementById("canvas");
                var cxt=c.getContext("2d");
                cxt.textAlign='center';
                cxt.font='17px Arial';
                //时间
                var beginDateX=280;
                var beginDateY=65;
                cxt.fillText(this.daily_record[0],beginDateX,beginDateY);

                //天气
                var beginWeatherX=550;
                var beginWeatherY=65;
                cxt.fillText(this.daily_record[1],beginWeatherX,beginWeatherY);

                //记录员
                var beginOperatorX=810;
                var beginOperatorY=65;
                cxt.fillText(this.daily_record[2],beginOperatorX,beginOperatorY);

                //期数
                var beginNumberX=975;
                var beginNumberY=65;
                cxt.fillText(this.daily_record[3],beginNumberX,beginNumberY);


            },
            //循环canvans
            tabHead (width,height,list,row,beginX,beginY,data) {   //用来画表格的函数
                var c=document.getElementById("canvas");
                var cxt=c.getContext("2d");
                cxt.font='16px Arial';
                cxt.textAlign='center';
                for(var r=1;r<=row;r++){      //控制画多少行            
                    for(var l=1;l<=list;l++){     //控制画多少列               
                        var x=beginX+(r-1)*width;
                        var y=beginY+(l-1)*height;
                        //坐标
                        var x_zuobiao=x+width/2;
                        var y_zuobiao=y+height/2;
                        cxt.fillStyle="#ffffff";
                        cxt.fillRect(x,y,width,height);
                        cxt.rect(x,y,width,height);
                        cxt.fillStyle="#000000";
                        if(data[l-1][r-1] != undefined) {
                            this.canvasTextAutoLine(data[l-1][r-1],c,x_zuobiao,y_zuobiao,16,width,height);    
                        }
                    }                  
                }
                cxt.stroke();
            },
            //文本框超出规定最大宽度自动换行
            canvasTextAutoLine (str,canvas,initX,initY,lineHeight,maxWidth,maxHeight) {
                var ctx = canvas.getContext("2d"); 
                var lineWidth = 0; 
                var lastSubStrIndex= 0;
                for(var i=0;i<str.length;i++){ 
                    lineWidth+=ctx.measureText(str[i]).width; 
                    if(lineWidth>maxWidth - 10){//防止边界问题
                        ctx.fillText(str.substring(lastSubStrIndex,i),initX,initY);
                        initY+=lineHeight;
                        lineWidth=0;
                        lastSubStrIndex=i;
                    } 
                    if(i==str.length-1){
                        ctx.fillText(str.substring(lastSubStrIndex,i+1),initX,initY);
                    }
                }
            },

            //将图片显示在网页中
            show(){
                var canvas = document.getElementById("canvas");
                var ImgSrc = canvas.toDataURL("image/png");
                this.imageSrc=ImgSrc;
            },
            showpop() {
                this.showpic = true
            },
            toHide() {
                this.showpic = false
            }
        }
    }
</script>
