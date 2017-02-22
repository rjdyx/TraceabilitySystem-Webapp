/**
 * 种植批次新增/编辑组件
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
 * 描述：批次信息对象
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
 * 返回：fertilize对象
 * 必用：true
 * 描述：
 * 
 * 
 * 
 *   
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
            @getDate="getDate"
            @getMsg="getMsg"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

</style>

<script>

    export default {
        name: 'Popfertilize',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'id': '',
                        'plantation_id': '',
                        'plantation_name':'',
                        'plant_id':'',
                        'plant_name':'',
                        'serial': '',
                        'area': '',
                        'area_unit': '亩',
                        'cultivate_date': '',
                        'mode': '',
                        'density': '',
                        'operator': '',
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
                    'id': '',
                    'plantation_id': '',
                    'plantation_name':'',
                    'plant_id':'',
                    'plant_name':'',
                    'serial': '',
                    'area': '',
                    'area_unit': '亩',
                    'cultivate_date': '',
                    'mode': '',
                    'density': '',
                    'operator': '',
                    'memo': ''
                },
                inputData: {
                    'plantation_name':
                    {
                        'label': '所属种植区',
                        'divfor': 'plantation_name',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'name',
                        'index': 0,
                        'showVal': 'plantation_name',
                        'data':[]
                    },
                    'plant_name':
                    {
                        'label': '种植果蔬名称',
                        'divfor': 'plant_name',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'name',
                        'index': 0,
                        'showVal': 'plant_name',
                        'data':[]
                    },
                    'area':
                    {
                        'label': '种植面积',
                        'divfor': 'cultivate_new_area',
                        'placeholder': '请填写数字(必填)',
                        'rules': 'required|decimal:2',
                        'select': '3',
                        'index': 0,
                        'unit' : 'unit',
                        'data': ['亩', '平方米', '公顷']
                    },
                    'cultivate_date':
                    {
                        'label': '种植日期',
                        'divfor': 'cultivate_date',
                        'placeholder': '必填',
                        'rules': 'required|max:255',
                        'date': true
                    },
                    'mode': 
                    {
                        'label': '施肥人',
                        'divfor': 'cultivate_mode',
                        'placeholder': '',
                        'rules': ''
                    },
                    'density': 
                    {
                        'label': '移栽密度',
                        'divfor': 'cultivate_density',
                        'placeholder': '',
                        'rules': ''
                    },
                    'operator': 
                    {
                        'label': '种植人',
                        'divfor': 'cultivate_operator',
                        'placeholder': '',
                        'rules': ''
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'cultivate_new_note',
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
            let time = new Date();
            let date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
            this.letItem.cultivate_date = date;
            this.getAllPlantations();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {
            //判断是新建还是编辑
            getIndex: function() {
                if (this.edit == false) {
                    this.inputData['plantation_name']['index']=0;
                    this.inputData['plant_name']['index']=0;
                    this.inputData['area']['index']=0;
                } else {
                    for(let index in this.inputData['plantation_name']['data']) {
                        if(this.inputData['plantation_name']['data'][index].name== this.letItem.plantation_name){
                            this.inputData['plantation_name']['index']=parseInt(index);
                        }
                    }
                    for(let index in this.inputData['plant_name']['data']) {
                        if(this.inputData['plant_name']['data'][index].name== this.letItem.plant_name){
                            this.inputData['plant_name']['index']=parseInt(index);
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
            * 获取所有种植相关信息
            */
            getAllPlantations () {
                this.$http.get(this.$adminUrl('cultivate/create?params=')).then((response)=>{
                    this.$set(this.inputData['plantation_name'], 'data', response.body.plantations);
                    this.$set(this.inputData['plant_name'], 'data', response.body.plants);
                    this.getIndex();
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    this.$update(this.val, 'cultivate', this.letItem).then((response) => {
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
                    this.letItem.cultivate_id = this.cultivateId;
                    this.$storeL(this.val, 'cultivate', this.letItem).then((response) => {
                        this.letItem.id = response.body[0];
                        this.letItem.serial=response.body[1];
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
                if(msg[0]=="plantation_name") {
                    this.letItem.plantation_name=msg[2];
                    this.letItem.plantation_id = msg[1];
                }
                else {
                    this.letItem.plant_name=msg[2];
                    this.letItem.plant_id = msg[1];
                }
            },
            getMsg (msg) {
                this.letItem.area_unit = msg[1];
            },
            getDate: function(val) {
                this.letItem.cultivate_date = val;
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
