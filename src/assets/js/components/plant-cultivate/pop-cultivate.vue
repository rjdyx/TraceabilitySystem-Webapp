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
 */
<template>
    <form @submit.prevent="validateBeforeSubmit">

        <table class="main form-pop">
            <tbody class="form-body">

                <tr>
                    <td class="label-tit"><label for="plantation_name">所属种植区</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="plantation_name"
                            :items="PlantationNames"
                            protoBack="id"
                            protoShow="name"
                            :defaultIndex="parseInt(defaultPlantationNameIndex)"
                            @callback="getMsgPlantationName"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="plant_name">种植果蔬名称</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="plant_name"
                            :items="PlantNames"
                            protoBack="id"
                            protoShow="name"
                            :defaultIndex="parseInt(defaultPlantNameIndex)"
                            @callback="getMsgPlantName"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_new_amount">种植面积</label></td>
                    <td class="input-pop input-area">
                        <input 
                        v-model="letItem.area" 
                        v-validate.initial="letItem.area" 
                        data-vv-rules="required|decimal:2" 
                        data-vv-as="种植面积" 
                        type="text" id="fertilize_new_amount" name="area"
                           placeholder="请填写数字(必填)">
                    </td>
                    <td class="area_unit">
                       <pop-select name="area_unit"
                        :items="area_unit"      
                        :defaultIndex="parseInt(defaultIndex)"
                        @callback="getMsg"  
                        ></pop-select>
                    </td>
                </tr>
                <tr v-show="errors.has('area')">
                    <td colspan="3" class="error">{{ errors.first('area') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="cultivate_date">种植日期</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.cultivate_date" 
                    v-validate.initial="letItem.cultivate_date" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作日期" 
                    type="text" id="cultivate_date" name="cultivate_date" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('cultivate_date')">
                    <td colspan="3" class="error">{{ errors.first('cultivate_date') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_mode">育苗方式</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.mode" type="text" id="fertilize_mode" name="mode"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_density">移栽密度</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.density" type="text" id="fertilize_density" name="density"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_operator">种植人</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.operator" type="text" id="fertilize_operator" name="operator"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="fertilize_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="javascript:void(0)">
                                <button @click="cancelEditfertilize" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="javascript:void(0)">
                                <button @click="cancelAddfertilize" type="button">
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
        name: 'Popfertilize',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'id': '',
                        'plantation_id': '',
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
                PlantationNames:[],
                PlantNames:[],
                area_unit:['亩', '平方米', '公顷'],
                tmp: {
                    'id': '',
                    'plantation_id': '',
                    'area': '',
                    'area_unit': '亩',
                    'cultivate_date': '',
                    'mode': '',
                    'density': '',
                    'operator': '',
                    'memo': ''
                },
                
            }
        },
        computed: {
            //判断是编辑状态还是新建状态，取出不同的下标
            defaultPlantationNameIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.PlantationNames){
                        if(this.PlantationNames[index].name == this.letItem.plantation_name){
                            return index;
                        }
                    }
                    
                }
            },
            defaultPlantNameIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.PlantNames){
                        if(this.PlantNames[index].name == this.letItem.plant_name){
                            return index;
                        }
                    }
                    
                }
            },
            defaultIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.area_unit){
                        if(this.area_unit[index] == this.letItem.area_unit){
                            return index;
                        }
                    }
                    
                }
            }
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

            /**
            * 获取所有种植相关信息
            */
            getAllPlantations () {

                this.$http.get(this.$adminUrl('cultivate/create?params=')).then((response)=>{
                    this.$set(this, 'PlantationNames', response.body.plantations);
                    this.$set(this, 'PlantNames', response.body.plants);
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    this.$update(this, 'cultivate', this.letItem).then((response) => {
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
                    this.$storeL(this, 'cultivate', this.letItem).then((response) => {
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
            getMsgPlantationName (msg) {
                this.letItem.plantation_id = msg;
            },
            getMsgPlantName (msg) {
                this.letItem.plant_id = msg;
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
