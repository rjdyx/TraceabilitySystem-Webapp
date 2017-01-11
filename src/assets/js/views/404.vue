/**
 * 
 * 404组件
 * @description 访问不存在的路由都会定向到这个组件页面
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
<template>
    <div>
        <div class="content">
          404  
        </div>
    </div>
</template>
<style lang="sass" scoped>

    @import "../../sass/function";
    
    div.content {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: pxToRem(52);
        height: pxToRem(41);
        font-size: pxToRem(30);
        color: #9E9E9E;
    }

</style>
<script>
    export default{
        name: 'fourOFour'
    }
</script>
