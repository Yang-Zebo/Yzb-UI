<template>
  <div ref="base-table" class="table">
    <el-table
      ref="el-table"
      v-loading="tableLoading"
      :data="tableData"
      :border="option.border"
      :max-height="setPx(option.maxHeight, 500)"
      :height="setPx(option.height, 0)"
      :width="setPx(option.width, '100%')"
      :row-class-name="tableRowClassName"
      :span-method="tableSpanMethod"
      @row-click="rowClick"
      @select="select"
      @select-all="selectAll"
      @selection-change="selectionChange">
      <template>
        <el-table-column
          key="index"
          :label="option.indexLabel || '序号'"
          type="index"
          width="50"
          fixed="left"
          align="center">
        </el-table-column>
      </template>
      <!-- 循环列 -->
        <el-table-column
            v-for="(column, index) in tableColumn"
            :key="column.prop"
            :prop="column.prop"
            :min-width="setPx(column.minWidth)"
            :align="column.align || option.align"
            :header-align="vaildData(column.headerAlign, option.headerAlign)"
            :render-header="renderHeader"
            :width="column.width"
            :label="column.label"
            :fixed="column.fixed"
        >
          <template #default="scope">
            <slot
              v-if="column.slot"
              v-bind="scope"
              :name="column.prop">
              {{ 123 }}
            </slot>
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {setPx} from '@/utils/baseComponents'
export default {
  name: 'base-table',
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    },
    tableData: {
      type: Array,
      default: () => []
    },
    spanMethod: Function,
    rowClassName: Function,
  },
  components: { },
  data () {
    return {
      tableLoading: false
    }
  },
  computed: { },
  methods: {
    setPx,
    //合并行
    tableSpanMethod(param) {
      if (typeof this.spanMethod === 'function') return this.spanMethod(param)
    },
    //行添加class
    tableRowClassName(param) {
      if (typeof this.rowClassName === 'function') return this.rowClassName(param)
    },
    selectionChange(val) {
      this.tableSelect = val
      this.$emit('selection-change', val)
    },
    select(selection, row) {
      this.$emit('select', selection, row)
    },
    selectAll(selection) {
      this.$emit('select-all', selection)
    },
    //行单机
    rowClick(row, event, column) {
      this.$emit('row-click', row, event, column)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>