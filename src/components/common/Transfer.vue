<template>
  <div class='coTransfer'>
    <div class='source'>
      <p>
        呼叫人列表
      </p>
      <div class='searchWrapper'>
        <el-input v-model='sourceSearch' placeholder="请输入姓名" class='search' suffix-icon="el-icon-search"></el-input>
        <el-select collapse-tags v-model="sourceSelectValue" multiple placeholder="标签" class='search select'>
          <el-option
            v-for="item in tagOptions"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>
      <p>共搜索到22条数据</p>
      <el-table
        :data="sourceData"
        :show-header='false'
        style="width: 100%"
        height='350'
        :row-class-name='handleRowClass'
        highlight-current-row
        @current-change='handleSelectRow'
        >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table :data='props.row.children' :show-header='false'>
              <el-table-column
                prop="name"
                label="姓名"
                >
              </el-table-column>
              <el-table-column
                prop="phone"
                label="电话"
                >
              </el-table-column>
              <el-table-column
                label="操作"
                width="40">
                <template slot-scope="scope">
                  <span class='el-icon-close cursor'></span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <!-- <el-table-column
          type="selection"
          width="30">
        </el-table-column> -->
        <el-table-column
          prop="name"
          >
        </el-table-column>
        <el-table-column
          align='right'
          >
          <template slot-scope="scope">
            <!-- 已选择{{scope.row.children && scope.row.children.length}}人 -->
            <span v-if='(scope.row.children && scope.row.children.length)'>已选择{{scope.row.children.length}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class='operation'>
      <el-button class='right el-icon-d-arrow-left' @click='handleTansfer'></el-button>
    </div>
    <div class='target'>
      <p>
        联系人列表
      </p>
      <div class='searchWrapper'>
        <el-input v-model='sourceSearch' placeholder="请输入姓名" class='search' suffix-icon="el-icon-search"></el-input>
        <el-select collapse-tags v-model="sourceSelectValue" multiple placeholder="标签" class='search select'>
          <el-option
            v-for="item in tagOptions"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>
      <p>共搜索到22条数据</p>
      <el-table
        :data="targetData"
        :show-header='false'
        style="width: 100%"
        height='350'
        @selection-change="handleSelectionChange">
        >
        <el-table-column
          type="selection"
          width="30"
          :selectable='unChecked'
          >
        </el-table-column>
        <el-table-column
          prop="name"
          width='70'
          > 
        </el-table-column>
        <el-table-column
          prop="phone"
          > 
        </el-table-column>
        <el-table-column
          prop="tags"
          width='100'
          > 
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default{
  name: 'coTransfer',
  data () {
    return {
      currentProple: '', // 当前选中的呼叫人
      sourceSelectValue: [],
      tagOptions: ['标签1', '标签2'],
      sourceSearch: '',
      sourceData: [  // 呼叫人数据
        {
          name: '花花1',
          children: [
            {
              name: '花花11',
              phone: '18362390866'
            },
            {
              name: '花花111',
              phone: '18362390866'
            }
          ]
        },
        {
          name: '花花2',
          children: []
        }
      ],
      targetSearch: '',
      targetData: [  // 联系人数据
        {
          name: '张三三',
          phone: '18362380904',
          tags: ['标签1', '标签2'],
          group: ''
        },
        {
          name: '张三1',
          phone: '18362380904',
          tags: ['标签1', '标签2'],
          group: ''
        }
      ],
      selected: [] // 选中的联系人
    }
  },
  mounted () {
  },
  methods: {
    handleSelectionChange (v) {
      this.selected = Object.assign([], v)
      console.dir(this.selected)
    },
    handleRowClass ({ row }) {
      const cls = 'i-table-column'
      if (!row.children) {
        return `${cls} hiddenExpand`
      }
      return cls
    },
    handleSelectRow (row) { // 当选择了呼叫人
      console.dir(row)
      if (!row) return
      this.currentProple = row.name
    },
    handleTansfer () {
      const source = this.sourceData.map(item => {
        if (item.name === this.currentProple) {
          // item.children.push()
          const obj = Object.assign({}, item)
          obj.children = obj.children.concat(this.selected)
          return obj
        } else {
          return item
        }
      })
      this.sourceData = Object.assign([], source)
      // const target = this.
      // TODO: 用selected给联系人数据的group加呼叫人，让其出现不可选。
    },
    unChecked (row) {
      console.dir(row)
      if (row.group) {
        return 0
      } else {
        return 1
      }
    }
  }
}
</script>

<style lang='less'>
.coTransfer{
  // height:100%;
  height:469px;
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
  .searchWrapper{
    display: flex;
    margin-bottom:10px;
    .search{
      margin-right:10px;
      flex:1.5;
    }
    .select{
      flex:2;
    }
  }
  .source,.target{
    border:1px solid #eaeaea;
    width:45%;
    height:100%;
    padding:10px;
    color:#666;
    .search{
      margin-top:20px;
    }
  }

  .el-table__row{
    &>td{
      padding:10px 0;
    }
  }
  .el-table__expanded-cell[class*=cell]{
    padding:0 0 0 50px;
  }
  .hiddenExpand {
    & > .el-table__expand-column {
      & > .cell {
        height: 0;
      }
    }
  }
}
</style>

