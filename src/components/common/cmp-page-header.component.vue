<template>
  <div class="bin-header" v-if="show">
    <template v-if="!diy">
      <div class="title" v-if="title">{{title}}</div>
      <div class="title" v-if="!title">
        <slot></slot>
      </div>
      <div class="subtitle" v-if="desc">{{desc}}</div>
      <div class="subtitle" v-if="!desc && !!$slots.desc">
        <slot name="desc"></slot>
      </div>
    </template>
    <slot v-else></slot>
    <Button v-if="canBack" class="back-btn" @click="back" shape="circle" icon="md-arrow-back"></Button>
  </div>
</template>
<script lang="ts" src="./cmp-page-header.component.ts"></script>
