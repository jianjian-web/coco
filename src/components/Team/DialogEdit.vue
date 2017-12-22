<template>
  <el-dialog
    class='team-dialog-edit'
    :visible="isVisible"
    width="35%"
    title='编辑人员'
    :close-on-click-modal='false'
    :before-close="handleClose">
    <div class='main'>
      <el-form label-position="top" :model="formData">
        <el-form-item label="姓名" prop='name'>
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="手机号码/固话" prop='phone'>
          <el-input v-model="formData.phone" disabled></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click='handleOk'>确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import curd from '../../mixin/curd'
export default{
  name: 'dialogEdit',
  mixins: [curd],
  data () {
    return {
      isVisible: false,
      uploadOk: true, // 当选择了文件以后让确定按钮可点击
      formData: {}
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleOk () {
      this.$_Update('member', this.formData.id, this.formData)
    }
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      required: true
    }
  },
  watch: {
    dialogVisible (v) {
      this.isVisible = v
    },
    data (v) {
      this.formData = Object.assign({}, v)
    }
  }
}
</script>

<style lang='less'>
.team-dialog-edit{
  .el-form-item{
    margin-bottom:0;
    .el-form-item__label{
      padding-bottom: 0;
    }
  }
  .main{

  }
}
</style>
