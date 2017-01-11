/**
 * 搜索组件
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  placeholder 
 * 类型：String
 * 是否必填：false
 * 默认值：'搜索'
 * 描述：input输入框的placeholder值
 * 
 * @param  searchUrl 
 * 类型：String
 * 是否必填：false
 * 默认值：'/'
 * 描述：搜索时请求的url
 * 
 * @param  params 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：除了input输入框里的参数外，额外传给后台的参数，这意味着无需传入query_text
 * 例子：
 *   {
 *        id: 19920219
 *    }
 * 
 * 
 * Events:
 * 
 * @function callback
 * 返回：查询结果
 * 必用：true
 * 描述：返回如下格式的查询结果：
 *   {
 *        data: ,   //查询结果集
 *        last_page: ,  //分页总数
 *        query_text: , //搜索输入框内容
 *    }
 * 
 * 
 * Slots:
 * 
 * @name 
 * 位置：输入框之前
 * 默认内容：<button class="stl-btn">新建</button>
 * 
 */
<template>
    <div class="search-top">
        <slot>
            <button class="stl-btn">新建</button>
        </slot>
        <input v-model="searchInput" type="text" :placeholder="placeholder" class="str-inp">
        <button @click="search" type="button" class="str-btn">搜索</button>
    </div>
</template>

<script>

    export default {
        name:'search',
        props:{
            placeholder: {
                type: String,
                default: '搜索'
            },
            searchUrl: {
                type: String,
                default: '/'
            },
            params: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data (){
            return {
                searchInput: '',
            }
        },
        computed: {

        },
        methods:{


            /**
             * 查询
             */
            search () {
                let param = Object.assign({'query_text': this.searchInput}, this.params.params);
                this.$queryWithParams(this, this.searchUrl, {params:param}).then((response) => {

                    for(let proto of Object.keys(response.body)){
                        if(response.body[proto] instanceof Object){
                            if(proto == 'data'){
                                this.$emit('callback', {data:response.body.data, last_page:response.body.last_page, query_text: this.searchInput});
                            }else {
                                this.$emit('callback', {data:response.body[proto].data, last_page:response.body[proto].last_page, query_text: this.searchInput});
                            }
                        }
                    }

                }, (response) => {
                    this.$alert('连接出错', 'e');
                });
            }

        }

    }



</script>

<style lang="sass" scoped>

    @import "../../../sass/function";

    .search-top{
        margin: pxToRem(10) pxToRem(4.8);
        overflow: hidden;

        .stl-btn {
            float: left;
            display: inline-block;
            width: 24%;
            height: 31px;
            background-color: #009acb;
            color: white;
            border: 0;
        }

        .str-inp {
            float: left;
            display: inline-block;
            width: 50%;
            height: 31px;
            margin: 0 1%;
            padding-left: pxToRem(6);
            border: 1px solid #d4d4d4;
        }

        .str-btn {
            float: left;
            display: inline-block;
            width: 24%;
            height: 31px;
            background-color: white;
            border: 1px solid #d4d4d4;
        }
    }



    /*placeholder*/
    ::-webkit-input-placeholder { /* WebKit browsers */
      color: #d6d6d7;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
      color: #d6d6d7;
    }

</style>