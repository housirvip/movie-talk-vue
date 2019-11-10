<template>
  <el-dialog title="Report" :visible.sync="showDialog" width="30%" top="6vh">
    <el-form :model="reportForm" ref="reportForm">
      <el-form-item label="Type">
        <el-select v-model="reportForm.type" placeholder="please select" value="">
          <el-option
            v-for="item in reportTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Content">
        <el-input v-model="reportForm.content"
                  type="textarea"
                  :autosize="{ minRows: 4, maxRows: 8}"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">Cancel</el-button>
      <el-button type="primary" @click="doReport">Submit</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { ReportService } from '../services/api'

export default {
  name: 'ReportDialog',
  props: {
    reviewId: Number,
    replyId: Number,
    showDialog: Boolean
  },
  data () {
    return {
      reportForm: {},
      reportTypes: [
        {
          label: 'pornographic',
          value: 'pornographic'
        },
        {
          label: 'violent',
          value: 'violent'
        },
        {
          label: 'reactionary',
          value: 'reactionary'
        }
      ]
    }
  },
  methods: {
    closeDialog () {
      this.$emit('close')
    },
    doReport () {
      if (this.reviewId) {
        this.reportForm.reviewId = this.reviewId
      }
      if (this.replyId) {
        this.reportForm.replyId = this.replyId
      }
      ReportService.create(this.reportForm).then(
        res => {
          if (res) {
            this.$message.success('report successfully')
            this.closeDialog()
          }
        }).catch(() => {})
    }
  }
}
</script>

<style scoped>

</style>
