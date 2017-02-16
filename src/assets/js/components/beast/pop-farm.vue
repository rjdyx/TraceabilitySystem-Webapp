/**
 * 养殖场新增/编辑组件
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
 * 描述：养殖场信息对象
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
 * 返回：farm对象
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
        name: 'Popfarm',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'id': '',
                        'name': '',
                        'area': 0,
                        'kind': '',
                        'scale': '',
                        'address': '',
                        'principal': '',
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
                    'name': '',
                    'area': 0,
                    'kind': '',
                    'scale': '',
                    'address': '',
                    'principal': '',
                    'memo': ''
                },
                inputData: {
                    'name':
                    {
                        'label': '养殖场名称',
                        'divfor': 'farm_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'area':
                    {
                        'label': '养殖面积',
                        'divfor': 'farm_new_area',
                        'placeholder': '请填写数字(必填),单位是亩',
                        'rules': 'required|decimal:2',
                    },
                    'principal':
                    {
                        'label': '负责人',
                        'divfor': 'farm_new_principal',
                        'placeholder': '',
                        'rules': ''
                    },
                    'kind': 
                    {
                        'label': '养殖畜禽种类',
                        'divfor': 'farm_new_kind',
                        'placeholder': '',
                        'rules': ''
                    },
                    'scale': 
                    {
                        'label': '养殖规模',
                        'divfor': 'farm_new_scale',
                        'placeholder': '',
                        'rules': ''
                    },
                    'address': 
                    {
                        'label': '地址',
                        'divfor': 'farm_new_address',
                        'placeholder': '',
                        'rules': ''
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'farm_new_note',
                        'placeholder': '',
                        'rules': ''
                    }
                },
                val:''
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

                let params = {
                    'id': this.letItem.id,
                    'field': 'name',
                    'value': this.letItem.name
                };
                this.$unique(this.val, 'farm', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        this.$update(this.val, 'farm', this.letItem).then((response) => {
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
                        this.$storeL(this.val, 'farm', this.letItem).then((response) => {
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
