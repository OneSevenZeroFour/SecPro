<template>
    <div class="page__bd">
        <div class="weui-search-bar" id="searchBar" :class="{'weui-search-bar_focusing':isShowSearchBar}">
            <form class="weui-search-bar__form" v-focus>
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input  type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                </div>
                <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" @click="showSearchBar">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="hideSearchBar()">取消</a>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            isShowSearchBar:false
        }
    },
    methods:{
        showSearchBar(){
            this.isShowSearchBar = true;
        },
        hideSearchBar(){
            this.isShowSearchBar = false;
        }
    },
    directives:{
        "focus":function(el){
            el.addEventListener("click", function() {
                //console.log(el);
                document.querySelector("#searchInput").focus()
            })
        }
    }
 }
</script>

<style lang="scss" scoped>
    .game{
        color:red;
    }

</style>