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
                    <el-table :data="user" style="width: 100%">
                        <el-table-column prop="created_at" label="Fecha" width="180" />
                        <el-table-column prop="name" label="Nombre" width="180" />
                        <el-table-column prop="email" label="Correo"/>
                        <el-table-column width="200" align="right">
                          <template #default="{row}">
                            <el-button type="primary" @click="openEditUser(row)"><el-icon><Edit /></el-icon></el-button>
                            <el-button type="danger" @click="deleteUser(row.id)"><el-icon><Delete/></el-icon></el-button>
                          </template>
                        </el-table-column>
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
                <el-form-item label="Contraseña">
                  <el-input v-model="form.password" type="password" placeholder="Ingrese el sector" />
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

        <el-dialog v-model="openEditModal" title="Editar Usuario" width="500">
          <el-form label-position="top" :model="form" label-width="120px">
            <el-row :gutter="20">
                <el-col :span="12">
              <el-form-item label="Nombre completo">
                <el-input v-model="form.name" placeholder="Ingrese el nombre" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Email">
                <el-input v-model="form.email" placeholder="Ingrese el correo" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Contraseña">
                <el-input v-model="form.password" type="password" placeholder="Ingrese el correo" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Área">
                <el-input v-model="form.area" placeholder="Ingrese el área" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Teléfono">
                <el-input v-model="form.phone" placeholder="Ingrese el teléfono" />
              </el-form-item>
            </el-col>
            </el-row>
          </el-form>
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="openEditModal = false">Cancelar</el-button>
              <el-button type="primary" @click="editUser">Actualizar</el-button>
            </div>
        </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";
import { ElNotification } from 'element-plus'
import { Delete, Edit } from '@element-plus/icons-vue'; 

interface Enterprises {
    date: string;
    name: string;
    email: string; 
}
export default defineComponent({
    name:"listUser",
    components: {
        Delete,
        Edit
    },
    data() {
        return {
            openModal: false,
            openEditModal: false,
            form: {
                id:"",
                name: "",
                email: "",
                area: "",
                phone: "",
                password: "",
            },
            user:[] as Enterprises[],
        };
    },
    methods: {
        async saveUser(){
          try{
            const userData = {
              name: this.form.name,
              email: this.form.email,
              password: this.form.password,
            }
            await axios.post("http://127.0.0.1:5000/users/register", userData);

            ElNotification.success({
              title: 'Éxito',
              message: 'Usuario registrado correctamente',
              offset: 100,
            });
            setTimeout(() => {
              this.openModal = false;
              this.fetchUser();
            }, 1000);
          }
          catch(error){
            console.log("Error al registrar usuario", error);
            ElNotification.error({
              title: 'Error',
              message: 'No se pudo registrar el usuario',
              offset: 100,
            });
          }
        },
        async fetchUser(){
            try {
                const response = await axios.get("http://127.0.0.1:5000/users/all-user");
                this.user = await response.data;
            } catch (error) {
              console.log("Error al obtener usuarios", error);
            }
        },    
        openEditUser(user: any) {
          this.form = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: "",
            area: user.area,
            phone: user.phone,
           }; 
          this.openEditModal = true;
        },
        async editUser(event?: Event){
          if (event) event.preventDefault(); // Evita que Vue pase el evento automáticamente

          if (!this.form.id) {
            console.error("Error: ID de usuario no definido.");
            return;
          }

          try {
            await axios.put(`http://127.0.0.1:5000/users/update-user/${this.form.id}`, {
              name: this.form.name,
              email: this.form.email,
              password: this.form.password,
            });
            ElNotification.success({
              title: 'Éxito',
              message: 'Usuario actualizado correctamente',
              offset: 100,
            });
            this.openEditModal = false;
            this.fetchUser();
          } catch (error) {
            console.error("Error al actualizar usuario", error);
            ElNotification.error({
              title: 'Error',
              message: 'No se pudo actualizar el usuario',
              offset: 100,
            });
          }
        },
        async deleteUser(userId: number){
          try{
            await axios.delete(`http://127.0.0.1:5000/users/delete-user/${userId}`)
            ElNotification.success({
              title: 'Éxito',
              message: 'Usuario eliminado correctamente',
              offset: 100,
            });
            this.fetchUser();
          } catch(error){
            console.log("Error al eliminar usuario", error);
            ElNotification.error({
              title: 'Error',
              message: 'No se pudo eliminar el usuario',
              offset: 100,
            });
          }  
        },
      },
    mounted(){
        this.fetchUser();
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