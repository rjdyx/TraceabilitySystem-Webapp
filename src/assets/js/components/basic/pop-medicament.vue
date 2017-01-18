/**
 * 农药档案新增/编辑组件
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
 * 描述：农药信息对象
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
                    <td class="label-tit"><label for="medicament_category_id">分类</label></td>
                    <td class="input-pop" colspan="2"><pop-select id="medicament_category_id" name="medicament_category_id"
                    :items="categorys"
                    :defaultIndex="parseInt(defaulCatIndex)"
                    protoBack="id"
                    protoShow="name"
                    @callback="getMsgId"
                ></pop-select></td>
                </tr>
                <tr v-show="errors.has('category_id')">
                    <td colspan="2" class="error">{{ errors.first('category_id') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_new_fullName">农药名称</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.name" 
                    v-validate.initial="letItem.name" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="农药名称" 
                    type="text" id="medicament_new_fullName" name="name" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('name')">
                    <td colspan="3" class="error">{{ errors.first('name') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_usage">用途</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.usage" type="text" id="medicament_usage" name="usage"></td>
                </tr>
                <tr v-show="errors.has('usage')">
                    <td colspan="3" class="error">{{ errors.first('usage') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_new_control_objects">防治对象</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.control_objects" class="input-pop" type="text" id="medicament_new_control_objects" name="control_objects"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_toxicity_grade">分类</label></td>
                    <td class="input-pop" colspan="2"><pop-select id="medicament_toxicity_grade" name="medicament_toxicity_grade"
                    :items="toxicity"
                    :defaultIndex="parseInt(defaultToxIndex)"
                    @callback="getMsgGrade"
                ></pop-select></td>
                </tr>
                <tr v-show="errors.has('toxicity_grade')">
                    <td colspan="3" class="error">{{ errors.first('toxicity_grade') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_new_specification">包装规格</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.specification" type="text" id="medicament_new_specification" name="specification"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_new_dealer">经销商名称</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.dealer" type="text" id="medicament_new_dealer" name="dealer"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_new_origin">产地</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.origin" type="text" id="medicament_new_origin" name="origin"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_new_phone">联系方式</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.phone" 
                    v-validate.initial="letItem.phone" 
                    data-vv-rules="phone" 
                    type="text" id="medicament_new_phone" name="phone" placeholder="请输入11位手机号(固话用-隔开)"></td>
                </tr>
                <tr v-show="errors.has('phone')">
                    <td colspan="3" class="error">{{ errors.first('phone') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="medicament_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="medicament_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="#">
                                <button @click="cancelEditMedicament" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="#">
                                <button @click="cancelAddMedicament" type="button">
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
        name: 'PopMedicament',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'category_id': 0,
                        'category_name': '',
                        'id': 0,
                        'name': '',
                        'usage': '',
                        'control_objects': '',
                        'toxicity_grade': '微毒',
                        'specification': '',
                        'manufacturer': '',
                        'origin': '',
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
                tmp: {
                    'category_id': 0,
                    'category_name': '',
                    'id': 0,
                    'name': '',
                    'usage': '',
                    'control_objects': '',
                    'toxicity_grade': '微毒',
                    'specification': '',
                    'manufacturer': '',
                    'origin': '',
                    'phone': '',
                    'memo': ''
                },
                categorys: [],
                toxicity: ['微毒','低毒','中毒','高毒'],
            }
        },
        computed: {
            //判断是编辑状态还是新建状态，取出不同的下标
            defaulCatIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.categorys){
                        if(this.categorys[index].id == this.letItem.category_id){
                            return index;
                        }
                    }                                     
                }
            },
            defaultToxIndex () {
                if (this.edit == false) {
                    return 0;
                } else {               
                    for(let index in this.toxicity){                       
                        if(this.toxicity[index] == this.letItem.toxicity_grade){
                            //console.log(this.letItem.toxicity_grade);
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
            * 获取所有农药分类
            */
            getAllPlantation () {
                this.$http.get(this.$adminUrl('medicament_category/query')).then((response)=>{
                    this.$set(this, 'categorys', response.body.medicament_categorys.data);
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
                this.$unique(this, 'medicament', params, 'letItem.name').then(() => {
                    for(let category of this.categorys){
                        if(category.id == this.letItem.category_id){
                            this.letItem.category_name = category.name;
                        }
                    }
                    if(this.edit) {
                        this.$update(this, 'medicament', this.letItem).then((response) => {
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
                        this.$storeL(this, 'medicament', this.letItem).then((response) => {
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
            cancelAddMedicament () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditMedicament () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgId (msg) {
                    this.letItem.category_id = msg;
            },
            getMsgGrade (msg) {
                    this.letItem.toxicity_grade=msg;                
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
