let SmallFourBeh = Behavior({
  behaviors:[],
  properties: {
    name: String,
    type: String
  },
  // 共享数据
  data: {
    selectedName: '',
    selectedType: ''
  },
  // 共享方法
  methods: {
    behaviorTap (name, type) {
      this.setData({
        selectedName:name,
        selectedType: type
      })
    }
  }
})
export { SmallFourBeh } // 导出