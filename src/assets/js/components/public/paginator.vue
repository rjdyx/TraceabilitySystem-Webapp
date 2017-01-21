/**
 * 简易分页组件
 * @description 分页组件，有上一页和下一页按钮，可点击中间的模块输入页数定向跳转页面
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  totle 
 * 类型：Number
 * 是否必填：false
 * 默认值：1
 * 描述：总页数
 * 
 * @param  url 
 * 类型：String
 * 是否必填：false
 * 默认值：'/'
 * 描述：定向跳转页面时请求的url
 * 
 * @param  paginatorParams 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：定向跳转页面时可附带的请求参数，比如使用了搜索之后的分页，想要保持搜索结果，则需要使用此prop
 * 例子：
 *   {
 *        id: 19920219,
 *        query_text: 'rigar'
 *    }
 * 
 * 
 * 
 * 
 * Events:
 * 
 * @function result
 * 返回：分页结果
 * 必用：true
 * 描述：点击上一页、下一页或定向跳转页面后，返回从后台获取到的数据。后台返回的数据可以直接暴露data，也可以把data存入某个对象里面
 * 
 * 
 */
<template>
    <div class="paginator">
        <div @click="lastPage(index-1)" :disabled="!leftBtn" class="left">&lt;</div>
        <div class="middle" v-if="showInput" @click="showInputIndex">第{{index}}页/共{{total}}页</div>
        <div class="middle-input" v-else><input v-model="inputIndex" @keyup.enter="changeIndex" v-focus type="text" class="input-index" placeholder="页数"></div>
        <div @click="nextPage(index+1)" :disabled="!rightBtn" class="right">&gt;</div>
    </div>
</template>
<style lang="sass" scoped>

    @import "../../../sass/function";
    

    .paginator {

        width: 100%;
        text-align: center;

        .left, .right {
            display: inline-block;
            width: pxToRem(39);
            height: pxToRem(39);
            line-height: pxToRem(39);
            background-color: white;
            color: #222;
            border-radius: pxToRem(2);
            cursor: pointer;
            border: 1px solid #dddddd;
    }

        .middle {
            display: inline-block;
            height: pxToRem(39);
            line-height: pxToRem(39);
            padding: 0 pxToRem(12);
            margin: 0 pxToRem(2);
            background-color: white;
            color: #222;
            border-radius: pxToRem(2);
            border: 1px solid #dddddd;
    }

        .middle-input {
            @extend .middle;
            padding: 0;
            width: 102.41px;
            .input-index {
                width: 80px;
                height: 35px;
                padding-left: 15px;
                border: 0;
            }
        }

        .right {

    }
    }
</style>
<script>

    export default{
        name: 'Paginator',
        props: {
            total: {
                type:Number,
                default: 1
            },
            url:{
                type:String,
                default: '/'
            },
            paginatorParams: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data(){
            return{
                index: 1,
                showInput: true,
                inputIndex: ''
            }
        },
        computed: {

            leftBtn () {
                if(this.index == 1){
                    return false;
                }else {
                    return true;
                }
            },
            rightBtn () {
                if(this.index == this.total){
                    return false;
                }else {
                    return true;
                }
            },
        },
        watch: {
            total: function(val){
                this.index = 1;
                this.showInput = true;
                this.inputIndex = '';
            }
        },
        methods: {

            lastPage (lastIndex) {
                if(!this.leftBtn) {
                    return ;
                }
                this.$emit('lastPageEvent');
                this.$http.get(this.$adminUrl(this.url)+ '?page=' + lastIndex + '&' + this.$objectToParam(this.paginatorParams)).then((response) => {
                    
                    this.getResult(response);
                    
                },(response) => {

                });
            },

            nextPage (nestIndex) {
                if(!this.rightBtn) {
                    return ;
                }
                this.$emit('nextPageEvent');
                this.$http.get(this.$adminUrl(this.url)+ '?page=' + nestIndex + '&' + this.$objectToParam(this.paginatorParams)).then((response) => {

                    this.getResult(response);

                },(response) => {

                });
            },

            showInputIndex () {
                this.showInput = false;
            },

            changeIndex () {
                this.$emit('changePageEvent');
                this.$http.get(this.$adminUrl(this.url)+ '?page=' + this.inputIndex + '&' + this.$objectToParam(this.paginatorParams)).then((response) => {

                    this.showInput = true;
                    this.getResult(response);

                },(response) => {

                });
            },

            getResult (response) {
                for(let proto of Object.keys(response.body)){
                    if(response.body[proto] instanceof Object && !(response.body[proto] instanceof Array)){
                        if(proto == 'data'){
                            this.index = response.body.current_page;
                            this.$emit('result', response.body);
                        }else {
                            this.index = response.body[proto].current_page;
                            this.$emit('result', response.body[proto]);
                        }
                    }
                    
                }
            }
        }
    }
</script>
