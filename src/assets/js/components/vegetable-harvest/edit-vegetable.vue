es (327 sloc)  12.6 KB
/**
 * 采收批次管理编辑组件
 * @description 
 * @author 舒丹彤
 * @date 2017/02/17
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
                    <td class="label-tit">
                      <label for="new_matchinfor">采收批次号</label>
                    </td>
                    <td class="input-pop" colspan="2">
                       <input v-model="constItem.serial" type="text" id="harvest_new_serial" name="serial" readonly="readonly"
                       placeholder="新建后自动生成" class="input-pop inp_not_color" disabled="disabled">
                     </td>
                </tr>
                <tr>
                    <td class="label-tit">
                        <label for="new_data">采收日期</label>
                    </td>
                    <td class="input-pop" colspan="2">
                    <input 
                    v-model="letItem.harvest_date" 
                    v-validate.initial="letItem.harvest_date" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作日期" 
                    type="text" id="harvest_new_date" name="harvest_date" placeholder="必填">
                    </td>
                </tr>
                <tr v-show="errors.has('harvest_date')">
                    <td colspan="3" class="error">{{ errors.first('harvest_date') }}</td>
                </tr>
                 <tr>
                    <td class="label-tit">
                        <label for="new_plant">所属种植区</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="plantation_id" id="harvest_plantation_select"
                            :items="plantation_ids"
                            :defaultIndex="parseInt(defaultdetectContentIndex)"
                            @callback="getMsgdetectContent"
                        ></pop-select>
                    </td>
                </tr>
                 <tr>
                    <td class="label-tit">
                        <label for="new_matchinfor">种植批次号</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="cultivate_id" id="harvest_cultivate_serial"
                            :items="cultivate_ids"
                            :defaultIndex="parseInt(defaultdetectContentIndex)"
                            @callback="getMsgdetectContent"
                        ></pop-select>
                    </td>
                </tr>
                <tr>
                    <td class="label-tit"><label for="new_gsName">果蔬名称</label></td>
                    <td class="input-pop " colspan="2"><input v-model="constItem.plant_name" type="text" id="harvest_plant_new_gsName" name="plant_name" disabled="disabled" class="input-pop inp_not_color"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="new_data">种植日期</label></td>
                    <td class="input-pop" colspan="2"><input v-model="constItem.cultivate_date" type="text" id="harvest_cultivate_new_date" name="cultivate_date" disabled="disabled" class="input-pop inp_not_color"></td>
                </tr>

                <tr>
                    <td class="label-tit">
                         <label for="pop_area">种植面积</label>
                    </td>
                    <td class="input-pop">
                        <input v-model="constItem.cultivate_area" type="text" id="harvest_cultivate_new_area" name="cultivate_area" class="input-pop inp_not_color">
                    </td>
                    <td class="input-pop">
                        <input type="text" name="cultivate_area_unit" v-model="constItem.cultivate_area_unit">
                    </td>
                </tr>

                <tr>
                    <td class="label-tit">
                        <label for="new_user">采收数量</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <input v-model="constItem.amount" type="text" id="harvest_new_amount" name="amount" placeholder="请输入正确的数字(单位为千克)">
                    </td>
                </tr>

                <tr>
                    <td class="label-tit">
                        <label for="new_user">采收人</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <input v-model="constItem.operator" type="text" id="harvest_new_user" name="operator">
                    </td>
                </tr>

                <tr>
                    <td class="label-tit">
                        <label for="new_note">备注信息</label>
                    </td>
                    <td class="input-pop input_note" colspan="2">
                        <input v-model="letItem.memo" type="text" id="harvest_new_note" name="memo">
                    </td>
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
        name: 'Editvegetable',
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
                        'harvest_date': '',
                        'amount': '',
                        'operator': '',
                        'memo': '',
                        'cultivate_area':'',
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
                plantation_ids:['冰糖心基地'],
                cultivate_ids:['CV201702130007'],
                tmp: {
                    'cultivate_id': '',
                    'id': '',
                    'harvest_date': '',
                    'cultivate_area_unit':'',
                    'operator': '',
                    'memo': ''
                },
                constItem: {
                    'plantation_name': '',
                    'serial': '',
                    'plant_name': '',
                    'harvest_date': '',
                    'area': '',
                    'cultivate_area':'',
                    'cultivate_area_unit':'',
                    'amount':'',
                    'operator':'',
                    'cultivate_id':''
                }
                
            }
        },
        computed:{
             defaultdetectContentIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.plantationId){
                        if(this.plantationId[index] == this.letItem.plantation_id){
                            return index;
                        }
                    }
                    
                }
            },
            defaultresultIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.plantation_ids){
                        if(this.plantation_ids[index] == this.letItem.plantation_id){
                            return index;
                        }
                    }
                    
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
            * 获取相关采收批次信息
            */
            getHarvesttion () {
                this.$http.get(this.$adminUrl('harvest/26/edit')).then((response)=>{
                    // console.log(response)
                    this.$set(this, 'constItem', response.body);
                    // this.$set(this.'plantation_ids',response.body.)
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
            },
            getMsgdetectContent (msg) {
                this.letItem.plantation_name = msg;
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