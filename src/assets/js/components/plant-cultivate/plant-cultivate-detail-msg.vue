/**
 * 
 * 种植批次详细信息组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/07
 * 
 */
<template>
    <div class="content">
        <div class="title">种植批次详细信息</div>
        <ul>
            <li><span>种植批次号:</span>{{cultivateMsg.serial}}</li>
            <li><span>所属种植场:</span>{{cultivateMsg.plantation_name}}</li>
            <li><span>种植人:</span>{{cultivateMsg.operator}}</li>
            <li><span>种植日期:</span>{{cultivateMsg.cultivate_date}}</li>
            <li><span>所属种植区:</span>{{cultivateMsg.name}}</li>
            <li><span>种植地址:</span>{{cultivateMsg.address}}</li>
            <li><span>种植果蔬名称:</span>{{cultivateMsg.plant_name}}</li>
            <li><span>当前批次面积:</span>{{cultivateMsg.area+cultivateMsg.area_unit}}</li>
            <li><span>种植备注:</span>{{cultivateMsg.memo}}</li>
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
                cultivateMsg: {
                    serial: '',
                    plantation_name: '',
                    operator: '',
                    cultivate_date: '',
                    name: '',
                    address: '',
                    plant_name: '',
                    area: '',
                    area_unit: '',
                    memo: ''
                }
            }
        },
        mounted () {
            let cultivateId = this.$route.params.id;
            let params = {
                msg: 1,
                cid: cultivateId
            }
            this.$http.get(this.$adminUrl('plantation/cultivate/detail', 'p'), {params: params}).then((responce) => {
                this.cultivateMsg = responce.data;
                console.log(responce.data)
            }, (error) => {

            })
        }
    }
</script>
