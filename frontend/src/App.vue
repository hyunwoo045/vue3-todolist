<template>
  <Container />
</template>

<script>
import Container from '~/components/Container'

export default ({
  components: {
    Container,
  },
//   methods: {
//     clickHandler(e) {
//       e.target.animate([
//         { transform: 'translateY(0px)' },
//         { transform: 'translateY(100px)'},
//         { transform: 'translateY(0px)' } 
//         ],
//         {
//           duration: 1500,
//           iterations: Infinity
//         }
//       )
//     }
//   }
})
</script>


<style lang="scss" scoped>
@import '~/scss/main';

// .test {
//   margin: 150px;
//   width: 200px;
//   height: 200px;
//   background-color: white;
// }
</style>