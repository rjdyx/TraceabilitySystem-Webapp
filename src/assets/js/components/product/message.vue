<template>
  	<div>
  		<form>
          <div class="tip_content">
              <div class="tip_date">
                  <em>*</em>
                  <label>计划日期：</label>
                  <span>{{msg}}</span>
              </div>
              <div class="tip_date">
                  <em>*</em>
                  <label>操作类型：</label>
                  <select v-model="selected">
                    <option v-for="yx in YX" :value="yx.text">
                        {{yx.text}}
                    </option>
                  </select>
              </div>
              <div class="tip_date">
                  <em>*</em>
                  <label>农药名称：</label>
               <select>
                <option v-for="zy in selection" :value="zy.text" :selected="$index == 0 ? true : false">
                    {{zy.text}}
                </option>
               </select>
              </div>
              <div class="tip_date">
                  <em>*</em>
                  <label>计划数量：</label>
               <input type="text" name="">
              </div>
              <div class="tip_date">
                  <label>计划内容：</label>
                  <input type="text" name="">
              </div>
              <div class="tip_date">
                  <label>安排人员：</label>
                  <input type="text" name="">
              </div>
              <div class="tip_date">
                  <label>备注信息：</label>
                  <input type="text" name="" class="memo">
              </div>
          </div>
         
      </form>
  	</div>
</template>

<script>
export default {
  name: 'all',
		data() {
			return {
				selected: '请选择操作类型',
            YX: [{
              text:'请选择操作类型'
            },{
              text: '施肥',
              ZY: [{
                text: '牛脂肥'
              }, {
                text: '天然农家肥'
              }, {
                text: "草木灰"
              },  {
                text: "微量氮肥"
              }, ]
            }, {
              text: '施药',
              ZY: [{
                text: 'vcvd'
              }, {
                text: 'vcvd'
              }, {
                text: "环保消毒液"
              },  {
                text: "无害除草剂"
              }, {
                text: "果树营养"
              },]
            },{
              text:'采收'
            },{
              text:'其他'
            }

            ]
			}
		},
    mounted(){
      this.getAlldata()
    },
    methods:{
      getAlldata(){
        this.$http.get(this.$adminUrl('manure/query')).then((response)=>{
          console.log(response.body.all)
        },(response)=>{
        })
      },
      submit(){
        let self=this,
        params={
          id:0,
          type:1,
          content:'',
          time:''
        };
        self.content=self.content.trim();
        if(self.content){
          params.content=self.content;
          self.$store.dispatch('addevent',params);
          self.content=''
        }
      },
    },
    computed: {
        selection: {
          get: function() {
            var that = this;
            return this.YX.filter(function(item) {
              return item.text == that.selected;
            })[0].ZY;
          }
     }
  },
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
    @import "../../../sass/_percent.scss";

.tip_date {
  width: 444px;
  margin-left: 61px;
  margin-top: 10px;
  height: 30px;
  line-height: 30px;
  em, label, span {
    display: inline-block;
    float: left;
  }
  em {
    color: red;
  }
  label {
    font-weight: 600;
    padding-left: 40px;
    color: #6f6d6d;
  }
  input {
    float: left;
    padding: 2px 10px 2px 10px;
    border: 2px solid #e5e5e5;
    width: 312px;
    outline: none;
  }
  .memo {
    height: 60px;
    margin-bottom: 6px;
  }
  select {
    border: 2px solid #e5e5e5;
    color: #6f6d6d;
    height: 29px;
    outline: none;
    float: left;
  }
  span {
    width: 140px;
    border: 2px solid #e5e5e5;
    height: 30px;
  }
}

.tip_footer {
  padding-top: 20px;
  margin: 0 auto;
  width: 616px;
  border-top: 2px solid #cecece;
  margin-top: 65px;
}

.footer_btn {
  float: right;
  a {
    display: inline-block;
    width: 70px;
    height: 30px;
    color: #fff;
    border: none;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
  }
  .cancel {
    background: #ccc;
    margin-left: 10px;
  }
  a:hover {
    cursor: pointer;
  }
}

.save {
  background: #0099cc;
}
</style>
