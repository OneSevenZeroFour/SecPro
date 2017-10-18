<template>
    <div class="allwarelist">
        <div class="soteList1">
            <h4></h4>
            <ul>
                <li class="heng_li" v-for="(t, index) in listData" :key="index">

                    <router-link class="totala" :to="'/details/'+t.title">
                        <div class="soft_small_img">
                            <img :src="t.avatarUrl" alt="" />
                        </div>
                        <div>
                            <h5>{{t.tilte}}</h5>
                            <h6>{{t.downloadCount}}人已下载</h6>
                            <h6>超过4亿用户的新闻客户端</h6>
                        </div>
                    </router-link>

                    <div class="download_bottom download_right">
                        <a :href="t.fileOptions[0].url" download="t.com.yeezsoftky.tradermobile.qh">下载</a>

                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {baseUrl} from '../../util/baseUrl';

export default {
    data() {
        return {
            listData: "",
            page: 1
        }
    },
    methods: {
        getSoteDate(rote, index, page) {
            var self = this
            var rote = encodeURI(rote)
            var urlStr = " http://120.76.205.241:8000/mobileapp/mobile360?sort=" + index + "&kw=" + rote + "&pageToken=" + page + "&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo"
            //				"http://120.76.205.241:8000/mobileapp/mobile360?sort="+index+"&catid=" + rote + "&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo";
            this.axios.get(`${baseUrl}/agency`, {
                params: {
                    url: urlStr
                }
            }).then(function(response) {
                console.log(response.data, index);
                var data = response.data.data;
                self.listData = data.splice(0, 10);
            }).catch(function(response) {
                console.log(response);
            });
        }
    },
    mounted() {
        if (!this.listData) {
            let keyrote = this.$route.params.list;
            let num = this.$route.params.num;
            this.rote = keyrote;
            let page = this.page;
            console.log(num, keyrote)
            if (num == "hot") {
                this.getSoteDate(keyrote, 0, page);
            } else {
                this.getSoteDate(keyrote, 1, page);
            }
        } else {
            console.log(this.listData)
        }

    }
}
</script>

<style scoped>
h6 {
    font-size: 1rem;
    color: #b4b4b4;
    text-align: center;
}


/*软件名称*/

h5 {
    font-size: 1.2rem;
    color: #000;
    text-align: center;
}


/*每个主题标题*/

h4 {
    font-size: 1.4rem;
    color: #000;
    padding: 1rem;
}

a {
    text-decoration: none;
    display: inline-block;
}

.soft_small_img {
    width: 5rem;
    height: 5rem;
    margin: 1rem auto;
}

.soft_small_img img {
    width: 5rem;
    height: 5rem;
    border: 0;
}

.download_bottom {
    margin-top: 1rem;
    text-align: center;
    border: none;
}


.download_bottom a {
    color: #20A0FF;
    width: 2.5rem;
    text-align: center;
    padding: .5rem 1rem;
    border-radius: 1rem;
    border: .08547rem solid #20A0FF;
}

.heng_li {
    margin-left: 1rem;
    margin-bottom: 1rem;
    display: flex;
}

.heng_li a {
    display: inline-block;
    flex: 4;
    display: flex;
}

.heng_li .soft_small_img {
    display: inline-block;
    text-align: center;


    margin: 0 1rem 0 0;
    /*flex:1;*/
}

.heng_li .soft_info {
    margin: 1.709402rem;
    flex: 3;
}

.heng_li h5,
.heng_li h6 {
    text-align: left;
}

.heng_li .download_right {
    flex: 1;
}
</style>