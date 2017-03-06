/**
 * 
 * 包含tap的列表顶层组件
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
            :number="number"
            @getKey="flashList"
        >
            <!-- 列表模块 -->
            <table-manage
                ref="tableManage"
                :_key="_key"
                :component="component"
                :searchPlaceholder="searchPlaceholder"
                :searchUrl="searchUrl"
                :params="params"
                :theads="theads"
                :protos="protos"
                :widths="widths" 
            >
            </table-manage> 
        </navbar>
         
        
    </div>
</template>

<style>
</style>
 
<script>

    import {mapMutations} from 'vuex';
    import Navbar from './navbar.vue';
    import tableManage from './table-manage.vue';
    

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
            number: {
                type: Number,
                default: 3
            },
            tableLists: {
                type: Array,
                default () {
                    return [{
                        key: '', 
                        component: null,
                        searchPlaceholder: '',
                        searchUrl: '',
                        params: null,
                        excInit: true,
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
                params: null,
                theads: [],
                protos: [],
                widths: [] 
            }
        },
        components:{
            Navbar,
            tableManage
        },
        created (){
            this.setTitle(this.title);
            this._key = this.tableLists[0].key;
            this.searchPlaceholder = this.tableLists[0].searchPlaceholder;
            this.searchUrl = this.tableLists[0].searchUrl;
            this.params = this.tableLists[0].params;
            this.excInit = this.tableLists[0].excInit == undefined ? true:this.tableLists[0].excInit;
            this.theads = this.tableLists[0].theads;
            this.protos = this.tableLists[0].protos;
            this.widths = this.tableLists[0].widths;
        },
        mounted () {
            this.component = this.tableLists[0].component;
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
                        this.params = item.params;
                        this.excInit = item.excInit == undefined ? true:item.excInit;
                        this.theads = item.theads;
                        this.protos = item.protos;
                        this.widths = item.widths;
                        this.component = item.component;
                        this.$refs.tableManage.closeNew();
                    }
                }
            }
        }
    }
</script>
