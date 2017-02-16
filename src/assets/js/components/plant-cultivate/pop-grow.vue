/**
 * 生长过程新增/编辑组件
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
 * 描述：生长信息对象
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
 * 返回：grow对象
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
            @thisSet="getThis"
            @getDate="getDate"
            @getPic="getPic"
        ></form-submit>
    </form>
</template>
<script>
    export default {
        name: 'Popgrow',
        props: {
            cultivateId: {
                type: Number,
                default: 0
            },
            letItem: {
                type: Object,
                default() {
                    return {
                        'cultivate_id': 0,
                        'id': '',
                        'image': '',
                        'path': '',
                        'image_date': '',
                        'name': '',
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
                    'cultivate_id': 0,
                    'id': '',
                    'image': '',
                    'path': '',
                    'image_date': '',
                    'name': '',
                    'description': '',
                    'memo': ''
                },
                inputData: {
                    'path':
                    {
                        'label': '生长图片',
                        'file_name':'path',
                        'pic': true,
                        'image':'',
                        'placeholder': '必填',
                        'rules':'required'
                    },
                    'name':
                    {
                        'label': '图片标题',
                        'divfor': 'grow_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'image_date':
                    {
                        'label': '上传日期',
                        'divfor': 'image_date',
                        'placeholder': '必填',
                        'rules': 'required|max:255',
                        'date': true
                    },
                    'description':
                    {
                        'label': '特征描述',
                        'divfor': 'grow_new_description',
                        'placeholder': '',
                        'rules': '',
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'grow_new_note',
                        'placeholder': '',
                        'rules': ''
                    }
                },
                val:''
            }
        },
        mounted () {
            let time = new Date();
            let date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
            this.letItem.image_date = date;
            // 初始化tmp，同时过滤掉grow里面不需要的属性
            for(let key of Object.keys(this.letItem)){
                // 如果grow里面的属性tmp里面也有，那么那对应的值赋予tmp
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
                if(this.edit) {
                    if(this.letItem.path != null){

                        let form = new FormData();
                        for(let key of Object.keys(this.letItem)){
                            form.append(key, this.letItem[key]);
                        }
                        form.append('cultivate_id', this.cultivateId);
                        this.$update(this.val, 'grow', form, true).then((response) => {
                            for(let key of Object.keys(this.letItem)){
                                this.tmp[key] = this.letItem[key];
                            }
                            this.$alert('修改成功', 's');
                        }, (response) => {
                            this.$alert('连接出错', 'e');
                        });

                    }else {
                        let cultivateId = this.cultivateId == 0 ? this.$route.params.id : this.cultivateId;
                        this.letItem.cultivate_id = cultivateId;
                        this.letItem.image = 'upload.png';
                        this.$update(this.val, 'grow', this.letItem).then((response) => {

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
                    form.append('cultivate_id', this.cultivateId);
                    if(this.letItem.path == null){
                        this.letItem.image = 'upload.png';
                    }
                    this.$storeL(this.val, 'grow', form, true).then((response) => {
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
            },
            /**
            * 获取图片路径
            */
            getPic: function(val) {
                this.letItem.path=val;
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
            getDate: function(val) {
                this.letItem.image_date = val;
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
