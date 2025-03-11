<template>
    <el-col :span="3">
        <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
            <el-menu-item index="1">
                <el-icon><DataAnalysis /></el-icon>
                <router-link class="no-decorador" to="/">Dashboard</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <el-icon><OfficeBuilding /></el-icon>
                <router-link class="no-decorador" to="/business-roundtable">Rueda de negocios</router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon><User /></el-icon>
                <router-link class="no-decorador" to="/list-user"><span>Usuarios</span></router-link>
            </el-menu-item>
            <el-sub-menu index="4">
                <template #title>
                <el-icon><setting /></el-icon>
                <span>Configuración</span>
                </template>
                <el-menu-item index="3-1">Tags</el-menu-item>
                <el-menu-item index="3-2">Personalizacion</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="5">
                <el-icon><QuestionFilled /></el-icon>
                <span>Ayuda</span>
            </el-menu-item>
        </el-menu>
    </el-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {ElMenu,ElMenuItem,ElCol,ElIcon,ElSubMenu} from 'element-plus';
import {OfficeBuilding,User,Setting,QuestionFilled, UserFilled, DataAnalysis  } from '@element-plus/icons-vue'; 

export default defineComponent({
  name: 'AndiMenu',
  components: {
    ElMenu,
    ElMenuItem,
    ElCol,
    ElIcon,
    ElSubMenu,
    OfficeBuilding,
    User,
    Setting,
    QuestionFilled,
    DataAnalysis
  }
});

</script>

<style scoped>
    .no-decorador {
        text-decoration: none; /* Elimina el subrayado */
        color: inherit; /* Hereda el color del texto o puedes poner un color específico */
    }
</style>