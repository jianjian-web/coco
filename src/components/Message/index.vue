<template>
  <div class='messageSet'>
    <!-- <div class='marginTop tip'>
      <span class='el-icon-info'></span>  已选择<span>2</span>项
    </div> -->
    <div class='tableWrapper marginTop'>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="name"
          label="消息类型"
          align='center'
          width='120'
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="电子邮件"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="province"
          label="站内消息"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="address"
          label="手机短信"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="address"
          label="App推送消息"
          align='center'
          >
        </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
/* 联系人 */
export default {
  name: 'messageSet',
  data () {
    return {
      value: '',
      value2: '',
      input2: '',
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
      }],
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '13585517742',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '758507292@qq.com',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    }
  }
}
</script>

<style lang='less' scoped>
.messageSet {
  .total{
    margin-top:30px;
    color:#666;
  }
  .tableWrapper{

  }
}
</style>
