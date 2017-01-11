<template>
    <div class="d">
        12312
    </div>
</template>
<script>
    import {mapState, mapMutations,mapActions} from "vuex";
    export default {
        computed: mapState(["count", "list"]),
        methods:{
                ...mapMutations(["addItem"]),
                ...mapActions(["replaceList"])
        }
    }
</script>
<style scoped>
    .btn {
        display: inline-block;
        cursor: pointer;
        padding: 10px;
        background: rosybrown;
        margin: 10px;
    }
    .e {
        background: lightsalmon;
        margin: 10px;
    }
    .d {
        margin: 10px;
        background: lightcoral;
    }
</style>

