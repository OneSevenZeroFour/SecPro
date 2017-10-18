<template>
    <div id="details">
        <div class="az_slider_1 az_slider_title">
            <h3 class="az_icon_title">
                <a href="/">&lt;</a>
                <span>{{data.title}}</span>
            </h3>
            <ul class="az_app_items_list" id="applistbox">
                <li>
                    <div class="az_itmes_icon"><img :src="data.avatarUrl" alt=""></div>
                    <div class="az_items_info" style="overflow:hidden;">
                        <h4 class="az_items_title_110">{{data.title}}</h4>
                        <div class="az_items_score">
                            <span class="az_items_score" v-for="(i,index) in good" :key="'good'+index">
                                <img :src="goodStar">
                            </span>
                            <span class="az_items_score" v-for="(i,index) in justsoso" :key="'just'+index">
                                <img :src="justStar">
                            </span>
                            <span class="az_items_score" v-for="(i,index) in bad" :key="'bad'+index">
                                <img :src="badStar"></span>
                            <span class="az_items_score" style="display:flex"><img style=" padding:.17094rem 0 0 .598291rem" src="/images/icon_office.png">&nbsp;
                                <font style="color:#69b124;"></font>
                            </span>
                        </div>
                        <div class="clear"></div>
                        <div class="az_items_score" style="overflow:hidden; margin-top:.42735rem;width:100%">
                            <div style="color:#000;width: 22.222222rem; font-size: 1.196581rem;">
                                <p style="width:50%; height:1.709402rem; float:left;">
                                    <span>下载：{{data.downloadCount}}+</span>
                                </p>
                                <p style="width:50%; height:1.709402rem; float:left;">
                                    <span>时间：2017-10-14</span>
                                </p>
                            </div><br/>
                            <div style="color:#000;width: 22.222222rem; font-size: 1.196581rem;">
                                <p style="width:40%; height:1.709402rem; float:left; margin-bottom:.854701rem;">
                                    <span>大小：{{data && data.fileOptions[0].sizeM}}M</span>
                                </p>
                                <p style="width:60%; height:1.709402rem; float:left;">
                                    <span>版本：{{data && data.fileOptions[0].version}}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
        <div class="az_cnt_1">
            <div class="az_down_btn1">
                <a class="az_down_btn1" :href="data && data.fileOptions[0].url">极速下载</a>
            </div>

        </div>
        <div class="az_cnt_ul">
            <h5>简介</h5>
            <div id="az_appcntlist1" :class="{'az_appcntlist':extend1}">
                <p>{{data.description}}</p>
            </div>

            <div class="az_toggle_btn" style="display: block;" @click="extend('extend1')">
                <span id="az_open" :class="{'az_up':!extend1}"></span>
            </div>
        </div>

        <div class="az_cnt_ul">
            <h5>更新说明</h5>
            <div id="az_appcntlist2" :class="{'az_appcntlist':extend2}">
                <p>{{data.updateItems}}</p>
            </div>
            <div class="az_toggle_btn" style="display: block;" @click="extend('extend2')">
                <span id="az_open" :class="{'az_up':!extend2}"></span>
            </div>

        </div>
        <div class="az_cnt_ul">
            <h5>
                <a>评论(共{{data.commentCount}}条)</a>
            </h5>
            <div class="az_comment_cnt" v-for="(n,index) in commentData" :key="n.id">
                <div class="az_comment_top clear">
                    <span>{{n.commenterScreenName}}&nbsp;{{n.publishDateStr}}</span>
                    <!--v-for="n.rating" :key="n.id"-->
                    <span style="float:right;">
                        <img alt="" :src="goodStar" v-for="t in 3" :key="t.id">

                        <img alt="" :src="badStar" v-for="t in 2" :key="t.id">
                    </span>
                </div>
                <p id="az_comment_as">{{n.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {baseUrl} from '../../util/baseUrl';

export default {
    data() {
        return {
            bloom: false,
            data: "",
            thisId: "",
            good: 3,
            bad: 1,
            justsoso: 1,
            goodStar: require('../../assets/images/star_01.png'),
            badStar: require('../../assets/images/star_03.png'),
            justStar: require('../../assets/images/star_02.png'),
            extend1: false,
            extend2: false,
            commentData: ""
        }
    },
    methods: {
        extend(index) {
            //console.log(this[index])
            this[index] = !this[index];
            //this.bloom=!this.bloom;
        }
    },
    mounted() {
        document.body.scrollTop = this.$route.meta.scrollLen;
        console.log(this.$route)
        //			console.log(6666)
        //			console.log(this.$route.params.name);
        var self = this
        var softwareName = this.$route.params.name
        var keyname = encodeURI(softwareName)
        var urlStr = "http://120.76.205.241:8000/mobileapp/mobile360?sort=0&kw=" + keyname + "&pageToken=1&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo";
        console.log(urlStr)
        this.axios.get(`${baseUrl}/agency`, {
            params: {
                url: urlStr
            }
        }).then(function(response) {
            self.data = response.data && response.data.data[0];
            //				console.log(self.data)
            //平均星级
            var coms = response.data && response.data.data[0].ratingDist;
            var good = coms["好评"]
            var bad = coms["差评"]
            var justsoso = coms["中评"]
            var total = good + bad + justsoso
            console.log(good / total)
            var average = (good / total).toFixed(0);
            var residue = (good / total).toFixed(1);
            //				this.good = average;
            //				this.bad = 5 - average;
            //				console.log(average, residue)
            if (average == residue) {
                self.good = average;
                self.justsoso = 0;
                self.bad = 5 - average;
            } else if (average < residue) {
                self.good = average;
                self.justsoso = 1;
                self.bad = 4 - average;
            } else {
                self.good = Number(average); + Number(1)
                self.justsoso = 1;
                self.bad = 4 - self.good;
            }
            self.thisId = response.data.data[0].id
            console.log(self.thisId)
            //	//评论数据请求
            var idencord = encodeURI(self.thisId)
            console.log(idencord)
            self.axios.get(`${baseUrl}/agency`, {
                params: {
                    url: "http://120.76.205.241:8000/comment/mobile360?id=" + idencord + "&pageToken=1&apikey=ZIZJCfxUFdV2NBW4EKeHhLzOewKuJM2w8cyYSSz3cUgYhAQwkprkubdVgRcFKsH5"
                }
            }).then(function(response) {
                var allData = response.data.data;
                self.commentData = allData.splice(0, 10)
                console.log(response, self.commentData)
            }).catch(function(response) {
                console.log(response);
            });
        }).catch(function(response) {
            console.log(response);
        });



    }

}
</script>

<style scoped>
img {
    display: inline-block;
}

.az_slider_title .az_icon_title {
    /*background: url(../images/body_bg.png) no-repeat left;*/
    padding-left: .854701rem;
    /* margin-left: .854701rem; */
    margin-top: .854701rem;
    margin-left: .854701rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.az_slider_title h3 {
    font-weight: normal;
    color: #666666;
    font-size: 1.538462rem;
    line-height: 1.880342rem;
    margin-left: .08547rem;
}

.az_app_items_list li {
    border: .08547rem solid #ececec;
    position: relative;
    margin: .854701rem;
}

.az_itmes_icon {
    position: absolute;
    width: 4.102564rem;
    height: 4.102564rem;
    border-radius: .42735rem;
    left: .683761rem;
    top: .769231rem;
}

.az_items_info {
    position: relative;
    min-height: 4.957265rem;
    margin-right: .42735rem;
    padding: .512821rem 0rem 0 5.555556rem;
}

.az_itmes_icon img {
    width: 4.102564rem;
    height: 4.102564rem;
    display: block;
    font-size: 1.025641rem;
    overflow: hidden;
}

.az_items_info h4.az_items_title_110 {
    height: 2.393162rem;
    margin-bottom: .17094rem;
    line-height: 2.393162rem;
    font-size: 1.367521rem;
    color: #3e3e3e;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 95%;
}

.az_items_score {
    float: left;
}

.clear {
    clear: both;
    height: 0;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
}

.az_items_info p {
    color: #3e3e3e;
    font-size: 1.196581rem;
    line-height: 2.051282rem;
    margin-bottom: .42735rem;
}

.az_items_score span {
    /* color: #598527; */
    /* padding-right: .25641rem; */
    height: 1.880342rem;
    line-height: 2.393162rem;
    font-size: 1.111111rem;
}


/*下载按钮*/

.az_cnt_1 {
    margin: .854701rem;
    min-height: 6.837607rem;
    border-bottom: .08547rem solid #efefef;
}

.az_down_btn1 {
    display: block;
    width: 65%;
    height: 3.162393rem;
    line-height: 3.162393rem;
    margin: 1.709402rem auto 0;
    text-align: center;
    font-size: 1.538462rem;
    color: #fff;
    background-color: #7fc31e;
}

.az_cnt_ul {
    margin: .854701rem;
    border-bottom: .08547rem solid #efefef;
}

.az_cnt_ul h5 {
    padding-left: .854701rem;
    margin-bottom: .854701rem;
    font-weight: normal;
    font-size: 1.367521rem;
    color: #666666;
    border-left: .25641rem solid #7fc31e;
}

.az_appcntlist {
    height: 5.982906rem;
    overflow: hidden;
}

.az_cnt_ul p {
    padding-left: 1.111111rem;
    font-size: 1.196581rem;
    color: #000;
    line-height: 2.051282rem;
}

.az_toggle_btn span.az_up {
    background: url(../../assets/images/arrow_03.png) no-repeat;
}

.az_toggle_btn {
    height: 2.393162rem;
    position: relative;
}

.az_toggle_btn span {
    display: block;
    height: 1.709402rem;
    width: 1.880342rem;
    position: absolute;
    right: .25641rem;
    top: .512821rem;
    /*相对于当前路径引入*/
    background: url(../../assets/images/arrow_01.png) no-repeat;
}

.az_cnt_ul {
    margin: .854701rem;
    border-bottom: .08547rem solid #efefef;
}

.az_cnt_ul h5 {
    padding-left: .854701rem;
    margin-bottom: .854701rem;
    font-weight: normal;
    font-size: 1.367521rem;
    color: #666666;
    border-left: .25641rem solid #7fc31e;
}

.az_cnt_ul h5 a {
    color: #666666;
}

.az_comment_cnt {
    border-bottom: .08547rem dashed #efefef;
}

.az_comment_top {
    height: 2.222222rem;
    line-height: 2.222222rem;
    font-size: 1.025641rem;
    color: #676767;
}

.az_comment_top span {
    float: left;
}



.az_cnt_ul p {
    padding-left: 1.111111rem;
    font-size: 1.2rem;
    color: #000;
    line-height: 2.051282rem;
}

.az_comment_cnt {
    margin-bottom: 1rem;
}
</style>