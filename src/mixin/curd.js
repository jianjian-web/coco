/* TODO: 封装CURD */
export default {
  methods: {
    $_deleteOne (url, id) { // 删除一个
      this.$http.patch(`/${url}/${id}`).then(res => {
        this.refreshPage()
      }).catch(err => {
        console.log('删除失败')
        console.dir(err)
      })
    },
    $_deleteMore (url, selections) { // 批量删除
      let ids = []
      ids = this.selections.map(item => {
        return item.id
      })
      this.$http.patch(`/${url}`, {
        params: ids
      }).then(res => {
        // console.dir(res)
        this.refreshPage()
      }).catch(err => {
        console.log('批量删除失败')
        console.dir(err)
      })
    },
    $_Update (url, id, data) { // 修改
      this.$http.put(`/${url}/${id}`, {
        params: data
      }).then(res => {
        this.$emit('refresh')
        this.handleClose()
      }).catch(err => {
        console.log('修改信息失败')
        console.dir(err)
      })
    },
    $_addOne (url, data) {
      this.$http.post(`/${url}`, {
        params: data
      }).then(res => {
        console.dir(res)
        this.$emit('refresh')
        this.handleClose()
      }).catch(err => {
        console.log('添加失败')
        console.dir(err)
      })
    }
  }
}
