/**
 * 畜禽档案新增/编辑组件
 * @desctiption 
 * @author 苏锐佳
 * @date 2017/02/01
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：畜禽信息对象
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
 * 返回：beast对象
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
            @getPic="getPic"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

.form-pop {
    .pic-preview {
        width: 100%;
        height: pxToRem(200);
        border-bottom: 1px solid #d4d4d4;
        text-align: center;

        img {
            height: 100%;
        }
    }
    .delete-pic-btn {
        text-align: center;

        button {
            width: pxToRem(100);
            height: pxToRem(39);
            margin: pxToRem(7) 0;
            background-color: white;
            border: 1px solid #d4d4d4;
        }
    }
}

</style>

<script>

    export default {
        name: 'Popbeast',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'id': '',
                        'image': '',
                        'file_name': null,
                        'name': '',
                        'ear': '',
                        'desctiption': '',
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
                    'name': '',
                    'ear': '',
                    'desctiption': '',
                    'memo': ''
                },
                inputData: {
                    'file_name':
                    {
                        'label': '畜禽图片',
                        'file_name':'file_name',
                        'pic': true,
                        'image':'',
                        'placeholder': '',
                        'rules':''
                    },
                    'name':
                    {
                        'label': '畜禽名称',
                        'divfor': 'beast_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'desctiption': 
                    {
                        'label': '品种描述',
                        'divfor': 'beast_new_desctiption',
                        'placeholder': '',
                        'rules': ''
                    },
                    'ear': 
                    {
                        'label': 'RFID位置',
                        'divfor': 'beast_new_ear',
                        'placeholder': '',
                        'rules': ''
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'beast_new_note',
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
            // 初始化tmp，同时过滤掉beast里面不需要的属性
            for(let key of Object.keys(this.letItem)){
                // 如果beast里面的属性tmp里面也有，那么那对应的值赋予tmp
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
            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                let params = {
                    'id': this.letItem.id,
                    'field': 'name',
                    'value': this.letItem.name
                };
                this.$unique(this.val, 'beast', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        if(this.letItem.file_name != null){

                            let form = new FormData();
                            for(let key of Object.keys(this.letItem)){
                                form.append(key, this.letItem[key]);
                            }

                            this.$update(this.val, 'beast', form, true).then((response) => {
                                for(let key of Object.keys(this.letItem)){
                                    this.tmp[key] = this.letItem[key];
                                }
                                this.$alert('修改成功', 's');
                            }, (response) => {
                                this.$alert('连接出错', 'e');
                            });

                        }else {

                            this.letItem.image = 'upload.png';
                            this.$update(this.val, 'beast', this.letItem).then((response) => {

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

                        this.$storeL(this.val, 'beast', form, true).then((response) => {
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
