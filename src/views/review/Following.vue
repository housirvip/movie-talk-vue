<template>
  <div class="following">
    <el-container>
      <el-main>
        <el-row>
          <h2 style="text-align: center;font-size: 40px">
            My followings
          </h2>
        </el-row>
        <el-row>
          <following-list></following-list>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import FollowingList from '../../components/FollowingList'
export default {
  name: 'Following',
  components: { FollowingList }
}
</script>

<style scoped>

</style>
