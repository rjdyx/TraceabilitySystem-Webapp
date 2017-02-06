/**
 * 种植场新增/编辑组件
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
        <table class="main form-pop">
            <tbody class="form-body">
                <tr>
                    <td class="label-tit"><label for="plantation_new_fullName">种植场名称</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.name" 
                    v-validate.initial="letItem.name" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="种植场名称" 
                    type="text" id="plantation_new_fullName" name="name" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('name')">
                    <td colspan="3" class="error">{{ errors.first('name') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="plantation_new_area">种植面积</label></td>
                    <td class="input-pop input-area"><input 
                    v-model="letItem.area" 
                    v-validate.initial="letItem.area" 
                    data-vv-rules="required|decimal:2" 
                    data-vv-as="种植面积" 
                    type="text" id="plantation_new_area" name="area"
                       placeholder="请填写数字(必填)"></td>
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
                    <td class="label-tit"><label for="plantation_new_phone">详细电话</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.phone" 
                    v-validate.initial="letItem.phone" 
                    data-vv-rules="phone" 
                    type="text" id="plantation_new_phone" name="phone" placeholder="请输入11位手机号(固话用-隔开)"></td>
                </tr>
                <tr v-show="errors.has('phone')">
                    <td colspan="3" class="error">{{ errors.first('phone') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="plantation_new_address">详细地址</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.address" type="text" id="plantation_new_address" name="address"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="plantation_new_principal">负责人</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.director" type="text" value="" id="plantation_new_principal" name="director"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="plantation_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="plantation_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="#">
                                <button @click="cancelEditPlantation" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="#">
                                <button @click="cancelAddPlantation" type="button">
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
        name: 'PopPlantation',
        props: {
            letItem: {
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
                        if(this.area_unit[index] == this.letItem.area_unit){
                            return index;
                        }
                    }
                    
                }
            }

        },
        mounted () {
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {

            /**
            * 提交表单
            */
            validateBeforeSubmit () {

                let params = {
                    'id': this.letItem.id,
                    'field': 'name',
                    'value': this.letItem.name
                };
                this.$unique(this, 'plantation', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        this.$update(this, 'plantation', this.letItem).then((response) => {
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
                        this.$storeL(this, 'plantation', this.letItem).then((response) => {
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
            cancelAddPlantation () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditPlantation () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsg (msg) {
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
