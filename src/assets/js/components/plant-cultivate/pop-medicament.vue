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

        <table class="main form-pop">
            <tbody class="form-body">

                <tr>
                    <td class="label-tit"><label for="medicament_catagroy">农药类别</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="medicament_catagroy"
                            :items="medicamentSelects"
                            protoBack="id"
                            protoShow="name"
                            :defaultIndex="parseInt(defaultMedicamentSelectIndex)"
                            @callback="getMsgMedicamentSelect"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_id">农药名称</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="medicament_id"
                            :items="medicamentIds"
                            protoBack="id"
                            protoShow="name"
                            :defaultIndex="parseInt(defaultMedicamentIdIndex)"
                            @callback="getMsgMedicamentId"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="spray_date">施药日期</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.spray_date" 
                    v-validate.initial="letItem.spray_date" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作日期" 
                    type="text" id="spray_date" name="spray_date" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('spray_date')">
                    <td colspan="3" class="error">{{ errors.first('spray_date') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_new_way">施药方式</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.way" type="text" id="medicament_new_way" name="way"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_new_amount">平均施药量</label></td>
                    <td class="input-pop input-area">
                        <input 
                        v-model="letItem.amount" 
                        v-validate.initial="letItem.amount" 
                        data-vv-rules="required|decimal:2" 
                        data-vv-as="平均农药用量" 
                        type="text" id="medicament_new_amount" name="amount"
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
                    <td class="label-tit"><label for="medicament_concentration">施药浓度（倍）</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.concentration" type="text" id="medicament_concentration" name="concentration"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_isolation_period">安全隔离期（天）</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.isolation_period" type="text" id="medicament_isolation_period" name="isolation_period"></td>
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
                    <td class="label-tit"><label for="medicament_new_user">施药人</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.operator" type="text" id="medicament_new_user" name="operator"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="medicament_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="#">
                                <button @click="cancelEditmedicament" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="#">
                                <button @click="cancelAddmedicament" type="button">
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
        name: 'Popmedicament',
        props: {
            cultivateId: {
                type: Number,
                default: ''
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
                medicamentSelects:[],
                medicamentIds:[],
                expertIds: [],
                unit:['ml/亩', 'ml/平方米', 'ml/公顷'],
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
                
            }
        },
        computed: {
            //判断是编辑状态还是新建状态，取出不同的下标
            defaultExpertIdIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.expertIds){
                        if(this.expertIds[index].id == this.letItem.expert_id){
                            return index;
                        }
                    }
                    
                }
            },
            defaultMedicamentSelectIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.medicamentSelects){
                        if(this.medicamentSelects[index] == this.letItem.medicament_catagroy){
                            return index;
                        }
                    }
                    
                }
            },
            defaultMedicamentIdIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.medicamentIds){
                        if(this.medicamentIds[index] == this.letItem.medicament_id){
                            return index;
                        }
                    }
                    
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
                    this.$set(this, 'medicamentSelects', response.body.medicament_categorys.data);
                }, (response)=>{

                });

                this.$http.get(this.$adminUrl('expert/query?params[type]=medicament')).then((response)=>{
                    this.$set(this, 'expertIds', response.body.experts.data);
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    this.$update(this, 'spray', this.letItem).then((response) => {
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
                    this.$storeL(this, 'spray', this.letItem).then((response) => {
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
            cancelAddmedicament () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditmedicament () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgMedicamentSelect (msg) {
                this.letItem.medicament_catagroy = msg;
                this.$http.get(this.$adminUrl('medicament/query?params[query_class]='+msg)).then((response)=>{
                    this.$set(this, 'medicamentIds', response.body.medicaments.data);
                }, (response)=>{

                });
            },
            getMsgMedicamentId (msg) {
                this.letItem.medicament_id = msg;
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
