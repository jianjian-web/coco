<template>
  <div class='contact'>
    <div class='titleContainer'>
     <el-row>
      <el-col :span="4" class='row-item'>
        <el-input
          placeholder="请输入姓名/公司名称/手机号"
          suffix-icon="el-icon-search"
          v-model="input2">
        </el-input>
      </el-col>
      <el-col :span="4" class='row-item'>
        <el-select v-model="value" placeholder="标签" style='width:100%'>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class='row-item'>
        <el-select v-model="value2" placeholder="所属活动分组" style='width:100%'>
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
    <div class='total'>
      <span>共搜索到 22 条数据</span>
    </div>
    <div class='marginTop'>
      <el-button type='primary' size="medium">批量导入</el-button>
      <el-button size="medium">添加联系人</el-button>
      <el-button size="medium">打标签</el-button>
    </div>
    <div class='marginTop tip'>
      <span class='el-icon-info'></span>  已选择<span>2</span>项
    </div>
    <div class='tableWrapper marginTop'>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55"
          align='center'
          >
        </el-table-column>
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          align='center'
          width='120'
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="公司名称"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="province"
          label="手机号码"
          width="150"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="city"
          label="邮箱"
          width="180"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="address"
          label="标签"
          width="300"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="zip"
          label="所属活动分组"
          width="120"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="创建时间"
          align='center'
          >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150"
          align='center'
          >
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
/* 联系人 */
export default {
  name: 'contact',
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
.contact {
  .marginTop{
    margin-top:15px;
  }
  .titleContainer{
    .row-item{
      margin-right:10px;
    }
  }
  .total{
    margin-top:30px;
    color:#666;
  }
  .tip{
    background:#E6F3FC;
    padding:10px;
    border-radius: 5px;
    color:#666;
    span:nth-child(1){
      color:#108EE9;
      margin-right:10px;
    }
    span:nth-child(2){
      color:#108EE9;
    }
  }
  .tableWrapper{

  }
}
</style>
