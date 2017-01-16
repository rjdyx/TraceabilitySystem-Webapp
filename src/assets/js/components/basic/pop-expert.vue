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
        <div class="main form-pop">
            <div>
                <label for="expert_table_type" class="label-tit">操作模块</label>
                <!-- <select 
                    v-model="letItem.table_type" 
                    v-validate.initial="letItem.table_type" 
                    data-vv-rules="required" 
                    data-vv-as="操作模块" 
                    id="expert_table_type" name="expert_table_type" class="input-pop">
                    <option value='fertilize'>施肥</option>
                    <option value='spray'>病虫害</option>
                    <option value='detect'>检验检测</option>
                    <option value='farming'>农事</option>
                </select> -->
                <!-- 操作模块 -->
                <pop-select id="expert_table_type" name="expert_table_type" class="input-pop"
                    :items="tableType"
                    :defaultIndex="parseInt(defaultTypeIndex)"
                    @callback="getMsgType"
                ></pop-select>
                <span v-show="errors.has('table_type')">{{ errors.first('table_type') }}</span>
            </div>
            <div>
                <label for="expert_new_fullName" class="label-tit">专家名称</label>
                <input 
                    v-model="letItem.expert_name" 
                    v-validate.initial="letItem.expert_name" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="专家名称" 
                    class="input-pop" type="text" id="expert_new_fullName" name="expert_name" placeholder="必填">
                <span v-show="errors.has('expert_name')">{{ errors.first('expert_name') }}</span>
            </div>
            <div>
                <label for="expert_major" class="label-tit">研究领域</label>
                <input 
                    v-model="letItem.major" 
                    v-validate.initial="letItem.major" 
                    data-vv-rules="required" 
                    data-vv-as="研究领域" 
                    class="input-pop" type="text" id="expert_major" name="major" placeholder="必填">
                <span v-show="errors.has('major')">{{ errors.first('major') }}</span>
            </div>
            <div>
                <label for="expert_level" class="label-tit">级别</label>
                <input 
                    v-model="letItem.level" 
                    v-validate.initial="letItem.level" 
                    data-vv-rules="required" 
                    data-vv-as="级别" 
                    class="input-pop" type="text" id="expert_level" name="level" placeholder="必填">
                <span v-show="errors.has('level')">{{ errors.first('level') }}</span>
            </div>
            <div>
                <label for="expert_sex" class="label-tit">性别</label>
                <!-- <select 
                    v-model="letItem.sex" 
                    v-validate.initial="letItem.sex" 
                    data-vv-rules="required" 
                    data-vv-as="性别" 
                    id="expert_sex" name="expert_sex" class="input-pop">
                    <option value="男">男</option>
                    <option value="女">女</option>
                </select> -->

                <!-- 性别选择模块 -->
                <pop-select id="expert_sex" name="expert_sex" class="input-pop"
                    :items="sex"
                    :defaultIndex="parseInt(defaultSexIndex)"
                    @callback="getMsgSex"
                ></pop-select>
                <span v-show="errors.has('sex')">{{ errors.first('sex') }}</span>
            </div>
            <div>
                <label for="expert_new_age" class="label-tit">年龄</label>
                <input 
                    v-model="letItem.age" 
                    v-validate.initial="letItem.age" 
                    data-vv-rules="decimal" 
                    data-vv-as="年龄" 
                    class="input-pop" type="text" id="expert_new_age" name="age">
                <span v-show="errors.has('age')">{{ errors.first('age') }}</span>
            </div>
            <div>
                <label for="expert_new_unit" class="label-tit">所属单位</label>
                <input 
                    v-model="letItem.unit" 
                    class="input-pop" type="text" value="" id="expert_new_unit" name="unit">
            </div>
            <div>
                <label for="expert_new_phone" class="label-tit">联系方式</label>
                <input 
                    v-model="letItem.phone" 
                    v-validate.initial="letItem.phone" 
                    data-vv-rules="phone" 
                    class="input-pop" type="text" id="expert_new_phone" name="phone" placeholder="请输入11位手机号(固话用-隔开)">
                <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
            </div>
            <div>
                <label for="expert_new_note" class="label-tit">备注信息</label>
                <input 
                    v-model="letItem.memo" 
                    class="input-pop input-note" type="text" id="expert_new_note" name="memo">
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
            getMsgType (msg) {
                for(let index of Object.keys(this.tableType)) {
                    if(this.tableType[index] == msg) {
                        this.letItem.table_type = this.tableSet[index];
                    }
                }
                console.log(this.letItem.table_type);
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
