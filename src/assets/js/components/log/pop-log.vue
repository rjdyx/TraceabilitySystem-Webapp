/**
 * 农业日志编辑组件
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  log 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：种植场信息对象
 * 
 * 
 * Events:
 * 
 * 
 * @function closeEdit
 * 返回：无
 * 必用：true
 * 描述：隐藏编辑组件
 * 
 * @function operatorBack
 * 返回：log.cultivate_man 操作人
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
                    <td class="label-tit"><label for="logtion_name">种植场名称</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.plantation_name" class="input-pop" type="text" id="log_name" name="log_name" disabled="disabled"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="planta_name">种植区名称</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.planta_name" class="input-pop" type="text" placeholder="" id="planta_name" name="planta_name" disabled="disabled"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="plant_name">果蔬名称</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.plant_name" class="input-pop" type="text" placeholder="" id="plant_name" name="plant_name" disabled="disabled"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="plant_varieties">播种/育苗品种</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.plant_varieties" class="input-pop" type="text" placeholder="" id="plant_varieties" name="plant_varieties"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="cultivate_mode">播种/育苗方式</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.cultivate_mode" class="input-pop" type="text" placeholder="" id="cultivate_mode" name="cultivate_mode"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="plant_tp_variety">移栽品种</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.plant_tp_variety" class="input-pop" type="text" placeholder="" id="plant_tp_variety" name="plant_tp_variety"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="cultivate_density">移栽密度</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.cultivate_density" class="input-pop" type="text" placeholder="" id="cultivate_density" name="cultivate_density"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="manure_name">施肥种类</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="manure_name"
                        :items="manureNames"
                        :defaultIndex="0"
                        protoBack="manure_category_id"
                        protoShow="manure_category_name"
                        @callback="getManureName"
                    ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_amount">施肥数量</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.fertilize_amount" class="input-pop" type="text" placeholder="" id="fertilize_amount" name="fertilize_amount"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="fertilize_way">施肥方式</label></td>
                    <td class="input-pop" colspan="2">
                    <pop-select name="fertilize_way"
                        :items="fertilizeWays"
                        :defaultIndex="0"
                        protoBack="fertilize_way"
                        protoShow="fertilize_way"
                        @callback="getFertilizeWay"
                    ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_name">病虫害名称</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="medicament_name"
                            :items="medicamentNames"
                            :defaultIndex="0"
                            protoBack="medicament_category_id"
                            protoShow="medicament_name"
                            @callback="getMedicamentName"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="spray_way">施药方式</label></td>
                    <td class="input-pop" colspan="2">
                    <pop-select name="spray_way"
                        :items="sprayWays"
                        :defaultIndex="0"
                        protoBack="spray_way"
                        protoShow="spray_way"
                        @callback="getSprayWay"
                    ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="control_objects">防治对象</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.control_objects" class="input-pop" type="text" placeholder="" id="control_objects" name="control_objects"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="plant_growth">生长周期</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.plant_growth" class="input-pop" type="text" placeholder="" id="plant_growth" name="plant_growth" disabled="disabled"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="planta_area">种植面积</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.planta_area" class="input-pop" type="text" placeholder="" id="planta_area" name="planta_area" disabled="disabled"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="harvest_amount">采收重量</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.harvest_amount" class="input-pop" type="text" placeholder="" id="harvest_amount" name="harvest_amount"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="cultivate_man">操作人</label></td>
                    <td class="input-pop" colspan="2"><input v-model="log.cultivate_man" class="input-pop" type="text" placeholder="" id="cultivate_man" name="cultivate_man"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a href="javascript:void(0)">
                                <button @click="cancelPanel" type="button">
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

<style lang="sass">

    @import "../../../sass/function";

    .form-pop {

    }

</style>

<script>

    export default {
        name: 'PopPlanta',
        props: {
            'cultivateId': 0,
        },
        data () {
            return {
                log: {
                    cultivate_id: 0,
                    plantation_name: '',
                    planta_name: '',
                    plant_name: '',
                    plant_varieties: '',
                    cultivate_mode: '',
                    plant_tp_variety: '',
                    cultivate_density: '',
                    manure_name: '',
                    fertilize_amount: '',
                    fertilize_way: '',
                    medicament_name: '',
                    spray_way: '',
                    control_objects: '',
                    plant_growth: '',
                    planta_area: '',
                    harvest_amount: 0,
                    cultivate_man: ''
                },
                // 施肥方式
                fertilizeWays: [],
                // 施肥种类
                manureNames: [],
                // 病虫害名称
                medicamentNames: [],
                // 施药方式
                sprayWays: []
            }
        },
        mounted () {
            this.getAllMsg();
        },
        methods: {

            /**
            * 获取所有信息
            */
            getAllMsg () {
                this.$http.get(this.$adminUrl('dailylog') + '/' + this.cultivateId + '/edit').then((response)=>{
                    this.$set(this, 'log', response.body.dailylog);
                    this.$set(this, 'fertilizeWays', response.body.fertilize_way);
                    this.$set(this, 'manureNames', response.body.manure_category_name);
                    this.$set(this, 'medicamentNames', response.body.medicament_category_name);
                    this.$set(this, 'sprayWays', response.body.spray_way);


                    // 将后台传过来的log对象里面值null的属性改成空字符串
                    for(let key of Object.keys(this.log)){
                        if(this.log[key] == null){
                            this.log[key] = "";
                        }
                    }
                    // 将生长周期转成字符串
                    this.log.plant_growth = String(this.log.plant_growth);
                    // 将施肥量转成字符串
                    this.log.fertilize_amount = String(this.log.fertilize_amount);
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                this.$http.post(this.$adminUrl('dailylog'), this.log).then((response) => {
                    if(response.body === 'true'){
                        this.$alert('保存成功', 's');
                        this.$emit('operatorBack', this.log.cultivate_man);
                    }else {
                        this.$alert('保存失败', 'e');
                    }
                    
                }, (response) => {
                    this.$alert('连接出错', 'e');
                });
            },

            /**
            * 隐藏编辑模块
            * @param log
            */
            cancelPanel () {
                this.$emit('closeEdit');
            },

            /**
             * 获取施肥方式
             * @param  {String} FertilizeWay
             */
            getFertilizeWay (FertilizeWay) {
                this.log.fertilize_way = FertilizeWay;
            },

            /**
             * 获取施肥种类
             * @param  {Integer} ManureNameId 
             */
            getManureName (ManureNameId) {
                this.log.manure_name = ManureNameId;
            },

            /**
             * 获取病虫害名称
             * @param  {Integer} MedicamentNameId
             */
            getMedicamentName (MedicamentNameId) {
                this.log.medicament_name = MedicamentNameId;
            },

            /**
             * 获取施药方式
             * @param  {String} SprayWay 
             */
            getSprayWay (SprayWay) {
                this.log.spray_way = SprayWay;
            }
        },
    }

</script>
