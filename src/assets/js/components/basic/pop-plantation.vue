/**
 * 种植场新增/编辑组件
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  plantation 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：种植场信息对象
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
 * 返回：plantation对象
 * 必用：true
 * 描述：
 * 
 * 
 * 
 */
<template>
    <form @submit.prevent="validateBeforeSubmit">
        <div class="main form-pop">
            <div>
                <label for="plantation_new_fullName" class="label-tit">种植场名称</label>
                <input 
                    v-model="plantation.name" 
                    v-validate.initial="plantation.name" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="种植场名称" 
                    class="input-pop" type="text" id="plantation_new_fullName" name="name" placeholder="必填">
                <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </div>
            <div>
                <label for="plantation_new_area" class="label-tit">种植面积</label>
                <input 
                    v-model="plantation.area" 
                    v-validate.initial="plantation.area" 
                    data-vv-rules="required|decimal:2" 
                    data-vv-as="种植面积" 
                    class="input-pop input-area" type="text" id="plantation_new_area" name="area"
                       placeholder="请填写数字(必填)">
                <!--<select v-model="plantation.area_unit" class="area_unit" name="area_unit">-->
                    <!--<option value="亩">亩</option>-->
                    <!--<option value="平方米">平方米</option>-->
                    <!--<option value="公顷">公顷</option>-->
                <!--</select>-->

                <!--种植面积单位模块-->
                <pop-select  class="area_unit" name="area_unit"
                        :items="area_unit"      
                        :defaultIndex="parseInt(defaultIndex)"
                        @callback="getMsg"  
                ></pop-select>

                <span v-show="errors.has('area')">{{ errors.first('area') }}</span>
            </div>
            <div>
                <label for="plantation_new_phone" class="label-tit">详细电话</label>
                <input 
                    v-model="plantation.phone" 
                    v-validate.initial="plantation.phone" 
                    data-vv-rules="phone" 
                    class="input-pop" type="text" id="plantation_new_phone" name="phone" placeholder="请输入11位手机号(固话用-隔开)">
                <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
            </div>
            <div>
                <label for="plantation_new_address" class="label-tit">详细地址</label>
                <input v-model="plantation.address" class="input-pop" type="text" id="plantation_new_address" name="address">
            </div>
            <div>
                <label for="plantation_new_principal" class="label-tit">负责人</label>
                <input v-model="plantation.director" class="input-pop" type="text" value="" id="plantation_new_principal" name="director">
            </div>
            <div>
                <label for="plantation_new_note" class="label-tit">备注信息</label>
                <input v-model="plantation.memo" class="input-pop input-note" type="text" id="plantation_new_note" name="memo">
            </div>
            <div class="footer">
                <div class="footer-r">
                    <button v-if="edit" @click="cancelEditPlantation" type="button">
                        取消
                    </button>
                    <button v-else @click="cancelAddPlantation" type="button">
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
        name: 'PopPlantation',
        props: {
            plantation: {
                type: Object,
                default() {
                    return {
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
                // 单位
                area_unit:['亩', '平方米', '公顷'],
                // 作为编辑组件时，用于临时备份父组件传递过来的数据，
                // 以便在修改了数据但不保存时可以复原数据
                tmp: {
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
        computed: {
            //判断是编辑状态还是新建状态，取出不同的下标
            defaultIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.area_unit){
                        if(this.area_unit[index] == this.plantation.area_unit){
                            return index;
                        }
                    }
                    
                }
            }

        },
        mounted () {
            for(let key of Object.keys(this.plantation)){
                this.tmp[key] = this.plantation[key];
            }
            // 当作为编辑组件时，保存按钮一开始就能用
            if(this.plantation.name != '') {
                this.canSubmit = true;
            }
        },
        methods: {

            /**
            * 提交表单
            */
            validateBeforeSubmit () {

                let params = {
                    'id': this.plantation.id,
                    'field': 'name',
                    'value': this.plantation.name
                };
                this.$unique(this, 'plantation', params, 'plantation.name').then(() => {
                    if(this.edit) {
                        this.$update(this, 'plantation', this.plantation).then((response) => {
                            for(let key of Object.keys(this.plantation)){
                                this.tmp[key] = this.plantation[key];
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
                        this.$storeL(this, 'plantation', this.plantation).then((response) => {
                            this.plantation.id = response.body;
                            this.$emit('callback', this.plantation);
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
            cancelAddPlantation () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param plantation
            */
            cancelEditPlantation () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsg (msg) {
                this.plantation.area_unit = msg;
            },

        },
        destroyed () {
            if(this.edit){
                for(let key of Object.keys(this.plantation)){
                        this.plantation[key] = this.tmp[key];
                    }
            }
        },
    }

</script>
