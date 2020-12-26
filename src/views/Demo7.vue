<template>
  <button
    v-for="tab in tabs"
    :key="tab"
    :class="['tab-button', { active: currentTab === tab }]"
    @click="currentTab = tab"
  >
    {{ tab }}
  </button>
  <keep-alive>
    <component :is="currentTabComponent" class="tab" />
  </keep-alive>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import TabPosts from "../components/demo7/TabPosts.vue";
import TabArchive from "../components/demo7/TabArchive.vue";

export default defineComponent({
  components: {
    TabPosts,
    TabArchive,
  },
  setup() {
    const currentTab = ref("Posts");
    const tabs = ref(["Posts", "Archive"]);

    const currentTabComponent = computed(() => {
      return `tab-${currentTab.value.toLowerCase()}`;
    });

    return {
      currentTab,
      tabs,
      currentTabComponent,
    };
  },
});
</script>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>