<template>
  <ul class="flex">
    <li v-for="item in menuItems" :key="item.ID" class="mr-6 text-xl">
      <NuxtLink :to="item.url">
        {{ item.title }}
      </NuxtLink>
      <ul v-if="item.child_items" class="child-menu">
        <li v-for="childItem in item.child_items" :key="childItem.ID">
          <NuxtLink :to="childItem.url">
            {{ childItem.title }}
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>
  
<script lang="ts" setup>
const { data: menu } = await useWpApi().getMainMenu();
const menuItems = ref(menu.value?.items);

</script>
  
<style lang="scss" scoped>
.child-menu {
  // display: none;
}
</style>