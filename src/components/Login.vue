<template>
    <div class="page-container">
        <el-row justify="center">
            <el-col :span="8">
                <el-card>
                    <template #header>
                        <div class="card-header">
                            <span><strong>Inicio de sesion</strong></span>
                        </div>
                    </template>
                    <el-form label-position="top" :model="form" label-width="120px">
                        <el-row :gutter="20">
                            <el-col>
                                <el-form-item label="Email">
                                    <el-input v-model="form.email"/>
                                </el-form-item>
                            </el-col>
                            <el-col>
                                <el-form-item label="Password">
                                    <el-input v-model="form.password"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="openModal = false">Cancelar</el-button>
                                <el-button
                                    href="/"
                                    type="primary"
                                    tag="a"
                                >
                                    
                                    Ingresar
                                </el-button>
                        </div>
                    </template>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:"LoginForm",
    data() {
        return {
            openModal: false,
            form: {
                email: "",
                password: "",
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