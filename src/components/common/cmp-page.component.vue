<template>
  <div class="bin-page">
    <Spin fix size="large" v-if="loading">
    </Spin>
    <slot></slot>
    <async-load-comp v-for="(item, index) in components" :key="index" :is="item.cp" :params="item.params"></async-load-comp>
  </div>
</template>
<script lang="ts" src="./cmp-page.component.ts"></script>
