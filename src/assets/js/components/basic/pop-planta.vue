/**
 * 种植区新增/编辑组件
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
 * 描述：种植区信息对象
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
 * 返回：planta对象
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
            @getMsg="getMsg"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

</style>

<script>

    export default {
        name: 'PopPlanta',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'pid': 0,
                        'id': '',
                        'name': '',
                        'area': 0,
                        'area_unit': '亩',
                        'phone': '',
                        'address': '',
                        'director': '',
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
                    'pid': 0,
                    'id': '',
                    'name': '',
                    'area': 0,
                    'area_unit': '亩',
                    'phone': '',
                    'address': '',
                    'director': '',
                    'memo': ''
                },
                inputData: {
                    'pid':
                    {
                        'label': '种植场名称',
                        'divfor': 'plantation_fullName',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'name',
                        'index': 0,
                        'showVal': 'plantation_name',
                        'data':[]
                    },
                    'name':
                    {
                        'label': '种植区名称',
                        'divfor': 'planta_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'area':
                    {
                        'label': '种植面积',
                        'divfor': 'planta_new_area',
                        'placeholder': '请填写数字(必填)',
                        'rules': 'required|decimal:2',
                        'select': '3',
                        'index': 0,
                        'unit' : 'area_unit',
                        'data': ['亩', '平方米', '公顷']
                    },
                    'phone':
                    {
                        'label': '详细电话',
                        'divfor': 'planta_new_phone',
                        'placeholder': '请输入11位手机号(固话用-隔开)',
                        'rules': 'phone'
                    },
                    'address': 
                    {
                        'label': '详细地址',
                        'divfor': 'plantation_new_address',
                        'placeholder': '',
                        'rules': ''
                    },
                    'director': 
                    {
                        'label': '负责人',
                        'divfor': 'planta_new_address',
                        'placeholder': '',
                        'rules': ''
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'planta_new_note',
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
            this.getAllPlantation();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {
            //判断是新建还是编辑
            getIndex: function() {
                if (this.edit == false) {
                    this.inputData['pid']['index']=0;
                    this.inputData['area']['index']=0;
                } else {
                    for(let index in this.inputData['pid']['data']) {
                        if(this.inputData['pid']['data'][index].id== this.letItem.pid){
                            this.inputData['pid']['index']=parseInt(index);
                        }
                    }
                    for(let index in this.inputData['area']['data']) {
                        if(this.inputData['area']['data'][index]== this.letItem.area_unit){
                            this.inputData['area']['index']=parseInt(index);
                        }
                    }     
                }
            },
            /**
            * 获取所有种植场
            */
            getAllPlantation () {
                this.$http.get(this.$adminUrl('planta/create')).then((response)=>{
                    this.$set(this.inputData['pid'], 'data', response.body);
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
                this.$unique(this.val, 'planta', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        this.$update(this, 'planta', this.letItem).then((response) => {
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
                        this.$storeL(this.val, 'planta', this.letItem).then((response) => {
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
            getMsg (msg) {
                this.letItem.area_unit = msg[1];
            },
            getMsgDataId (msg) {
                this.letItem.pid = msg[1];
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
