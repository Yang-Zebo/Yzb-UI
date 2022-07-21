<template>
  <el-form :model="form" :rules="rules" ref="ruleFormRef">
    <el-table
      v-bind="$attrs"
      v-on="$listeners"
      :data="form.data"
      :border="border"
      ref="ruleTableRef"
    >
      <el-table-column v-if="selection" type="selection"></el-table-column>
      <template v-for="{ prop, label, slot, sort } in tableCol">
        <el-table-column
          v-if="slot"
          :key="prop"
          :prop="prop"
          :label="label"
          :sortable="sort"
        >
          <template #default="{ row, $index }">
            <el-form-item :prop="`data.${$index}.${prop}`" :rules="rules[prop]">
              <slot
                :name="`${prop}Slot`"
                :row="row"
                :index="$index"
                :prop="prop"
              ></slot>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="prop"
          :prop="prop"
          :label="label"
          :sortable="sort"
        >
          <template #default="{ row, $index }">
            <el-form-item :prop="`data.${$index}.${prop}`" :rules="rules[prop]">
              <el-input
                v-model="row[prop]"
                @change="inputChangeHandle"
              ></el-input>
            </el-form-item>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </el-form>
</template>

<script>
export default {
  name: 'form-table',
  props: {
    tableCol: {
      type: Array,
      required: true
    },
    form: {
      type: Object,
      default: () => {
        return {
          data: []
        }
      }
    },
    rules: {
      type: Object,
      default: () => {
        return {}
      }
    },
    border: {
      type: Boolean,
      default: true
    },
    mergeKeys: {
      type: Array,
      default: () => {
        return []
      }
    },
    selection: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    inputChangeHandle(newVal) {}
  }
}
</script>

<style scoped lang="scss"></style>
