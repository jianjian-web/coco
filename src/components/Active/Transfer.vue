<template>
  <div class='transferWrapper'>
    <div class='coTransfer'>
      <div class='source'>
        <p>
          呼叫人列表
        </p>
        <div class='searchWrapper'>
          <el-input @change='handleFromSearch' v-model='fromDataSearch' placeholder="请输入姓名" class='search' suffix-icon="el-icon-search"></el-input>
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
          empty-text='尚未选择联系人'
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
                    <span class='el-icon-close cursor' @click='handleDelete(scope.row, scope.$index)'></span>
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
            prop="nickname"
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
        <el-button class='right el-icon-d-arrow-left' @click='handleTansfer' :disabled='!currentProple || !selected.length'></el-button>
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
            prop="telphone"
            > 
          </el-table-column>
          <el-table-column
            prop="tagList"
            width='100'
            > 
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class='btnGroup'>
      <el-button type="primary" @click='handleSave(0)'>保存为草稿</el-button>
      <el-button type="primary" @click='handleSave(1)'>发布</el-button>
    </div>
  </div>
</template>

<script>
import curd from '../../mixin/curd'
import {mapState} from 'vuex'
export default{
  name: 'coTransfer',
  mixins: [curd],
  data () {
    return {
      currentProple: '', // 当前选中的呼叫人
      sourceSelectValue: [],
      tagOptions: ['标签1', '标签2'],
      fromDataSearch: '',
      sourceSearch: '',
      sourceData: [  // 呼叫人数据
        {
          nickname: '花花1',
          children: [
          ]
        }
      ],
      targetSearch: '',
      targetData: [  // 联系人数据
        // {
        //   name: '张三三',
        //   phone: '18362380904',
        //   tags: ['标签1', '标签2'],
        //   group: ''
        // },
        // {
        //   name: '张三1',
        //   phone: '18362380904',
        //   tags: ['标签1', '标签2'],
        //   group: ''
        // }
      ],
      selected: [], // 选中的联系人
      remove: '', // 要移除的联系人
      editInitData: [], // 如果是点击编辑过来的，则会带过来初始数据。用于显示
      editCheckedData: [] // 带过来的所有已被选择的联系人列表
    }
  },
  computed: {
    ...mapState([
      'activeRowData'
    ])
  },
  mounted () {
  },
  created () {
    this.getMember()
    this.getContact()
    // this.$http.all([this.getMember(), this.getContact()])
    //   .then(() => {
    //     })
    if (this.activeRowData) { // 判断是否有数据，有就是从编辑过来的，没有就是新建过来的。如果有就将数据显示出来
      this.editInitData = Object.assign([], this.activeRowData.contacts)
    }
  },
  methods: {
    handleFromSearch (searchValue) { // 搜索呼叫人 TODO:
      console.log(searchValue)
      this.getMember(searchValue)
    },
    getMember (name) { // 获取呼叫人列表
      this.$http.get('/member/1/1000', {
        params: {params: {nickname: name}}
      }).then(res => { // 获取呼叫人列表
        console.log('呼叫人')
        console.dir(res)
        if (res) {
          this.sourceData = res.data.data.map(item => {
            return Object.assign({}, item, {children: []})
          })
          if (this.activeRowData) {
            this.showSourceData()
          }
        } else {
          this.$message.error('获取呼叫人数据出错')
        }
      })
    },
    showSourceData () { // 显示呼叫人的初始状态
      if (this.editCheckedData.length && this.sourceData.length) {
        const obj = this.sourceData.map(item => {
          const children = this.editCheckedData.filter(ele => {
            return ele.group === item.id
          })
          return Object.assign({}, item, {children})
        })
        this.sourceData = obj
      }
    },
    showTargetTable () { // 显示联系人编辑前的初始状态，原来就是禁用的就还显示禁用
      const toId = this.editInitData.map(item => {
        return item.toId
      })
      const arr = this.targetData.map(item => {
        if (toId.indexOf(item.id) !== -1) {
          const obj = Object.assign({}, item, { group: this.editInitData[toId.indexOf(item.id)].fromId })
          this.editCheckedData.push(obj)
          return obj
        } else {
          return item
        }
      })
      this.targetData = arr
      this.showSourceData()
    },
    getContact () { // 获取联系人列表
      this.$http.get('/contact/1/20/').then(res => {
        // console.log('联系人')
        this.targetData = res.data.data
        if (this.activeRowData) {
          this.showTargetTable()
        }
      })
    },
    handleSelectionChange (v) {
      this.selected = Object.assign([], v)
      // console.dir(this.selected)
    },
    handleRowClass ({ row }) {
      const cls = 'i-table-column'
      if (!row.children) {
        return `${cls} hiddenExpand`
      }
      return cls
    },
    handleSelectRow (row) { // 当选择了呼叫人
      if (!row) return
      this.currentProple = row.id
    },
    handleIsSelected (id) { // 当前的选项是否是被勾选的选项
      let bool = false
      this.selected.forEach(item => {
        if (item.id === id) {
          bool = true
        }
      })
      return bool
    },
    disableRow () { // 向被选中的联系人的group中添加呼叫人，使其变为禁用状态
      const obj = this.targetData.map(item => {
        if (this.handleIsSelected(item.id)) {
          return Object.assign({}, item, {group: this.currentProple})
        } else {
          return item
        }
      })
      this.targetData = Object.assign([], obj)
    },
    ableRow () { // 联系人从呼叫人中移除后，删除对应联系人的group，使其变为可选择状态
      const obj = this.targetData.map(item => {
        if (item.group === this.remove.group && this.remove.id === item.id) {
          return Object.assign({}, item, {group: ''})
        } else {
          return item
        }
      })
      this.targetData = Object.assign([], obj)
    },
    handleTansfer () {
      const source = this.sourceData.map(item => {
        if (item.id === this.currentProple) {
          const obj = Object.assign({}, item)
          obj.children = obj.children.concat(this.selected).map(item1 => {
            return Object.assign({}, item1, {group: item.id})
          })
          return obj
        } else {
          return item
        }
      })
      this.disableRow()
      this.sourceData = Object.assign([], source)
      this.selected = []
    },
    unChecked (row) {
      // console.dir(row)
      if (row.group) {
        return 0
      } else {
        return 1
      }
    },
    handleDelete (v, index) { // 从呼叫人中移除联系人
      this.remove = {group: v.group, id: v.id}
      this.ableRow()
      this.sourceData.map(item => {
        if (item.id === v.group) {
          item.children.splice(index, 1)
          return item
        } else {
          return item
        }
      })
    },
    getPostData () { // 发送之前，将数据格式化为后端需要的格式
      let contacts = []
      this.sourceData.forEach(item => {
        const arr = item.children.map(item1 => {
          return {fromId: item.id, toId: item1.id}
        })
        contacts = contacts.concat(arr)
      })
      return contacts
    },
    handleSave (isSave) {
      // const data = this.getPostData()
      // console.dir(data)
      if (isSave) {
        this.$emit('submit', {data: this.getPostData(), type: 'save'})
      } else {
        this.$emit('submit', {data: this.getPostData(), type: 'draft'})
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

