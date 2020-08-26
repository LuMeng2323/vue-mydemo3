<template>
  <!-- 头部区域 -->
  <el-container class="index_container">
    <el-header>
      <div>
        <img src="../assets/icon.png" alt />
        <span>甜茶电商后台管理</span>
      </div>
      <el-button type="info" plain @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主题区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px':'200px'">
        <div class="toggle_button" @click="toggleCollspse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          :unique-opened="true"
          active-text-color="white"
          default-active="/Users"
          class="el-menu-vertical-demo"
          background-color="#d3dce6"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>用户管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="/Users">用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 文本 -->
              <span>权限管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="/Home">角色列表</el-menu-item>
            <el-menu-item index="/Role">权限列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-potato-strips"></i>
              <!-- 文本 -->
              <span>商品管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="3-1">商品列表</el-menu-item>
            <el-menu-item index="3-2">分类修改</el-menu-item>
            <el-menu-item index="3-3">商品分类</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      // 是否折叠
      isCollapse: false,
    };
  },
  //   created() {
  //     this.getMenuList();
  //   },
  methods: {
    // 管理员登出
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    // 左侧菜单栏切换效果
    toggleCollspse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
<style scoped>
.index_container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-header div {
  display: flex;
  align-items: center;
}
.el-header div span {
  margin-left: 10px;
}

.el-aside {
  background-color: #d3dce6;
}
.el-aside .el-menu {
  border-right: none;
}

.el-main {
  background-color: #e9eef3;
}
.toggle_button {
  background-color: lightgray;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>