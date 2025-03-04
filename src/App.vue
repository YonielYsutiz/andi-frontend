<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="content-container">
      <AndiMenu class="menu" />
      <div class="main-content">
        <RouterView />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import AndiMenu from './components/AndiMenu.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';


export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    AndiMenu,
    Footer,
    RouterView
  }
});
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  height: 10vh;
}

.navbar {
  width: 100%;
  height: 60px;
  background: white;
}

.content-container {
  display: flex;
  flex: 1;
  margin-top: 50px;
}

.menu {
  width: 250px;
  min-width: 200px;
  background: #f8f8f8;
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow: auto;
}
</style>