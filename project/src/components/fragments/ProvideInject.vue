<template>
  <div>
    <p>{{ size }}</p>
    <p>{{ str }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  inject: ['size', 'str'],
  data() {
    return {
      sampleData: ''
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
