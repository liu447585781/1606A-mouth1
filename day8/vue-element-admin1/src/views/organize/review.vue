<template>
  <div class="app-container">
    <upload-excel-component :on-success="handleSuccess"/>
    <el-table :data="results" border highlight-current-row style="width: 100%;margin-top:20px;">
      <template v-for="item of header">  
        <el-table-column v-if="item!='avatar'" :prop="item" :label="item.toUpperCase()" :key="item"/>
        <el-table-column v-else prop="item" :label="item.toUpperCase()" :key="item">
            <template slot-scope="scope">
                <img :src="scope.row.avatar" style="width:80px;height:80px;"/>
            </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'

export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent },
  data() {
    return {
      results: [],
      header: []
    }
  },
  methods:{
      handleSuccess(res){
          this.header = res.header;
          this.results = res.results;
      }
  }

}
</script>

<style>

</style>
