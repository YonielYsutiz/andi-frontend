<template>
  <div class="page-container">
    <el-row>
      <el-col>
        <el-card>
          <template #header>
            <div class="card-header">
              <span><strong>Empresas registradas</strong></span>
            </div>
          </template>
            <!-- FILTRO LISTA DE EMPRESAS -->
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
                  <el-button>Filtro 1</el-button>
                  <el-button>Filtro 2</el-button>
              </el-col>
            </el-row>
            <!-- TABLA DE EMPRESAS REGISTRADAS -->
            <el-table :tooltip-formatter="tableRowFormatter" :data="tableData" style="width: 100%; margin-top: 2%;" show-overflow-tooltip>
              <el-table-column type="selection" width="55" />
              <!-- <el-table-column label="Date" width="120">
                <template #default="scope">{{ scope.row.date }}</template>
              </el-table-column> -->
              <el-table-column label="Empresa">
                <template #default="scope">
                  <router-link to="/enterprise/detail">
                    {{ scope.row.name }}
                  </router-link>
                </template>
              </el-table-column>
              <el-table-column property="city" label="Ciudad"/>
              <el-table-column
                prop="tags"
                label="Oferta"
                width="240"
                :tooltip-formatter="({ row }) => row.tags.join(', ')"
              >
                <template #default="{ row }">
                  <el-tag
                    v-for="tag in row.tags"
                    :key="tag"
                    class="tag-item"
                    size="small"
                    type="primary"
                    style="margin-right: 2px;"
                  >
                    {{ tag }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column
                property="address"
                label="Demanda"
                width="300"
                show-overflow-tooltip
              />
              <el-table-column property="name" label="Sitio web"/>
            </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import {ElRow, ElCol, ElTable} from 'element-plus';
import { ElLink, type TableTooltipData } from 'element-plus'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Search } from '@element-plus/icons-vue'; 

interface Enterprises {
  date: string
  name: string
  city: string
  tags: string[]
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
      search: "",
      tableData: [
        {
          date: '2016-05-04',
          name: 'Coca cola',
          city: 'Rio negro - Antioquia',
          tags: ['error', 'warning', 'success', 'info', "danger"],
          address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
        },
        {
          date: '2016-05-03',
          name: 'Postobon',
          city: 'Bogota - Bogota',
          tags: ['error', 'warning', 'success', 'info'],
          address: '760 A Street, South Frankfield, Illinois',
        },
        {
          date: '2016-05-02',
          name: 'Cervezeria Aguila',
          city: 'Manizales - Antioquia',
          tags: ['error', 'warning', 'success', 'info', "danger"],
          address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
        },
        {
          date: '2016-05-01',
          name: 'Jugos Hit',
          city: 'Chia - Cundinamarca',
          tags: ['error', 'warning', 'success', 'info'],
          address: '23618 Windsor Drive, West Ricardoview, Idaho',
        },
      ] as Enterprises[],
    };
  },
  methods: {
    handleOpen(key: string, keyPath: string[]) {
      console.log('Opened:', key, keyPath);
    },
    handleClose(key: string, keyPath: string[]) {
      console.log('Closed:', key, keyPath);
    },
    tableRowFormatter(data: TableTooltipData){
      return `${data.cellValue}: table formatter`
    }
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

