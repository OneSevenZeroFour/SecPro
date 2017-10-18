<template>
    <div>
        <xheader></xheader>
		<div style="width: 100%; height: 45px;"></div>
        <shuju></shuju>
        <div style="width: 100%; height: 45px;"></div>
        <xfooter></xfooter>
        <xPersonal></xPersonal>
    </div>
</template>

<script>
import WeUI from 'weui';
import search from './search.vue';
import shuju from './shuju.vue';
import xheader from '../header/header.vue';
import xfooter from '../footer/footer.vue';
import xPersonal from '../Personal/personal.vue';

export default {
    data(){
        return {

        }
    },
    components:{
        search:search,
        shuju:shuju,
        xheader,
        xfooter,
        xPersonal
    }

}
</script>

<style lang="scss" scoped>
    
</style>