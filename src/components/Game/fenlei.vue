<template>
    <div>
        <div @click="show(3)" :class="{'active':page3}">分类</div>
        
        <div class="page page3" v-if="page3">
            <p v-for="c in fenlei" class="fenlei"><span>{{c.category}}</span></p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    }

}
</script>

<style lang="scss" scoped>
    
</style>