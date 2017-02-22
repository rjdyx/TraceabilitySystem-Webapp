/**
 * 饲料档案新增/编辑组件
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
 * 描述：饲料档案信息对象
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
 * 返回：fodder对象
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
        name: 'Popfodder',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'id': '',
                        'fodder_type': 1,
                        'name': '',
                        'use': '',
                        'specification': '',
                        'vender_name': '',
                        'address': '',
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
                // 作为编辑组件时，用于临时备份父组件传递过来的数据，
                // 以便在修改了数据但不保存时可以复原数据
                tmp: {
                    'id': '',
                    'fodder_type': 1,
                    'name': '',
                    'use': '',
                    'specification': '',
                    'vender_name': '',
                    'address': '',
                    'phone': '',
                    'memo': ''
                },
                inputData: {
                    'fodder_type':
                    {
                        'label': '饲料类别',
                        'divfor': 'fodder_new_select',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'name',
                        'index': 0,
                        'showVal': 'fodder_type',
                        'data':[
                            {id: 1, name: '粗粮类'},
                            {id: 2, name: '维生素类'},
                            {id: 3, name: '青蔬类'},
                            {id: 4, name: '矿物质类'},
                            {id: 5, name: '干草料类'},
                            {id: 6, name: '其他类'},
                        ]
                    },
                    'name':
                    {
                        'label': '饲料名称',
                        'divfor': 'fodder_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'use':
                    {
                        'label': '用途',
                        'divfor': 'fodder_new_specification',
                        'placeholder': '',
                        'rules': ''
                    },
                    'vender_name': 
                    {
                        'label': '生产厂家名称',
                        'divfor': 'fodder_new_vender_name',
                        'placeholder': '',
                        'rules': ''
                    },
                    'address': 
                    {
                        'label': '产地',
                        'divfor': 'fodder_new_address',
                        'placeholder': '',
                        'rules': ''
                    },
                    'phone': 
                    {
                        'label': '联系方式',
                        'divfor': 'fodder_new_phone',
                        'placeholder': '请输入11位手机号(固话用-隔开)',
                        'rules': 'phone'
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'fodder_new_note',
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
                    this.inputData['fodder_type']['index']=0;
                } else {
                    for(let index in this.inputData['fodder_type']['data']) {
                        if(this.inputData['fodder_type']['data'][index].id== this.letItem.fodder_type){
                            this.inputData['fodder_type']['index']=parseInt(index);
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
                this.$unique(this.val, 'fodder', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        this.$update(this.val, 'fodder', this.letItem).then((response) => {
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
                        this.$storeL(this.val, 'fodder', this.letItem).then((response) => {
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
                this.letItem.fodder_type = msg[1];
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
