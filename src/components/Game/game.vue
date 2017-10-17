<template>
    <div>
        <search></search>
        <shuju></shuju>
    </div>
</template>
<script>
import WeUI from 'weui';
import search from './search.vue';
import shuju from './shuju.vue';
export default {
    data(){
        return {

        }
    },
    components:{
        search:search,
        shuju:shuju
    }

}
</script>

<style lang="scss" scoped>
    
</style>