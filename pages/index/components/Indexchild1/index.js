import { SmallFourBeh } from './../../../../behaviors/testBehaviors' // 导入testBehavior.js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    name: {
      type: String,
      value: 'name',
    },
    type: {
      type: String,
      value: 'type',
    }
  },
  behaviors: [SmallFourBeh], //  继承testBehavior.js里面的properties，data，methods
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    onTap (ev) {
      console.log(ev.target.dataset)
      let { name, type } = ev.target.dataset
      this.behaviorTap(name, type) // 通过this可以访问testBehavior.js里面的内容
    }
  }
})
