/**
 * 种植批次检测新增组件
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
 * 描述：检测信息对象
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
 * 返回：detect对象
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
            @getMsgDataId="getMsgDataId"
            @getDate="getDate"
            @getMsgDataVal="getMsgDataVal"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

</style>

<script>

    export default {
        name: 'Popdetect',
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
                        'detect_content': '水质检测',
                        'detect_date': '',
                        'department': '',
                        'item': '',
                        'expert_id': '',
                        'operator': '',
                        'result': '合格',
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
                    'detect_content': '水质检测',
                    'detect_date': '',
                    'department': '',
                    'item': '',
                    'expert_id': '',
                    'operator': '',
                    'result': '合格',
                    'memo': ''
                },
                inputData: {
                    'detect_content':
                    {
                        'label': '检测类型',
                        'divfor': 'detect_content',
                        'placeholder': '',
                        'rules': 'max:255',
                        'select': '2',
                        'index': 0,
                        'showVal': 'detect_content',
                        'data': ['水质检测', '土壤检测', '农药残留检测', '大气污染检测', '其他检测']
                    },
                    'detect_date':
                    {
                        'label': '检测日期',
                        'divfor': 'detect_date',
                        'placeholder': '必填',
                        'rules': 'required|max:255',
                        'date': true
                    },
                    'department':
                    {
                        'label': '检测机构',
                        'divfor': 'department',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'item':
                    {
                        'label': '检测项目名称',
                        'divfor': 'detect_item',
                        'placeholder': '',
                        'rules': 'max:255'
                    },
                    'expert_id': 
                    {
                        'label': '指导专家',
                        'divfor': 'expert_id',
                        'rules': 'required|max:255',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'expert_name',
                        'index': 0,
                        'showVal': 'expert_id',
                        'data':[]
                    },
                    'operator': 
                    {
                        'label': '检测人',
                        'divfor': 'detect_operator',
                        'placeholder': '',
                        'rules': 'max:255'
                    },
                    'result':
                    {
                        'label': '检测结果',
                        'divfor': 'result',
                        'placeholder': '',
                        'rules': 'max:255',
                        'select': '2',
                        'index': 0,
                        'showVal': 'result',
                        'data': ['合格', '不合格']
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'farming_new_note',
                        'placeholder': '',
                        'rules': 'max:255'
                    }
                },
                val:''
            }
        },
        computed: {
            
        },
        mounted () {
            let time = new Date();
            let date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
            this.letItem.detect_date = date;
            this.getAlldetecttion();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {

            /**
            * 获取所有专家
            */
            getAlldetecttion () {

                this.$http.get(this.$adminUrl('expert/query?params[type]=detect')).then((response)=>{
                    this.$set(this.inputData['expert_id'], 'data', response.body.experts.data);
                    this.inputData['expert_id']['data'].unshift({id: '' ,expert_name: '无'})
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    if (this.letItem.Approval == null) {
                        this.letItem.Approval = '';
                    }
                    this.$update(this.val, 'detect', this.letItem).then((response) => {
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
                    this.$storeL(this.val, 'detect', this.letItem).then((response) => {
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
            getThis: function(val) {
                this.val=val;
            },
            /**
            * 获取时间
            */
            getDate: function(val) {
                this.letItem.detect_date=val;
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgDataVal (msg) {
                if(msg[0]=='detect_content') {
                    this.letItem.detect_content = msg[1];
                }
                else {
                    this.letItem.result = msg[1];
                }
            },
            getMsgDataId (msg) {
                this.letItem.expert_id = msg[1];                
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
