/**
 * 提交表单组装组件组件
 * @description 
 * @author 李明村
 * @date 2017/2/9
 * 
 * 
 */

<template>
  <table class="main form-pop">
    <tbody class="form-body">
    <template v-for="(item,key) in inputData">
      <tr v-if="item.date">
          <td class="label-tit"><label :for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2"><date-picker></date-picker></td>
      </tr>

      <tr v-else-if="item.select=='1'">
          <td class="label-tit"><label :for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2"><pop-select :name="key"
              :items="select"
              :defaultIndex="parseInt(defaultDataIndex)"
              :protoBack="key"
              :protoShow="item.selectName"
              @callback="getMsgData(item.selectName)"
          ></pop-select></td>
      </tr>
      <tr v-else-if="item.select=='2'">
          <td class="label-tit"><label :for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2">
              <pop-select name="weather"
                  :items="selectFault"
                  :defaultIndex="parseInt(defaultWeatherIndex)"
                  @callback="getMsgData(item.selectName)"
              ></pop-select>
          </td>
      </tr>
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
          
      }
    },
    methods: {
      
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
        selectRoute: {
          type: Object,
          default() {
            return {
              
            }
          }
        },
        edit: {
            type: Boolean,
            default: false
        },
        selectFault: {
          type: Array,
          default() {
            return {
              
            }
          }
        },
        select: {
          type: Array,
          default() {
            return {
              
            }
          }
        }
    },
    computed: {
        //判断是编辑状态还是新建状态，取出不同的下标
        defaultDataIndex () {
            if (this.edit == false) {
                return 0;
            } else {
                for(let index in this.select) {
                    if(this.select[index][this.selectRoute['data_id']]== this.letItem[this.selectRoute['letItem_id']]){
                        return index;
                    }
                }  
            }
        },
        defaultWeatherIndex() {
          if (this.edit == false) {
                return 0;
            } else {
              for(let index in this.weathers){
                  if(this.weathers[index] == this.letItem.weather){
                      return index;
                  }
              }
              return 0;
          }
        }
    },
    mounted () {
     
    },
    methods: {
      thisSet: function() {
        this.$emit('thisSet',this);
      },
      getMsgData (msg) {
        if(msg!='') {
          this.letItem[this.selectRoute['letItem_id']]= msg;
        }
        else {
          this.letItem.weather = msg;
        }
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
