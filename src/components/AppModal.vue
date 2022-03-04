<template>
  <div class="modal-container" @click.self="closeModal">
    <div class="inner-container">
      <h2>{{ header }}</h2>
      <p v-if="subTitle">{{ subTitle }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false
    }
  },

  mounted() {
    document.body.classList.add('app-overflow')
  },

  destroyed() {
    document.body.classList.remove('app-overflow')
  },

  methods: {
    confirmDelete() {
      this.$emit('confirmDelete')
    },
    cancelDelete() {
      this.$emit('cancelDelete')
    },
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>
.modal-container {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
}
.inner-container {
  position: absolute;
  padding: 20px;
  background: white;
  max-width: 300px;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>