/**
 * 肥料档案新增/编辑组件
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
 * 描述：肥料信息对象
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
 * 返回：manure对象
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
                <label for="manure_category_id" class="label-tit">分类</label>
                <!-- <select 
                    v-model="letItem.category_id" 
                    v-validate.initial="letItem.category_id" 
                    data-vv-rules="required" 
                    data-vv-as="分类" 
                    id="manure_category_id" name="manure_category_id" class="input-pop">
                    <option value>请选择分类</option>
                    <option v-for="category in categorys" :value="category.id">{{category.name}}</option>
                </select> -->
                <pop-select id="manure_category_id" name="manure_category_id" class="input-pop"
                    :items="categorys"
                    :defaultIndex="parseInt(defaultIndex)"
                    protoBack="id"
                    protoShow="name"
                    @callback="getMsg"
                ></pop-select>
                <span v-show="errors.has('category_id')">{{ errors.first('category_id') }}</span>
            </div>
            <div>
                <label for="manure_new_fullName" class="label-tit">肥料名称</label>
                <input 
                    v-model="letItem.name" 
                    v-validate.initial="letItem.name" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="肥料名称" 
                    class="input-pop" type="text" id="manure_new_fullName" name="name" placeholder="必填">
                <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </div>
            <div>
                <label for="manure_usage" class="label-tit">用途</label>
                <input v-model="letItem.usage" class="input-pop" type="text" id="manure_usage" name="usage">
                <span v-show="errors.has('usage')">{{ errors.first('usage') }}</span>
            </div>
            <div>
                <label for="manure_new_specification" class="label-tit">包装规格</label>
                <input v-model="letItem.specification" class="input-pop" type="text" id="manure_new_specification" name="specification">
            </div>
            <div>
                <label for="manure_new_dealer" class="label-tit">经销商名称</label>
                <input v-model="letItem.dealer" class="input-pop" type="text" value="" id="manure_new_dealer" name="dealer">
            </div>
            <div>
                <label for="manure_new_origin" class="label-tit">产地</label>
                <input v-model="letItem.origin" class="input-pop" type="text" value="" id="manure_new_origin" name="origin">
            </div>
            <div>
                <label for="manure_new_phone" class="label-tit">联系方式</label>
                <input 
                    v-model="letItem.phone" 
                    v-validate.initial="letItem.phone" 
                    data-vv-rules="phone" 
                    class="input-pop" type="text" id="manure_new_phone" name="phone" placeholder="请输入11位手机号(固话用-隔开)">
                <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
            </div>
            <div>
                <label for="manure_new_note" class="label-tit">备注信息</label>
                <input v-model="letItem.memo" class="input-pop input-note" type="text" id="manure_new_note" name="memo">
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
        name: 'PopManure',
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
                        'specification': '',
                        'dealer': '',
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
                    'specification': '',
                    'dealer': '',
                    'origin': '',
                    'phone': '',
                    'memo': ''
                },
                categorys: [],
            }
        },
        computed: {
            //判断是编辑状态还是新建状态，取出不同的下标
            defaultIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.categorys){
                        if(this.categorys[index].id == this.letItem.category_id){
                            return index;
                        }
                    }
                    return -1;
                }
            }

        },
        mounted () {
            this.getAllManure();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {

            /**
            * 获取所有肥料分类
            */
            getAllManure () {
                this.$http.get(this.$adminUrl('manure_category/query')).then((response)=>{
                    this.$set(this, 'categorys', response.body.manure_categorys.data);
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
                this.$unique(this, 'manure', params, 'letItem.name').then(() => {
                    for(let category of this.categorys){
                        if(category.id == this.letItem.category_id){
                            this.letItem.category_name = category.name;
                        }
                    }
                    if(this.edit) {
                        this.$update(this, 'manure', this.letItem).then((response) => {
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
                        this.$storeL(this, 'manure', this.letItem).then((response) => {
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
            getMsg (msg) {
                this.letItem.category_id = msg
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
