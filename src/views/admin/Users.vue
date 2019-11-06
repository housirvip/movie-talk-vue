<template>
  <div class="users">
    <el-container>
      <el-main>
        <el-table
          :data="tableDataUsers"
          class="user-table"
          @row-click="showUser">
          <el-table-column label="ID" width="60">
            <template slot-scope="scope">
              <span>{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column label="UserName" min-width="160">
            <template slot-scope="scope">
              <span>{{scope.row.username}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Email" min-width="160">
            <template slot-scope="scope">
              <span>{{scope.row.email}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Date" width="200">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span>{{scope.row.createTime}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Enable" min-width="90">
            <template slot-scope="scope">
              <span>{{scope.row.enable}}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="center" style="padding-top: 20px">
          <el-pagination
            @current-change="pageChange"
            @size-change="sizeChange"
            :current-page.sync="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pageSize"
            layout="sizes, prev, pager, next, jumper"
            :total="totalCount">
          </el-pagination>
        </el-row>
        <el-dialog title="Change Password" :visible.sync="showUserDialog" width="30%" top="6vh">
          {{currentUser}}
<!--          <el-form :model="passForm" :rules="passRules" ref="passForm">-->
<!--            <el-form-item label="Origin Password" label-width="5" prop="password">-->
<!--              <el-input v-model="passForm.password" autocomplete="off" type="password"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="New Password" label-width="5" prop="newPass">-->
<!--              <el-input v-model="passForm.newPass" autocomplete="off" type="password"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="Confirm Password" label-width="5" prop="confirmPass">-->
<!--              <el-input v-model="passForm.confirmPass" autocomplete="off" type="password"></el-input>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
<!--          <div slot="footer" class="dialog-footer">-->
<!--            <el-button @click="modifyPassword = false">Cancel</el-button>-->
<!--            <el-button type="primary" @click="updatePassword">Submit</el-button>-->
<!--          </div>-->
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { UserService } from '../../services/api'

export default {
  name: 'Users',
  data () {
    return {
      tableDataUsers: [],
      likeTotal: 0,
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
      currentUser: {},
      showUserDialog: false
    }
  },
  computed: {
    user: function () {
      return this.$store.state.global.user
    },
    isAdmin: function () {
      return this.$store.state.global.isAdmin
    }
  },
  mounted () {
    this.getUserList()
  },
  methods: {
    getUserList () {
      UserService.listAll(this.currentPage, this.pageSize).then(
        res => {
          this.tableDataUsers = res.result
          this.totalCount = res.total
        }
      ).catch(() => {
      })
    },
    showUser (row) {
      UserService.getById(row.id).then(
        res => {
          this.currentUser = res.result
          this.showUserDialog = true
        }).catch(() => {})
    },
    sizeChange (size) {
      this.pageSize = size
      this.getUserList()
    },
    pageChange (page) {
      this.currentPage = page
      this.getUserList()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .user-table {
    span {
      margin-left: 5px;
    }
  }
</style>
