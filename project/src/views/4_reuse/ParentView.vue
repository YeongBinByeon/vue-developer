<template>
  <div>
    <button @click="changeValue">변경</button>
    <child-com
      v-bind:str="strParent"
      :num="numParent"
      :isOk="isOkParent"
      :arr="arrParent"
      :obj="objParent"
      @change-num="getData"
      ref="child1"
    ></child-com>
  </div>
</template>
<script>
import ChildComponent from '@/components/fragments/ChildComponent.vue'

export default {
  components: { 'child-com': ChildComponent },
  data() {
    return {
      sampleData: '',
      strParent: '개발자의품격2',
      numParent: 12,
      isOkParent: true,
      arrParent: [1, 2, 3, 4, 5],
      objParent: { name: 'jeremy' }
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getData(data) {
      console.log('자식 컴포넌트에서 이벤트 호출')
      console.log(data)
    },
    changeValue() {
      this.$refs.child1.str2 = 'Seoul'
      this.$refs.child1.printMessage()
    }
  }
}
</script>
