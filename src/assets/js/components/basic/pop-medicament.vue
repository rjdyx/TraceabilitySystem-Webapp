/**
 * 农药档案新增/编辑组件
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  medicament 
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
        <div class="main form-pop">
            <div>
                <label for="medicament_category_id" class="label-tit">分类</label>
                <!-- <select 
                    v-model="medicament.category_id" 
                    v-validate.initial="medicament.category_id" 
                    data-vv-rules="required" 
                    data-vv-as="分类" 
                    id="medicament_category_id" name="medicament_category_id" class="input-pop">
                    <option value>请选择分类</option>
                    <option v-for="category in categorys" :value="category.id">{{category.name}}</option>
                    <PopSelect id="medicament_category_id" name="medicament_category_id" class="input-pop"
                </select> -->
                <pop-select id="medicament_category_id" name="medicament_category_id" class="input-pop"
                    :items="categorys"
                    :defaultIndex="parseInt(defaulCatIndex)"
                    protoBack="id"
                    protoShow="name"
                    @callback="getMsgId"
                ></pop-select>
                <span v-show="errors.has('category_id')">{{ errors.first('category_id') }}</span>
            </div>
            <div>
                <label for="medicament_new_fullName" class="label-tit">农药名称</label>
                <input 
                    v-model="medicament.name" 
                    v-validate.initial="medicament.name" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="农药名称" 
                    class="input-pop" type="text" id="medicament_new_fullName" name="name" placeholder="必填">
                <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </div>
            <div>
                <label for="medicament_usage" class="label-tit">用途</label>
                <input v-model="medicament.usage" class="input-pop" type="text" id="medicament_usage" name="usage">
                <span v-show="errors.has('usage')">{{ errors.first('usage') }}</span>
            </div>
            <div>
                <label for="medicament_new_control_objects" class="label-tit">防治对象</label>
                <input v-model="medicament.control_objects" class="input-pop" type="text" id="medicament_new_control_objects" name="control_objects">
            </div>
            <div>
                <label for="medicament_toxicity_grade" class="label-tit">分类</label>
                <!-- <select 
                    v-model="medicament.toxicity_grade" 
                    v-validate.initial="medicament.toxicity_grade" 
                    data-vv-rules="required" 
                    data-vv-as="分类" 
                    id="medicament_toxicity_grade" name="medicament_toxicity_grade" class="input-pop">
                    <option value="微毒">微毒</option>
                    <option value="低毒">低毒</option>
                    <option value="中毒">中毒</option>
                    <option value="高毒">高毒</option>
                </select> -->
                <pop-select id="medicament_toxicity_grade" name="medicament_toxicity_grade" class="input-pop"
                    :items="toxicity"
                    :defaultIndex="parseInt(defaultToxIndex)"
                    @callback="getMsgGrade"
                ></pop-select>
                <span v-show="errors.has('toxicity_grade')">{{ errors.first('toxicity_grade') }}</span>
            </div>
            <div>
                <label for="medicament_new_specification" class="label-tit">包装规格</label>
                <input v-model="medicament.specification" class="input-pop" type="text" id="medicament_new_specification" name="specification">
            </div>
            <div>
                <label for="medicament_new_dealer" class="label-tit">经销商名称</label>
                <input v-model="medicament.dealer" class="input-pop" type="text" value="" id="medicament_new_dealer" name="dealer">
            </div>
            <div>
                <label for="medicament_new_origin" class="label-tit">产地</label>
                <input v-model="medicament.origin" class="input-pop" type="text" value="" id="medicament_new_origin" name="origin">
            </div>
            <div>
                <label for="medicament_new_phone" class="label-tit">联系方式</label>
                <input 
                    v-model="medicament.phone" 
                    v-validate.initial="medicament.phone" 
                    data-vv-rules="phone" 
                    class="input-pop" type="text" id="medicament_new_phone" name="phone" placeholder="请输入11位手机号(固话用-隔开)">
                <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
            </div>
            <div>
                <label for="medicament_new_note" class="label-tit">备注信息</label>
                <input v-model="medicament.memo" class="input-pop input-note" type="text" id="medicament_new_note" name="memo">
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
        name: 'PopMedicament',
        props: {
            medicament: {
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
                        console.log(this.medicament.category_name);
                        if(this.categorys[index].name == this.medicament.category_name){
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
                        if(this.toxicity[index] == this.medicament.toxicity_grade){
                            //console.log(this.medicament.toxicity_grade);
                            return index;
                        }
                    }                         
                }
            }

        },
        mounted () {
            this.getAllPlantation();
            for(let key of Object.keys(this.medicament)){
                this.tmp[key] = this.medicament[key];
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
                    'id': this.medicament.id,
                    'field': 'name',
                    'value': this.medicament.name
                };
                this.$unique(this, 'medicament', params, 'medicament.name').then(() => {
                    for(let category of this.categorys){
                        if(category.id == this.medicament.category_id){
                            this.medicament.category_name = category.name;
                        }
                    }
                    if(this.edit) {
                        this.$update(this, 'medicament', this.medicament).then((response) => {
                            for(let key of Object.keys(this.medicament)){
                                this.tmp[key] = this.medicament[key];
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
                        this.$storeL(this, 'medicament', this.medicament).then((response) => {
                            this.medicament.id = response.body;
                            this.$emit('callback', this.medicament);
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
            * @param medicament
            */
            cancelEditPlanta () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgId (msg) {
                    this.medicament.category_id = msg;
            },
            getMsgGrade (msg) {
                    this.medicament.toxicity_grade=msg;                
            },
        },
        destroyed () {
            if(this.edit){
                for(let key of Object.keys(this.medicament)){
                        this.medicament[key] = this.tmp[key];
                    }
            }
        },
    }

</script>
