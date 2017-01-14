/**
 * 种植区新增/编辑组件
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：种植区信息对象
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
 * 返回：planta对象
 * 必用：true
 * 描述：
 * 
 * 
 * 
 */
<template>
    <form @submit.prevent="validateBeforeSubmit">
        <div class="main form-pop">
        
        </select>
            <div>
                <label for="plantation_fullName" class="label-tit">种植场名称</label>
                <!-- <select 
                    v-model="letItem.pid" 
                    v-validate.initial="letItem.pid" 
                    data-vv-rules="required" 
                    data-vv-as="种植场" 
                    id="plantation_fullName" name="pid" class="input-pop">
                    <option value>请选择种植场</option>
                    <option v-for="plantation in plantations" :value="plantation.id">{{plantation.name}}</option>
                </select> -->
                <!-- 种植场模块 -->
                <pop-select name="pid" class="input-pop"
                    :items="plantations"
                    :defaultIndex="parseInt(defaultPlaIndex)"
                    protoBack="id"
                    protoShow="name"
                    @callback="getMsgPid"
                ></pop-select>
                
                <span v-show="errors.has('pid')">{{ errors.first('pid') }}</span>
            </div>
            <div>
                <label for="planta_new_fullName" class="label-tit">种植区名称</label>
                <input 
                    v-model="letItem.name" 
                    v-validate.initial="letItem.name" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="种植区名称" 
                    class="input-pop" type="text" id="planta_new_fullName" name="name" placeholder="必填">
                <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </div>
            <div>
                <label for="planta_new_area" class="label-tit">种植面积</label>
                <input 
                    v-model="letItem.area" 
                    v-validate.initial="letItem.area" 
                    data-vv-rules="required|decimal:2" 
                    data-vv-as="种植面积" 
                    class="input-pop input-area" type="text" id="planta_new_area" name="area"
                       placeholder="请填写数字(必填)">
                <!-- <select v-model="letItem.area_unit" class="area_unit" name="area_unit">
                    <option value="亩">亩</option>
                    <option value="平方米">平方米</option>
                    <option value="公顷">公顷</option>
                </select> -->
                <!--种植面积单位模块-->
                <pop-select class="area_unit" name="area_unit"
                        :items="area_unit"
                        :defaultIndex="parseInt(defaultUnitIndex)" 
                        @callback="getMsgUnit"      
                ></pop-select>
                <span v-show="errors.has('area')">{{ errors.first('area') }}</span>
            </div>
            <div>
                <label for="planta_new_phone" class="label-tit">详细电话</label>
                <input 
                    v-model="letItem.phone" 
                    v-validate.initial="letItem.phone" 
                    data-vv-rules="phone" 
                    class="input-pop" type="text" id="planta_new_phone" name="phone" placeholder="请输入11位手机号(固话用-隔开)">
                <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
            </div>
            <div>
                <label for="planta_new_address" class="label-tit">详细地址</label>
                <input v-model="letItem.address" class="input-pop" type="text" id="planta_new_address" name="address">
            </div>
            <div>
                <label for="planta_new_principal" class="label-tit">负责人</label>
                <input v-model="letItem.director" class="input-pop" type="text" value="" id="planta_new_principal" name="director">
            </div>
            <div>
                <label for="planta_new_note" class="label-tit">备注信息</label>
                <input v-model="letItem.memo" class="input-pop input-note" type="text" id="planta_new_note" name="memo">
            </div>
            <div class="footer">
                <div class="footer-r">
                    <button v-if="edit" @click="cancelEditPlanta" type="button">
                        取消
                    </button>
                    <button v-else @click="cancelAddPlanta" type="button">
                        取消
                    </button>
                </div>
                <div class="footer-r">
                    <button class="btn-pop">
                        保存
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

</style>

<script>

    export default {
        name: 'PopPlanta',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'pid': 0,
                        'id': '',
                        'name': '',
                        'area': 0,
                        'area_unit': '亩',
                        'phone': '',
                        'address': '',
                        'director': '',
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
                area_unit:['亩', '平方米', '公顷'],
                tmp: {
                    'pid': 0,
                    'id': '',
                    'name': '',
                    'area': 0,
                    'area_unit': '亩',
                    'phone': '',
                    'address': '',
                    'director': '',
                    'memo': ''
                },
                plantations: [],
            }
        },
        computed: {
            //判断是编辑状态还是新建状态，取出不同的下标
            defaultUnitIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.area_unit){
                        if(this.area_unit[index] == this.letItem.area_unit){
                            return index;
                        }
                    }
                    
                }
            },
            defaultPlaIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.plantations){
                        if(this.plantations[index].name == this.letItem.planta_name){
                            return index;
                        }
                    }
                    
                }
            }


        },
        mounted () {
            this.getAllPlantation();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {

            /**
            * 获取所有种植场
            */
            getAllPlantation () {
                this.$http.get(this.$adminUrl('planta/create')).then((response)=>{
                    this.$set(this, 'plantations', response.body);
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                let params = {
                    'id': this.letItem.id,
                    'field': 'name',
                    'value': this.letItem.name
                };
                this.$unique(this, 'planta', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        this.$update(this, 'planta', this.letItem).then((response) => {
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
                        this.$storeL(this, 'planta', this.letItem).then((response) => {
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

                }, () => {
                    return false;
                });
            },
            /**
            * 隐藏新增模块
            */
            cancelAddPlanta () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditPlanta () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgPid (msg) {
                    this.letItem.pid = msg;
            },
            getMsgUnit (msg) {
                    this.letItem.area_unit = msg;                
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
