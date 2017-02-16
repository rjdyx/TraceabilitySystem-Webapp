/**
 * 种植批次采收新增组件
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
 * 描述：采收信息对象
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
 * 返回：harvest对象
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
            :constItem="constItem"
            @closeNew="cancelAdd"
            @thisSet="getThis"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

</style>

<script>

    export default {
        name: 'Popharvest',
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
                        'plantation_id': '',
                        'harvest_date': '',
                        'amount': '',
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
                    'plantation_id': '',
                    'harvest_date': '',
                    'amount': '',
                    'operator': '',
                    'memo': ''
                },
                constItem: {
                    'plantation_name': '',
                    'serial': '',
                    'plant_name': '',
                    'cultivate_date': '',
                    'area': ''
                },
                inputData: {
                    'harvest_date':
                    {
                        'label': '采收日期',
                        'divfor': 'harvest_date',
                        'placeholder': '必填',
                        'rules': 'required|max:255',
                        'date': true
                    },
                    'plantation_name':
                    {
                        'label': '所属种植区',
                        'divfor': 'harvest_plantation_name',
                        'placeholder': '必填',
                        'rules': 'required|max:255',
                        'val': true
                    },
                    'serial':
                    {
                        'label': '种植批次号',
                        'divfor': 'harvest_serial',
                        'placeholder': '必填',
                        'rules': 'required',
                        'val': true
                    },
                    'plant_name': 
                    {
                        'label': '果蔬名称',
                        'divfor': 'harvest_plant_name',
                        'placeholder': '必填',
                        'rules': 'required',
                        'val': true
                    },
                    'cultivate_date': 
                    {
                        'label': '种植日期',
                        'divfor': 'harvest_cultivate_date',
                        'placeholder': '必填',
                        'rules': 'required',
                        'val': true
                    },
                    'area': 
                    {
                        'label': '种植面积',
                        'divfor': 'harvest_area',
                        'placeholder': '必填',
                        'rules': 'required',
                        'val': true
                    },
                    'amount': 
                    {
                        'label': '采收数量',
                        'divfor': 'harvest_amount',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'operator': 
                    {
                        'label': '采收人',
                        'divfor': 'harvest_operator',
                        'placeholder': '',
                        'rules': ''
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'harvest_new_note',
                        'placeholder': '',
                        'rules': ''
                    }
                },
                val: ''
                
            }
        },
        mounted () {
            let time = new Date();
            let date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
            this.letItem.harvest_date = date;
            this.getHarvesttion();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {

            /**
            * 获取相关种植区信息
            */
            getHarvesttion () {

                this.$http.get(this.$adminUrl('cultivate/' + this.cultivateId + '/data')).then((response)=>{
                    this.$set(this, 'constItem', response.body);
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    this.$update(this.val, 'harvest', this.letItem).then((response) => {
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
                    this.letItem.plantation_id = this.constItem.plantation_name;
                    this.$storeL(this.val, 'harvest', this.letItem).then((response) => {
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
                this.letItem.harvest_date=val;
            },
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
