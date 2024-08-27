<template>
  <button :disabled="!isValid">
    {{ isValid ? validName : unValidName }}
  </button>
</template>

<script>
export default {
  props: {
    validName: {
      type: String,
      required: true,
    },

    unValidName: {
      type: String,
      required: true,
    },

    isValid: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}
</style>
