<template>
  <el-dialog
    class='contact-dialog-tags'
    :visible="isVisible"
    width="35%"
    title='打标签'
    :close-on-click-modal='false'
    :before-close="handleClose">
    <div class='tag-main'>
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
      <el-input type="text" v-model='tagName' v-if='showInput' @change='handleInputChange'/>
      <el-option style='text-align:center;cursor:pointer' value='false' v-if='!tags.length'>
        <p @click.stop='handleAddTags' style='margin:0 -20px;'>新增标签<span class='el-icon-edit'></span></p>
      </el-option>
      <p style='text-align:center;cursor:pointer;' @click.stop='handleAddTags' v-else>新增标签<span class='el-icon-edit'></span></p>
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
      showInput: false,
      tagName: '',
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
    },
    handleAddTags (e) {
      console.dir('addTags')
      this.showInput = true
    },
    handleInputChange (v) {
      console.log('change')
      this.tagsData.push(v)
      this.showInput = false
      this.tagName = ''
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
  .tag-main{
    padding: 0 20px;
    .download{
      color:#108EE9;
    }
  }
}
</style>
