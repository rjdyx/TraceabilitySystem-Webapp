/**
 * 
 * 基础信息管理顶层组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/01
 * 
 */
<template>
    <div>
        <!-- tap模块 -->
        <navbar 
            :taps="taps"
            @getKey="flashList"
        >
            <!-- 列表模块 -->
            <table-list
                ref="tableList"
                :_key="_key"
                :component="component"
                :searchPlaceholder="searchPlaceholder"
                :searchUrl="searchUrl"
                :theads="theads"
                :protos="protos"
                :widths="widths"
            >
            </table-list> 
        </navbar>
        
        
    </div>
</template>

<style>
</style>

<script>

    import {mapMutations} from 'vuex';
    import Navbar from './navbar.vue';
    import tableList from './table-list.vue';
    

    export default{
        name: 'Basic',
        props: {
            title: {
                type: String,
                default: '基础信息管理'
            },
            taps: {
                type: Array,
                default () {
                    return [{name: '', key: ''}]
                }
            },
            tableLists: {
                type: Array,
                default () {
                    return [{
                        key: '', 
                        component: null,
                        searchPlaceholder: '',
                        searchUrl: '',
                        theads: [''],
                        protos: [''],
                        widths: [0]
                    }]
                }
            }
        },
        data(){
            return {
                _key: '',
                component: null,
                searchPlaceholder: '',
                searchUrl: '',
                theads: [],
                protos: [],
                widths: []
            }
        },
        components:{
            Navbar,
            tableList
        },
        created () {
            this.setTitle(this.title);
            this._key = this.tableLists[0].key;
            this.searchPlaceholder = this.tableLists[0].searchPlaceholder;
            this.searchUrl = this.tableLists[0].searchUrl;
            this.theads = this.tableLists[0].theads;
            this.protos = this.tableLists[0].protos;
            this.widths = this.tableLists[0].widths;
        },
        mounted () {
            this.component = this.tableLists[0].component;
            this.$refs.tableList.getAllLists(this.searchUrl);
        },
        methods: {
            ...mapMutations([
                'setTitle'
            ]),

            flashList (key) {
                for(let item of this.tableLists){
                    if(item.key == key) {
                        this._key = item.key;
                        this.searchPlaceholder = item.searchPlaceholder;
                        this.searchUrl = item.searchUrl;
                        this.theads = item.theads;
                        this.protos = item.protos;
                        this.widths = item.widths;
                        this.component = item.component;
                        // 同步调用获取数据的方法
                        this.$refs.tableList.getAllLists(item.searchUrl)
                        // 关闭新增弹窗
                        this.$refs.tableList.closeNew()
                        // 关闭编辑弹窗
                        this.$refs.tableList.closeEdit()
                    }
                }
            }
        }
    }
</script>
