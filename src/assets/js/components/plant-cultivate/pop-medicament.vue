/**
 * 种植批次施药新增组件
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
 * 描述：施药信息对象
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
 * 返回：medicament对象
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
            @getMsg="getMsg"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

</style>

<script>

    export default {
        name: 'Popmedicament',
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
                        'medicament_id': '',
                        'spray_date': '',
                        'way': '',
                        'amount': '',
                        'unit': 'ml/亩',
                        'concentration': '',
                        'isolation_period': '',
                        'expert_id': '',
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
                    'cultivate_id': 0,
                    'id': '',
                    'medicament_id': '',
                    'spray_date': '',
                    'way': '',
                    'amount': '',
                    'unit': 'ml/亩',
                    'concentration': '',
                    'isolation_period': '',
                    'expert_id': '',
                    'operator': '',
                    'memo': ''
                },
                inputData: {
                    'medicament_catagroy':
                    {
                        'label': '农药类别',
                        'divfor': 'medicament_catagroy',
                        'placeholder': '必填',
                        'rules': 'max:255',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'name',
                        'index': 0,
                        'showVal': 'medicament_catagroy',
                        'data':[]
                    },
                    'medicament_id':
                    {
                        'label': '农药名称',
                        'divfor': 'medicament_id',
                        'placeholder': '必填',
                        'rules': 'max:255',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'name',
                        'index': 0,
                        'showVal': 'medicament_id',
                        'data':[]
                    },
                    'spray_date':
                    {
                        'label': '施药日期',
                        'divfor': 'spray_date',
                        'placeholder': '必填',
                        'rules': 'required|max:255',
                        'date': true
                    },
                    'way' :
                    {
                        'label': '施药方式',
                        'divfor': 'medicament_new_way',
                        'placeholder': '',
                        'rules': 'max:255',
                    },
                    'amount':
                    {
                        'label': '平均施药量',
                        'divfor': 'medicament_new_amount',
                        'placeholder': '请填写数字(必填)',
                        'rules': 'required|decimal:2',
                        'select': '3',
                        'index': 0,
                        'unit' : 'unit',
                        'data': ['ml/亩', 'ml/平方米', 'ml/公顷']
                    },
                    'concentration':
                    {
                        'label': '施药浓度（倍）',
                        'divfor': 'medicament_concentration',
                        'placeholder': '',
                        'rules': 'max:255',
                    },
                    'isolation_period': 
                    {
                        'label': '安全隔离期(天)',
                        'divfor': 'medicament_isolation_period',
                        'placeholder': '',
                        'rules': 'max:255',
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
                        'label': '施药人',
                        'divfor': 'medicament_new_user',
                        'placeholder': '',
                        'rules': 'max:255'
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
            this.letItem.spray_date = date;
            this.getAllmedicamenttion();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {

            /**
            * 获取所有农药类别和专家
            */
            getAllmedicamenttion () {

                this.$http.get(this.$adminUrl('medicament_category/query')).then((response)=>{
                    this.$set(this.inputData['medicament_catagroy'], 'data', response.body.medicament_categorys.data);
                }, (response)=>{

                });

                if (this.edit) {
                    this.$http.get(this.$adminUrl('spray/select_category?params='+this.letItem.category_id)).then((response)=>{
                        this.$set(this, 'medicamentIds', response.body);
                    }, (response)=>{

                    });
                }

                this.$http.get(this.$adminUrl('expert/query?params[type]=spray')).then((response)=>{
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
                    this.$update(this.val, 'spray', this.letItem).then((response) => {
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
                    this.$storeL(this.val, 'spray', this.letItem).then((response) => {
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
                this.letItem.spray_date=val;
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgDataId (msg) {
                if(msg[0]=='medicament_catagroy') {
                    this.letItem.medicament_catagroy = msg[1];
                    this.$http.get(this.$adminUrl('medicament/query?params[query_class]='+msg[1])).then((response)=>{
                        this.$set(this.inputData['medicament_id'], 'data', response.body.medicaments.data);
                    }, (response)=>{

                    });
                }
                else if(msg[0]=='medicament_id') {
                    this.letItem.medicament_id = msg[1];
                }
                else if(msg[0]=='expert_id'){
                    this.letItem.expert_id = msg[1];
                }
            },          
            getMsg (msg) {
                this.letItem.unit = msg[1];
            },
            destroyed () {
                if(this.edit){
                    for(let key of Object.keys(this.letItem)){
                            this.letItem[key] = this.tmp[key];
                        }
                }
            }
        }
    }
</script>
