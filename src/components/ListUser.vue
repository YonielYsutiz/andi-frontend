<template>
    <div class="page-container">
        <el-row :gutter="20">
            <el-col>
                <el-card>
                    <template #header>
                        <div class="card-header">
                        <span><strong>Gestionar usuarios</strong></span>
                        <el-button type="primary" @click="openModal = true">Agregar Usuario</el-button> 
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

        <!-- MODAL PARA CREAR / EDITAR USUARIO -->
        <el-dialog v-model="openModal" title="Agregar usuario" width="500">
          <el-form label-position="top" :model="form" label-width="120px">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="Nombre completo">
                  <el-input v-model="form.name" placeholder="Ingrese el nombre" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Email">
                  <el-input v-model="form.email" placeholder="Ingrese el sector" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Area">
                  <el-input v-model="form.area" placeholder="Ingrese la ciudad" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Telefono">
                    <el-input v-model="form.phone" placeholder="Ingrese el sitio web" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
            
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="openModal = false">Cancelar</el-button>
              <el-button type="primary" @click="saveUser">
                Guardar
              </el-button>
            </div>
          </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:"listUser",
    data() {
        return {
            openModal: false,
            form: {
                name: "",
                email: "",
                area: "",
                phone: "",
            },
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Juan',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-02',
                    name: 'Antonio',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-04',
                    name: 'Fermin',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-01',
                    name: 'Laura',
                    address: 'No. 189, Grove St, Los Angeles',
                },
            ]
        }
    },
    methods: {
        saveUser(): void {
            console.log("User save");
            this.openModal = false;
        },
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