/**
 * 
 * 与批次关联的新增组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/09
 * 
 */
<template>
    <div>
        <!-- tap模块 -->
        <navbar 
            :taps="taps"
            :number="2"
            @getKey="changeWindow"
        ></navbar>
        
        <!-- 新增模块 -->
        <component
            v-if="addNewItem"
            :is="popComponent"
        ></component>
        
        <!-- 批次列表模块 -->
        <table-manage
            v-if="!addNewItem"
            ref="tableManage"
            :_key="_key"
            :searchPlaceholder="searchPlaceholder"
            :searchUrl="searchUrl"
            :theads="theads"
            :protos="protos"
            :widths="widths"
        >
        </table-manage> 
        
        <!-- 底部模块 -->
        <div class="footer">
            <a href="#" type="cancel">
                <button>
                    取消
                </button>
            </a>
            <a href="#" class="save">
                <button>
                    保存
                </button>
            </a>
        </div>
        
    </div>
</template>

<style lang="sass" scoped>

    .footer {
        position: absolute;
        width: 100%;
        bottom: 0;

        a {
            display: inline-block;
            width: 50%;
            height: 39px;
            border: 1px solid #d4d4d4;

            button {
              width: 100%;
              height: 100%;
              background-color: white;
              border: 0;
            }

            &:active {
              button {
                background-color: #f0f0f0;
              }
            }
        }
        
        .save {
            border-left: 0;
        }
    }

</style>

<script>

    import {mapMutations} from 'vuex';
    import Navbar from '../components/public/navbar.vue';
    import tableManage from '../components/public/table-manage.vue';
    import PopFertilize from '../components/plant-cultivate/pop-fertilize.vue';
    

    export default{
        name: 'Basic',
        data(){
            return {
                title: '',
                taps: [
                    {name: '新建施肥信息', key: 'fertilize'},
                    {name: '选择种植批次', key: 'cultivate'}
                ],
                _key: '',
                popComponent: null,
                searchPlaceholder: '',
                searchUrl: '',
                theads: [],
                protos: [],
                widths: [],
                addNewItem: true
            }
        },
        components:{
            Navbar,
            tableManage,
            PopFertilize
        },
        created () {
            this.setTitle(this.title);
        },
        mounted () {
            this.popComponent = PopFertilize;
        },
        methods: {
            ...mapMutations([
                'setTitle'
            ]),

            changeWindow (key) {
                if (key == 'cultivate') {
                    // 同步调用获取数据的方法
                    this.$refs.tableManage.getAllLists(item.searchUrl, this.tableLists[0].params)
                    // 关闭新增弹窗
                    this.$refs.tableManage.closeNew()
                    // 关闭编辑弹窗
                    this.$refs.tableManage.closeEdit()
                }else {

                }
            }
        }
    }
</script>
