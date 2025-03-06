<template>
    <el-col :span="3">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
            <el-sub-menu index="1">
                <template #title>
                <el-icon><OfficeBuilding /></el-icon>
                <span>Rueda de negocios</span>
                </template>
                <el-menu-item index="1-1">
                    <router-link to="/business-roundtable">Cargar rueda de negocios</router-link>
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                <el-icon><User /></el-icon>
                <span>Usuarios</span>
                </template>
                <el-menu-item index="2-1">
                    <router-link to="/list-user">Cargar rueda de negocios</router-link>
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                <el-icon><setting /></el-icon>
                <span>Configuración</span>
                </template>
                <el-menu-item index="3-1">Listar Tags</el-menu-item>
            </el-sub-menu>
        <el-menu-item index="4">
            <el-icon><QuestionFilled /></el-icon>
            <span>Ayuda</span>
        </el-menu-item>
        </el-menu>
    </el-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {ElMenu,ElMenuItem,ElCol,ElIcon,ElSubMenu} from 'element-plus';
import {OfficeBuilding,User,Setting,QuestionFilled  } from '@element-plus/icons-vue'; 

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
    QuestionFilled
  }
});

</script>