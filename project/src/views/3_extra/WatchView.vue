<template>
  <div>
    <div>
      <input type="text" name="" id="" v-model="firstName" />
      <input type="text" name="" id="" v-model="lastName" />
    </div>
    <h1>{{ fullName }}</h1>
    <p>{{ title }} {{ firstName }},{{ lastName }}</p>
    <p>{{ title }} {{ firstName }},{{ lastName }}</p>
    <p>{{ title }} {{ firstName }},{{ lastName }}</p>
    <div>
      <select name="" id="" v-model="selected">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Mr.',
      funnName: '',
      selected: '',
      changeHistory: []
    }
  },

  watch: {
    firstName(newValue, oldValue) {
      // watch 하고 싶은 변수명과 똑같은 함수명을 만든다.
      console.log('oldValue', oldValue)
      console.log('newValue', newValue)
      this.fullName = this.title + ' ' + this.firstName + ', ' + this.lastName
    },
    lastName(newValue, oldValue) {
      // watch 하고 싶은 변수명과 똑같은 함수명을 만든다.
      console.log('oldValue', oldValue)
      console.log('newValue', newValue)
      this.fullName = this.title + ' ' + this.firstName + ', ' + this.lastName
    },
    selected(newValue, oldValue) {
      // 사용자가 무엇을(ex: 쇼핑몰 카테고리를 어떤 순서로 조회했는지) 순서대로 조회했는지 같은 경우 활용 가능
      this.changeHistory.push(newValue)
      console.log(this.changeHistory)
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
