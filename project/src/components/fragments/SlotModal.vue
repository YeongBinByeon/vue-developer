<template>
  <div
    class="modal fade"
    :id="modalId"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    :aria-labelledby="`${modalId}Label`"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="`${modalId}Label`">
            <slot name="title"></slot>
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body"><slot name="body"></slot></div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    modalId: {
      type: String,
      default: 'myModal'
    }
  },
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
