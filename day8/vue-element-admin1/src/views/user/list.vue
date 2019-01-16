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
      <el-table-column label="角色" width="160">
        <template slot-scope="scope">
          <el-tag
            :key="tag"
            style="margin-left:3px;"
            v-for="tag in scope.row.rolers">
            {{tag}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="权限" width="150">
        <template slot-scope="scope">
          <el-tag
            :key="tag"
            style="margin-left:3px;"
            v-for="tag in scope.row.access">
            {{tag}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" style="margin:5px 0" @click="handleRoler(scope.$index, scope.row)">修改角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改内容" :visible.sync="dialogFormVisible">
  <el-form :model="currentUser" :rules="rules" ref="form">
    <el-form-item label="头像" :label-width="formLabelWidth">
          <el-upload
            action="123"
            class="avatar-uploader"
            :show-file-list="false">
            <img v-if="currentUser.avatar" :src="currentUser.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
    <el-form-item label="姓名" :label-width="formLabelWidth" prop="username">
      <el-input v-model="currentUser.username"></el-input>
    </el-form-item>
    <el-form-item label="简介" :label-width="formLabelWidth" prop="profile">
      <el-input v-model="currentUser.profile"></el-input>
    </el-form-item>
    <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
      <el-input v-model="currentUser.phone"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
      <el-input v-model="currentUser.email"></el-input>
    </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
      <el-input v-model="currentUser.address"></el-input>
    </el-form-item>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消 修 改</el-button>
    <el-button type="primary" @click="sure">确 定 修 改</el-button>
  </div>
</el-dialog>
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
      const profileValidator = (rule, value, callback)=>{
        if (!value || value.length < 20){
          callback(new Error('个人简介不能低于20个字'))
        }else{
          callback();
        }
      }
      const phoneValidator = (rule, value, callback)=>{
        if (!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(value)){
          callback(new Error('请输入正确的手机号码'))
        }else{
          callback();
        }
      }
      const emailValidator = (rule, value, callback)=>{
        if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value)){
          callback(new Error('请输入正确的邮箱地址'))
        }else{
          callback();
        }
      }
      return {
        current:1,
        currentUser: {},
        dialogFormVisible: false,
        formLabelWidth: '120px',
        rules: {
          username: [{trigger:'blur', required: true, message: '用户名必填'}],
          profile: [{trigger:'blur', required: true, validator: profileValidator}],
          phone: [{trigger:'blur', required: true,  validator: phoneValidator}],
          email: [{trigger:'blur', required: true,  validator: emailValidator}],
          address:[{trigger:'blur', required: true, message: '地址必填' }]
        }
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
        getUserList:'list/getUserList',
        updateUserInfo:'list/updateUserInfo',
        deleteUserInfo:'list/deleteUserInfo'
      }),
      handleDelete(ind,val) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
            let {id}=val;
          this.deleteUserInfo({uid:id}).then(res=>{
              this.getUserList({page:this.current})
            })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleEdit(index, row) {
        this.currentUser={...row};
        this.dialogFormVisible=true;
      },
      handleChange(page){
        this.current=page;
        this.getUserList({page})
      },
      handleRoler(ind,row){
        console.log(ind,row)
      },
      sure(){
        this.$refs.form.validate(valid=>{
          if(valid){
            let {id,username,profile,email,phone,address}=this.currentUser;
            this.updateUserInfo({id,username,profile,email,phone,address}).then(res=>{
              this.$message({
                message:res,
                center:true,
                type:'success'
              });
              this.getUserList({page:this.current})
            }).catch(err=>{
              this.$message({
                message:err,
                center:true,
                type:'error'
              });
            })
          this.dialogFormVisible=false;
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.avatar-uploader /deep/ .avatar{

  width: 40px;
}
</style>