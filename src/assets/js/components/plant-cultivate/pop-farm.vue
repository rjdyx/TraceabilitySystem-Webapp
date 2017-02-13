/**
 * 种植批次农事新增组件
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
 * 描述：农事信息对象
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
 * 返回：farming对象
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
            :selectRoute="selectRoute"
            :edit="edit"
            :select="expertIds"
            :selectFault="weathers"
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
        name: 'Popfarming',
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
                        'farming_date': '',
                        'method': '',
                        'content': '',
                        'operate': '',
                        'weather': '晴天',
                        'expert_id': '',
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
                weathers:['晴天', '雨天', '阴天', '雪天', '其他'],
                tmp: {
                    'cultivate_id': 0,
                    'id': '',
                    'farming_date': '',
                    'method': '',
                    'content': '',
                    'operate': '',
                    'weather': '晴天',
                    'expert_id': '',
                    'memo': ''
                },
                expertIds: [],
                inputData: {
                    'farming_date':
                    {
                        'label': '操作日期',
                        'divfor': 'farming_farming_date',
                        'placeholder': '必填',
                        'rules': 'required',
                        'date': true,
                    },
                    'method':
                    {
                        'label': '操作方法',
                        'divfor': 'farming_method',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'content':
                    {
                        'label': '操作内容',
                        'divfor': 'farming_content',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'operate': 
                    {
                        'label': '操作人员',
                        'divfor': 'farming_operate',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'weather': 
                    {
                        'label': '天气状态',
                        'divfor': 'weather',
                        'placeholder': '',
                        'rules': 'max:255',
                        'select': '2',
                        // 'selectName':''
                    },
                    'expert_id': 
                    {
                        'label': '指导专家',
                        'divfor': 'product_new_place_origin',
                        'placeholder': '必填',
                        'rules': 'max:255',
                        'select': '1',
                        'selectName':'expert_name'
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'farming_new_note',
                        'placeholder': '',
                        'rules': 'max:255'
                    }
                },
                selectRoute: 
                {
                    'select': true,
                    'data_id':'id',
                    'letItem_id':'expert_id'
                },
                val:''
            }
        },
        computed: {

        },
        mounted () {
            this.getAllfarmingtion();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {
            /**
            * 获取所有专家
            */
            getAllfarmingtion () {
                this.$http.get(this.$adminUrl('expert/query?params[type]=farming')).then((response)=>{
                    this.$set(this, 'expertIds', response.body.experts.data);
                    this.expertIds.unshift({id: '' ,expert_name: '无'})
                }, (response)=>{

                });
            },
            getThis: function(val) {
                this.val=val;
            },
            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    this.$update(this.val, 'farming', this.letItem).then((response) => {
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
                    this.$storeL(this.val, 'farming', this.letItem).then((response) => {
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
