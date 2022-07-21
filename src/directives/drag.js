export default (Vue) => {
  //（还未做边界判断）
  Vue.directive('drag', {
    inserted(el, binding, vnode) {
      let dragHeader = binding.value || 30 // dragHeader 可拖拽区域的高度（鼠标在这个高度内要改变样式）
      // 给元素绝对定位开启BFC
      el.style.position = 'absolute'
      el.addEventListener('mousemove', (e) => {
        // 获取绑定元素的上外边距和左外边距
        let elStyle = getComputedStyle(el, null)
        let elMarginTop = elStyle.marginTop
        let elMarginLeft = elStyle.marginLeft
        if (e.offsetY < dragHeader) {
          // offsetY 鼠标离绑定元素top的距离
          // 设置鼠标样式
          el.style.cssText += ';cursor:move;'
          // 绑定按下事件
          el.onmousedown = (e) => {
            // 获得当前鼠标的x与y的坐标
            let currentX = e.pageX
            let currentY = e.pageY
            console.log(currentX, currentY)
            document.onmousemove = (e) => {
              // 当前鼠标移动的距离x和ye
              let moveX = e.pageX - currentX
              let moveY = e.pageY - currentY
              // 给当前绑定的元素重新赋值外边距
              el.style.marginTop = parseInt(elMarginTop) + moveY + 'px'
              el.style.marginLeft = parseInt(elMarginLeft) + moveX + 'px'
              console.log(e)
            }
            document.onmouseup = () => {
              document.onmousemove = null
            }
          }
        } else {
          el.style.cursor = 'default'
          el.onmousedown = null
        }
      })
    }
  })
}
