<template>
  <div class='activeIndex'>
    <div class='titleContainer'>
     <el-row>
      <el-col :span="4" class='row-item'>
        <el-input
          placeholder="请输入计划名称"
          suffix-icon="el-icon-date"
          v-model="input2">
        </el-input>
      </el-col>
      <el-col :span="4" class='row-item'>
        <el-select v-model="value" placeholder="排序方式" style='width:100%'>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class='row-item'>
        <el-select v-model="value" placeholder="状态" style='width:100%'>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
     </el-row>
    </div>
    <div class='active-card'>
      <div class='addCard' @click='handleAddItem'>
        <span class='el-icon-circle-plus-outline'></span><br>
        <span style='line-height:0px;'>新建活动</span>
      </div>
      <card-do title='霍霍霍'></card-do>
      <card-done></card-done>
      <card-done></card-done>
      <card-done></card-done>
    </div>
  </div>
</template>

<script>
import cardDo from './CardDo'
import cardDone from './CardDone'

export default {
  name: 'activeIndex',
  data () {
    return {
      input2: '',
      value: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    }
  },
  methods: {
    handleAddItem () {
      this.$router.push({path: '/addActive'})
    }
  },
  components: {
    cardDo, cardDone
  }
}
</script>

<style lang='less' scoped>
.activeIndex{
  .titleContainer{
    .row-item{
      margin-right:10px;
    }
  }
  .active-card{
    margin-top:20px;
    display: flex;
    flex-wrap: wrap;
    .addCard{
      margin-right:20px;
      border-radius:5px;
      cursor: pointer;
      width:200px;
      border:1px dashed #EBEBEB;
      height:250px;
      background:#F0F2F5;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      color:#8d8d8d;
      .el-icon-circle-plus-outline{
        font-size: 60px;
      }
    }
  }
}
</style>
