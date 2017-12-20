<template>
  <div class='coTransfer'>
    <div class='source'>
      <p>
        联系人列表
      </p>
      <el-input v-model='sourceSearch' placeholder="请输入姓名" class='search' suffix-icon="el-icon-search"></el-input>
      <el-table
        :data="sourceData"
        :show-header='false'
        style="width: 100%"
        height='350'
        @selection-change="handleSelectionChange"
        >
        <el-table-column
          type="selection"
          width="30">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          align='right'
          >
        </el-table-column>
      </el-table>
    </div>
    <div class='operation'>
      <el-button class='right'>随机</el-button>
    </div>
    <div class='target'>
      <p>
        呼叫人列表
      </p>
      <el-input v-model='targetSearch' placeholder="请输入姓名" class='search' suffix-icon="el-icon-search"></el-input>
      <el-tree
        :data="targetData"
        show-checkbox
        node-key="id"
        >
      </el-tree>
    </div>
  </div>
</template>

<script>
export default{
  name: 'coTransfer',
  data () {
    return {
      sourceSearch: '',
      sourceData: [
        {
          name: '花花1',
          phone: '18362390866'
        },
        {
          name: '花花2',
          phone: '18362390866'
        },
        {
          name: '花花3',
          phone: '18362390866'
        },
        {
          name: '花花4',
          phone: '18362390866'
        },
        {
          name: '花花5',
          phone: '18362390866'
        },
        {
          name: '花花6',
          phone: '18362390866'
        },
        {
          name: '花花7',
          phone: '18362390866'
        },
        {
          name: '花花8',
          phone: '18362390866'
        },
        {
          name: '花花9',
          phone: '18362390866'
        }
      ],
      sourceSelect: [], // 左侧勾选的数据
      targetSearch: '',
      targetData: [
        {
          label: '张三',
          children: [
            {
              label: '二级 1-1'
            },
            {
              label: '二级 1-2'
            }
          ]
        },
        {
          label: '李四',
          children: [
            {
              label: '二级 1-1'
            },
            {
              label: '二级 1-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleSelectionChange (v) {
      this.sourceSelect = v
    }
  }
}
</script>

<style lang='less' scoped>
.coTransfer{
  height:100%;
  display: flex;
  .operation{
    width:10%;
    // border:1px solid #00f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .right{
      margin-top:20px;
      margin-left:0;
    }
  }
  .source,.target{
    border:1px solid #eaeaea;
    width:40%;
    height:100%;
    padding:10px;
    color:#666;
    .search{
      margin-top:20px;
      height:30px;
    }
  }
}
</style>

