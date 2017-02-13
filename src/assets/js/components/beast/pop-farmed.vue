/**
 * 养殖区新增/编辑组件
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
 * 描述：养殖区信息对象
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
 * 返回：farmed对象
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
                    <td class="label-tit"><label for="farmeded_new_select">养殖场名称</label></td>
                    <td class="input-pop" colspan="2"><pop-select name="pid"
                    :items="farms"
                    :defaultIndex="parseInt(defaultfarmedIndex)"
                    protoBack="id"
                    protoShow="name"
                    @callback="getMsgPid"
                ></pop-select></td>
                </tr>
                <tr v-show="errors.has('pid')">
                    <td colspan="2" class="error">{{ errors.first('pid') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="farmed_new_fullName">养殖区名称</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.name" 
                    v-validate.initial="letItem.name" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="养殖区名称" 
                    type="text" id="farmed_new_fullName" name="name" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('name')">
                    <td colspan="2" class="error">{{ errors.first('name') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="farmed_new_area">养殖面积</label></td>
                    <td class="input-pop"><input 
                    v-model="letItem.area" 
                    v-validate.initial="letItem.area" 
                    data-vv-rules="required|decimal:2" 
                    data-vv-as="养殖面积" 
                    type="text" id="farmed_new_area" name="area"
                       placeholder="请填写数字(必填),单位是亩"></td>
                </tr>
                <tr v-show="errors.has('area')">
                    <td colspan="3" class="error">{{ errors.first('area') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="farmed_new_principal">负责人</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.principal" type="text" value="" id="farmed_new_principal" name="principal"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="farmed_new_kind">养殖畜禽种类</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.kind" type="text" value="" id="farmed_new_kind" name="kind"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="farmed_new_scale">养殖规模</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.scale" type="text" value="" id="farmed_new_scale" name="scale"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="farmed_new_address">地址</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.address" type="text" id="farmed_new_address" name="address"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="farmed_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="farmed_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="javascript:void(0)">
                                <button @click="cancelEditfarmed" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="javascript:void(0)">
                                <button @click="cancelAddfarmed" type="button">
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
        name: 'Popfarmed',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'pid': 0,
                        'id': '',
                        'name': '',
                        'area': 0,
                        'kind': '',
                        'scale': '',
                        'address': '',
                        'principal': '',
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
                    'pid': 0,
                    'id': '',
                    'name': '',
                    'area': 0,
                    'kind': '',
                    'scale': '',
                    'address': '',
                    'principal': '',
                    'memo': ''
                },
                farms: []
            }
        },
        computed: {
            defaultfarmedIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.farms){
                        if(this.farms[index].id == this.letItem.pid){
                            return index;
                        }
                    }
                    
                }
            }
        },
        mounted () {
            this.getAllfarmeds();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {

            /**
            * 获取所有养殖场
            */
            getAllfarmeds () {
                this.$http.get(this.$adminUrl('farmed/create')).then((response)=>{
                    this.$set(this, 'farms', response.body);
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {

                // let params = {
                //     'id': this.letItem.id,
                //     'field': 'name',
                //     'value': this.letItem.name
                // };
                // this.$unique(this, 'farmed', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        this.$update(this, 'farmed', this.letItem).then((response) => {
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
                        this.$storeL(this, 'farmed', this.letItem).then((response) => {
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
                // }, () => {
                //     return false;
                // });
                
            },
            /**
            * 隐藏新增模块
            */
            cancelAddfarmed () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditfarmed () {
                this.$emit('closeEdit');
            },

            /**
            * CallBack函数,执行回调函数 
            */
            getMsgPid (msg) {
                    this.letItem.pid = msg;
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
