/**
 * 种植批次农事新增组件
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
 * 描述：农事信息对象
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
 * 返回：farming对象
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
                    <td class="label-tit"><label for="farming_farming_date">操作日期</label></td>
                    <td class="input-pop" colspan="2">
                    <date-picker></date-picker>
                    <!-- <input 
                    v-model="letItem.farming_date" 
                    v-validate.initial="letItem.farming_date" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作日期" 
                    type="text" id="farming_farming_date" name="farming_date" placeholder="必填" > -->
                    </td>
                </tr>
                <tr v-show="errors.has('farming_date')">
                    <td colspan="3" class="error">{{ errors.first('farming_date') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="farming_method">操作方法</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.method" 
                    v-validate.initial="letItem.method" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作方法" 
                    type="text" id="farming_method" name="method" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('method')">
                    <td colspan="3" class="error">{{ errors.first('method') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="farming_content">操作内容</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.content" 
                    v-validate.initial="letItem.content" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作内容" 
                    type="text" id="farming_content" name="content" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('content')">
                    <td colspan="3" class="error">{{ errors.first('content') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="farming_operate">操作人员</label></td>
                    <td class="input-pop" colspan="2"><input 
                    v-model="letItem.operate" 
                    v-validate.initial="letItem.operate" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作人员" 
                    type="text" id="farming_operate" name="operate" placeholder="必填"></td>
                </tr>
                <tr v-show="errors.has('operate')">
                    <td colspan="3" class="error">{{ errors.first('operate') }}</td>
                </tr>

                <tr>
                    <td class="label-tit"><label for="weather">天气状态</label></td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="weather"
                            :items="weathers"
                            :defaultIndex="parseInt(defaultWeatherIndex)"
                            @callback="getMsgWeather"
                        ></pop-select>
                    </td>
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
                    <td class="label-tit"><label for="farming_new_note">备注信息</label></td>
                    <td class="input-pop" colspan="2"><input v-model="letItem.memo" type="text" id="farming_new_note" name="memo"></td>
                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="javascript:void(0)">
                                <button @click="cancelEditfarming" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="javascript:void(0)">
                                <button @click="cancelAddfarming" type="button">
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
        name: 'Popfarming',
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
                        'farming_date': '',
                        'method': '',
                        'content': '',
                        'operate': '',
                        'weather': '晴天',
                        'expert_id': '',
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
                weathers:['晴天', '雨天', '阴天', '雪天', '其他'],
                tmp: {
                    'cultivate_id': 0,
                    'id': '',
                    'farming_date': '',
                    'method': '',
                    'content': '',
                    'operate': '',
                    'weather': '晴天',
                    'expert_id': '',
                    'memo': ''
                },
                expertIds: [],
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
                    return 0;
                }
            },
            defaultWeatherIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.weathers){
                        if(this.weathers[index] == this.letItem.weather){
                            return index;
                        }
                    }
                    return 0;
                }
            }


        },
        mounted () {
            let time = new Date();
            let date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
            this.letItem.farming_date = date;
            this.getAllfarmingtion();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {

            /**
            * 获取所有专家
            */
            getAllfarmingtion () {
                this.$http.get(this.$adminUrl('expert/query?params[type]=farming')).then((response)=>{
                    this.$set(this, 'expertIds', response.body.experts.data);
                    this.expertIds.unshift({id: '' ,expert_name: '无'})
                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    this.$update(this, 'farming', this.letItem).then((response) => {
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
                    this.$storeL(this, 'farming', this.letItem).then((response) => {
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
            cancelAddfarming () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditfarming () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgWeather (msg) {
                this.letItem.weather = msg;
            },
            getMsgExpertId (msg) {
                this.letItem.expert_id = msg;                
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
