/**
 * 
 * 种植批次详细信息组件
 * @description 
 * @author 舒丹彤
 * @date 2017/03/06
 * 
 */
<template>
    <div class="content">
        <div class="title">果蔬批次详细信息</div>
        <ul>
            <li><span>采收批次号:</span>{{vegetableMsg.harvest_serial}}</li>
            <li><span>种植批次号:</span>{{vegetableMsg.cultivate_serial}}</li>
            <li><span>种植区名称:</span>{{vegetableMsg.plant_name}}</li>
            <li><span>采收日期:</span>{{vegetableMsg.harvest_date}}</li>
            <li><span>采收数量:</span>{{vegetableMsg.amount+"kg"}}</li>
            <li><span>种植日期:</span>{{vegetableMsg.cultivate_date}}</li>
            <li><span>果蔬名称:</span>{{vegetableMsg.parent_name}}</li>
            <li><span>采收人:</span>{{vegetableMsg.operator}}</li>
            <li><span>种植面积:</span>{{vegetableMsg.area+vegetableMsg.area_unit}}</li>
            <li><span>备注信息:</span>{{vegetableMsg.memo}}</li>
        </ul>
    </div>
</template> 

<style lang="sass" scoped>

    @import "../../../sass/function";

    .content {
        position: relative;
    }
    
    .title {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        padding-bottom: pxToRem(10);
        text-align: center;
        font-size: pxToRem(16);
        border-bottom: 1px solid #dfdfdf;
        background: white;
    }

    ul {
        padding-top: pxToRem(36);
        overflow-y: scroll;

        li {
            margin: pxToRem(7) 0;

            span {
                margin-right: pxToRem(10);
                color: #7f7f7f;
            }
        }
    }
</style>

<script>

    export default{
        name: 'Basic',
        data () {
            return {
                vegetableMsg: {
                    harvest_serial: '',
                    cultivate_serial: '',
                    plant_name: '',
                    harvest_date: '',
                    amount: '',
                    cultivate_date: '',
                    parent_name: '',
                    operator: '',
                    area:'',
                    area_unit: '',
                    memo: '',
                }
            }
        },
        mounted () {
            // let cultivateId = this.$route.params.id;
            let params = {
                msg: 1,
                sid:26
            }
            this.$http.get(this.$adminUrl('harvest/batch/detail', 'p'), {params: params}).then((responce) => {
                this.vegetableMsg = responce.data;
            }, (error) => {

            })
        }
    }
</script>
