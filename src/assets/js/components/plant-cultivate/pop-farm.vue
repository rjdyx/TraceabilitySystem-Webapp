/**
 * 种植批次农事新增组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/06
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：农事信息对象
 * 
 * @param  edit 
 * 类型：Boolean
 * 是否必填：false
 * 默认值：false
 * 描述：表明此组件是用于新增还是编辑，true表示编辑，false表示新增
 * 
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
 * 返回：farming对象
 * 必用：true
 * 描述：
 * 
 * 
 * 
 */
<template>
    <form @submit.prevent="validateBeforeSubmit">
        <form-submit
            :letItem="letItem"
            :inputData="inputData"
            :edit="edit"
            @closeNew="cancelAdd"
            @thisSet="getThis"
            @getDate="getDate"
            @getMsgDataId="getMsgDataId"
            @getMsgDataVal="getMsgDataVal"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

</style>

<script>

    export default {
        name: 'Popfarming',
        props: {
            cultivateId: {
                type: Number,
                default: 0
            },
            letItem: {
                type: Object,
                default() {
                    return {
                        'cultivate_id': 0,
                        'id': '',
                        'farming_date': '',
                        'method': '',
                        'content': '',
                        'operate': '',
                        'weather': '晴天',
                        'expert_id': '',
                        'memo': ''
                    }
                }
            },
            // 表示此模块是编辑模块还是新增模块的标志
            edit: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                tmp: {
                    'cultivate_id': 0,
                    'id': '',
                    'farming_date': '',
                    'method': '',
                    'content': '',
                    'operate': '',
                    'weather': '晴天',
                    'expert_id': '',
                    'memo': ''
                },
                inputData: {
                    'farming_date':
                    {
                        'label': '操作日期',
                        'divfor': 'farming_farming_date',
                        'placeholder': '必填',
                        'rules': 'required',
                        'date': true
                    },
                    'method':
                    {
                        'label': '操作方法',
                        'divfor': 'farming_method',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'content':
                    {
                        'label': '操作内容',
                        'divfor': 'farming_content',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'operate': 
                    {
                        'label': '操作人员',
                        'divfor': 'farming_operate',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'weather': 
                    {
                        'label': '天气状态',
                        'divfor': 'weather',
                        'placeholder': '',
                        'rules': 'max:255',
                        'select': '2',
                        'index': 0,
                        'data': ['晴天', '雨天', '阴天', '雪天', '其他']
                    },
                    'expert_id': 
                    {
                        'label': '指导专家',
                        'divfor': 'product_new_place_origin',
                        'placeholder': '必填',
                        'rules': 'max:255',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'expert_name',
                        'index': 0,
                        'data': []
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'farming_new_note',
                        'placeholder': '',
                        'rules': ''
                    }
                },
                val:''
            }
        },
        computed: {

        },
        mounted () {
            this.getAllfarmingtion();
            this.getWeatherIndex();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {
            getWeatherIndex() {
              if (this.edit == false) {
                    this.inputData['weather']['index']=0;
                } else {
                  for(let index in this.inputData['weather']['data']){
                      if(this.inputData['weather']['data'][index] == this.letItem.weather){
                          this.inputData['weather']['index']=parseInt(index);
                      }
                  }
                  this.inputData['weather']['index']=0;
              }
            },
            /**
            * 获取所有专家
            */
            getAllfarmingtion () {
                this.$http.get(this.$adminUrl('expert/query?params[type]=farming')).then((response)=>{
                    this.$set(this.inputData['expert_id'], 'data', response.body.experts.data);
                    this.inputData['expert_id']['data'].unshift({id: '' ,expert_name: '无'});
                }, (response)=>{

                });
            },
            getThis: function(val) {
                this.val=val;
            },
            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    this.$update(this.val, 'farming', this.letItem).then((response) => {
                        for(let key of Object.keys(this.letItem)){
                            this.tmp[key] = this.letItem[key];
                        }
                        this.$alert('修改成功', 's');
                    }, (response) => {
                        if(response != false) {
                            this.$alert('连接出错', 'e');
                        }else {
                            return false;
                        }
                    });
                }else {
                    let cultivateId = this.cultivateId == 0 ? this.$route.params.id : this.cultivateId;
                    this.letItem.cultivate_id = cultivateId;
                    this.$storeL(this.val, 'farming', this.letItem).then((response) => {
                        this.letItem.id = response.body;
                        this.$emit('callback', this.letItem);
                        this.$alert('新增成功', 's');
                    }, (response) => {
                        if(response != false) {
                            this.$alert('连接出错', 'e');
                        }else {
                            return false;
                        }
                    });
                }
            },
            /**
            * 隐藏新增模块
            */
            cancelAdd () {
                this.$emit('closeNew');
            },
            /**
            * 获取时间
            */
            getDate: function(val) {
                this.letItem.farming_date=val;
            },
            /**
            * 获取下拉框id值
            */
            getMsgDataId: function(msg) {
                this.letItem.expert_id=msg[1];
            },
            /**
            * 隐藏获取下拉框非id值
            */
            getMsgDataVal: function(msg) {
                this.letItem.weather=msg[1];
            }
        },
        destroyed () {
            if(this.edit){
                for(let key of Object.keys(this.letItem)){
                    this.letItem[key] = this.tmp[key];
                }
            }
        },
    }

</script>
