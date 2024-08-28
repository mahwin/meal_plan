<template>
  <button @click="handleClick" :disabled="!isValid">
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

    contact_event: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
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

button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
}

button[disabled] {
  background: orange;
  color: wheat;
  cursor: not-allowed;
}
</style>
