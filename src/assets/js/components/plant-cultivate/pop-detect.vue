/**
 * 种植批次检测新增组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/06
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：检测信息对象
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
 * 返回：detect对象
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
                    <td class="label-tit"><label for="detect_content">检测类型</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="detect_content"
                            :items="detectContents"
                            :defaultIndex="parseInt(defaultdetectContentIndex)"
                            @callback="getMsgdetectContent"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="detect_date">检测日期</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.detect_date" 
                    v-validate.initial="letItem.detect_date" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作日期" 
                    type="text" id="detect_date" name="detect_date" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('detect_date')">
                    <td colspan="3" class="error">{{ errors.first('detect_date') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="department">检测机构</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.department" 
                    v-validate.initial="letItem.department" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="检测机构" 
                    type="text" id="department" name="department" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('department')">
                    <td colspan="3" class="error">{{ errors.first('department') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="detect_item">检测项目名称</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.item" type="text" id="detect_item" name="item"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="expert_id">指导专家</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="expert_id"
                            :items="expertIds"
                            protoBack="id"
                            protoShow="expert_name"
                            :defaultIndex="parseInt(defaultExpertIdIndex)"
                            @callback="getMsgExpertId"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="detect_operator">检测人</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.operator" type="text" id="detect_operator" name="operator"></td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="result">检测结果</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="result"
                            :items="results"
                            :defaultIndex="parseInt(defaultresultIndex)"
                            @callback="getMsgresult"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="detect_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="detect_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="#">
                                <button @click="cancelEditdetect" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="#">
                                <button @click="cancelAdddetect" type="button">
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
        name: 'Popdetect',
        props: {
            cultivateId: {
                type: Number,
                default: ''
            },
            letItem: {
                type: Object,
                default() {
                    return {
                        'cultivate_id': 0,
                        'id': '',
                        'detect_content': '水质检测',
                        'detect_date': '',
                        'department': '',
                        'item': '',
                        'expert_id': '',
                        'operator': '',
                        'result': '合格',
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
                detectContents:['水质检测', '土壤检测', '农药残留检测', '大气污染检测', '其他检测'],
                results:['合格', '不合格'],
                expertIds: [],
                tmp: {
                    'cultivate_id': 0,
                    'id': '',
                    'detect_content': '水质检测',
                    'detect_date': '',
                    'department': '',
                    'item': '',
                    'expert_id': '',
                    'operator': '',
                    'result': '合格',
                    'memo': ''
                },
                
            }
        },
        computed: {
            //判断是编辑状态还是新建状态，取出不同的下标
            defaultExpertIdIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.expertIds){
                        if(this.expertIds[index].id == this.letItem.expert_id){
                            return index;
                        }
                    }
                    
                }
            },
            defaultdetectContentIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.detectContents){
                        if(this.detectContents[index] == this.letItem.detect_content){
                            return index;
                        }
                    }
                    
                }
            },
            defaultresultIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.results){
                        if(this.results[index] == this.letItem.result){
                            return index;
                        }
                    }
                    
                }
            }
        },
        mounted () {
            let time = new Date();
            let date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
            this.letItem.detect_date = date;
            this.getAlldetecttion();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {

            /**
            * 获取所有专家
            */
            getAlldetecttion () {

                this.$http.get(this.$adminUrl('expert/query?params[type]=detect')).then((response)=>{
                    this.$set(this, 'expertIds', response.body.experts.data);
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    this.$update(this, 'detect', this.letItem).then((response) => {
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
                    this.letItem.cultivate_id = this.cultivateId;
                    this.$storeL(this, 'detect', this.letItem).then((response) => {
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
            * 隐藏新增模块
            */
            cancelAdddetect () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditdetect () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgdetectContent (msg) {
                this.letItem.detect_content = msg;
            },
            getMsgresult (msg) {
                this.letItem.result = msg;
            },
            getMsgExpertId (msg) {
                this.letItem.expert_id = msg;                
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
