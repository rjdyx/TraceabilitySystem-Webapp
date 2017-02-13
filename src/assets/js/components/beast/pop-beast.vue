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
        <table class="main form-pop">
            <tbody class="form-body">
                <tr>
                    <td colspan="3">
                        <div @click="selectPic" class="pic-preview">
                            <img v-if="letItem.image == '' || letItem.image == null" :src="$img(image)">
                            <img v-else-if="letItem.image == 'upload.png'" :src="$img(letItem.image)">
                            <img v-else :src="$img(letItem.image, false)">
                        </div>
                        <input name="file_name" type="file" hidden="hidden" @change="previewPic(letItem, $event)">
                        <div class="delete-pic-btn">
                            <button type="button" @click="deletePic">删除</button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="beast_new_fullName">畜禽名称</label></td>
                    <td class="input-pop"><input 
                        v-model="letItem.name" 
                        v-validate.initial="letItem.name" 
                        data-vv-rules="required|max:255" 
                        data-vv-as="畜禽名称" 
                        type="text" id="beast_new_fullName" name="name" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('name')">
                    <td colspan="3" class="error">{{ errors.first('name') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="beast_new_desctiption">品种描述</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.desctiption" type="text" id="beast_new_desctiption" name="desctiption"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="beast_new_ear">RFID位置</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.ear" type="text" id="beast_new_ear" name="ear"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="beast_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="beast_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="javascript:void(0)">
                                <button @click="cancelEditbeastation" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="javascript:void(0)">
                                <button @click="cancelAddbeastation" type="button">
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
                    'name': '',
                    'ear': '',
                    'desctiption': '',
                    'memo': ''
                },
                // 图片格式
                pattern: {
                    type: Array,
                    default () {
                        return ['jpeg', 'png'];
                    }
                },
                image: 'upload.png'
            }
        },
        computed: {
            //判断是编辑状态还是新建状态，取出不同的下标
            defaultIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.categorys){    
                        if(this.categorys[index] == this.letItem.category){
                            return index;
                        }  
                    }
                    
                }
            }

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
            * 触发input[type="file"]的click事件来选择图片
            * @param  {object} event
            */
            selectPic (event) {

                // 取出空格
                let obj = event.target.parentNode.nextSibling;
                if(obj.tagName != 'INPUT'){
                    obj = obj.nextSibling;
                }

                if(obj.tagName != 'INPUT'){
                    obj = event.target.nextSibling.nextSibling;
                }

                // 触发input的click事件
                obj.click();

            },

            /**
            *  获取input[type="file"]里的图片，预览到页面上
            */
            previewPic (srcPic, event) {

                // 获取选中的图片文件，并判断选中的图片数量是否合法
                let file = event.target.files[0];

                // 将pattern数组里的图片格式组装成"xxx|xxx|xxx"这样的格式，如："jpeg|png"
                let regexParams = '';
                for(let index = 0; index < this.pattern.length; index++) {
                   regexParams += this.pattern[index]+(index == this.pattern.length - 1?'':'|');
                }
                // 将组装后的图片格式字符串传给正则表达式构造器，最后生成如/\/(?:jpeg|png)/i这样的正则表达式
                let regex = new RegExp('\/(?:' + regexParams + ')', 'i');

                // 过滤图片格式，如果出现格式不合法的，则取消此图片的上传操作
                if (!regex.test(file.type)){
                    alert("请选择格式为 " + this.pattern + " 的图片");
                    return;
                }

                // 开始读取选中的图片，添加预览到页面
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = e => {
                    this.letItem.image = e.target.result;
                    this.letItem.file_name = file;
                }

            },

            /**
             * 删除图片
             */
            deletePic () {
                this.letItem.image = 'upload.png';
                this.letItem.file_name = '';
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
                this.$unique(this, 'beast', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        if(this.letItem.file_name != null){

                            let form = new FormData();
                            for(let key of Object.keys(this.letItem)){
                                form.append(key, this.letItem[key]);
                            }

                            this.$update(this, 'beast', form, true).then((response) => {
                                for(let key of Object.keys(this.letItem)){
                                    this.tmp[key] = this.letItem[key];
                                }
                                this.$alert('修改成功', 's');
                            }, (response) => {
                                this.$alert('连接出错', 'e');
                            });

                        }else {

                            this.letItem.image = 'upload.png';
                            this.$update(this, 'beast', this.letItem).then((response) => {

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

                        this.$storeL(this, 'beast', form, true).then((response) => {
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
            cancelAddbeastation () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditbeastation () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsg (msg) {
                this.letItem.category = msg;
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
