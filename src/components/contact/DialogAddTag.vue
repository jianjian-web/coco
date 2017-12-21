<template>
  <el-dialog
    class='contact-dialog-tags'
    :visible="isVisible"
    width="35%"
    title='打标签'
    :close-on-click-modal='false'
    :before-close="handleClose">
    <div class='main'>
    <p>标签</p>
    <el-select
      v-model="tagsData"
      multiple
      filterable
      allow-create
      placeholder="请选择文章标签">
      <el-option
        v-for="item in tags"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
        <p style='text-align:center;cursor:pointer'>新增标签</p>
    </el-select>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click='handleOk'>确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default{
  name: 'dialogEdit',
  data () {
    return {
      isVisible: false,
      tagsData: []
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleOk () {
      console.dir(this.tagsData)
      this.$emit('tags', this.tagsData)
      this.handleClose()
    }
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    tags: {
      type: Array,
      required: true
    }
  },
  watch: {
    dialogVisible (v) {
      this.isVisible = v
    }
  }
}
</script>

<style lang='less'>
.contact-dialog-tags{
  .el-form-item{
    margin-bottom:0;
    .el-form-item__label{
      padding-bottom: 0;
    }
  }
  .main{
    padding: 0 20px;
    .download{
      color:#108EE9;
    }
  }
}
</style>
