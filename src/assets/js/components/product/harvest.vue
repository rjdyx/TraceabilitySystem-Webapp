<template>
  	<div>
  	   <div> 
        <select>
          <option>冰糖心基地</option>
        </select> 
        <div class="table">
           <table class="table-inner" width="719px">
              <thead>
              <tr class="th">
                <th name="order">序号</th>
                <th name="serial">种植批次号</th>
                <th name="plantation_name">所属种植区</th>
                <th name="plant_name">种植果蔬名称</th>
                <th name="area">种植面积</th>
                <th name="date">种植日期</th>
                <th name="memo">备注</th>
              </tr>

            </thead>
            <tbody>
              <tr v-for="item in table_list">
                <td>
                  <input type="radio" name="name">
                  <label></label>
                </td>
                <td>{{item.serial}}</td>
                <td>{{item.plantation_name}}</td>
                <td>{{item.plant_name}}</td>
                <td>{{item.area+item.area_unit}}</td>
                <td>{{item.cultivate_date}}</td>
                <td>{{item.memo}}</td>
              </tr> 
              <tr class="last">
                <td colspan="7"></td>
              </tr>
            </tbody>
         </table>	
          <div class="tip_footer">
              <div class="footer_btn">
                  <a class="save" @click='save'>保存</a>
                  <a class="cancel" @click='close'>取消</a>
              </div>
          </div>
        </div>
       </div>
  	</div>
</template>

<script>

export default {
	
  name: 'all',
		data() {
			return {
         table_list:[{
              'order':'',
              'serial':'',
              'plantation_name':'',
              'plant_name':'',
              'area':'',
              'cultivate_date':'',
              'mode':'',
              'area_unit':''
        }],
        
			}
		},
    mounted(){
      this.getTableData()
    },
    methods:{
      getTableData(){
        this.$http.get(this.$adminUrl('cultivate/query?params[type=采收]')).then((response)=>{
          this.$set(this,'table_list',response.body.all)
          console.log(response.body.all);
        },(response)=>{

        })
      },
    }
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
    @import "../../../sass/_percent.scss";
  .table {
  width: 721px;
  height: 376px;
  border: solid 1px #cccdcd;
}

.table_inner {
  width: 719px;
  overflow-x: auto;
}

th {
  &[name='order'], &[name="serial"] {
    width: 102px;
  }
  &[name="plantation_name"], &[name="plant_name"], &[name="area"], &[name="cultivate_date"], &[name="mode"] {
    width: 103px;
  }
}

.th {
  border-bottom: solid 1px #cccdcd;
  height: 41px;
  color: #a7a7a8;
  font-size: 12px;
}

tr {
  td {
    text-align: center;
    padding: 10px;
  }
  border-bottom: solid 1px #cccdcd;
}

.last{
  background: #f5f5f5;
  height: 50px;
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
