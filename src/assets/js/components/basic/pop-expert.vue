/**
 * 专家档案新增/编辑组件
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
 * 描述：专家信息对象
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
 * 返回：expert对象
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
                    <td class="label-tit"><label for="expert_table_type">操作模块</label></td>
                    <td class="input-pop" colspan="2"><pop-select id="expert_table_type" name="expert_table_type"
                    :items="tableType"
                    :defaultIndex="parseInt(defaultTypeIndex)"
                    @callback="getMsgType"
                ></pop-select></td>
                </tr>
                <tr v-show="errors.has('table_type')">
                    <td colspan="2" class="error">{{ errors.first('table_type') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="expert_new_fullName">专家名称</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.expert_name" 
                    v-validate.initial="letItem.expert_name" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="专家名称" 
                    type="text" id="expert_new_fullName" name="expert_name" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('expert_name')">
                    <td colspan="3" class="error">{{ errors.first('expert_name') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="expert_major">研究领域</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.major" 
                    v-validate.initial="letItem.major" 
                    data-vv-rules="required" 
                    data-vv-as="研究领域" 
                    type="text" id="expert_major" name="major" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('major')">
                    <td colspan="3" class="error">{{ errors.first('major') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="expert_level">级别</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.level" 
                    v-validate.initial="letItem.level" 
                    data-vv-rules="required" 
                    data-vv-as="级别" 
                    type="text" id="expert_level" name="level" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('level')">
                    <td colspan="3" class="error">{{ errors.first('level') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="expert_sex">性别</label></td>
                    <td class="input-pop" colspan="2"><pop-select id="expert_sex" name="expert_sex"
                    :items="sex"
                    :defaultIndex="parseInt(defaultSexIndex)"
                    @callback="getMsgSex"
                ></pop-select></td>
                </tr>
                <tr v-show="errors.has('sex')">
                    <td colspan="3" class="error">{{ errors.first('sex') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="expert_new_age">年龄</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.age" 
                    v-validate.initial="letItem.age" 
                    data-vv-rules="decimal" 
                    data-vv-as="年龄" 
                    type="text" id="expert_new_age" name="age"></td>
                </tr>
                <tr v-show="errors.has('age')">
                    <td colspan="3" class="error">{{ errors.first('age') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="expert_new_unit">所属单位</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.unit" 
                    class="input-pop" type="text" value="" id="expert_new_unit" name="unit"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="expert_new_phone">联系方式</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.phone" 
                    v-validate.initial="letItem.phone" 
                    data-vv-rules="phone" 
                    type="text" id="expert_new_phone" name="phone" placeholder="请输入11位手机号(固话用-隔开)"></td>
                </tr>
                <tr v-show="errors.has('phone')">
                    <td colspan="3" class="error">{{ errors.first('phone') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="expert_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="expert_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="#">
                                <button @click="cancelEditExpert" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="#">
                                <button @click="cancelAddExpert" type="button">
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
        expert_name: 'PopExpert',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'class_type': 0,
                        'table_type': 'fertilize',
                        'id': 0,
                        'expert_name': '',
                        'major': '',
                        'level': '',
                        'sex': '男',
                        'age': '',
                        'unit': '',
                        'phone': '',
                        'memo': '',
                        'class_type':0
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
                    'class_type': 0,
                    'table_type': 'fertilize',
                    'id': 0,
                    'expert_name': '',
                    'major': '',
                    'level': '',
                    'sex': '男',
                    'age': '',
                    'unit': '',
                    'phone': '',
                    'memo': '',
                    //'class_type':0
                },
                sex: ['男','女'],
                tableType: ['施肥','病虫害','检验检测','农事'],
                tableSet: ['fertilize','spray','detect','farming'],
            }
        },
        computed: {
            //判断是编辑状态还是新建状态，取出不同的下标
            defaultTypeIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.tableType){
                        if(this.tableSet[index] == this.letItem.table_type){
                            return index;
                        }
                    }                                      
                }
            },
            defaultSexIndex () {
                if (this.edit == false) {
                    return 0;
                } else {               
                    for(let index in this.sex){
                        if(this.sex[index] == this.letItem.sex){
                            return index;
                        }
                    };                        
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
                    'field': 'expert_name',
                    'value': this.letItem.expert_name
                };
                this.$unique(this, 'expert', params, 'letItem.expert_name').then(() => {

                    if(this.edit) {
                        this.$update(this, 'expert', this.letItem).then((response) => {
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
                        this.$storeL(this, 'expert', this.letItem).then((response) => {
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
            cancelAddExpert () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditExpert () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgType (msg) {
                for(let index of Object.keys(this.tableType)) {
                    if(this.tableType[index] == msg) {
                        this.letItem.table_type = this.tableSet[index];
                    }
                }
            },
            getMsgSex (msg) {
                    this.letItem.sex = msg;               
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
