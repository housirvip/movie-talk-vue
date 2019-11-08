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
          <el-table-column label="User" min-width="160">
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
          <el-table-column label="Enable" width="90">
            <template slot-scope="scope">
              <span><i :class="scope.row.enable|bool2icon"></i></span>
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
        <el-dialog title="User Details" :visible.sync="showUserDialog" width="30%" top="6vh">
          <el-form :model="currentUser" ref="userForm">
            <el-form-item label="User Name" label-width="5">
              <el-input v-model="currentUser.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Email" label-width="5">
              <el-input v-model="currentUser.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Phone" label-width="5">
              <el-input v-model="currentUser.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Enable" label-width="5">
              <el-tooltip content="Set user account to enable | disable" placement="top">
                <el-switch
                  v-model="currentUser.enable"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  :active-value="true"
                  :inactive-value="false">
                </el-switch>
              </el-tooltip>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="showUserDialog = false">Cancel</el-button>
            <el-button type="primary" @click="updateUser">Submit</el-button>
          </div>
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
      showUserDialog: false,
      userForm: {}
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
    updateUser () {
      UserService.updateByAdmin(this.currentUser).then(
        res => {
          if (res) {
            this.getUserList()
            this.showUserDialog = false
            this.$message.success('update successfully')
          }
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
