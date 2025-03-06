<template>
    <div class="page-container">
        <el-row :gutter="20">
            <el-col>
                <el-card>
                    <template #header>
                        <div class="card-header">
                        <span><strong>Gestionar usuarios</strong></span>
                        <el-button type="primary">Agregar Usuario</el-button> 
                        </div>
                    </template>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="Date" width="180" />
                        <el-table-column prop="name" label="Name" width="180" />
                        <el-table-column prop="address" label="Address" />
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:"listUser",
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
            ]
        }
    }
})
</script>

<style>
    .card-header {
        display: flex; 
        justify-content: space-between;
        align-items: center;
    }
</style>