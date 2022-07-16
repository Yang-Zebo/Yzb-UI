<template>
<div v-if="option.isShowForm" ref="base-form" class="base-form">
  <el-form :model="formData" ref="el-form">
    <el-col
        v-for="(column, index) in option.column"
        :key="index"
        :md="column.span || 6"
        :span="24">
      <el-form-item
          :label="column.formLabel || column.label"
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
            :is="formComponents(column.type)"
            v-model="formData[column.prop]"
            :column="column"
            :formData="formData"
            :type="column.textType || 'text'"
            :size="option.formSize"
            :prefix-icon="column.searchPrefixIcon || ''"
            :placeholder="column.placeholder"
            :prop="column.prop"
            :dic="column.dic"
            @input="handleInput"
            @change="handleChange"
        ></component>
      </el-form-item>
    </el-col>
    <el-col v-if="option.btn !== false" :span="1.5">
      <el-form-item>
        <el-button
            v-if="option.resetBtn !== false"
            @click="searchReset"
            icon="el-icon-refresh"
            :size="option.formSize"
        >
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
import BaseSelect from "@/components/BaseForm/module/BaseSelect";
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

    }
  },
  computed: {
    formComponents() {
      return (type) => {
        let components = {
          'select': BaseSelect
        }
        return  components[type] ? components[type] : 'el-input'
      }
    }

  },
  methods: {
    setPx,
    searchReset() {
      this.$refs['el-form'].resetFields()
    },
    handleInput() {},
    handleChange() {
      console.log(1231)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>