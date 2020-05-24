<template>
  <div>
    <!-- <ICard :items="items" :label="'title'" :itemBgColor="'lightgray'"></ICard> -->
    <RecQuestion
      v-for="(item, index) in items"
      :key="index"
      :question="item"
    ></RecQuestion>
  </div>
</template>

<script>
import RecQuestion from "@/components/question/RecQuestion.vue";
import { apiGetQuestionRecommanded } from "../axios/api";
export default {
  name: "Home",
  components: {
    RecQuestion
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
        console.log(res.data.questions)
        this.items = res.data.questions;
      }
    });
  }
};
</script>
<style lang="less"></style>
