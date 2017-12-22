const generalStatus = Object.freeze({
  // YES: '是|已读|已处理|上架|已验证|已完成|   支持|已确认|有效|禁用'
  yes: 'YES',
  // NO:  '否|未读|待处理|下架|未验证|未完成| 不支持|未确认|无效|启用',
  no: 'NO'
})
const generalOptions = (yes, no) => {
  return [
    {
      value: generalStatus.yes,
      label: yes
    },
    {
      value: generalStatus.no,
      label: no
    }
  ]
}
export {
  generalOptions as default,
  generalStatus
}
