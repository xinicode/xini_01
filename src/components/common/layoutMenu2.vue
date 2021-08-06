<template>
    <div>
      我是组件二 {{theme2}}
      <Input type="text" v-model="title" />

      <Button @click="submit">组2</Button>

    </div>
</template>
<script lang="ts" src="./layoutMenu2.ts" />