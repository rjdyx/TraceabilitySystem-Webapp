/**
 * 专家档案新增/编辑组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/01
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：专家信息对象
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
 * 返回：expert对象
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
            @closeEdit="cancelEdit"
            @thisSet="getThis"
            @getMsgDataVal="getMsgDataVal"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";


</style>

<script>

    export default {
        expert_name: 'PopExpert',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'class_type': 1,
                        'table_type': 'fodderuse',
                        'id': 0,
                        'expert_name': '',
                        'major': '',
                        'level': '',
                        'sex': '男',
                        'age': '',
                        'unit': '',
                        'phone': '',
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
                    'class_type': 1,
                    'table_type': 'fodderuse',
                    'id': 0,
                    'expert_name': '',
                    'major': '',
                    'level': '',
                    'sex': '男',
                    'age': '',
                    'unit': '',
                    'phone': '',
                    'memo': ''
                },
                inputData: {
                    'table_type':
                    {
                        'label': '操作模块',
                        'divfor': 'expert_table_type',
                        'placeholder': '',
                        'rules': 'max:255',
                        'select': '2',
                        'index': 0,
                        'showVal': 'table_type',
                        'data': ['饲料使用','畜禽病疫','畜禽检疫','畜禽圈舍']
                    },
                    'expert_name':
                    {
                        'label': '专家名称',
                        'divfor': 'expert_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'major':
                    {
                        'label': '研究领域',
                        'divfor': 'expert_major',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'level': 
                    {
                        'label': '级别',
                        'divfor': 'expert_level',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'sex': 
                    {
                        'label': '性别',
                        'divfor': 'expert_sex',
                        'placeholder': '',
                        'rules': 'max:255',
                        'select': '2',
                        'index': 0,
                        'showVal': 'sex',
                        'data': ['男','女']
                    },
                    'age': 
                    {
                        'label': '年龄',
                        'divfor': 'expert_new_age',
                        'placeholder': '',
                        'rules': 'decimal'
                    },
                    'unit': 
                    {
                        'label': '所属单位',
                        'divfor': 'expert_new_unit',
                        'placeholder': '',
                        'rules': ''
                    },
                    'phone': 
                    {
                        'label': '联系方式',
                        'divfor': 'expert_new_phone',
                        'placeholder': '请输入11位手机号(固话用-隔开)',
                        'rules': 'phone'
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'medicament_new_note',
                        'placeholder': '',
                        'rules': ''
                    }
                },
                val:'',
                tableSet: ['fodderuse','disease','detection','area']
            }
        },
        computed: {

        },
        mounted () {
            this.getIndex();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {
            //判断是新建还是编辑
            getIndex: function() {
                if (this.edit == false) {
                    this.inputData['table_type']['index']=0;
                    this.inputData['sex']['index']=0;
                } else {
                    for(let index in this.inputData['table_type']['data']) {
                        if(this.tableSet[index]== this.letItem.table_type){
                            this.inputData['table_type']['index']=parseInt(index);
                        }
                    }
                    for(let index in this.inputData['sex']['data']) {
                        if(this.inputData['sex']['data'][index]== this.letItem.sex){
                            this.inputData['sex']['index']=parseInt(index);
                        }
                    }
                }
            },
            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                let params = {
                    'id': this.letItem.id,
                    'field': 'expert_name',
                    'value': this.letItem.expert_name
                };
                this.$unique(this.val, 'expert', params, 'letItem.expert_name').then(() => {

                    if(this.edit) {
                        this.$update(this.val, 'expert', this.letItem).then((response) => {
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
                        this.$storeL(this.val, 'expert', this.letItem).then((response) => {
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

                }, () => {
                    return false;
                });
            },
            getThis: function(val) {
                this.val=val;
            },
            /**
            * 隐藏新增模块
            */
            cancelAdd: function() {
                this.$emit('closeNew');
            },
            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEdit: function() {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgDataVal (msg) {
                if(msg[0]=='sex') {
                    this.letItem.sex = msg[1];
                }
                else {
                    for(let index of Object.keys(this.inputData['table_type']['data'])) {
                        if(this.inputData['table_type']['data'][index] == msg[1]) {
                            this.letItem.table_type = this.tableSet[index];
                        }
                    }
                }              
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
