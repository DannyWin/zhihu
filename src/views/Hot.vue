<template>
  <div>
    <HotItem v-for="(item, index) in items" :key="index" :itemData="itemData">
    </HotItem>
  </div>
</template>

<script>
import HotItem from "@/components/HotItem.vue";

export default {
  name: "Hot",
  components: {
    HotItem
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
