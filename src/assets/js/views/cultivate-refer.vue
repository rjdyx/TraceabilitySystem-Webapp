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
            ref="popNew"
            v-show="addNewItem"
            :is="popComponent"
            :referCultivate="true"
            class="new-pop"
        ></component>
        
        <!-- 批次列表模块 -->
        <table-manage
            v-show="!addNewItem"
            ref="tableManage"
            :_key="_key"
            :searchPlaceholder="searchPlaceholder"
            :searchUrl="searchUrl"
            :excInit="false"
            :theads="theads"
            :protos="protos"
            :widths="widths"
            :showOperate="false"
            :batchButtons="batchButtons"
        >
        </table-manage> 
        
        <!-- 底部模块 -->
        <div :class="{footer: true, 'hide-footer': hideFooter}">
            <div class="cultivateNumber">
                已选择：<span>{{selectedLists.length}}</span>个{{modelName}}批次
            </div>
            <div class="btns">
                <a href="javascript:void(0)" type="cancel">
                    <button>
                        取消
                    </button>
                </a>
                <a href="javascript:void(0)" class="save" @click="addListItem">
                    <button>
                        保存
                    </button>
                </a>
            </div>
        </div>
        
    </div>
</template>

<style lang="sass" scoped>
    
    .new-pop {
        margin-bottom: 100px; 
    }

    .footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        background: white;

        .cultivateNumber {
            padding: 10px 0;
            padding-left: 18px;
            background: white;
        }

        .btns {

            width: 98%;
            margin: 0 auto;

            a {
                display: inline-block;
                width: 50%;
                height: 45px;
                margin-bottom: 4px;
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
    }

    .hide-footer {
        z-index: -1;
    }

</style>

<script>

    import { mapState, mapMutations } from 'vuex';
    import Navbar from '../components/public/navbar.vue';
    import tableManage from '../components/public/table-manage.vue';
    import ResetButton from '../components/public/reset-button.vue';
    import PopFertilize from '../components/plant-cultivate/pop-fertilize.vue';
    

    export default{
        name: 'Basic',
        props: {
            modelName: {
                type: String,
                default: '种植'
            }
        },
        data(){
            return {
                title: '',
                taps: [
                    {name: '新建施肥信息', key: 'fertilize'},
                    {name: '选择种植批次', key: 'cultivate'}
                ],
                _key: '',
                popComponent: null,
                searchPlaceholder: '批次号',
                searchUrl: 'cultivate',
                theads: ['种植批次号', '所属种植区', '果蔬名称'],
                protos: ['serial', 'plantation_name', 'plant_name'],
                widths: [32, 30, 24],
                // 是否显示新增模块
                addNewItem: true,
                // 是否隐藏footer
                hideFooter: false,
                batchButtons: ResetButton
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
                this.addNewItem = !this.addNewItem;
                if (key == 'cultivate') {
                    this.hideFooter = true;
                }else {
                    this.hideFooter = false;
                }
            },

            addListItem () {
                if(this.selectedLists.length == 0) {
                    this.$alert('请选择批次');
                }else {
                    let form = this.$refs.popNew.getFormMsg();
                    let cultivateIds = [];
                    for(let item of this.selectedLists) {
                        cultivateIds.push(item['id']);
                    }
                    form.cultivate_id = cultivateIds.join(",");
                    form.cultivate_num = this.selectedLists.length;
                    this.$storeL(this, 'fertilize', form).then((response) => {
                        this.$router.back();
                        this.$alert('新增成功', 's');
                        
                    }, (response) => {
                        if(response != false) {
                            this.$alert('连接出错', 'e');
                        }else {
                            return false;
                        }
                    });
                }
            }
        }
    }
</script>
