<template>
  <div>
    <HotQuestion v-for="(item, index) in items" :key="index" :itemData="itemData">
    </HotQuestion>
  </div>
</template>

<script>
import HotQuestion from "@/components/question/HotQuestion.vue";

export default {
  name: "Hot",
  components: {
    HotQuestion
  },
  data() {
    return {
      items: [],
      itemData: {}
    };
  }
};
</script>
<style lang="less"></style>
