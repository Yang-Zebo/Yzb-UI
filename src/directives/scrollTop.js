export default (Vue) => {
  Vue.directive('scrollTop', {
    inserted(el, binding, vnode) {
      if (binding.value <= 0) {
        console.error(new Error('指令 v-scrollTop 绑定的值要大于0'))
        return
      }
      // 获取元素的高度
      const elH = el.offsetHeight
      // 获取 提示按钮出来时的位置
      let btnH = 0
      if (binding.value) {
        btnH = binding.value
      } else {
        btnH = 0.2 * elH
      }
      // 获取元素的父元素（也就是有 overflow 属性的那个元素）
      const parentEl = el.parentNode
      // 给父元素添加一个滚动条缓动的样式
      parentEl.style.scrollBehavior = 'smooth'
      // 创建一个兄弟元素插入父元素中
      // 创建元素
      const brotherEl = document.createElement('div')
      // 给创建的元素样式类来调整样式
      brotherEl.className = 'scroll-top-class el-icon-top'
      // 插入父元素
      parentEl.appendChild(brotherEl)
      // 给兄弟元素添加一个点击事件
      brotherEl.addEventListener('click', () => {
        parentEl.scrollTop = 0
      })

      // 对父元素的滚动事件进行监听
      parentEl.addEventListener('scroll', () => {
        // 滚动的位置到设置的地方就显示
        if (parentEl.scrollTop >= btnH) {
          brotherEl.style.opacity = 1
          brotherEl.style.height = '50px'
          brotherEl.style.width = '50px'
          brotherEl.style.fontSize = '30px'
          brotherEl.style.lineHeight = '50px'
        } else {
          // 否则就隐藏
          brotherEl.style.opacity = 0
          brotherEl.style.height = '1px'
          brotherEl.style.width = '1px'
          brotherEl.style.fontSize = '1px'
          brotherEl.style.lineHeight = '1px'
        }
      })
      console.log()
    }
  })
}
