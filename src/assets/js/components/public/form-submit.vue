/**
 * 提交表单组装组件组件
 * @description 
 * @author 李明村
 * @date 2017/2/9
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：父组件传入对象
 * 
 * @param  edit 
 * 类型：Boolean
 * 是否必填：false
 * 默认值：false
 * 描述：表明此组件是用于新增还是编辑，true表示编辑，false表示新增
 * 
 * @param  inputData
 *类型：Object
 *是否必填：false
 *默认值：{}
 *描述：父组件传入用于循环对象
 * 
 *@param  selectFault
 *类型：Array
 *是否必填:false
 *默认值：[]
 *父组件传入固定的下拉框值
 *
 *@param  selectFault
 *类型：Array
 *是否必填:false
 *默认值：[]
 *父组件传入固定的下拉框值
 *
 *@param  select
 *类型：Array
 *是否必填:false
 *默认值：[]
 *父组件传入非固定的下拉框值
 *
 *
 * Events:
 * 
 * @function closeNew
 * 返回：无
 * 必用：true
 * 描述：隐藏新增组件
 * 
 * @function closeEdit
 * 返回：无
 * 必用：true
 * 描述：隐藏编辑组件
 * 
 * @function callback
 * 返回：返回对象
 * 必用：true
 * 描述：
 * 
 * 
 */

<template>
  <table class="main form-pop">
    <tbody class="form-body">
    <template v-for="(item,key) in inputData">
      <tr v-if="item.date">
          <td class="label-tit"><label :for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2"><date-picker :name="key"
          @getDate="getDate"></date-picker></td>
      </tr>
      <!--下拉框非固定-->
      <tr v-else-if="item.select=='1'">
          <td class="label-tit"><label :for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2" @click="getChange(item.getSelect)"><pop-select :name="key"
              :items="item.data"
              :defaultIndex="item.index"
              :protoBack="item.protoBack"
              :protoShow="item.selectName"
              @callback="getMsgDataId"
          ></pop-select></td>
      </tr>
      <!--下拉框固定-->
      <tr v-else-if="item.select=='2'">
          <td class="label-tit"><label :for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2">
              <pop-select name="weather"
                  :items="item.data"
                  :defaultIndex="item.index"
                  @callback="getMsgDataVal"
              ></pop-select>
          </td>
      </tr>
      <!--表单带单位-->
      <tr v-else-if="item.select=='3'">
          <td class="label-tit"><label :for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop input-area">
              <input 
              v-model="letItem[key]" 
              v-validate.initial="letItem[key]" 
              v-bind:data-vv-rules="item.rules" 
              v-bind:data-vv-as="item.label" 
              type="text" :id="item.divfor" :name="key"
              v-bind:placeholder="item.placeholder">
          </td>
          <td class="area_unit">
             <pop-select :name="item.unit"
              :items="item.data"      
              :defaultIndex="item.index"
              @callback="getMsg"  
              ></pop-select>
          </td>
      </tr>
      <!--input框-->
      <tr v-else="">
          <td class="label-tit"><label v-bind:for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2"><input 
          v-model="letItem[key]" 
          v-validate.initial="letItem[key]" 
          v-bind:data-vv-rules="item.rules" 
          v-bind:data-vv-as="item.label" 
          type="text" v-bind:id="item.divfor" :name="key" v-bind:placeholder="item.placeholder"></td>
      </tr>
      <template v-if="item.placeholder!=''">
        <tr v-show="errors.has(key)">
            <td colspan="3" class="error">{{ errors.first(key) }}</td>
        </tr>
      </template>
    </template>
      <tr>
        <td colspan="3">
            <div class="footer-r">
                <a v-if="edit" href="#">
                    <button @click="cancelEdit" type="button">
                        取消
                    </button>  
                </a>
                
                <a v-else href="#">
                    <button @click="cancelAdd" type="button">
                        取消
                    </button>
                </a>
            </div>
            <div class="footer-r">
                <a href="#">
                    <button class="btn-pop" @click="thisSet">
                        保存
                    </button>
                </a>
            </div>
        </td>
      </tr>
    </tbody>
  </table>  
</template>

<style lang="sass" scoped>
@import "../../../sass/function";
</style>
<script>
export default {
    name: 'form-submit',
    data () {
        return {
          defaultData:0,
          number: 0,
          arr: [],
          msg:''
      }
    },
    props: {
       letItem: {
            type: Object,
            default() {
                return {
                    
                }
            },
        },
        inputData: {
          type: Object,
          default() {
            return {
              
            }
          }
        },
        edit: {
            type: Boolean,
            default: false
        }
    },
    methods: {
      thisSet: function() {
        this.$emit('thisSet',this);
      },
      getDate: function(val) {
        this.$emit('getDate',val);
      },
      getMsgDataId (msg) {
        this.number++
        this.msg=msg;
        if(this.number>1) {

        }
        else {
          this.$emit('getMsgDataId',msg);
        }
      },
      getChange: function(val) {
        if(val==1) {
          this.setMsg=val;
          this.$emit('getMsgDataId',this.msg);
        }
        else if(val==2){
          this.$emit('getNameId',this.msg);
        }
        else {
          this.$emit('getExpertId',this.msg);
        }
      },
      getMsg (msg) {
        this.$emit('getMsg',msg);
      },
      getMsgDataVal (msg) {
        this.$emit('getMsgDataVal',msg);
      },
      cancelEdit: function() {
        this.$emit('closeEdit');
      },
      cancelAdd: function() {
        this.$emit('closeNew');
      }
    }
  }
</script>
