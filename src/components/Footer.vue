<template>
    <footer class="footer">
      <el-row :gutter="20" justify="space-between" style="display: flex; align-items: center; padding: 5px 40px;">
        <el-col :span="12" style="padding-left: 50px;">
            <h4 style="margin-bottom: 5px;">Enlaces útiles</h4>
            <div style="display: flex; gap: 20px;">
                <p><a href="#" class="footer-link">Inicio</a></p>
                <p><a href="#" class="footer-link">Acerca de</a></p>
                <p><a href="#" class="footer-link">Contacto</a></p>
            </div>
        </el-col>
        <el-col :span="12" style="padding-right: 50px;">
            <h4 style="margin-bottom: 5px; text-align: right;">Redes sociales</h4>
            <div style="display: flex; gap: 20px; justify-content: flex-end; ">
                <p><a href="https://www.facebook.com/andicolombia/" target="_blank" class="footer-link">Facebook</a></p>
                <p><a href="https://x.com/ANDI_Colombia" target="_blank" class="footer-link">Twitter</a></p>
                <p><a href="https://www.instagram.com/andicolombiaoficial/" target="_blank"  class="footer-link">Instagram</a></p>
                <p><a href="https://www.linkedin.com/company/andi-colombia/" target="_blank" class="footer-link">Linkedin</a></p>
                <p><a href="https://www.youtube.com/channel/UCJGEAkLccJj6pcU9vUYnrlw" target="_blank" class="footer-link">Youtube</a></p>
            </div>
        </el-col>
      </el-row>
      <el-row  justify="space-between" style="margin-top: 10px; margin-left: 80px; margin-right: 80px;">
        <el-col :span="12">
          <p>© ANDI - Asociación Nacional de Empresarios de Colombia ® 2025 Todos los Derechos Reservados</p>
        </el-col>
        <el-col :span="12" style="text-align: right;">
          <p>Dirección: Calle 73 # 8 - 13 Piso 7 Torre A. Tel: (1) 3268500</p>
        </el-col>
      </el-row>
    </footer>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElRow, ElCol } from 'element-plus';

export default defineComponent({
  name: 'InitalFooter',
  components: {
    ElRow,
    ElCol,
  },
});
</script>

<style scoped>
.footer {
  background-color: rgb(0, 92, 126);
  color: white;
  margin-top: auto; /* Para que el footer se mantenga en la parte inferior */
}

.footer-link {
  color: white;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>