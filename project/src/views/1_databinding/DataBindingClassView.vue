<template>
  <div>
    <div v-bind:class="{ 'text-red': hasError, active: isActive }">
      클래스 바인딩
    </div>
    <div :class="class2">클래스 바인딩2</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isActive: true,
      hasError: true,
      class2: ['isActive', 'hasError']
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
.active {
  background-color: greenyellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
