<template>
  <div>
    <!-- <ICard :items="items" :label="'title'" :itemBgColor="'lightgray'"></ICard> -->
    <RecommandItem
      v-for="(item, index) in items"
      :key="index"
      :data="item"
    ></RecommandItem>
  </div>
</template>

<script>
import RecommandItem from "@/components/RecommandItem.vue";
import { apiGetQuestionRecommanded } from "../axios/api";
export default {
  name: "Home",
  components: {
    RecommandItem
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    load() {}
  },
  mounted() {
    let date;
    if (this.items && this.items.length) {
      date = this.items[this.items.length - 1].date;
    } else {
      date = 0;
    }
    const params = { date: date };
    apiGetQuestionRecommanded(params).then(res => {
      if (res.status == 200) {
        this.items = res.data.questions;
      }
    });
  }
};
</script>
<style lang="less"></style>
