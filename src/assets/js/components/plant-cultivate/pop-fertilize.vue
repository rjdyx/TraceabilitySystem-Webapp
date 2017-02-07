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

        <table class="main form-pop">
            <tbody class="form-body">

                <tr>
                    <td class="label-tit"><label for="manure_select">肥料类别</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="manure_select"
                            :items="ManureSelects"
                            protoBack="id"
                            protoShow="name"
                            :defaultIndex="parseInt(defaultManureSelectIndex)"
                            @callback="getMsgManureSelect"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="manure_id">肥料名称</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="manure_id"
                            :items="ManureIds"
                            protoBack="id"
                            protoShow="name"
                            :defaultIndex="parseInt(defaultManureIdIndex)"
                            @callback="getMsgManureId"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_date">施肥日期</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.fertilize_date" 
                    v-validate.initial="letItem.fertilize_date" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作日期" 
                    type="text" id="fertilize_date" name="fertilize_date" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('fertilize_date')">
                    <td colspan="3" class="error">{{ errors.first('fertilize_date') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_new_amount">平均肥料用量</label></td>
                    <td class="input-pop input-area">
                        <input 
                        v-model="letItem.amount" 
                        v-validate.initial="letItem.amount" 
                        data-vv-rules="required|decimal:2" 
                        data-vv-as="平均肥料用量" 
                        type="text" id="fertilize_new_amount" name="amount"
                           placeholder="请填写数字(必填)">
                    </td>
                    <td class="area_unit">
                       <pop-select name="unit"
                        :items="unit"      
                        :defaultIndex="parseInt(defaultIndex)"
                        @callback="getMsg"  
                        ></pop-select>
                    </td>
                </tr>
                <tr v-show="errors.has('amount')">
                    <td colspan="3" class="error">{{ errors.first('amount') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="expert_id">指导专家</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="expert_id"
                            :items="expertIds"
                            protoBack="id"
                            protoShow="expert_name"
                            :defaultIndex="parseInt(defaultExpertIdIndex)"
                            @callback="getMsgExpertId"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_new_user">施肥人</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.operator" type="text" id="fertilize_new_user" name="operator"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_new_way">施肥方式</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.way" type="text" id="fertilize_new_way" name="way"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="fertilize_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="#">
                                <button @click="cancelEditfertilize" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="#">
                                <button @click="cancelAddfertilize" type="button">
                                    取消
                                </button>
                            </a>
                        </div>
                        <div class="footer-r">
                            <a href="#">
                                <button class="btn-pop">
                                    保存
                                </button>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        
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
                        'unit': '',
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
        },
        data () {
            return {
                ManureSelects:[],
                ManureIds:[],
                expertIds: [],
                unit:['kg/亩', 'kg/平方米', 'kg/公顷'],
                tmp: {
                    'cultivate_id': 0,
                    'id': '',
                    'manure_id': '',
                    'fertilize_date': '',
                    'amount': '',
                    'unit': '',
                    'expert_id': '',
                    'operator': '',
                    'way': '',
                    'memo': ''
                },
                
            }
        },
        computed: {
            //判断是编辑状态还是新建状态，取出不同的下标
            defaultExpertIdIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.expertIds){
                        if(this.expertIds[index].expert_name == this.letItem.expert_name){
                            return index;
                        }
                    }
                    return 0;
                }
            },
            defaultManureSelectIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.ManureSelects){
                        if(this.ManureSelects[index].id == this.letItem.category_id){
                            return index;
                        }
                    }
                    return 0;
                }
            },
            defaultManureIdIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.ManureIds){
                        if(this.ManureIds[index].id == this.letItem.manure_id){
                            return index;
                        }
                    }
                    return 0;
                }
            },
            defaultIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.unit){
                        if(this.unit[index] == this.letItem.unit){
                            return index;
                        }
                    }
                    
                }
            }
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
                    this.$set(this, 'ManureSelects', response.body.manure_categorys.data);
                }, (response)=>{

                });

                if (this.edit) {
                    this.$http.get(this.$adminUrl('fertilize/select_category?params='+this.letItem.category_id)).then((response)=>{
                        this.$set(this, 'ManureIds', response.body);
                    }, (response)=>{

                    });
                }

                this.$http.get(this.$adminUrl('expert/query?params[type]=fertilize')).then((response)=>{
                    this.$set(this, 'expertIds', response.body.experts.data);
                    this.expertIds.unshift({id: '' ,expert_name: '无'})
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    this.$update(this, 'fertilize', this.letItem).then((response) => {
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
                    this.$storeL(this, 'fertilize', this.letItem).then((response) => {
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
            cancelAddfertilize () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditfertilize () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgManureSelect (msg) {
                this.letItem.manure_select = msg;
                this.$http.get(this.$adminUrl('manure/query?params[query_class]='+msg)).then((response)=>{
                    this.$set(this, 'ManureIds', response.body.manures.data);
                }, (response)=>{

                });
            },
            getMsgManureId (msg) {
                this.letItem.manure_id = msg;
            },
            getMsgExpertId (msg) {
                this.letItem.expert_id = msg;                
            },
            getMsg (msg) {
                this.letItem.unit = msg;
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
