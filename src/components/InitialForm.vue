<template>
  <div  class="page-container">
    <div class="main-content">
      <el-row>
        <el-col :span="20">
        <el-row>
          <el-col>
            <el-input  v-model="input3" style="width: 600px; margin-right: 15px;" size="large" placeholder="Please Input" prefix-icon="Search" />
            <el-select
              v-model="value"
              placeholder="Select"
              size="large"
              style="width: 120px; margin-right: 20px;"
              >
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
              </el-select>
              <router-link to="/graph">
                <el-button>Filtro 1</el-button>
              </router-link>
              <el-button>Filtro 2</el-button>
          </el-col>
        </el-row>

        <el-row style="margin-top: 20px;">
          <el-col>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="selection" width="55" />
              <el-table-column label="Date" width="120">
                <template #default="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column property="name" label="Name" width="120" />
              <el-table-column
                property="address"
                label="use show-overflow-tooltip"
                width="240"
                show-overflow-tooltip
              />
              <el-table-column property="address" label="address" />
            </el-table>
          </el-col>
        </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
  </template>

<script lang="ts">
import { defineComponent} from 'vue';
import {ElRow, ElCol, ElTable} from 'element-plus';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Search } from '@element-plus/icons-vue'; 
interface Users {
  date: string
  name: string
  address: string
}

export default defineComponent({
  name: 'InitialForm',
  components: {
    ElRow,
    ElCol,
    ElTable

  },data() {
    return {
      tableData: [
        {
          date: '2016-05-04',
          name: 'Aleyna Kutzner',
          address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
        },
        {
          date: '2016-05-03',
          name: 'Helen Jacobi',
          address: '760 A Street, South Frankfield, Illinois',
        },
        {
          date: '2016-05-02',
          name: 'Brandon Deckert',
          address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
        },
        {
          date: '2016-05-01',
          name: 'Margie Smith',
          address: '23618 Windsor Drive, West Ricardoview, Idaho',
        },
      ] as Users[],
    };
  },
  methods: {
    handleOpen(key: string, keyPath: string[]) {
      console.log('Opened:', key, keyPath);
    },
    handleClose(key: string, keyPath: string[]) {
      console.log('Closed:', key, keyPath);
    },
  },
});

</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 60vh;
}

.main-content {
  flex: 1;
}

</style>

