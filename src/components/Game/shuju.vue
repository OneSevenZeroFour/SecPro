<template>
    <div>
        <div id="tab">
            <div @click="show(1)" :class="{'active':page1}">推荐</div>
            <div @click="show(2)" :class="{'active':page2}">分类</div>
        </div>
        <div class="page" v-if="page1">
            <div class="weui-panel weui-panel_access">
                <div class="weui-panel__bd" v-for="a in shuju">
                    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" >
                        <div class="weui-media-box__hd">
                            <img class="weui-media-box__thumb" :src="a.avatarUrl" alt="">
                        </div>
                        <div class="weui-media-right">
                            <h4 class="weui-media-box__title">{{a.title}}</h4>
                            <p class="weui-media-box__desc">{{a.subtitle}}</p>
                        </div>
                    </a>
                    <div class="download">
                        <span>下载</span>
                    </div>
                </div>
                <div class="weui-panel__ft">
                    <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                        <div class="weui-cell__bd">查看更多</div>
                        <span class="weui-cell__ft"></span>
                    </a>    
                </div>
            </div>
        </div>
        <div class="page" v-if="page2">2</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            page1:true,
            page2:false,
            shuju:''
        }
    },
    methods:{
        show:function(page){
            //console.log(page);
            if(page==1){
                this.page1=true,
                this.page2=false
            }else{
                this.page1=false,
                this.page2=true
            }
        },
        //http://120.76.205.241:8000/mobileapp/mobile360?sort={0是最热1是最新}&catid={类名}&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo
        
        //http://120.76.205.241:8000/mobileapp/mobile360?sort={0是最热1是最新}&catid=91%3A75946%3A{类名}&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo
        
        getGameData(name) {
            var self = this;
            //console.log(encodeURI(rote));
            var name = encodeURI(name);
            var urlStr = "http://120.76.205.241:8000/mobileapp/mobile360?sort=0&catid=91%3A75946%3A"+name+"&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo";
            //console.log(urlStr)
            this.axios.get('http://127.0.0.1:8080/agency', {
                params: {
                    url:urlStr
                }
            }).then(function(response) {
                //console.log(response);
                //console.log(response.data.data);
                //console.log(self);
                self.shuju = response.data.data;
                console.log(self.shuju);
            }).catch(function(response) {
                console.log(response);
            });
        }
    },
    mounted(){
        this.getGameData("");
    }
    
}
</script>

<style lang="scss" scoped>
    #tab{
        display:flex;
        div{
            flex: 1;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-weight: bold;
            font-size:14px;
            color:#20a0ff;
        }
    }
    .page {
        text-align: center;
    }
    .active {
        border-bottom: 2px solid #20a0ff;
    }
    .weui-panel__bd{
        overflow:hidden;
        .weui-media-box_appmsg{
            float:left;
            display:inline-block;
            overflow:hidden;
            .weui-media-box__hd{
                float:left;
            }
            .weui-media-right{
                display:inline-block;
                text-align:left;
                width:250px;
                height:60px;
            }
        }
        .download{
            padding-top:35px;
            float:left;
            span{
                color: #20A0FF;
                width: 2.5rem;
                text-align: center;
                padding: .5rem 1rem;
                border-radius: 1rem;
                border: 1px solid #20A0FF;
            }  
        }
    }
    
    
</style>