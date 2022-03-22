<template>
  <div
    v-show="show"
    class="modal__shadow">
    text
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  methods: {
    closeModal() {
      this.show = false;
    }
  }
}
</script>

<style>
.modal__shadow {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}
.spinner{
  width: 80px;
  height: 80px;
    
  border: 4px solid #f3f3f3;
  border-top: 6px solid #01A7FD;
  border-radius: 100%;
    
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right: 0;
  margin: auto;
    
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
}

</style>