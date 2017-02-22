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

        <table class="main form-pop">
            <tbody class="form-body">

                <tr>
                    <td class="label-tit"><label for="harvest_date">采收日期</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.harvest_date" 
                    v-validate.initial="letItem.harvest_date" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作日期" 
                    type="text" id="harvest_date" name="harvest_date" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('harvest_date')">
                    <td colspan="3" class="error">{{ errors.first('harvest_date') }}</td>
                </tr>

                <tr>
                    <td class="label-tit">
                        <label for="harvest_plantation_name">所属种植区</label>
                    </td>
                    <td class="input-pop" colspan="2"><input v-model="constItem.plantation_name" type="text" id="harvest_plantation_name" name="plantation_name" disabled="disabled" class="input-pop"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="harvest_serial">种植批次号</label></td>
                    <td class="input-pop" colspan="2"><input v-model="constItem.serial" type="text" id="harvest_serial" name="serial" disabled="disabled" class="input-pop"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="harvest_plant_name">果蔬名称</label></td>
                    <td class="input-pop" colspan="2"><input v-model="constItem.plant_name" type="text" id="harvest_plant_name" name="plant_name" disabled="disabled" class="input-pop"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="harvest_cultivate_date">种植日期</label></td>
                    <td class="input-pop" colspan="2"><input v-model="constItem.cultivate_date" type="text" id="harvest_cultivate_date" name="cultivate_date" disabled="disabled" class="input-pop"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="harvest_area">种植面积</label></td>
                    <td class="input-pop" colspan="2"><input v-model="constItem.area" type="text" id="harvest_area" name="area" disabled="disabled" class="input-pop"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="harvest_amount">采收数量</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.amount" type="text" id="harvest_amount" name="amount"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="harvest_operator">采收人</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.operator" type="text" id="harvest_operator" name="operator"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="harvest_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="harvest_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="javascript:void(0)">
                                <button @click="cancelEditharvest" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="javascript:void(0)">
                                <button @click="cancelAddharvest" type="button">
                                    取消
                                </button>
                            </a>
                        </div>
                        <div class="footer-r">
                            <a href="javascript:void(0)">
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
                harvestContents:['水质采收', '土壤采收', '农药残留采收', '大气污染采收', '其他采收'],
                results:['合格', '不合格'],
                expertIds: [],
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
                }
                
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
                    console.log(response)
                    this.$set(this, 'constItem', response.body);
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    this.$update(this, 'harvest', this.letItem).then((response) => {
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
                    this.$storeL(this, 'harvest', this.letItem).then((response) => {
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
            cancelAddharvest () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditharvest () {
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
