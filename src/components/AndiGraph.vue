<template>
  <div class="page-container">
    <el-row :gutter="20">
      <el-col :span="10">
        <el-card class="custom-card">
          <template #header>
            <div class="logo-container">
              <img class="logo" src="https://cdn.iconscout.com/icon/free/png-256/free-coca-cola-1863554-1579762.png?f=webp" alt="Logo empresa"/>
            </div>
          </template>
          <p>
            <strong>Razon social:</strong> Coca Cola SA
          </p>
          <p>
            <strong>Contacto:</strong> hola@cocacola.com
          </p>
          <div>
            <strong>Servicios o productos ofrecidos:</strong>
            <div class="flex gap-2">
              <el-tag type="primary">Tag 1</el-tag>
              <el-tag type="primary">Tag 2</el-tag>
              <el-tag type="primary">Tag 3</el-tag>
              <el-tag type="primary">Tag 4</el-tag>
            </div>
          </div>
          <div>
            <strong>Servicios o productos buscados:</strong>
            <div class="flex gap-2">
              <el-tag type="warning">Tag 1</el-tag>
              <el-tag type="warning">Tag 2</el-tag>
              <el-tag type="warning">Tag 3</el-tag>
              <el-tag type="warning">Tag 4</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card class="custom-card">
          <template #header>
            <strong>Empresas de interes</strong>
          </template>
          <GraphChart />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GraphChart from './GraphChart.vue';

export default defineComponent({
  name: 'AndiGraph',
  components: {
    GraphChart
  }
});
</script>

<style>
  .logo-container
  {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 150px;
  }

  .page-container {
    /* display: flex; */
    /* flex-direction: column; */
    min-height: 60vh;
  }

  .custom-card {
    text-align: left;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 2 2px 10px rgba(0, 0, 0, 0.1);
  }
</style>