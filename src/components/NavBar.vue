<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="0" class="logo-container">
      <router-link to="/">
        <img
          class="logo"
          style="width: 70px; margin-right: auto;"
          src="../assets/AndiLogo.png"
          alt="Andi"
        />
      </router-link>
    </el-menu-item>
      <el-sub-menu index="1">
        <template #title>Administrador</template>
        <el-menu-item index="1-1">Cerrar sesión </el-menu-item>
      </el-sub-menu>
    </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';

export default defineComponent({
  name: 'NavBar',
  components: {
    ElMenu,
    ElMenuItem,
    ElSubMenu,
  },
  data() {
    return {
      activeIndex: '0',
    };
  },
  methods: {
    handleSelect(index: string) {
      console.log(index);
    },
  },
});
</script>

<style scoped>
  .el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
  }
  .menu-container {
  display: flex;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}


.logo {
  width: 70px;
  position: relative;
  top: -10px;
}
</style>