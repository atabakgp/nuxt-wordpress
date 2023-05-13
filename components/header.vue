<template>
  <header class="header bg-gray-400 text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="logo">
        LOGO
      </div>
      <Menubar />
    </div>
  </header>
</template>

<script lang="ts" setup>
const { data: menuItems } = await useWpApi().getMainMenu();

</script>


<style lang="scss" scoped>
</style>