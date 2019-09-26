<template>
  <div class="user-center">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="dashboard"
          router>
          <el-menu-item index="dashboard">
            <i class="el-icon-menu"></i>
            <span slot="title">Dashboard</span>
          </el-menu-item>
          <el-menu-item index="modifyPasswd">
            <i class="el-icon-menu"></i>
            <span slot="title">Password</span>
          </el-menu-item>
          <el-menu-item index="reviews">
            <i class="el-icon-menu"></i>
            <span slot="title">Reviews</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
