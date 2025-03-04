<template>
  <div class="container">
    <el-card class="custom-card">
      <template #header>
        <div class="logo-container">
          <img class="logo" src="../assets/AndiLogo.png" alt="Andi Logo"/>
        </div>
      </template>
      <div class="content">
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
      </div>
    </el-card>
    <GraphChart />
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

<style scoped>

.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding-left: 50px;
}
.custom-card {
  max-width: 300px;
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 2 2px 10px rgba(0, 0, 0, 0.1);
}

.logo-container
{
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo
{
  width: 150px;
}

.content {
  padding-top: 20px;
}

</style>