<template>
    <div>
        <h5>YouYou推荐</h5>
        <div v-for="(i, index) in data" :key="index" class="box">
            <a :href="'#/details/'+i.title" class="lj">
                <div class="left">
                    <img :src="i.avatarUrl" alt="" />
                </div>
                <div class='conter'>
                    <h6>{{i.title}}</h6>
                    <p>
                        <span>评论数:{{i.commentCount}}</span>
                        <span>大小:{{i.fileOptions[0].sizeM}}</span>
                    </p>
                </div>
                <div class='right'>
                    <a :href="i.fileOptions[0].url">下 载</a>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import {baseUrl} from '../../../util/baseUrl';

export default {
    data() {
        return {
            sj: null,
        }
    },
    methods: {

    },
    mounted() {
        var xthis = this
        setTimeout(function() {
            xthis.axios.get(`${baseUrl}/agency`, {
                params: {
                    url: 'http://120.76.205.241:8000/mobileapp/mobile360?sort=0&catid=%E5%A8%B1%E4%B9%90&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo'
                }
            }).then(response => {
                xthis.sj = response.data.data
                console.log(xthis.sj)
            }, response => { });
        }, 5000);
    },
    computed: {
        data() {
            if (this.sj) {
                return this.sj
            }
        }
    }
}
</script>

<style scoped>
h5 {
    text-align: center;
    line-height: 3.418803rem;
    font-size: 1.367521rem;
}

.lj {
    color: black;
}

.box {
    width: 100%-1.709402rem;
    padding: .854701rem;
    margin: .854701rem;
    border: .08547rem solid #D3DCE6;
    overflow: hidden;
}

.box div {
    float: left;
}

.box .left {
    margin-right: .854701rem;
}

.box .left img {
    width: 6.153846rem;
}

.box .conter {
    width: 60%;
}

.box .conter h6 {
    font-size: 1.367521rem;
    font-weight: normal;
    margin-top: .42735rem;
}

.box .conter p {
    font-size: 1.025641rem;
    margin-top: .854701rem;
}

.box .conter p span {
    margin: 0 .854701rem;
}

.box .right {
    width: 10%;
}

.box .right a {
    display: block;
    background: #7fc31e;
    width: 4.444444rem;
    height: 2.735043rem;
    color: white;
    text-decoration: none;
    font-size: 1.025641rem;
    text-align: center;
    line-height: 2.735043rem;
    margin-top: 1.709402rem;
    border-radius: .42735rem;
}
</style>