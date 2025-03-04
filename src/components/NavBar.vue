<template>
    <el-col>
        <el-menu
            :default-active="activeIndex"
            class="custom-horizontal-menu"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
            style="display: flex; align-items: center;" 
        >
            <img
                style="width: 100px; margin-right: auto;"
                src="../assets/AndiLogo.png"
                alt="Element logo"
            />
            <el-sub-menu index="1">
              <template #title>Perfil</template>
              <el-menu-item index="1-1">Cerrar sesión </el-menu-item>
              <el-menu-item index="1-2">Opciones</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-col>
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
.custom-horizontal-menu.el-menu--horizontal {
  border-bottom: none !important;
}

</style>