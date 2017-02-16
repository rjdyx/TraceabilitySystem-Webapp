/**
 * 种植批次施肥新增组件
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
 * 描述：施肥信息对象
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
        name: 'Popfertilize',
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
                        'manure_id': '',
                        'fertilize_date': '',
                        'amount': '',
                        'unit': 'kg/亩',
                        'expert_id': '',
                        'operator': '',
                        'way': '',
                        'memo': ''
                    }
                }
            },
            // 表示此模块是编辑模块还是新增模块的标志
            edit: {
                type: Boolean,
                default: false
            },
            // 是否与批次相关联
            referCultivate: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                tmp: {
                    'cultivate_id': 0,
                    'id': '',
                    'manure_id': '',
                    'fertilize_date': '',
                    'amount': '',
                    'unit': 'kg/亩',
                    'expert_id': '',
                    'operator': '',
                    'way': '',
                    'memo': ''
                },
                inputData: {
                    'manure_select':
                    {
                        'label': '肥料类别',
                        'divfor': 'manure_select',
                        'placeholder': '必填',
                        'rules': 'max:255',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'name',
                        'index': 0,
                        'showVal': 'manure_select',
                        'data':[]
                    },
                    'manure_id':
                    {
                        'label': '肥料名称',
                        'divfor': 'manure_id',
                        'placeholder': '必填',
                        'rules': 'max:255',
                        'protoBack' :'id',
                        'select': '1',
                        'selectName':'name',
                        'index': 0,
                        'showVal': 'manure_id',
                        'data':[]
                    },
                    'fertilize_date':
                    {
                        'label': '施肥日期',
                        'divfor': 'fertilize_date',
                        'placeholder': '必填',
                        'rules': 'required|max:255',
                        'date': true
                    },
                    'amount':
                    {
                        'label': '平均肥料用量',
                        'divfor': 'fertilize_new_amount',
                        'placeholder': '请填写数字(必填)',
                        'rules': 'required|decimal:2',
                        'select': '3',
                        'index': 0,
                        'unit' : 'unit',
                        'data': ['kg/亩', 'kg/平方米', 'kg/公顷']
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
                        'label': '施肥人',
                        'divfor': 'fertilize_new_user',
                        'placeholder': '',
                        'rules': ''
                    },
                    'way': 
                    {
                        'label': '施肥方式',
                        'divfor': 'fertilize_new_way',
                        'placeholder': '',
                        'rules': ''
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'farming_new_note',
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
            this.letItem.fertilize_date = date;
            this.getAllfertilizetion();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {

            /**
            * 获取所有肥料类别和专家
            */
            getAllfertilizetion () {

                this.$http.get(this.$adminUrl('manure_category/query')).then((response)=>{
                    this.$set(this.inputData['manure_select'], 'data', response.body.manure_categorys.data);
                }, (response)=>{

                });

                if (this.edit) {
                    this.$http.get(this.$adminUrl('fertilize/select_category?params='+this.letItem.category_id)).then((response)=>{
                        this.$set(this, 'ManureIds', response.body);
                    }, (response)=>{

                    });
                }

                this.$http.get(this.$adminUrl('expert/query?params[type]=fertilize')).then((response)=>{
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
                    this.$update(this.val, 'fertilize', this.letItem).then((response) => {
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
                    this.$storeL(this.val, 'fertilize', this.letItem).then((response) => {
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
                this.letItem.fertilize_date=val;
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgDataId (msg) {
                if(msg[0]=='manure_select') {
                    this.letItem.manure_select = msg[1];
                    this.$http.get(this.$adminUrl('manure/query?params[query_class]='+msg[1])).then((response)=>{
                        this.$set(this.inputData['manure_id'], 'data', response.body.manures.data);
                    }, (response)=>{

                    });
                }
                else if(msg[0]=='manure_id') {
                    this.letItem.manure_id = msg[1];
                }
                else if(msg[0]=='expert_id'){
                    this.letItem.expert_id = msg[1];
                }
            },
            getMsg (msg) {
                this.letItem.unit = msg[1];
            },
            /**
             * 获取表单信息
             * @return {Object} 表单对象
             */
            getFormMsg () {
                return this.letItem;
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
