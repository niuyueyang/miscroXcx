import indexModel from "./../../models/indexModel"
import regeneratorRuntime from './../../utils/runTime'
const index = new indexModel()

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },

  onLoad: function () {
  },
  // 请求数据
  async fnPost(){
    console.log(await index.test('https://example.com/ajax?dataType=member',{}))
    // indexModel.test()
  },
})
