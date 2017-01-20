/**
 * 
 * 农业日志组件
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
<template>
    <div id="log">
        
        <!-- 搜索模块 -->
        <search
            placeholder="搜索种植区"
            searchUrl="dailylog"
            :params="params"
            @callback="updateList"
        >
            <button @click="putAllStore" class="stl-btn">提交内容</button>
        </search>

        <table class="table-list">
            <thead class="list-head">
            <tr class="list-head-th">
                <th name="planta_name" class="fir">种植区</th>
                <th name="plant_name">果蔬名称</th>
                <th name="operator">操作人</th>
                <th name="finish">完成</th>
                <th name="open" class="align-c"></th>
            </tr>
            </thead>
            <tbody class="list-body">
            <template v-for="(log, index) in list">
                <tr :class="{'list-body-tr':true,'list-body-tr-event':(index%2 != 0)}">
                    <td class="td-note" name="planta_name">{{ log.planta_name }}</td>
                    <td class="td-note" name="plant_name">{{ log.plant_name}}</td>
                    <td class="td-note" name="operator">{{ log.cultivate_man }}</td>
                    <td class="td-note" name="finish">
                        <img v-if="log.date !=null" :src="$img('ok.png')">
                    </td>
                    <td @click="troggleEdit(log)" class="align-c" name="open">
                        <img :src="$img('list.png')">
                    </td>
                </tr>
                <tr v-if="showItemDetail != '' && showItemDetail == log.cultivate_id">
                    <td colspan="5">
                        <pop-log
                                :cultivateId="log.cultivate_id"
                                @closeEdit="closeOwnEditPane(log.cultivate_id)"
                                @operatorBack="changeOperator"
                        ></pop-log>
                    </td>
                </tr>
            </template>
        </table>


        <div class="paginator-module">
            <!-- 分页模块 -->
            <paginator
                :total="total"
                url="dailylog/query"
                :paginatorParams="params"
                @result="updateList"
            ></paginator> 
        </div>

        <confirm
            :show="show"
            :message="message"
            @confirmAction="showdailylog"
            @cancelAction="show=false"
        ></confirm>
        

    </div>
</template>
<style lang="sass" scoped>

    @import "../../sass/function";
    @import "../../sass/_percent.scss";

    #log {
        padding-bottom: pxToRem(92);
    }

    th[name="planta_name"] {
        width: 32%;
    }

    td[name="planta_name"] {
        padding: 0 pxToRem(10);
    }

    td[name="planta_name"], td[name="plant_name"], td[name="operator"], td[name="finish"], td[name="open"] {
        @extend %wrap;
    }

    th[name="plant_name"] {
        width: 26%;
    }

    th[name="operator"] {
        width: 24%;
    }

    td[name="operator"]{
        padding: 0 pxToRem(14);
    }

    th[name="finish"] {
        width: 17%;
    }

    th[name="open"] {
        width: 14%;
    }

    .align-c {
        img {
            width: pxToRem(17);
        }
    }

    .show-sliderBar-btn {
        position: absolute;
        left: pxToRem(25);
        bottom: 0;
        width: pxToRem(20);
        height: pxToRem(20);
        margin: auto;
        top: 0;

        img {
            width: pxToRem(20);
            height: pxToRem(20);
        }
    }


</style>
<script>
    
    import {mapMutations} from 'vuex';
    import Search from '../components/public/search.vue';
    import Paginator from '../components/public/paginator.vue';
    import PopLog from '../components/log/pop-log.vue';

    export default{
        name: 'Basic',
        data(){
            return{
                // 顶部栏标题
                title: '每日农业日志',
                // 种植区列表数据
                list: [],
                // 分页总数
                total: 1,
                // 存放是否展开编辑模块的标志，
                showItemDetail: '',
                // 临时存储种植区项
                plantaTmp: null,
            }
        },
        computed: {
            // 包含种植场id的参数
            params: function() {
                return {params: {plantation_id: this.$route.params.id}}
            },
        },
        components:{
            Search,
            Paginator,
            PopLog
        },
        mounted () {
            this.setTitle('农业日志');
            this.getAllPlanta();
        },
        watch: {
            '$route' (to, from) {
                this.getAllPlanta();
            }
        },
        methods: {

            ...mapMutations([
                'setTitle'
            ]),

            /**
             * 用搜索结果更新list
             * @param  {Object} newList
             */
            updateList (newList) {
                this.$set(this, 'list', newList.data);
                this.total = newList.last_page;
            },

            /**
            * 显示或隐藏编辑模块，同时缓存log对象
            * @param {Number} manure
            */
            troggleEdit (log) {
                if(this.showItemDetail != log.cultivate_id){
                    this.showItemDetail = log.cultivate_id;
                    this.plantaTmp = log;
                }else {
                    this.showItemDetail = '';
                    this.plantaTmp = null;
                }
            },

            /**
            * 关闭编辑模块
            * @param manure
            */
            closeOwnEditPane(id) {
                this.troggleEdit(id);
            },


            /**
             * 获取所有种植区
             */
            getAllPlanta(){
                this.$http.get(this.$adminUrl('dailylog/query'), {params: this.params}).then((response) => {
                    this.$set(this, 'list', response.body.data);
                },(error) => {
                    if(error.status == 401) {
                        this.$router.push('/webapp/login')
                    }else {
                       this.$alert('连接出错', 'e'); 
                    }
                });
            },

            /**
             * 提交种植场对应种植区所有信息
             */
            putAllStore () {
                this.$http.post(this.$adminUrl('dailylog/allstore'), this.params.params).then((response) => {
                    //判断今天是否提交
                    if(response.data == 'false'){
                        this.$alert('今天已经提交');
                        this.show = false;
                    }else{
                        this.show = true;
                    }
                }, (response) => {
                    this.$alert('连接出错', 'e');
                });
            },

            /**
             * 跳转生成图片日志
             */
            showdailylog () {
                this.$router.push('/dailylog'); 
            }, 

            /**
             * 更新操作人
             * @param  {String} name 操作人名称
             */
            changeOperator(name) {
                this.plantaTmp.cultivate_man = name;
                this.plantaTmp.date = '';
                this.plantaTmp = null;
            }
        }
    }
</script>
