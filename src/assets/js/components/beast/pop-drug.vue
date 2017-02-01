/**
 * 兽药档案新增/编辑组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/01
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：兽药档案信息对象
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
 * 返回：drug对象
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
                    <td class="label-tit"><label for="drug_new_select">兽药类别</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select 
                            name="drug_type"
                            :items="categorys"
                            :defaultIndex="parseInt(defaultdrugIndex)"
                            protoBack="id"
                            protoShow="name"
                            @callback="getMsgPid"
                        ></pop-select>
                    </td>
                </tr>
                <tr v-show="errors.has('drug_type')">
                    <td colspan="2" class="error">{{ errors.first('drug_type') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="drug_new_fullName">兽药名称</label></td>
                    <td class="input-pop" colspan="2">
                        <input 
                            v-model="letItem.name" 
                            v-validate.initial="letItem.name" 
                            data-vv-rules="required|max:255" 
                            data-vv-as="兽药名称" 
                            type="text" id="drug_new_fullName" name="name" placeholder="必填">
                    </td>
                </tr>
                <tr v-show="errors.has('name')">
                    <td colspan="3" class="error">{{ errors.first('name') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="drug_new_use">用途</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.use" type="text" value="" id="drug_new_use" name="use"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="drug_new_specification">包装规格</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.specification" type="text" value="" id="drug_new_specification" name="specification"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="drug_new_vender_name">生产厂家名称</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.vender_name" type="text" value="" id="drug_new_vender_name" name="vender_name"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="drug_new_address">产地</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.address" type="text" id="drug_new_address" name="address"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="drug_new_phone">联系方式</label></td>
                    <td class="input-pop" colspan="2">
                        <input 
                            v-model="letItem.phone" 
                            v-validate.initial="letItem.phone" 
                            data-vv-rules="phone" 
                            type="text" id="drug_new_phone" name="phone" placeholder="请输入11位手机号(固话用-隔开)">
                    </td>
                </tr>
                <tr v-show="errors.has('phone')">
                    <td colspan="3" class="error">{{ errors.first('phone') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="drug_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="drug_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="#">
                                <button @click="cancelEditdrug" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="#">
                                <button @click="cancelAdddrug" type="button">
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
        name: 'Popdrug',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'id': '',
                        'drug_type': 1,
                        'name': '',
                        'use': '',
                        'specification': '',
                        'vender_name': '',
                        'address': '',
                        'phone': '',
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
                // 作为编辑组件时，用于临时备份父组件传递过来的数据，
                // 以便在修改了数据但不保存时可以复原数据
                tmp: {
                    'id': '',
                    'drug_type': 1,
                    'name': '',
                    'use': '',
                    'specification': '',
                    'vender_name': '',
                    'address': '',
                    'phone': '',
                    'memo': ''
                },
                categorys: [
                    {id: 1, name: '疾病防治药'},
                    {id: 2, name: '传染病防治药'},
                    {id: 3, name: '寄生虫病防治药'},
                    {id: 4, name: '促生长药'},
                    {id: 5, name: '其他类'},
                ]
            }
        },
        computed: {
            defaultdrugIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.categorys){
                        if(this.categorys[index].id == this.letItem.drug_type){
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
                this.$unique(this, 'drug', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        this.$update(this, 'drug', this.letItem).then((response) => {
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
                        this.$storeL(this, 'drug', this.letItem).then((response) => {
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
            cancelAdddrug () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditdrug () {
                this.$emit('closeEdit');
            },

            /**
            * CallBack函数,执行回调函数 
            */
            getMsgPid (msg) {
                this.letItem.drug_type = msg;
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
