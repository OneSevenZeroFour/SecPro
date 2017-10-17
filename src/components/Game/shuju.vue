<template>
    <div>
        <div id="tab">
            <div @click="show(1)" :class="{'active':page1}">热门</div>
            <div @click="show(2)"  :class="{'active':page2}">最新</div>
            <div @click="show(3)" :class="{'active':page3}">分类</div>
        </div>
        <div class="page" v-if="page1">
            <div class="weui-panel weui-panel_access">
                <div class="weui-panel__bd" v-for="a in tuijian">
                    <a :href="'/#/details/'+a.title"  class="weui-media-box weui-media-box_appmsg">
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
        <div class="page" v-if="page2">
            <div class="weui-panel weui-panel_access">
                <div class="weui-panel__bd" v-for="b in zuixin">
                    <a :href="'/#/details/'+a.title" class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__hd">
                            <img class="weui-media-box__thumb" :src="b.avatarUrl" alt="">
                        </div>
                        <div class="weui-media-right">
                            <h4 class="weui-media-box__title">{{b.title}}</h4>
                            <p class="weui-media-box__desc">{{b.subtitle}}</p>
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
        <div class="page page3" v-if="page3">
            <p v-for="c in fenlei" class="fenlei"><span>{{c.category}}</span></p>

        </div>
    </div>
</template>
<script>
import $ from 'jquery';
$('.weui-media-box__thumb').on('click',function(){
    console.log(112313);
})
$('.weui-panel_access').on('click',function(){
    console.log(1234);
});

$('.page3').on('click','.fenlei',function(){
    console.log(1234);
});
export default {
    data(){
        return {
            page1:true,
            page2:false,
            page3:false,
            tuijian:'',
            radio: '1',
            zuixin:'',
            fenlei:[{
                id:1,
                category:"像素"
            },{
                id:2,
                category:"射击"
            },{
                id:3,
                category:"飞机"
            },{
                id:4,
                category:"策略"
            },{
                id:5,
                category:"棋牌"
            },{
                id:6,
                category:"动作"
            },{
                id:7,
                category:"捕鱼"
            },{
                id:8,
                category:"塔防"
            },{
                id:9,
                category:"跑酷"
            },{
                id:10,
                category:"武侠"
            }]
        }
    },
    methods:{
        show(page){
            //console.log(page);
            if(page==1){
                this.page1=true;
                this.page2=false;
                this.page3=false;
            }else if(page==2){
                this.page1=false;
                this.page2=true;
                this.page3=false;
            }else{
                this.page1=false;
                this.page2=false;
                this.page3=true;
            }
        },
        //http://120.76.205.241:8000/mobileapp/mobile360?sort={0是最热1是最新}&catid={类名}&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo
        
        //http://120.76.205.241:8000/mobileapp/mobile360?sort={0是最热1是最新}&catid=91%3A75946%3A{类名}&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo
        
        getTJData(name) {
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
                self.tuijian = response.data.data;
                console.log(self.tuijian);
            }).catch(function(response) {
                console.log(response);
            });
        },
        getZXData(name) {
            var self = this;
            //console.log(encodeURI(rote));
            var name = encodeURI(name);
            var urlStr = "http://120.76.205.241:8000/mobileapp/mobile360?sort=1&catid=91%3A75946%3A"+name+"&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo";
            //console.log(urlStr)
            this.axios.get('http://127.0.0.1:8080/agency', {
                params: {
                    url:urlStr
                }
            }).then(function(response) {
                //console.log(response);
                //console.log(response.data.data);
                //console.log(self);
                self.zuixin = response.data.data;
                console.log(self.zuixin);
            }).catch(function(response) {
                console.log(response);
            });
        }
    },
    mounted(){
        this.getTJData("");
        this.getZXData("");
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
        display:flex;
        .weui-media-box_appmsg{
            flex:1;
            display:flex;
            padding-right:0;
            .weui-media-box__hd{
                width:60px;
            }
            .weui-media-right{
                text-align:left;
                flex:1;
                width:0;
                h4{font-size:14px;overflow:hidden;text-overflow:ellipsis;}
                //height:60px;
            }
        }
        .download{
            padding-top:35px;
            width:60px;
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
    .page3{
        margin:30px;
        font-size:16px;
        .fenlei{
            display:inline-block;
            height:50px;
            line-height:50px;
            width:40%;
            margin:10px;
            border:1px solid #ececec;
            border-radius: 10px;
        }   
    } 
</style>