/**
 * 采收检测管理新建组件
 * @description 
 * @author 舒丹彤
 * @date 2017/02/21
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：采收检测信息对象
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
 * 返回：harvest对象
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
                    <td class="label-tit">
                        <label for="detect_content">检测方式</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="detect_content"
                            :items="detectContents"
                            :defaultIndex="parseInt(defaultdetectContentIndex)"
                            @callback="getMsgdetectContent"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit">
                        <label for="new_date">检测日期</label></td>
                    <td class="input-pop" colspan="2">
                    <input 
                    v-model="letItem.residue_date" 
                    v-validate.initial="letItem.residue_date" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作日期" 
                    type="text" id="residue_edit_date" name="residue_date" placeholder="必填">
                    </td>
                </tr>
                <tr>
                    <td class="label-tit">
                        <label for="new_matchinfor">检测机构</label>
                    </td>
                    <td class="input-pop" colspan="2">
                    <input 
                    v-model="letItem.departments" 
                    v-validate.initial="letItem.departments" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="检测机构" 
                    type="text" id="residue_edit_departments" name="departments" placeholder="必填">
                    </td>
                </tr>
                <tr>
                    <td class="label-tit">
                        <label for="new_matchinfor">检测项目名称</label>
                    </td>
                <td class="input-pop" colspan="2">
                    <input v-model="letItem.condition" type="text" id="residue_edit_condition" name="condition">
                </td>
                </tr>
                <tr>
                    <td class="label-tit">
                        <label for="new_matchinfor">检测人</label>
                    </td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.operator" type="text" id="residue_edit_user" name="operator"></td>
                </tr>

                <tr>
                    <td class="label-tit">
                        <label for="result">检测结果</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="result"
                            :items="results"
                            :defaultIndex="parseInt(defaultresultIndex)"
                            @callback="getMsgresult"
                        ></pop-select>
                    </td>
                </tr>
                 <tr>
                    <td class="label-tit">
                        <label for="new_gsName">证书编号</label>
                    </td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.number" type="text" id="residue_edit_number" name="number"></td>
                </tr>
                 <tr>
                    <td class="label-tit">
                        <label for="new_gsName">有效期</label></td>
                    <td class="input-pop" colspan="2">
                    <input 
                    v-model="letItem.effective_date" 
                    v-validate.initial="letItem.effective_date" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作日期" 
                    type="text" id="residue_edit_effective_date" name="effective_date" placeholder="必填">
                    </td>
                </tr>
                <tr>
                    <td class="label-tit"><label for="detect_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="detect_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="javascript:void(0)">
                                <button @click="cancelEditdetect" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="javascript:void(0)">
                                <button @click="cancelAdddetect" type="button">
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

</style>

<script>

    export default {
        name: 'Popvegetabledetection',
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
                        'plantation_name':'',
                        harvest_serial:'',
                        'id': '',
                        'residue_date': '',
                        'departments': '',
                        'condition':'',
                        'number':'',
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
                detectContents:['第三方', '自检'],
                results:['合格', '不合格'],
                expertIds: [],
                tmp: {
                    'cultivate_id': 0,
                    'id': '',
                    'residue_date': '',
                    'departments': '',
                    'condition':'',
                    'number':'',
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
            defaultresultIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.results){
                        if(this.results[index].id == this.letItem.result){
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
        },
        mounted () {
            let time = new Date();
            let date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
            this.letItem.residue_date = date;
            this.getHarvesttion();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {

            /**
            * 获取所有专家
            */
           getHarvesttion () {

                this.$http.get(this.$adminUrl('residue/query')).then((response)=>{
                    console.log(response)
                    this.$set(this, 'letItem', response.body);
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    if (this.letItem.Approval == null) {
                        this.letItem.Approval = '';
                    }
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
                    let cultivateId = this.cultivateId == 0 ? this.$route.params.id : this.cultivateId;
                    this.letItem.cultivate_id = cultivateId;
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
