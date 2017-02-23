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
      <!--时间插件-->
      <tr v-if="item.date">
          <td class="label-tit"><label :for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2">
          <date-picker 
            :name="key"
            :date="letItem[key]"
            @getDate="getDate">
          </date-picker></td>
      </tr>
      <!--图片上传样式-->
      <tr v-else-if="item.pic">
        <td colspan="3">
            <div @click="selectPic" class="pic-preview">
                <img v-if="letItem.image == '' || letItem.image == null" :src="$img(image)">
                <img v-else-if="letItem.image == 'upload.png'" :src="$img(letItem.image)">
                <img v-else :src="$img(letItem.image, false)">
            </div>
            <input :name="key" type="file" hidden="hidden" @change="previewPic(item, $event)">
            <input :name="key" v-model="imgHidden" type="text" hidden="hidden" 
            v-bind:placeholder="item.placeholder" 
            v-validate.initial="letItem[key]" 
            v-bind:data-vv-rules="item.rules" 
            v-bind:data-vv-as="item.label" >
            <div class="delete-pic-btn">
                <button type="button" @click="deletePic">删除</button>
            </div>
        </td>
      </tr>
      <!--下拉框非固定值-->
      <tr v-else-if="item.select=='1'">
          <td class="label-tit"><label :for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2"><pop-select :name="key"
              :items="item.data"
              :defaultIndex="item.index"
              :protoBack="item.protoBack"
              :protoShow="item.selectName"
              :showVal="item.showVal"
              @callback="getMsgDataId"
          ></pop-select></td>
      </tr>
      <!--下拉框固定值-->
      <tr v-else-if="item.select=='2'">
          <td class="label-tit"><label :for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2">
              <pop-select name="weather"
                  :items="item.data"
                  :defaultIndex="item.index"
                  :showVal="item.showVal"
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
      <!--input框有传值-->
      <tr v-else-if="item.val">
          <td class="label-tit"><label v-bind:for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2"><input 
          v-model="constItem[key]"  class="input-pop"
          type="text" v-bind:id="item.divfor" :name="key" v-bind:placeholder="item.placeholder" disabled="disabled"></td>
      </tr>
      <!--input框无传值-->
      <tr v-else>
          <td class="label-tit"><label v-bind:for="item.divfor">{{item.label}}</label></td>
          <td class="input-pop" colspan="2"><input 
          v-model="letItem[key]" 
          v-validate.initial="letItem[key]" 
          v-bind:data-vv-rules="item.rules" 
          v-bind:data-vv-as="item.label" 
          type="text" v-bind:id="item.divfor" :name="key" v-bind:placeholder="item.placeholder"></td>
      </tr>
      <template v-if="item.rules!=''">
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


<script>
export default {
    name: 'form-submit',
    data () {
      return {
        defaultData:0,
        image: 'upload.png',
        pattern: {
          type: Array,
          default () {
              return ['jpeg', 'png'];
          }
        },
        imgHidden:''
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
        // 传递给component的参数
        args: {
          type: Object,
          default () {
            return {edit: true}
          }
        },
        constItem: {
          type: Object,
          default() {
            return {}
          }
        }
    },
    computed: {
      edit () {
        return this.args.edit
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
          this.$emit('getMsgDataId',msg);
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
      },
      /**
       *  获取input[type="file"]里的图片，预览到页面上
       */
      previewPic (srcPic, event) {
        // 获取选中的图片文件，并判断选中的图片数量是否合法
        let file = event.target.files[0];
        // 将pattern数组里的图片格式组装成"xxx|xxx|xxx"这样的格式，如："jpeg|png"
        let regexParams = '';
        for(let index = 0; index < this.pattern.length; index++) {
           regexParams += this.pattern[index]+(index == this.pattern.length - 1?'':'|');
        }
        // 将组装后的图片格式字符串传给正则表达式构造器，最后生成如/\/(?:jpeg|png)/i这样的正则表达式
        let regex = new RegExp('\/(?:' + regexParams + ')', 'i');
        // 过滤图片格式，如果出现格式不合法的，则取消此图片的上传操作
        if (!regex.test(file.type)){
            alert("请选择格式为 " + this.pattern + " 的图片");
            return;
        }
        // 开始读取选中的图片，添加预览到页面
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
          this.letItem.image = e.target.result;
          this.imgHidden='aa';
          this.$emit('getPic',file);
        }
      },
      /**
       * 触发input[type="file"]的click事件来选择图片
       * @param  {object} event
       */
      selectPic (event) {
        // 取出空格
        let obj = event.target.parentNode.nextSibling;
        if(obj.tagName != 'INPUT'){
            obj = obj.nextSibling;
        }
        if(obj.tagName != 'INPUT'){
            obj = event.target.nextSibling.nextSibling;
        }
        // 触发input的click事件
        obj.click();
      },
      /**
       * 删除图片
       * 
       */
      deletePic () {
        this.letItem.image = 'upload.png';
        this.$emit('getPic','');
        this.imgHidden='';
      }
    }
  }
</script>

<style lang="sass" scoped>

@import "../../../sass/function";
.form-pop {
    .pic-preview {
        width: 100%;
        height: pxToRem(200);
        border-bottom: 1px solid #d4d4d4;
        text-align: center;

        img {
            height: 100%;
        }
    }
    .delete-pic-btn {
        text-align: center;
        button {
            width: pxToRem(100);
            height: pxToRem(39);
            margin: pxToRem(7) 0;
            background-color: white;
            border: 1px solid #d4d4d4;
        }
    }
}
</style>
