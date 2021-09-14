<template>
  <div class="todo-container">
    <div
      class="container"
      ref="todo">
      <Box
        v-for="(item, itemIdx) in $store.state.data.todo"
        :id="item.id"
        :params="{grp: 'todo', idx: itemIdx}"
        :title="item.title"
        :key="item.id"
        @click="test" />
    </div>  
    <div
      class="container"
      ref="onProceed">
      <Box
        v-for="(item, itemIdx) in $store.state.data.onProceed"
        :id="item.id"
        :params="{grp: 'onProceed', idx: itemIdx}"
        :title="item.title"
        :key="item.id" />
    </div>
    <div
      class="container"
      ref="done">
      <Box
        v-for="(item, itemIdx) in $store.state.data.done"
        :id="item.id"
        :params="{grp: 'done', idx: itemIdx}"
        :title="item.title"
        :key="item.id" />
    </div>
  </div>
</template>

<script>
import Box from '~/components/Box'

export default {
  components: {
    Box,
  },
}
</script>
<style lang="scss" scoped>
@import '~/scss/main';

.todo-container {
  display: flex;
  justify-content: center;
  padding-top: 100px;

  .container {
    position: relative;
    margin-right: 50px;
    border-radius: 24px;
    &:last-child {
      margin: 0;
    }
  }
}
</style>