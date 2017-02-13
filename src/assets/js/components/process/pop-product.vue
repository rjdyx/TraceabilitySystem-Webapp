/**
 * 果蔬产品新增/编辑组件
 * @description 
 * @author 李明村
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：产品对象
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
 * 返回：product对象
 * 必用：true
 * 描述：
 * 
 * 
 * 
 */
<template>
    <form @submit.prevent="validateBeforeSubmit">
        <form-submit
            :letItem="letItem"
            :inputData="inputData"
            :selectRoute="selectRoute"
            :edit="edit"
            :select="plants"
            :selectFault="selectFault"
            @closeNew="cancelAdd"
            @closeEdit="cancelEdit"
            @thisSet="getThis"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

</style>

<script>

    export default {
        name: 'PopProduct',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'id': '',
                        'plant_id':'',
                        'name': '',
                        'marque': '',
                        'specification': '',
                        'production_unit': '',
                        'place_origin': '',
                        'enforce_standard': '',
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
                    'plant_id':'',
                    'name': '',
                    'marque': '',
                    'specification': '',
                    'production_unit': '',
                    'place_origin': '',
                    'enforce_standard': '',
                    'memo': ''
                },
                plants: [],
                selectFault:[],
                inputData: {
                    'plant_id':
                    {
                        'label': '所属果蔬',
                        'divfor': 'product_new_plant',
                        'placeholder': '必填',
                        'rules': 'required',
                        'select': '1',
                        'selectName':'plant_name'
                    },
                    'name':
                    {
                        'label': '产品名称',
                        'divfor': 'product_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'marque':
                    {
                        'label': '产品品牌',
                        'divfor': 'product_new_marque',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'specification': 
                    {
                        'label': '产品规格',
                        'divfor': 'product_new_specification',
                        'placeholder': '',
                        'rules': 'required|max:255'
                    },
                    'production_unit': 
                    {
                        'label': '生产单位',
                        'divfor': 'product_new_production_unit',
                        'placeholder': '',
                        'rules': 'max:255'
                    },
                    'place_origin': 
                    {
                        'label': '产地',
                        'divfor': 'product_new_place_origin',
                        'placeholder': '',
                        'rules': 'max:255'
                    },
                    'enforce_standard': 
                    {
                        'label': '执行标准',
                        'divfor': 'product_new_business_scope',
                        'placeholder': '',
                        'rules': 'max:255'
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'product_new_note',
                        'placeholder': '',
                        'rules': 'max:255'
                    }
            },
            /**
            *下拉框信息
            */
            selectRoute: {
                //下拉框是否存在'select'
                'select': true,
                //下拉框返回数据类型
                'data_id':'plant_id',
                //获取传值对比id
                'letItem_id':'plant_id'
            },
            val:''
        }
        },
        mounted () {
            this.getAllData();
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
                    'type': 'plant',
                    'value': this.letItem.name
                };
                this.$unique(this.val, 'product', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        this.$update(this.val, 'product', this.letItem).then((response) => {
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
                        this.$storeL(this.val, 'product', this.letItem).then((response) => {
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
            getAllData () {
              this.$http.get(this.$adminUrl('harvest/query')).then((response)=>{
                  this.$set(this, 'plants', response.body.harvests.data);
              }, (response)=>{

              });
          },
            getThis: function(val) {
                this.val=val;
            },
            /**
            * 隐藏新增模块
            */
            cancelAdd: function() {
                this.$emit('closeNew');
            },
            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEdit: function() {
                this.$emit('closeEdit');
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
