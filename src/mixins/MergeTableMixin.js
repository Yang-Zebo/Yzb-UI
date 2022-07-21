export default {
  props: {
    mergeKeys: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    tableData: {
      handler(newVal) {
        if (this.mergeKeys.length) {
          this.rowSpanObj = this.handleTableSpan(this.mergeKeys, newVal)
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleTableSpan(mergeKeys, tableData) {
      const spanObj = {}
      if (
        mergeKeys instanceof Array &&
        tableData instanceof Array &&
        mergeKeys.length &&
        tableData.length
      ) {
        mergeKeys.forEach((key) => {
          spanObj[key] = []
          let position = 0
          tableData.forEach((item, index) => {
            if (index === 0) {
              spanObj[key].push(1)
              position = 0
            } else {
              if (
                tableData[index][key] instanceof Array ||
                tableData[index][key] instanceof Object
              ) {
                if (
                  JSON.stringify(tableData[index][key]) ===
                  JSON.stringify(tableData[index - 1][key])
                ) {
                  spanObj[key][position] += 1
                  spanObj[key].push(0)
                } else {
                  spanObj[key].push(1)
                  position = index
                }
              } else {
                if (tableData[index][key] === tableData[index - 1][key]) {
                  spanObj[key][position] += 1
                  spanObj[key].push(0)
                } else {
                  spanObj[key].push(1)
                  position = index
                }
              }
            }
          })
        })
        return spanObj
      }
    },
    handleObjectSpanMethod(tableObj, mergeKeys, rowspanObj) {
      if (mergeKeys instanceof Array && rowspanObj instanceof Object) {
        const { row, column, rowIndex, columnIndex } = tableObj
        for (let i = 0; i < mergeKeys.length; i++) {
          let term = column.property === mergeKeys[i]
          if (term) {
            const _row = rowspanObj[mergeKeys[i]][rowIndex]
            let _col
            // 自定义设置合并列时使用该方法
            if (this.tableColSpan && this.tableColSpan(tableObj)) {
              _col = this.tableColSpan(tableObj)
            } else {
              _col = _row > 0 ? 1 : 0
            }
            return {
              rowspan: _row,
              colspan: _col
            }
          }
        }
      }
    },
    // span-method 绑定的方法
    tableSpanMethod(tableObj) {
      return this.handleObjectSpanMethod(tableObj, this.mergeKeys, this.rowSpanObj)
    }
  }
}
