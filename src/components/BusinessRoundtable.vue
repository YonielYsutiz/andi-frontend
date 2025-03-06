<template>
    <div class="page-container">
        <!-- ESTADISTICAS -->
        <el-row :gutter="16">
            <el-col :span="8">
            <div class="statistic-card">
                <el-statistic :value="98500">
                <template #title>
                    <div style="display: inline-flex; align-items: center">
                    Daily active users
                    <el-tooltip
                        effect="dark"
                        content="Number of users who logged into the product in one day"
                        placement="top"
                    >
                        <el-icon style="margin-left: 4px" :size="12">
                        <Warning />
                        </el-icon>
                    </el-tooltip>
                    </div>
                </template>
                </el-statistic>
                <div class="statistic-footer">
                <div class="footer-item">
                    <span>than yesterday</span>
                    <span class="green">
                    24%
                    <el-icon>
                        <CaretTop />
                    </el-icon>
                    </span>
                </div>
                </div>
            </div>
            </el-col>
            <el-col :span="8">
            <div class="statistic-card">
                <el-statistic :value="693700">
                <template #title>
                    <div style="display: inline-flex; align-items: center">
                    Monthly Active Users
                    <el-tooltip
                        effect="dark"
                        content="Number of users who logged into the product in one month"
                        placement="top"
                    >
                        <el-icon style="margin-left: 4px" :size="12">
                        <Warning />
                        </el-icon>
                    </el-tooltip>
                    </div>
                </template>
                </el-statistic>
                <div class="statistic-footer">
                <div class="footer-item">
                    <span>month on month</span>
                    <span class="red">
                    12%
                    <el-icon>
                        <CaretBottom />
                    </el-icon>
                    </span>
                </div>
                </div>
            </div>
            </el-col>
            <el-col :span="8">
            <div class="statistic-card">
                <el-statistic :value="72000" title="New transactions today">
                <template #title>
                    <div style="display: inline-flex; align-items: center">
                    New transactions today
                    </div>
                </template>
                </el-statistic>
                <div class="statistic-footer">
                <div class="footer-item">
                    <span>than yesterday</span>
                    <span class="green">
                    16%
                    <el-icon>
                        <CaretTop />
                    </el-icon>
                    </span>
                </div>
                <div class="footer-item">
                    <el-icon :size="14">
                    <ArrowRight />
                    </el-icon>
                </div>
                </div>
            </div>
            </el-col>
        </el-row>
        <!-- CONTENT PAGE -->
        <el-row style="margin-top: 2%;" :gutter="20">
            <el-col>
                <el-empty>
                    <el-button type="success">Iniciar rueda de negocios</el-button>
                </el-empty>
                <!-- <el-card>
                    <template #header>
                        <div class="card-header">
                        <span><strong>Rueda de negocios</strong></span>
                        <el-button type="primary">Agregar Usuario</el-button> 
                        </div>
                    </template>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="Date" width="180" />
                        <el-table-column prop="name" label="Name" width="180" />
                        <el-table-column prop="address" label="Address" />
                    </el-table>
                </el-card> -->
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'

export default defineComponent({
    name:"BusinessRoundtable",
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
    :global(h2#card-usage ~ .example .example-showcase) {
        background-color: var(--el-fill-color) !important;
    }

    .el-statistic {
        --el-statistic-content-font-size: 28px;
    }

    .statistic-card {
        height: 100%;
        padding: 20px;
        border-radius: 4px;
        background-color: #f8f9fa;
    }

    .statistic-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        font-size: 12px;
        color: var(--el-text-color-regular);
        margin-top: 16px;
    }

    .statistic-footer .footer-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .statistic-footer .footer-item span:last-child {
        display: inline-flex;
        align-items: center;
        margin-left: 4px;
    }

    .green {
        color: var(--el-color-success);
    }
    .red {
        color: var(--el-color-error);
    }
    .card-header {
        display: flex; 
        justify-content: space-between;
        align-items: center;
    }
</style>