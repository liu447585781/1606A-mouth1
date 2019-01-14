<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="50">
      </el-table-column>
      <el-table-column label="头像" width="100">
        <template slot-scope="scope">
             <img :src="scope.row.avatar" alt="" style="width: 100%">
        </template>
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="100">
      </el-table-column>
      <el-table-column prop="profile" label="简介" width="150">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" width="120">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="160">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="current"
      :pager-count="5"
      background
      @current-change="handleChange"
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

  export default {
    data() {
      return {
        current:1
      }
    },
    computed:{
      ...mapState({
        tableData:state=>state.list.list
      })
    },
    created(){
      this.getUserList();
    },
      methods: {
      ...mapActions({
        getUserList:'list/getUserList'
      }),
      handleEdit(index, row) {
        console.log('index...', index, row);
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      handleDelete(index, row) {
      },
      handleChange(page){
        this.getUserList({page})
      }
    }
  }
</script>