<template>
  <div class="container">
      <div class="row">
        <div class="col-12">
            <div class="content-white about-page">
                <div class="content-main">Peiting / 沛廷</div>
                <div>來自台灣，擁有自創品牌 furimuri</div>
                <hr/>
                <div v-for="items in timeLineItems" :key="items.key" class="time-line d-flex flex-row mb-3">
                    <div class="p-2">{{ items.time }}</div>
                    <div class="p-2" v-html="items.item"></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'aboutPage',
    data() {
        return {
            timeLineItems: [
                {
                    time: "2021.11",
                    item: "<a href='https://www.tintint.com/event/creator/card202101/#race-tab4' target='_blank'>「點點圓夢計畫 - 卡片募集 (聖誕節/新年/生日)」</a> Original design prize. <span class='gray'><a href='https://www.tintint.com/blog/post/29745' target='_blank'>&#64;Tintint interview</a></span>"
                },
                {
                    time: "2021.12",
                    item: "合作書店 <a href='https://www.facebook.com/ubuntubook01/' target='_blank'>「烏邦圖書店_環河店」</a> 商品販售中 <span class='gray'><a href='https://goo.gl/maps/GF4DdcTJhDkPpbqq9' target='_blank'>&#64;烏邦圖書店環河店</a></span>"
                },
                {
                    time: "2021.12",
                    item: "<a href='https://www.instagram.com/p/CYQ4zHSsWWP/' target='_blank'>「Aromase Illustration Competition」</a> 1<sup>st</sup> prize. <span class='gray'><a href='https://www.instagram.com/aromasetw/' target='_blank'>&#64;aromasetw</a></span>"
                },
                {
                    time: "2022.04",
                    item: "<a href='https://www.tintint.com/event/creator/card202201/#race-tab4' target='_blank'>「點點圓夢計畫 - 卡片募集 (父親節/母親節)」</a> Original design prize."
                }
            ]
        }
   }
}
</script>
<style scoped>
.about-page {
    font-family: 'Nanum Gothic';
}

.content-main {
    padding: 20px;
}

.content-white {
    background-color: rgba(250, 250, 250, 0.65);
    min-height: 500px;
}

.time-line {
    text-align: left;
    margin-bottom: 0 !important;
    margin-left: 20%;
    padding-left: 10px;
    border-left: 2px solid #ccc;
}

@media (max-width: 768px) {
    .time-line {
        margin-left: 3%;
    }
}

</style>
