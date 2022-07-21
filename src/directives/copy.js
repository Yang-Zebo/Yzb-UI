import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess() {
    Vue.prototype.$message({
        message: '复制成功',
        type: 'success',
        duration: 1500
    })
}

function clipboardError() {
    Vue.prototype.$message({
        message: '复制失败',
        type: 'error'
    })
}

function handleClipboard(text, event) {
    const clipboard = new Clipboard(event.target, {
        text: () => text
    })
    clipboard.on('success', () => {
        clipboardSuccess()
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
    })
    clipboard.on('error', () => {
        clipboardError()
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
    })
    clipboard.onClick(event)
}

export default (Vue) => {
    Vue.directive('copy', {
        bind(el, { value }) {
            el.handler = (e) => {
                handleClipboard(value, e)
            }
            el.addEventListener('click', el.handler) // 绑定点击事件
            // el.click()
        },
        // 指令与元素解绑的时候，移除事件绑定
        unbind(el) {
            el.removeEventListener('click', el.handler)
        }
    })
}
