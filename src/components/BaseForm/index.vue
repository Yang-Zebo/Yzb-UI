<template>
<div v-if="option.isShowForm" ref="base-form" class="base-form">
  <el-form :model="formData" ref="el-form">
    <el-col
        v-for="(column, index) in option.column"
        :key="index"
        :md="column.span || 6"
        :span="24">
      <el-form-item
          :label="`${column.formLabel || column.label} :`"
          :prop="column.prop"
          :label-width="setPx(column.formLabelWidth)">
        <slot
            v-if="column.formSlot === true"
            :name="column.prop + 'form'"
            :prop="column.prop"
            :size="option.formSize"
            :placeholder="column.placeholder"
        ></slot>
        <component
            v-else
            v-model="formData[column.prop]"
            :is="formComponents(column)"
            :column="column"
            :formData="formData"
            :type="column.textType || 'text'"
            :size="option.formSize"
            :prefix-icon="column.searchPrefixIcon || ''"
            :placeholder="column.placeholder"
            :prop="column.prop"
            clearable
            @[eventName]="handler"
        >
          <template v-if="column.type === 'select'">
            <el-option
                v-for="({ label, value }, index) in column.dic"
                :key="index"
                :label="label"
                :value="value"></el-option>
          </template>
          <template v-else-if="column.type === 'radio'">
            <el-radio
                v-for="({ label, value }, index) in column.dic"
                :key="index"
                :label="value">{{ label }}</el-radio>
          </template>
          <template v-else-if="column.type === 'checkbox'">
            <el-checkbox
                v-for="({ label, value }, index) in column.dic"
                :key="index"
                :label="value">{{ label }}</el-checkbox>
          </template>
        </component>
      </el-form-item>
    </el-col>
    <el-col v-if="option.btn !== false" :span="1.5">
      <el-form-item :label-width="setPx(option.btnLabelWidth)">
        <el-button
            v-if="option.resetBtn !== false"
            @click="searchReset"
            icon="el-icon-refresh"
            :size="option.formSize">
          <template>
            {{ '重置' }}
          </template>
        </el-button>
        <el-button
            type="primary"
            icon="el-icon-search"
            :size="option.formSize"
            v-if="option.searchBtn !== false"
        >
          <template>
            {{ option.searchBtnText || '搜索' }}
          </template>
        </el-button>
        <slot name="otherBtn"></slot>
      </el-form-item>
    </el-col>
  </el-form>
</div>
</template>

<script>
import {setPx} from '@/utils/baseComponents'
export default {
  name: 'base-form',
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    },
    formData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      eventName: 'change'
    }
  },
  computed: {
    formComponents() {
      return ({type = 'default', prop}) => {
       let components = {
         select: 'el-select',
         radio: 'el-radio-group',
         checkbox: 'el-checkbox-group',
         default: 'el-input'
       }
       return components[type]
      }
    }
  },
  created() {
    this.option.column.map(({prop, type}) => {
      if(type === 'checkbox') {
        this.$set(this.formData, prop, [])
      }
    })
  },
  methods: {
    setPx,
    searchReset() {
      this.$refs['el-form'].resetFields()
    },
    handler() {
      console.log(this.formData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>