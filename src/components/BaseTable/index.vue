<template>
  <div ref="base-table" class="table">
    <el-table
      ref="el-table"
      v-loading="tableLoading"
      :data="tableData"
      :border="option.border"
      :max-height="option.maxHeight"
      :height="option.height"
      :row-class-name="tableRowClassName"
      :span-method="tableSpanMethod"
      @row-click="rowClick"
      @select="select"
      @select-all="selectAll"
      @selection-change="selectionChange">
      <!-- 下拉弹出框  -->
      <template v-if="option.expand">
        <el-table-column key="expand" type="expand" width="50" fixed="left" align="center">
          <template #default="props">
            <slot :row="props.row" name="expand"></slot>
          </template>
        </el-table-column>
      </template>
      <!-- 选择框 -->
      <template v-if="option.selection">
        <el-table-column
            key="selection"
            type="selection"
            width="50"
            align="center"
        ></el-table-column>
      </template>
      <!--  序号列    -->
      <template>
        <el-table-column
          key="index"
          type="index"
          width="50"
          fixed="left"
          align="center"
          v-if="option.index"
          :label="option.indexLabel || '序号'">
        </el-table-column>
      </template>
      <!-- 循环列 -->
      <el-table-column
          v-for="(column, index) in option.column"
          :key="column.prop"
          :prop="column.prop"
          :min-width="column.minWidth"
          :align="column.align || option.align"
          :width="column.width"
          :label="column.label"
          :fixed="column.fixed">
        <template #default="scope">
          <slot v-bind="scope" :name="column.prop">
            {{scope.row[column.prop]}}
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import MergeTableMixin from "@/mixins/MergeTableMixin";
export default {
  name: 'base-table',
  mixins: [MergeTableMixin],
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
    //行添加class
    tableRowClassName(param) {
      if (typeof this.rowClassName === 'function') return this.rowClassName(param)
    },
    //行单机
    rowClick(row, event, column) {
      this.$emit('row-click', row, event, column)
    }  ,
    selectionChange(val) {
      this.tableSelect = val
      this.$emit('selection-change', val)
    },
    select(selection, row) {
      this.$emit('select', selection, row)
    },
    selectAll(selection) {
      this.$emit('select-all', selection)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>