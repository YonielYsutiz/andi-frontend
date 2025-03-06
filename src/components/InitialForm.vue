<template>
  <div class="page-container">
    <el-row>
      <el-col>
        <el-card>
          <template #header>
            <div class="card-header">
              <span><strong>Empresas registradas</strong></span>
              <el-button type="primary" @click="openModal = true">Agregar Empresa</el-button> 
              <el-dialog v-model="openModal" title="Agregar Empresa" width="500px">
                <el-form :model="form" label-width="120px">
                  <el-form-item label="Empresa">
                    <el-input v-model="form.name" placeholder="Ingrese el nombre" />
                  </el-form-item>
                  <el-form-item label="Ciudad">
                    <el-input v-model="form.city" placeholder="Ingrese la ciudad" />
                  </el-form-item>
                  <el-form-item label="Sector">
                    <el-input v-model="form.sector" placeholder="Ingrese el sector" />
                  </el-form-item>
                  <el-form-item label="Oferta">
                      <el-input-tag v-model="form.tags" placeholder="Ingrese el Oferta" />
                  </el-form-item>
                  <el-form-item label="Sitio Web">
                      <el-input v-model="form.web" placeholder="Ingrese el sitio web" />
                  </el-form-item>
                </el-form>
                <el-button @click="openModal = false">Cancelar</el-button>
                <el-button type="primary" @click="guardarEmpresa">Guardar</el-button>
              </el-dialog>
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
              <el-table-column property="sector" label="Sector"/>
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
              <el-table-column property="name" label="Sitio web"/>
            </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import {ElRow, ElCol, ElTable} from 'element-plus';
import { ElLink, type TableTooltipData } from 'element-plus'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Search } from '@element-plus/icons-vue';

const openModal = ref<boolean>(false);

const guardarEmpresa = (): void=>{
  console.log("Empresa guardada")
  openModal.value = false
}

interface Enterprises {
  date: string
  name: string
  city: string
  sector: string
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
      openModal: false,
      form: {
        name: "",
        city: "",
        sector: "",
        tags: "",
        web: "",
      },
      tableData: [
        {
          date: '2016-05-04',
          name: 'Contenedores antioquia',
          city: 'Rio negro - Antioquia',
          sector: 'Construcción e inmobiliria',
          tags: ['Contenedores', 'Sala de ventas', 'Tienda', 'Transporte de Contenedores'],
        },
        {
          date: '2016-05-03',
          name: 'EAFIT - on going',
          city: 'Bogota - Bogota',
          sector: 'Educación',
          tags: ['Universidad', 'Impulsar', 'Emprender']
        },
        {
          date: '2016-05-02',
          name: 'Industrias LAVCO',
          city: 'Manizales - Antioquia',
          sector: 'Producción e industria',
          tags: ['Metalmecánica', 'Motores', 'Compresores', 'Bombas', "Automotores"]
        },
        {
          date: '2016-05-01',
          name: 'Gases de Occidente',
          city: 'Chia - Cundinamarca',
          sector: 'Energía y Gas',
          tags: ['Scouting', 'Benchmarking', 'Blockchain']
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
    },
    guardarEmpresa(): void {
      console.log("Empresa guardada");
      this.openModal = false;
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

  .card-header {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
</style>

