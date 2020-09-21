<template>
  <div class="home">
    <Main />
    <Sidebar />
  </div>
</template>

<script>
import Main from '@/components/Main.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    Main, Sidebar
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-between;
  position: relative;
}
</style>
