/**
 * 肥料档案新增/编辑组件
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
 * 描述：肥料信息对象
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
 * 返回：manure对象
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
        name: 'PopManure',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'category_id': 0,
                        'category_name': '',
                        'id': 0,
                        'name': '',
                        'usage': '',
                        'specification': '',
                        'dealer': '',
                        'origin': '',
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
                    'category_id': 0,
                    'category_name': '',
                    'id': 0,
                    'name': '',
                    'usage': '',
                    'specification': '',
                    'dealer': '',
                    'origin': '',
                    'phone': '',
                    'memo': ''
                },
                inputData: {
                    'category_id':
                    {
                        'label': '肥料分类',
                        'divfor': 'manure_category_id',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'name',
                        'index': 0,
                        'showVal': 'category_id',
                        'data':[]
                    },
                    'name':
                    {
                        'label': '肥料名称',
                        'divfor': 'manure_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'usage':
                    {
                        'label': '用途',
                        'divfor': 'manure_usage',
                        'placeholder': '',
                        'rules': ''
                    },
                    'specification': 
                    {
                        'label': '包装规格',
                        'divfor': 'manure_new_specification',
                        'placeholder': '',
                        'rules': ''
                    },
                    'dealer': 
                    {
                        'label': '经销商名称',
                        'divfor': 'manure_new_dealer',
                        'placeholder': '',
                        'rules': ''
                    },
                    'origin': 
                    {
                        'label': '产地',
                        'divfor': 'manure_new_origin',
                        'placeholder': '',
                        'rules': ''
                    },
                    'phone': 
                    {
                        'label': '联系方式',
                        'divfor': 'manure_new_phone',
                        'placeholder': '请输入11位手机号(固话用-隔开)',
                        'rules': 'phone'
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'manure_new_note',
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
            this.getAllManure();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {
            //判断是新建还是编辑
            getIndex: function() {
                if (this.edit == false) {
                    this.inputData['category_id']['index']=0;
                } else {
                    for(let index in this.inputData['category_id']['data']) {
                        if(this.inputData['category_id']['data'][index].id== this.letItem.category_id){
                            this.inputData['category_id']['index']=parseInt(index);
                        }
                    }
                }
            },
            /**
            * 获取所有肥料分类
            */
            getAllManure () {
                this.$http.get(this.$adminUrl('manure_category/query')).then((response)=>{
                    this.$set(this.inputData['category_id'], 'data', response.body.manure_categorys.data);
                    this.getIndex();
                }, (response)=>{

                });
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
                this.$unique(this.val, 'manure', params, 'letItem.name').then(() => {
                    for(let category of this.inputData['category_id']['data']){
                        if(category.id == this.letItem.category_id){
                            this.letItem.category_name = category.name;
                        }
                    }
                    if(this.edit) {
                        this.$update(this.val, 'manure', this.letItem).then((response) => {
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
                        this.$storeL(this.val, 'manure', this.letItem).then((response) => {
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
                this.letItem.category_id = msg[1];
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
