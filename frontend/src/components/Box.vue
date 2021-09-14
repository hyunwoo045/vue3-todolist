<template>
  <div
    class="box"
    draggable="true"
    @dragstart="dragHandler($event, id)"
    @dragenter="dragEnterHandler($event)"
    @dragleave="dragLeaveHandler($event)">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: -1
    },
    title: {
      type: String,
      default: "NONE!",
    },
    params: {
      type: Object,
      default: () => ({ grp: '', idx: -1 }),
    }
  },
  mounted() {
    const id = this.id;
    console.log(this.$refs[id].offsetTop);
  },
  methods: {
    dragHandler(event) {
      this.$store.commit("dragging/setDragState", { e: event.target, params: this.params });
    },
    dragEnterHandler(e) {
      
      const parent = e.target.parentElement;
      const curSample = this.$store.state.dragging.dragSample;
      let arrayItemFrom = this.$store.state.data[curSample.grp];
      let newList = this.$store.state.data[this.params.grp]
      newList.splice(this.params.idx, 0, arrayItemFrom.splice(curSample.idx, 1)[0]);
      this.$store.commit('data/setNewList', { grp: this.params.grp, data: newList });
      this.$store.commit('data/setNewList', { grp: curSample.grp, data: arrayItemFrom });
      this.$store.commit('dragging/setDragSample', this.params)

      console.log("ENTER")
      for (let i=this.params.idx; i<parent.children.length; i++) {
        const animation = parent.children[i].animate([
          { transform: `translateY(150px)` }
        ])
        animation.onfinish = () => {
          animation.cancel();
          parent.children[i].style.transform = `translateY(${150 * (i)}px`
        }
      }
    },
    dragLeaveHandler() {
      console.log("LEAVE")
      // const parent = e.target.parentElement;
      // for (let i=this.params.idx; i<parent.children.length; i++) {
      //   const animation = parent.children[i].animate([
      //     { transform: `translateY(-150px)` }
      //   ],
      //   {
      //     duration: 400,
      //   })
      //   animation.onfinish = () => {
      //     animation.cancel();
      //     parent.children[i].style.transform = 'translateY(-150px)'
      //   }
      // }
    },
  }
}

</script>

<style lang="scss" scoped>
.box {
  position: absolute;
  width: 85%;
  height: 150px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 24px;
  background-color: orange;
  border: 3px solid black;
  box-sizing: border-box;
  padding: 15px;
  transition: 1s;
}
</style>