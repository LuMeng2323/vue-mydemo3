<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 搜索和添加区域 -->

      <el-row :gutter="20">
        <el-col :span="8">
          <el-input type="text" v-model="UserName" placeholder="请输入需要查找的用户名称">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="dialog = true">新增用户</el-button>
          <el-drawer
            :before-close="handleClose"
            :visible.sync="dialog"
            direction="ttb"
            custom-class="demo-drawer"
            ref="drawer"
            size="50%"
          >
            <div class="demo-drawer__content">
              <el-form :model="from">
                <el-form-item label="用户姓名" label-width="200px">
                  <el-input v-model="from.uName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户角色" label-width="200px">
                  <el-select v-model="from.role" placeholder="请选择用户角色">
                    <el-option label="管理员" value="admin"></el-option>
                    <el-option label="超级管理员" value="SuperAdmin"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div class="demo-drawer__footer">
                <el-button @click="cancelForm">取 消</el-button>
                <el-button
                  type="primary"
                  @click="$refs.drawer.closeDrawer()"
                  :loading="loading"
                >{{loading ? '提交中 ...' : '确 定' }}</el-button>
              </div>
            </div>
          </el-drawer>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Users",
  data() {
    return {
      table: false,
      dialog: false,
      loading: false,
      UserName: "",
      from: {
        uName: "",
        role: "",
      },
      timer: null,
    };
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$comfirm("确定要添加此用户嘛？")
        .then((_) => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .cath((_) => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
  },
};
</script>
<style scoped>
.demo-drawer {
  border: 5px solid red;
}
</style>