<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import layoutFixed from './components/layoutFixed.vue'


// 触发获取导航列表的action

import { useCategoryStore } from './../../../src/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())
 

 
</script>

<template>
  <layoutFixed />
  <LayoutNav />
  <LayoutHeader />

  <RouterView :key="$route.fullPath"/>
  <LayoutFooter />
</template>