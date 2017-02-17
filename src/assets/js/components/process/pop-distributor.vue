/**
 * 种植场新增/编辑组件
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：种植场信息对象
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
 * 返回：plantation对象
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
        ></form-submit>
  </form>
</template>

<style lang="sass" scoped>
@import "../../../sass/function";
</style>

<script>

    export default {
        name: 'PopDistributor',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'id': '',
                        'name':'',
                        'contacts': '',
                        'phone': '',
                        'address': '',
                        'business_scope': '',
                        'memo': ''
                    }
                }
            },
            // 表示此模块是编辑模块还是新增模块的标志
            edit: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                // 作为编辑组件时，用于临时备份父组件传递过来的数据，
                // 以便在修改了数据但不保存时可以复原数据
                tmp: {
                    'id': '',
                    'name':'',
                    'contacts': '',
                    'phone': '',
                    'address': '',
                    'business_scope': '',
                    'memo': ''
                },
                inputData: {
                    'name':
                    {
                        'label': '经销商名称',
                        'divfor': 'distributor_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'contacts':
                    {
                        'label': '联系人',
                        'divfor': 'distributor_new_contacts',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'phone':
                    {
                        'label': '联系电话',
                        'divfor': 'distributor_new_phone',
                        'placeholder': '必填',
                        'rules': 'required|phone'
                    },
                    'address': 
                    {
                        'label': '地址',
                        'divfor': 'distributor_new_address',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'business_scope': 
                    {
                        'label': '经营范围',
                        'divfor': 'distributor_new_business_scope',
                        'placeholder': '',
                        'rules': ''
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'distributor_new_note',
                        'placeholder': '',
                        'rules': ''
                    }
                },
                val: ''
            }
        },
        mounted () {
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {
            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                this.letItem['difference']='plant';
                let params = {
                    'id': this.letItem.id,
                    'field': 'name',
                    'type' : 'plant',
                    'value': this.letItem.name
                };
                this.$unique(this.val, 'distributor', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        this.$update(this.val, 'distributor', this.letItem).then((response) => {
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
                        this.$storeL(this.val, 'distributor', this.letItem).then((response) => {
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
