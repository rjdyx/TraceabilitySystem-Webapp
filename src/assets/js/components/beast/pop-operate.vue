/**
 * 人物档案新增/编辑组件
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
 * 描述：人物信息对象
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
 * 返回：operate对象
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
            @getMsgDataId="getMsgDataId"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";


</style>

<script>

    export default {
        name: 'Popoperate',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'id': 0,
                        'name': '',
                        'sex': 0,
                        'age': '',
                        'identity': '',
                        'phone': '',
                        'address': '',
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
                    'id': 0,
                    'name': '',
                    'sex': 0,
                    'age': '',
                    'identity': '',
                    'phone': '',
                    'address': '',
                    'memo': ''
                },
                inputData: {
                    'name':
                    {
                        'label': '姓名',
                        'divfor': 'operate_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'sex':
                    {
                        'label': '性别',
                        'divfor': 'operate_sex',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'sex',
                        'index': 0,
                        'showVal': 'sex',
                        'data':[
                            {id: 0, sex: '男'},
                            {id: 1, sex: '女'}
                        ]
                    },
                    'age':
                    {
                        'label': '年龄',
                        'divfor': 'operate_new_age',
                        'placeholder': '',
                        'rules': 'decimal'
                    },
                    'identity': 
                    {
                        'label': '身份',
                        'divfor': 'operate_new_identity',
                        'placeholder': '如后勤主管',
                        'rules': ''
                    },
                    'phone': 
                    {
                        'label': '联系方式',
                        'divfor': 'operate_new_phone',
                        'placeholder': '请输入11位手机号(固话用-隔开)',
                        'rules': 'phone'
                    },
                    'address': 
                    {
                        'label': '联系地址',
                        'divfor': 'operate_new_address',
                        'placeholder': '',
                        'rules': ''
                    },
                    'memo': 
                    {
                        'label': '备注信息',
                        'divfor': 'operate_new_note',
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
            this.getIndex();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {
            //判断是新建还是编辑
            getIndex: function() {
                if (this.edit == false) {
                    this.inputData['sex']['index']=0;
                } else {
                    for(let index in this.inputData['sex']['data']) {
                        if(this.inputData['sex']['data'][index].id== this.letItem.sex){
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
                    'field': 'name',
                    'value': this.letItem.name
                };
                this.$unique(this.val, 'operate', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        this.$update(this.val, 'operate', this.letItem).then((response) => {
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
                        this.$storeL(this.val, 'operate', this.letItem).then((response) => {
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
            getMsgDataId (msg) {
                this.letItem.sex = msg[1];
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
