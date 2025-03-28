<template>
  <div class="page-container">
    <el-row>
      <el-col>
        <el-card>
          <template #header>
            <div class="card-header">
              <span><strong>Empresas registradas</strong></span>
              <el-button type="primary" @click="openModal = true">Agregar Empresa</el-button> 
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
            <el-table :tooltip-formatter="tableRowFormatter" :data="companies"  height="400" style="width: 100%; margin-top: 2%;" show-overflow-tooltip>
              <el-table-column type="selection" width="55" />
              <el-table-column label="Empresa">
                <template #default="scope">
                  <router-link  :to="{ path: '/enterprise/detail', query: { name_company: scope.row.name_company }}">
                    <el-link :underline="false">
                      {{ scope.row.name_company }}
                    </el-link>
                  </router-link>
                </template>
              </el-table-column>
              <el-table-column property="city" label="Ciudad"/>
              <el-table-column property="sector" label="Sector"/>
              <el-table-column
                prop="tags"
                label="Producto o servicio"
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
              <el-table-column property="name_company" label="Sitio web"/>
              <el-table-column width="200" align="right">
                <template #default="{row}">
                  <el-button type="primary" @click="openEditCompany(row)"><el-icon><Edit /></el-icon></el-button>
                  <el-button type="danger" @click="deleteCompany(row.id)"><el-icon><Delete/></el-icon></el-button>
                </template>
              </el-table-column>
            </el-table>
        </el-card>

        <!-- MODAL PARA CREAR EMPRESA -->
        <el-dialog v-model="openModal" title="Agregar empresa" width="500">
          <el-form label-position="top" :model="form" label-width="120px">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="NIT">
                  <el-input v-model="form.nit" placeholder="Ingrese el NIT" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Razon Social">
                  <el-input v-model="form.name_company" placeholder="Ingrese el nombre" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Sector">
                  <el-input v-model="form.sector" placeholder="Ingrese el sector" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Ciudad">
                  <el-input v-model="form.city" placeholder="Ingrese la ciudad" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Sitio Web">
                    <el-input v-model="form.web" placeholder="Ingrese el sitio web" />
                </el-form-item>
              </el-col>
              <el-col>
                <el-form-item label="Servicio o producto">
                    <el-input-tag v-model="form.tags" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>  
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="openModal = false">Cancelar</el-button>
              <el-button type="primary" @click="guardarEmpresa">
                Guardar
              </el-button>
            </div>
          </template>
        </el-dialog>
      </el-col>
    </el-row>

    <el-dialog v-model="openModalEdit" title="Editar Usuario" width="500">
          <el-form label-position="top" :model="form" label-width="120px">
            <el-row :gutter="20">
                <el-col :span="12">
              <el-form-item label="NIT">
                <el-input v-model="form.nit" placeholder="Ingrese el NIT" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Nombre de la empresa">
                <el-input v-model="form.name_company" placeholder="Ingrese el Nombre de la empresa" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Ciudad">
                <el-input v-model="form.city" placeholder="Ingrese la ciudad" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Sector">
                <el-input v-model="form.sector" placeholder="Ingrese el sector" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="Servicio o producto">
                    <el-input-tag v-model="form.tags" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Correo">
                <el-input v-model="form.web" placeholder="Ingrese el correo" />
              </el-form-item>
            </el-col>
            </el-row>
          </el-form>
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="openModalEdit = false">Cancelar</el-button>
              <el-button type="primary" @click="editCompany">Actualizar</el-button>
            </div>
        </template>
        </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import {ElRow, ElCol, ElTable, ElAlert, ElNotification, ElIcon} from 'element-plus';
import { ElLink, type TableTooltipData } from 'element-plus';
import { Delete, Edit } from '@element-plus/icons-vue'; 
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Search } from '@element-plus/icons-vue';

const openModal = ref<boolean>(false);

const guardarEmpresa = (): void=>{
  console.log("Empresa guardada")
  openModal.value = false
}

interface Enterprises {
  date: string
  name_company: string
  nit: string
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
    ElTable,
    ElIcon,
    Delete,
    Edit,

  },data() {
    return {
      search: "",
      openModal: false,
      openModalEdit: false,
      form: {
        id:"",
        nit:"",
        name_company: "",
        city: "",
        sector: "",
        tags: "",
        web: "",
      },
      companies:[] as Enterprises[],
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
    async guardarEmpresa(){
      try{
        const empresaData ={
          nit: this.form.nit,
          name_company: this.form.name_company,
          sector: this.form.sector  
        };
        const response = await axios.post("http://127.0.0.1:5000/companies/company_register", empresaData);
        console.log("Respuesta del servidor", response.data);
        
        ElNotification.success({
              title: 'Éxito',
              message: 'Empresa registrada correctamente',
              offset: 100,
            });
        setTimeout(()=>{
          this.openModal = false;
          this.fecthCompanies();
        }, 1000);
      }
      catch(error){
        console.log("Error al registrar la empresa", error);
        ElNotification.error({
              title: 'Error',
              message: 'No se pudo registrar la empresa',
              offset: 100,
            });
      }
    },
    async fecthCompanies(){
      try{
        const response = await axios.get("http://127.0.0.1:5000/companies/all-companies");
        this.companies = response.data;
      }
      catch(error){
        console.log("Error al obtener las empresas", error);
      }
    },
    openEditCompany(company: any){
      this.form ={
        id: company.id,
        nit: company.nit,
        name_company: company.name_company,
        sector: company.sector,
        city: company.city,
        web: company.web,
        tags: company.tags,
      }
      this.openModalEdit = true;
    },
    async editCompany(event?: Event){
      if (event) event.preventDefault();

      if (!this.form.id){
        console.error("Error: ID de empresa no definido.");
        return;
      }

      try{
        await axios.put(`http://127.0.0.1:5000/companies/update-company/${this.form.id}`, {
          nit: this.form.nit,
          name_company: this.form.name_company,
          sector: this.form.sector
        });
        ElNotification.success({
              title: 'Éxito',
              message: 'Empresa actualizado correctamente',
              offset: 100,
            });
            this.openModalEdit= false;
            this.fecthCompanies();
      }
      catch(error){
        console.error("Error al actualizar empresa", error);
            ElNotification.error({
              title: 'Error',
              message: 'No se pudo actualizar la empresa',
              offset: 100,
            });
      }
    },
    async deleteCompany(companyId: number){
      try{
        await axios.delete(`http://127.0.0.1:5000/companies/delete-company/${companyId}`);
        ElNotification.success({
              title: 'Éxito',
              message: 'Empresa eliminada correctamente',
              offset: 100,
            });
            this.fecthCompanies();
      }
      catch(error){
        console.error("Error al eliminar empresa", error);
            ElNotification.error({
              title: 'Error',
              message: 'No se pudo eliminar la empresa',
              offset: 100,
            });
      }
    }
  },
  mounted(){
      this.fecthCompanies();
  }
});

</script>

<style scoped>
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 64vh;
  }
  .main-content {
    flex: 1;
  }

  .card-header {
    display: flex; 
    justify-content: space-between;
    align-items: center;
  }

  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
  }
</style>

