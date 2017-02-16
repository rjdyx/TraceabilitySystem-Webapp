/**
 * 果蔬档案新增/编辑组件
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
 * 描述：果蔬信息对象
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
 * 返回：plant对象
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
            :edit="edit"
            @closeNew="cancelAdd"
            @closeEdit="cancelEdit"
            @thisSet="getThis"
            @getMsgDataVal="getMsgDataVal"
            @getPic="getPic"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

</style>

<script>

    export default {
        name: 'PopPlant',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'id': '',
                        'image': '',
                        'file_name': null,
                        'category': '蔬菜类',
                        'name': '',
                        'growth_cycle': '',
                        'description': '',
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
                    'id': '',
                    'image': '',
                    'file_name': null,
                    'category': '蔬菜类',
                    'name': '',
                    'growth_cycle': '',
                    'description': '',
                    'memo': ''
                },
                inputData: {
                    'file_name':
                    {
                        'label': '果蔬图片',
                        'file_name':'file_name',
                        'pic': true,
                        'image':'',
                        'placeholder': '',
                        'rules':''
                    },
                    'category':
                    {
                        'label': '果蔬类别',
                        'divfor': 'plant_categroy_select',
                        'placeholder': '必填',
                        'rules': 'required',
                        'select': '2',
                        'index': 0,
                        'data': ['蔬菜类','水果类']
                    },
                    'name':
                    {
                        'label': '果蔬名称',
                        'divfor': 'plant_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'growth_cycle': 
                    {
                        'label': '生长周期',
                        'divfor': 'plant_new_growth_cycle',
                        'placeholder': '必填，单位（天）',
                        'rules': 'required|decimal:2'
                    },
                    'description': 
                    {
                        'label': '特征描述',
                        'divfor': 'plant_new_description',
                        'placeholder': '',
                        'rules': ''
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'plant_new_note',
                        'placeholder': '',
                        'rules': ''
                    }
                },
                val:''
            }
        },
        computed: {
            
        },
        mounted () {
            this.getIndex();
            // 初始化tmp，同时过滤掉plant里面不需要的属性
            for(let key of Object.keys(this.letItem)){
                // 如果plant里面的属性tmp里面也有，那么那对应的值赋予tmp
                if((key in this.tmp)&&(this.tmp.hasOwnProperty(key))){
                    this.tmp[key] = (this.letItem[key] == null? '':this.letItem[key]);
                }else {
                    // 否则删除此属性
                    delete this.letItem[key];
                }
            }
            if(this.edit){
                this.letItem.imageFlag = 'no';
            }
        },
        methods: {
            //判断是新建还是编辑
            getIndex: function() {
                if (this.edit == false) {
                    this.inputData['category']['index']=0;
                } else {
                    for(let index in this.inputData['category']['data']) {
                        if(this.inputData['category']['data'][index]== this.letItem.category){
                            this.inputData['category']['index']=parseInt(index);
                        }
                    }     
                }
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
                
                this.$unique(this.val, 'plant', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        if(this.letItem.file_name != null){
                            let form = new FormData();
                            for(let key of Object.keys(this.letItem)){
                                form.append(key, this.letItem[key]);
                            }

                            this.$update(this.val, 'plant', form, true).then((response) => {
                                for(let key of Object.keys(this.letItem)){
                                    this.tmp[key] = this.letItem[key];
                                }
                                this.$alert('修改成功', 's');
                            }, (response) => {
                                this.$alert('连接出错', 'e');
                            });

                        }else {

                            this.letItem.image = 'upload.png';
                            this.$update(this.val, 'plant', this.letItem).then((response) => {

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
                        }  
                    }else {

                        let form = new FormData();
                        for(let key of Object.keys(this.letItem)){
                            form.append(key, this.letItem[key]);
                        }

                        if(this.letItem.file_name == null){
                            this.letItem.image = 'upload.png';
                        }

                        this.$storeL(this.val, 'plant', form, true).then((response) => {
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
            * 获取图片路径
            */
            getPic: function(val) {
                this.letItem.file_name=val;
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
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgDataVal (msg) {
                this.letItem.category = msg[1];
            },
        },
        destroyed () {
            if(this.edit){
                for(let key of Object.keys(this.letItem)){
                    this.letItem[key] = this.tmp[key];
                }
            }
        }
    }
</script>
