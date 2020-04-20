<template>
  <div>
    <FollowItem v-for="(item, index) in items" :key="index" :data="itemData">
    </FollowItem>
  </div>
</template>

<script>
import FollowItem from "@/components/FollowItem.vue";

export default {
  name: "Home",
  components: {
    FollowItem
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
